import { useState, useEffect } from 'react';
import { addDoc, collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';
import { Comments } from '../models/Comments';




function useComments(blogId: string | null) {
    const [comments, setComments] = useState<Comments[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
  
    const createComment = async (form: any) => {
      if (!blogId) return;
  
      try {
        const comment = form;
        const commentsRef = collection(db, 'blogs', blogId, 'comments');
  
        await addDoc(commentsRef, {
          ...form,
        });
        setComments([...comments, comment]);
      } catch (e) {
        setError(e.message);
      }
    };
  
    const getComments = async () => {
      if (!blogId) return;
  
      const commentsRef = collection(db, 'blogs', blogId, 'comments');
  
      try {
        setLoading(true);
        const commentsSnapshot = await getDocs(commentsRef);
        const commentsData = commentsSnapshot.docs.map((doc) => ({
          uid: doc.id,
          nickname: doc.data().nickname,
          comment: doc.data().comment,
        }));
        setComments(commentsData);
        setLoading(false);
      } catch (e) {
        setError(e.message);
      }
    };
  
    useEffect(() => {
      if (blogId) {
        getComments();
      }
    }, [blogId]);
  
    return {
      comments,
      createComment,
      loading,
      error,
    };
  }
  
  export default useComments;
  