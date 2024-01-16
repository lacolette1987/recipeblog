import React from 'react';
import useBlogs from '../hooks/useBlogs';
import BlogSection from '../components/blogsection';
import { Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { MainContainer } from '../theme/my-theme';
import BlankSlate from '../components/blankslate/blankslate-blog';

const Appetizer = () => {
  const { blogs, deleteBlog } = useBlogs({category: 'Vorspeise'});
  const user = useSelector((state: RootState) => state.auth.currentUser);


  return (
    <MainContainer maxWidth='lg'>
        <Stack sx={{ m: '0 0 40px 0' }}>
          <Typography variant="h1">Vorspeise</Typography>
          <Typography>Vorspeisen bieten auch die Möglichkeit, mit Aromen und Texturen zu experimentieren. Sie können süß, salzig, sauer oder scharf sein, knusprig, zart oder cremig. Die Kombination von Zutaten in einer Vorspeise eröffnet die Möglichkeit, neue Geschmackserlebnisse zu schaffen und Gäste zu überraschen.</Typography>
        </Stack>
        {blogs.length > 0 ? (
          <BlogSection
            blogs={blogs}
            user={user}
            handleDelete={deleteBlog}
          />
          ) : (
            <BlankSlate />
          )}
      </MainContainer>
  );
};

export default Appetizer;
