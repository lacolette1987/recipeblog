import React, { useEffect } from 'react';
import { Button, CardMedia, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import useBlogs from '../hooks/useBlogs';



const Baking = () => {
  const { blogs, queryBlogs, deleteBlog, loading, error } = useBlogs();


  useEffect(() => {
    queryBlogs();
  }, []);


  return (
    <div>
      <Grid container spacing={4}>
        {blogs?.map((item) => (
          <Grid item xs={12} sm={12} md={6} key={item.uid}>
            <Link to={`/detail/${item.uid}`}>
              <CardMedia component='img' image={item.imgUrl} title={item.title} />
            </Link>
            <Link to={`/detail/${item.uid}`}>
              <Typography variant='h3'>{item.title}</Typography>
            </Link>
            <Grid container spacing={1}>
                  <Grid item>
                  </Grid>
                  <Grid item>
                    <Typography>{item.duration} Min.</Typography>
                  </Grid>
                </Grid>
            <Typography>{item.lead}</Typography>
            <Grid container>
              <Grid item xs={6}>
                <Link to={`/detail/${item.uid}`}>
                  <Button color='secondary' variant='outlined' disableElevation>Zum Rezept</Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Baking;