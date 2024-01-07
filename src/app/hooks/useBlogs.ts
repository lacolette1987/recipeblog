import Blog from '../models/Blog';
import { useState } from 'react';
import { collection, doc, getDoc, getDocs, orderBy, query, where } from 'firebase/firestore';
import { db } from '../firebase-config';
import blogsService from '../services/blogs.service';
import { DocumentSnapshot } from '@firebase/firestore';


// Custom hook to manage blog data using Firebase Firestore.

function useBlogs() {
  // State for blogs, loading status, and errors
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Converts a Firestore document into a Blog object
  const convertDocToBlog = (doc: DocumentSnapshot): Blog => {
    const documentData = doc.data();
    if (documentData) {
      // Extracts and returns blog data
      return {
        uid: doc.id,
        ...documentData, // Spread operator to include all fields from documentData
        avgRating: documentData.avgRating || 0
      } as Blog;
    }
    return {} as Blog;
  };

  // Retrieves all blogs from Firestore
  const queryAllBlogs = () => {
    const blogsRef = collection(db, 'blogs');
    getDocs(query(blogsRef, orderBy('timestamp', 'desc')))
      .then((data) => {
        const blogsData = data.docs.map((doc) => convertDocToBlog(doc));
        setBlogs(blogsData);
      })
      .catch((e) => {
        setBlogs([]);
        setError(e.message);
      });
  };

  // Retrieves a specific blog from Firestore
  const querySingleBlog = (uid: string) => {
    const blogRef = doc(db, 'blogs', uid);
    getDoc(blogRef)
      .then((blogDetail) => {
        setBlogs([convertDocToBlog(blogDetail)]);
      })
      .catch((error) => {
        setError((error as Error).message);
      });
  };

  // Retrieves blogs of a specific category from Firestore
  const queryCategoryBlog = (category: string) => {
    setLoading(true);
    const blogsRef = collection(db, 'blogs');
    const categoryQuery = query(
      blogsRef,
      where('category', '==', category),
      orderBy('timestamp', 'desc')
    );

    getDocs(categoryQuery)
      .then((data) => {
        const blogsData = data.docs.map((doc) => convertDocToBlog(doc));
        setBlogs(blogsData);
      })
      .catch((e) => {
        setError(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Retrieves blogs based on UID or category
  const queryBlogs = ({ uid, category }: {
    uid?: string;
    category?: string;
  } = {}) => {
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

  // Deletes a blog from Firestore and updates the state
  const deleteBlog = async (uid: string) => {
    try {
      await blogsService.deleteBlog(uid);
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.uid !== uid));
    } catch (e) {
      setError((e as Error).message);
    }
  };

  // Returns the functions and states to use in the component code
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
