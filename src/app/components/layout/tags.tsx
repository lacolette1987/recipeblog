import React from 'react';
import { CardMedia, Grid, Rating, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Blog from '../../models/Blog';
import { Colors } from '../../theme/my-theme';

interface TagsProps {
    blog: Blog;
  }

const Tags: React.FC<TagsProps> = ({ blog }) => {

    const linkStyles = {
        textDecoration: 'none',
        color: '#000000',
      };
    

  return (
    <div key={blog.uid}>
      <Grid container alignItems={'center'} sx={{ borderColor: Colors.lightgrey, borderStyle: 'solid', borderWidth: 0, borderBottomWidth: '1px', p: '13px 0px' }} justifyContent={'space-between'}>
        <Grid item xs={3}>
          <Link to={`/detail/${blog.uid}`}>
            <CardMedia
              style={{ marginBottom: '0px' }}
              component='img'
              image={blog.imgUrl}
              title={blog.title}
              alt={blog.title}
          />
          </Link>
        </Grid>
        <Grid item xs={8.3} alignItems={'center'}>
            <Link to={`/detail/${blog.uid}`} style={linkStyles}>
                <Typography variant='h5'>{blog.title}</Typography>
                {blog.avgRating ? <Rating readOnly sx={{p: 0}} size='small' name='simple-controlled' value={blog.avgRating} /> : ''}
            </Link>
        </Grid>
      </Grid>
    </div>
    );
};

export default Tags;
