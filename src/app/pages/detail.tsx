import { doc, getDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase-config';
import { AddCommentForm } from '../components/addCommentForm';
import { Box, Container, CssBaseline } from '@mui/material';

interface AddBlogProps {
  imgUrl: string;
  timestamp: {
    toDate(): Date;
  };
  title: string;
  author: string;
  description: string;
}

const Detail = () => {

  const { userId } = useParams();
  const [blog, setBlog] = useState<AddBlogProps | null>(null);

  useEffect(() => {
    userId && getBlogDetail();
  }, [userId]);

  const getBlogDetail = async () => {
    if (!userId) {
      return;
    }

    const docRef = doc(db, "blogs", userId);

    try {
      const blogDetail = await getDoc(docRef);
      setBlog(blogDetail.data() as AddBlogProps | null);
    } catch (error) {
      console.error("Fehler beim Abrufen von Blogdetails:", error);
    }
  };

  return (
    <div>
      <Container component="main" >
      <CssBaseline />
        <Box sx={{ display: 'flex', flexDirection: 'column', }}>
          <img src={blog?.imgUrl} alt={blog?.title} />
          <div>{blog?.timestamp.toDate().toDateString()}</div>
          <div>By {blog?.author}</div>
          <h2>{blog?.title}</h2>
          <div>{blog?.timestamp.toDate().toDateString()}</div>
          <div>{blog?.description}</div>
          <AddCommentForm />
        </Box>
      </Container>
    </div>
  )
}

export default Detail