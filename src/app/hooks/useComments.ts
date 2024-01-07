import { collection, getDoc, getDocs } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../firebase-config';
import { Comment, Comments } from '../models/Comments';
import { QueryDocumentSnapshot, DocumentSnapshot } from '@firebase/firestore';
import commentService from '../services/comments.service';


// Custom hook to manage comment data in a blog using Firebase Firestore.

function useComments() {

  const [comments, setComments] = useState<Comments>([]);
  const [error, setError] = useState<string | null>(null);


  // Function to map Firestore document to Comment model

  const mapToComment = (doc: QueryDocumentSnapshot | DocumentSnapshot) => {
    const documentData = doc?.data();
    if (!documentData) {
      return {} as Comment;
    }

    return {
      uid: doc.id,
      authorId: documentData.authorId,
      comment: documentData.comment,
      nickname: documentData.nickname,
      rating: documentData.rating
    } as Comment;
  };


  // Function to retrieve all comments for a specific blog post

  const queryAllComments = (blogId: string) => {
    const commentsRef = collection(db, 'blogs', blogId, 'comments');
    getDocs(commentsRef)
      .then((data) => {
        const comments = data.docs.map(mapToComment);
        setComments(comments);
      })
      .catch((e) => {
        setComments([]);
        setError(e.message);
      });
  };


  // Function to create a new comment for a blog post

  const createComment = async (blogId: string, comment: Comment) => {
    if (!blogId) return;
    try {
      const savedCommentRef = await commentService.create(blogId, comment);
      const savedComment = await getDoc(savedCommentRef);
      setComments((prevComments) => [...prevComments, mapToComment(savedComment)]);
    } catch (err) {
      console.error(err);
      setError((err as Error).message);
    }
  };


  // Function to delete a comment from a blog post

  const deleteComment = async (blogId: string, uid: string) => {
    try {
      await commentService.delete(blogId, uid);
      setComments((prevComments) => prevComments.filter((c) => c.uid !== uid));
    } catch (e) {
      setError((e as Error).message);
    }
  };


  // Function to trigger retrieval of comments for a specific blog post

  const queryComments = (blogId: string) => {
    if (!blogId) {
      return;
    }

    queryAllComments(blogId);
  };


  // Expose the state and functions for use in component code

  return {
    comments,
    queryComments,
    createComment,
    deleteComment,
    error
  };
}

export default useComments;
