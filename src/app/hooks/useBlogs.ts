import Blog from '../models/Blog';
import { useState } from 'react';
import { collection, deleteDoc, doc, getDoc, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase-config';

function useBlogs() {

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const queryAllBlogs = () => {
    const blogsRef = collection(db, 'blogs');
    getDocs(query(blogsRef, orderBy('timestamp', 'desc')))
      .then((data) => {
        const blogs: Blog[] = [];
        data.forEach(doc => {
          const documentData = doc.data();
          blogs.push({
            uid: doc.id,
            title: documentData.title,
            category: documentData.category,
            ingredients: documentData.ingredients,
            lead: documentData.lead,
            description: documentData.description,
            duration: documentData.duration,
            author: documentData.author,
            imgUrl: documentData.imgUrl,
            timestamp: documentData.timestamp,
          } as Blog);
        });
        setBlogs(blogs);
      })
      .catch(e => {
        setError(e.message);
      })
  }

  const querySingleBlog = (uid: string) => {
    const blogRef = doc(db, 'blogs', uid);
    getDoc(blogRef)
      .then((blogDetail) => {
        setBlogs([blogDetail.data() as Blog]);
      })
      .catch((error) => {
        setError((error as Error).message);
      });
  };


    function queryCategoryBlog(category: string) {
      const blogRef = doc(db, 'blogs', category);
      getDoc(blogRef)
        .then((blogDetail) => {
          setBlogs([blogDetail.data() as Blog]);
        })
        .catch((error) => {
          setError((error as Error).message);
        });
    }


  // const queryBlogs = ({uid} : {uid?: string} = {}) => {
  //   setLoading(true);
  //   if (!uid) {
  //     queryAllBlogs();
  //   } else {
  //     querySingleBlog(uid);
  //   }
  //   setLoading(false);
  // };


  const queryBlogs = ({ uid, category }: { uid?: string, category?: string } = {}) => {
    setLoading(true);
    if (!uid && !category) {
      queryAllBlogs();
    } else if (uid && !category) {
      querySingleBlog(uid);
    } else if (category) {
      queryCategoryBlog(category);
    }
    setLoading(false);
  };

  

  const deleteBlog = async (uid: string) => {
    try {
      await deleteDoc(doc(db, 'blogs', uid));
      setBlogs(blogs.filter(blog => blog.uid !== uid));
    } catch (e) {
      setError((e as Error).message);
    }
  };


  return {
    blogs,
    queryBlogs,
    querySingleBlog,
    deleteBlog,
    loading,
    error
  };
}

export default useBlogs;