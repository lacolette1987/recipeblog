import Blog from '../models/Blog';
import { useState } from 'react';
import { collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, where, QuerySnapshot } from 'firebase/firestore';
import { db } from '../firebase-config';

function useBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const extractBlogData = (data: QuerySnapshot) => {
    const extractedBlogs: Blog[] = [];
    data.forEach(doc => {
      const documentData = doc.data();
      extractedBlogs.push({
        uid: doc.id,
        title: documentData.title,
        category: documentData.category,
        ingredients: documentData.lead,
        lead: documentData.lead,
        description: documentData.lead,
        author: documentData.author,
        imgUrl: documentData.imgUrl,
        timestamp: documentData.timestamp,
      } as Blog);
    });
    return extractedBlogs;
  }

  const queryAllBlogs = () => {
    setLoading(true);
    const blogsRef = collection(db, 'blogs');
    getDocs(query(blogsRef, orderBy('timestamp', 'desc')))
      .then((data) => {
        const blogsData = extractBlogData(data);
        setBlogs(blogsData);
      })
      .catch(e => {
        setError(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const queryCategoryBlogs = (category: string) => {
    setLoading(true);
    const blogsRef = collection(db, 'blogs');
    const categoryQuery = query(blogsRef, where('category', '==', category), orderBy('timestamp', 'desc'));

    getDocs(categoryQuery)
      .then((data) => {
        const blogsData = extractBlogData(data);
        setBlogs(blogsData);
      })
      .catch((e) => {
        setError(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const querySingleBlog = async (uid: string) => {
    try {
      const blogRef = doc(db, 'blogs', uid);
      const blogDetail = await getDoc(blogRef);
      setBlogs([blogDetail.data() as Blog]);
    } catch (e) {
      setError((e as Error).message);
    }
  }

  const queryBlogs = ({ uid, category }: { uid?: string; category?: string } = {}) => {
    setLoading(true);
    if (!uid && !category) {
      queryAllBlogs();
    } else if (!!uid && !category) {
      querySingleBlog(uid);
    } else if (!!category) {
      queryCategoryBlogs(category);
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
    deleteBlog,
    loading,
    error
  };
}

export default useBlogs;
