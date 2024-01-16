import Blog from '../models/Blog';
import { useEffect, useState } from 'react';
import { collection, doc, getDoc, getDocs, orderBy, query, where } from 'firebase/firestore';
import { db } from '../firebase-config';
import blogsService from '../services/blogs.service';
import { DocumentSnapshot } from '@firebase/firestore';


interface UseBlogsOptions {
  blogId?: string;
  category?: string;
}


// Custom hook for blog operations

function useBlogs({blogId, category}: UseBlogsOptions = {}) {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  // Effect hook to run when blogId or category changes
  
  useEffect(() => {
    queryBlogs({ blogId, category });
  }, [blogId, category]);


  // Function to handle querying of blogs based on provided options

  const queryBlogs = ({ blogId, category }: {
    blogId?: string;
    category?: string;
  } = {}) => {
    setLoading(true);
    if (!blogId && !category) {
      queryAllBlogs();
    } else if (blogId && !category) {
      querySingleBlog(blogId);
    } else if (category) {
      queryCategoryBlog(category);
    }
    setLoading(false);
  };

  // Function to fetch all blogs

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

  // Function to fetch a single blog by its UID

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

  // Function to fetch blogs by category

  const queryCategoryBlog = (category: string) => {
    setLoading(true);
    const blogsRef = collection(db, 'blogs'); 
    const categoryQuery = query(
      blogsRef,
      where('category', '==', category),
      orderBy('timestamp', 'desc')
    );

    // Execute the query and process the results

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


  // Function to delete a blog by its UID

  const deleteBlog = async (uid: string) => {
    try {
      await blogsService.deleteBlog(uid);
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.uid !== uid));
    } catch (e) {
      setError((e as Error).message);
    }
  };


  // Function to convert Firestore DocumentSnapshot to a Blog object

  const convertDocToBlog = (doc: DocumentSnapshot): Blog => {
    const documentData = doc.data();
    if (documentData) {
      return {
        uid: doc.id,
        title: documentData.title,
        lead: documentData.lead,
        category: documentData.category,
        duration: documentData.duration,
        quantity: documentData.quantity,
        tags: documentData.tags,
        level: documentData.level,
        ingredients: documentData.ingredients,
        description: documentData.description,
        additional: documentData.additional,
        author: documentData.author,
        imgUrl: documentData.imgUrl,
        timestamp: documentData.timestamp,
        userId: documentData.userId,
        userEmail: documentData.userEmail,
        avgRating: documentData.avgRating || 0
      } as Blog;
    }
    return {} as Blog;
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
