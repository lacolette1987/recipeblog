import { DocumentData, collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase-config';
import BlogSection from '../components/blogsection';
import useAuth from "../context/auth-context";
import { Grid, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';

const Home = () => {
  const {user} = useAuth();
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<DocumentData[]>([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "blogs"), 
      (snapshot) => {
        const list: DocumentData[] = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setBlogs(list);
        setLoading(false);
      }, 
      (error) => {
        console.log(error);
        setLoading(false);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const handleDelete = async (id: any) => {
    if (window.confirm("Are you sure wanted to delete that blog ?")) {
      try {
        setLoading(true);
        await deleteDoc(doc(db, "blogs", id));
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  console.log("blogs", blogs);

  return (
    <div>
      <Typography variant="h1">This is the start</Typography>
      <Typography>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.</Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
        {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
          <Typography>Coming soon...</Typography>
        </Grid>
        <Grid item xs={8}>
        <Typography>Coming soon...</Typography>
          <BlogSection blogs={blogs} user={user} handleDelete={handleDelete} />
        </Grid>
      </Grid>


    </div>
  );
}

export default Home;
