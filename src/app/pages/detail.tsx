import { addDoc, collection, doc, getDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../firebase-config';
import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import AddCommentForm, { CommentForm } from '../components/add-comment-form';

interface AddBlogProps {
  comments: any[];
  imgUrl: string;
  timestamp: {
    toDate(): Date;
  };
  title: string;
  author: string;
  lead: string;
  description: string;
  ingredients: string;
  commentaryname: string;
  comment: string;
}

const Detail = () => {

  const { userId } = useParams();
  const [blog, setBlog] = useState<AddBlogProps | null>(null);
  const navigate = useNavigate();

  const createComment = async (form:CommentForm) => {
    try {
      await addDoc(collection(db, "comments"), {
          ...form
      });
      navigate('/');

    } catch (err) {
        console.log(err);
    }
  }



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
      <Typography align="center" variant="h1">{blog?.title}</Typography>
      <Typography variant='caption'>by {blog?.author}</Typography>
      <Grid container spacing={8}>
        <Grid item xs={8}>
          <CardMedia component="img" image={blog?.imgUrl} title={blog?.title} />
          <div>{blog?.description}</div>
          <AddCommentForm submitForm={createComment}/>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent component="div">
              <Typography>{blog?.ingredients}</Typography>
            </CardContent>
          </Card>
          <Typography>{blog?.lead}</Typography>
          
          <Typography>{blog?.timestamp.toDate().toDateString()}</Typography>
        </Grid>
      </Grid>
      <Typography variant="h3">Hier sollten die Kommentarte erscheinen.</Typography>
      <div>{blog?.comment}</div>
      <div>{blog?.commentaryname}</div>
    </div>
  )
}

export default Detail