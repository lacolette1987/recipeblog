import { useNavigate, useParams } from 'react-router-dom';
import BlogSection from '../components/blogsection';
import useBlogs from '../hooks/useBlogs';
import React, { useEffect, useMemo } from 'react';
import { MainContainer } from '../theme/my-theme';
import { Typography } from '@mui/material';

const TagsPage: React.FC = () => {
  const { tag } = useParams();
  const navigate = useNavigate();
  const { blogs } = useBlogs();

  const filteredBlogs = useMemo(() => {
    console.log({ blogs, tag });
    return tag ? blogs.filter((blog) => blog.tags.includes(tag)) : [];
  }, [blogs]);

  useEffect(() => {
    if (!tag) {
      navigate('/');
    }
  });

  return (
    <MainContainer maxWidth="lg">
        {filteredBlogs.length > 0 ? (
          <BlogSection blogs={filteredBlogs}></BlogSection>
        ) : (
          <Typography variant='body1'>Es wurden keine Blogs mit diesem Tag gefunden</Typography>
        )}{' '}
    </MainContainer>
  );
};

export default TagsPage;
