import React, { useEffect } from 'react';
import useBlogs from '../hooks/useBlogs';
import BlogSection from '../components/blogsection';
import User from '../models/User';
import { Grid, Typography } from '@mui/material';

interface CookingProps {
  user?: User;
}

const Cooking: React.FC<CookingProps> = ({ user }) => {
  const { blogs, queryBlogs, deleteBlog, loading, error } = useBlogs();

  useEffect(() => {
    queryBlogs();
  }, []);

  const cookingBlogs = blogs.filter((blog) => blog.category === 'Kochen');

  return (
    <Grid container direction={'row-reverse'} spacing={{ sm: 4, md: 8 }}>
      <Grid item xs={12} sm={6} md={4}>
        <Grid item>
          <Typography>Tags...</Typography>
          </Grid>
          <Grid item>
            <Typography variant='caption'>«Namnis di consed mi, ut ommoluptam, que nobis int, omnia dolupta quibus»</Typography>
          </Grid>
        </Grid>
      <Grid item xs={12} sm={6} md={8}>
        <Grid container spacing={4}>
          <Grid item>
            <Typography variant='h1'> Kochen</Typography>
            <Typography>In der Küche treffen Kulturen und Traditionen aufeinander. Jede Region der Welt hat ihre eigenen einzigartigen Gerichte und Zubereitungstechniken, die von Generation zu Generation weitergegeben werden. Das Kochen ermöglicht uns, die Welt zu erkunden, indem wir verschiedene Küchen und kulinarische Traditionen kennenlernen und ausprobieren.</Typography>
          </Grid>
          <Grid item>
          <BlogSection blogs={cookingBlogs} user={user} handleDelete={deleteBlog} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Cooking;
