import { addDoc, collection, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase-config';
import { Button, Card, CardContent, CardMedia, Container, Grid, ListItem, Stack, Typography } from '@mui/material';
import AddCommentForm from '../components/add-comment-form';
import { Comments } from '../models/Comments';
import useBlogs from '../hooks/useBlogs';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';




const Detail = () => {

  const { blogId } = useParams();
  const { blogs, querySingleBlog, loading, error } = useBlogs();
  // TODO: colette, useComments()
  const [comments, setComments] = useState<Comments>([]);

  const createComment = async (form: any) => {
    if(!blogId)
      return;

    try {
      const comment = form;
      const commentsRef = collection(db, `blogs`, blogId, 'comments');

      await addDoc(commentsRef, {
        ...form
      });
      setComments([...comments, comment]);
    } catch (err) {
      console.log(err);
    }
  };




  useEffect(() => {
    if (blogId) {
      querySingleBlog(blogId);
      getComments();
    }
  }, [blogId]);




  const getComments = async () => {
    if (!blogId) {
      return;
    }

    const blogRef = doc(db, 'blogs', blogId);
    const commentsRef = collection(db, `blogs`, blogId, 'comments');

    try {
      const commentsRaw = await getDocs(commentsRef);
      setComments(commentsRaw.docs.map(doc => ({
        uid: doc.id,
        nickname: doc.data().nickname,
        comment: doc.data().comment
      })));
      console.log('comments: ', commentsRaw.docs.map(doc => ({
        uid: doc.id,
        nickname: doc.data().nickname,
        comment: doc.data().comment
      })));
    } catch (error) {
      console.error('Fehler beim Abrufen von Blogdetails:', error);
    }
  };

  const formatTimestamp = (timestamp: any) => {
    if (timestamp && timestamp.toDate) {
      return timestamp.toDate().toLocaleString();
    }
    return '';
  };




  return (
    <Container maxWidth='lg'>
      <Grid container spacing={{ sm: 4, md: 8 }}>
        <Grid item xs={12} sm={6} md={8}>
          <Typography variant='h1'>{blogs[0]?.title}</Typography>
          <Typography variant='body1'>{blogs[0]?.lead}</Typography>
          <CardMedia component='img' image={blogs[0]?.imgUrl} title={blogs[0]?.title} />
          {blogs[0]?.tags && blogs[0].tags.map((tags, index) => (
            <Button key={index}>
              {tags.trim()}
            </Button>
          ))}
          <Typography>{blogs[0]?.timestamp ? formatTimestamp(blogs[0]?.timestamp) : ''}</Typography>
          <Typography>{blogs[0]?.description}</Typography>
          <AddCommentForm submitForm={createComment} />
          {comments.map((comment) => (
            <Card key={comment.uid} elevation={0} style={{ marginTop: '20px' }}>
              <CardContent>
                <Typography variant='subtitle1'>von {comment.nickname}</Typography>
                <Typography variant='subtitle2'>{blogs[0]?.timestamp ? formatTimestamp(blogs[0]?.timestamp) : ''}</Typography>
                <Typography>{blogs[0]?.tags}</Typography>
                <Typography>{comment.comment}</Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Grid container spacing={1}>
            <Grid item>
              <Typography>Arbeitszeit:</Typography>
            </Grid>
            <Stack direction="row" alignItems="top" gap={1}>
              <AccessAlarmIcon color='primary' />
              <Typography>{blogs[0]?.duration} Min.</Typography>
            </Stack>
          </Grid>
          <Card elevation={0}>
            <CardContent component='div'>
              <Typography variant='h3'>Du brauchst</Typography>
              {blogs[0]?.ingredients && blogs[0].ingredients.map((ingredient, index) => (
                <ListItem key={index}>
                  {ingredient.trim()}
                </ListItem>
              ))}
            </CardContent>
          </Card>
          <Typography>{blogs[0]?.timestamp.toDate().toDateString()}</Typography>
          <Typography variant='h4'>Rezept von {blogs[0]?.author}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Detail;
