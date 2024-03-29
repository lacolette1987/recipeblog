import React, { useMemo } from 'react';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { MainContainer } from '../theme/my-theme';
import BlogSection from '../components/blogsection';
import useBlogs from '../hooks/useBlogs';



const Profile = () => {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  const {blogs} = useBlogs();
  const filteredBlogs = useMemo(() => blogs.filter(b => b.userId === currentUser!.uid), [blogs]);


  return (
    <MainContainer maxWidth='lg'>
      <Typography variant='h1'>Hallo {currentUser?.displayName || 'Name'}</Typography>
      <Typography variant='body1' sx={{mb: '40px'}}>Hier siehst du alle deine bis jetzt verfassten Rezepte:</Typography>
      <BlogSection blogs={filteredBlogs} handleDelete={() => {
        //
      }} />
    </MainContainer>
  );
};

export default Profile;
