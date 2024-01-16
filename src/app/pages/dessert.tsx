import React from 'react';
import useBlogs from '../hooks/useBlogs';
import BlogSection from '../components/blogsection';
import { Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { MainContainer } from '../theme/my-theme';
import BlankSlate from '../components/blankslate/blankslate-blog';

const Dessert = () => {
  const { blogs, deleteBlog } = useBlogs({ category: 'Dessert' });
  const user = useSelector((state: RootState) => state.auth.currentUser);



  return (
    <MainContainer maxWidth='lg'>
        <Stack sx={{ m: '0 0 40px 0' }}>
        <Typography variant="h1">Dessert</Typography>
          <Typography>Desserts sind das süße Finale eines jeden Mahls und eine wahre Freude für die Sinne. Sie bieten eine verlockende Möglichkeit, den Geschmackssinn zu verwöhnen und den Genuss einer Mahlzeit zu krönen. Egal, ob Sie ein einfaches Eis genießen oder ein aufwendiges, kunstvoll dekoriertes Dessert probieren, die Welt der Desserts bietet eine Fülle von Möglichkeiten, die für jeden Gaumen etwas bereithalten.</Typography>
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

export default Dessert;
