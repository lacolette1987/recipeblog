// import { useState, useEffect } from 'react';
// import { collection, addDoc, getDocs } from 'firebase/firestore';
// import { db } from '../firebase-config';

// interface Comment {
//   uid: string;
//   nickname: string;
//   comment: string;
// }

// function useComments(blogId: string) {
//   const [comments, setComments] = useState<Comment[]>([]); // Hier wird der Typ Comment[] angegeben
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const createComment = async (form: Comment) => { // Hier wird der Typ Comment verwendet
//     if (!blogId) return;

//     try {
//       const comment = form;
//       const commentsRef = collection(db, 'blogs', blogId, 'comments');

//       await addDoc(commentsRef, {
//         ...form
//       });
//       setComments([...comments, comment]);
//     } catch (err) {
//       setError(err.message);
//     // }
//   };

//   const fetchComments = async () => {
//     if (!blogId) return;

//     setLoading(true);
//     const commentsRef = collection(db, 'blogs', blogId, 'comments');

//     try {
//       const commentsSnapshot = await getDocs(commentsRef);
//       const commentsData = commentsSnapshot.docs.map((doc) => ({
//         uid: doc.id,
//         nickname: doc.data().nickname,
//         comment: doc.data().comment
//       }));
//       setComments(commentsData);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (blogId) {
//       fetchComments();
//     }
//   }, [blogId]);

//   return {
//     comments,
//     createComment,
//     loading,
//     error
//   };
// }

// export default useComments;
