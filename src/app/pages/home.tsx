import { DocumentData, collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase-config';
import BlogSection from '../components/blogsection';
import useAuth from "../context/AuthContext";

const Home = () => {
  const {user} = useAuth();
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<DocumentData[]>([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "blogs"), 
      (snapshot) => {
        const list: DocumentData[] = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setBlogs(list);
        setLoading(false);
      }, 
      (error) => {
        console.log(error);
        setLoading(false);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const handleDelete = async (id: any) => {
    if (window.confirm("Are you sure wanted to delete that blog ?")) {
      try {
        setLoading(true);
        await deleteDoc(doc(db, "blogs", id));
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  console.log("blogs", blogs);

  return (
    <div>
      <h1>This is the home page</h1>
      <BlogSection blogs={blogs} user={user} handleDelete={handleDelete} />
    </div>
  );
}

export default Home;
