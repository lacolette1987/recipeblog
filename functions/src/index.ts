/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import * as logger from "firebase-functions/logger";
import {onDocumentCreated, onDocumentDeleted} from
  "firebase-functions/v2/firestore";
import {getFirestore} from "firebase-admin/firestore";
import {initializeApp} from "firebase-admin/app";


// Initializing the Firebase application

initializeApp();
const db = getFirestore();


// Function to update the blog rating

const updateBlogRating = (
  blogRef: FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>,
  ratingValue: number
) => {
  return db.runTransaction(async (transaction) => {
    const blogDoc = await transaction.get(blogRef);

    // Calculating the new total rating and count
    const oldRatingsCount = blogDoc.data()!.ratingsCount || 0;
    const oldAvgRating = blogDoc.data()!.avgRating || 0;

    // Update the count of ratings
    const newRatingsCount = ratingValue < 0 ?
      oldRatingsCount - 1 : oldRatingsCount + 1;

    // Resetting the rating if no more ratings are present
    if (newRatingsCount <= 0) {
      transaction.update(blogRef, {
        avgRating: null,
        ratingsCount: 0,
      });
      return;
    }

    // Calculating the new average rating
    const oldRatingTotal = oldRatingsCount * oldAvgRating;
    const newAvgRating = (oldRatingTotal + ratingValue) / newRatingsCount;

    // Updating the rating in the document
    transaction.update(blogRef, {
      avgRating: newAvgRating,
      ratingsCount: newRatingsCount,
    });
  });
};

// Cloud function triggered when a comment is created
export const onCommentsWritten = onDocumentCreated(
  "blogs/{blogid}/comments/{commentId}", async (event) => {
    logger.info("onCommentsWritten, blogId: ", event.params.blogid);
    logger.info("onCommentsWritten, commentsId: ", event.params.commentId);

    const snapshot = event.data;
    if (!snapshot) {
      logger.error("No data associated with the event");
      return;
    }

    // Extracting the rating from the comment and updating the blog rating
    const ratingValue = snapshot.data().rating;
    const blogRef = db.collection("blogs").doc(event.params.blogid);
    await updateBlogRating(blogRef, ratingValue);
  });

// Cloud function triggered when a comment is deleted
export const onCommentsDeleted = onDocumentDeleted(
  "blogs/{blogid}/comments/{commentId}",
  async (event) => {
    logger.info("onCommentsDeleted, blogId: ", event.params.blogid);
    logger.info("onCommentsDeleted, commentsId: ", event.params.commentId);

    const snapshot = event.data;
    if (!snapshot) {
      logger.error("No data associated with the event");
      return;
    }

    // Making the rating negative as the comment is being deleted
    const ratingValue = snapshot.data().rating * -1;

    // Updating the blog rating with the negative rating
    const blogRef = db.collection("blogs").doc(event.params.blogid);
    await updateBlogRating(blogRef, ratingValue);
  }
);
