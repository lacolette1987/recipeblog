import React, { useEffect } from 'react';
import { Button, CardMedia, Grid, Stack, Typography } from '@mui/material';
import useBlogs from '../hooks/useBlogs';
import { Link } from 'react-router-dom';



const Baking = () => {
  const { blogs, queryBlogs, loading, error } = useBlogs();

  useEffect(() => {
    // Lade die Blogs mit der Kategorie "Backen"
    queryBlogs({ category: 'Backen' });
  }, []);


  if (loading) {
    return <div>Lade...</div>;
  }

  if (error) {
    return <div>Fehler: {error}</div>;
  }



  
  return (
    <div>
      <Grid container spacing={4}>
      {blogs.map((blog) => (
          <div key={blog.uid}>
          <Grid item xs={12} sm={12} md={6} key={blog.uid}>
            <Link to={`/detail/${blog.uid}`}>
              <CardMedia component='img' image={blog.imgUrl} title={blog.title} />
            </Link>
            <Stack></Stack>
            <Link to={`/detail/${blog.uid}`}>
              <Typography variant='h3'>{blog.title}</Typography>
            </Link>
            <Typography>{blog.lead}</Typography>
            <Typography><strong>{blog.category}</strong></Typography>
            <Grid container>
              <Grid item xs={6}>
                <Link to={`/detail/${blog.uid}`}>
                  <Button color='secondary' variant='outlined' disableElevation>Zum Rezept</Button>
                </Link>
              </Grid>
              {/* {userId ? (
                <Grid item xs={6} textAlign={'right'}>
                  <DeleteOutlinedIcon onClick={handleClickOpen}></DeleteOutlinedIcon>
                </Grid>
              ) : ""} */}
            </Grid>
            {/* <DialogDelete isOpen={deleteDialogOpen} handleClose={() => setDeleteDialogOpen(false)} handleDelete={() => handleDeleteBlog(blog.uid)} /> */}
          </Grid>
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default Baking;