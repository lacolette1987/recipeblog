import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Box, Card, CardContent, CardMedia, Grid, ListItem, Rating, Typography, } from '@mui/material';
import useBlogs from '../hooks/useBlogs';
import { Colors, MainContainer, StyledTagButton, ZutatenCard, } from '../theme/my-theme';
import Sharing from '../components/sharing';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import CommentSection from '../components/commentsection';
import { FieldValue, Timestamp } from 'firebase/firestore';
import DialogDelete from '../components/dialog-delete';
import { visuallyHidden } from '@mui/utils';
import EmailIcon from '@mui/icons-material/Email';
import { IconStyle } from '../theme/my-theme';


const Detail = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  const { blogs, deleteBlog } = useBlogs({blogId});

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleDelete = async () => {
    await deleteBlog(blogId!);
    navigate('/');
  };

  const openDeleteDialog = () => {
    setDeleteDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    setDeleteDialogOpen(false);
  };


  const dateFormatOptions: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };
  
  const formatTimestamp = (timestamp: Timestamp | FieldValue): string => {
    if (!(timestamp instanceof Timestamp)) {
      return 'Standarddarstellung für FieldValue';
    }
    return timestamp.toDate().toLocaleDateString('de-DE', dateFormatOptions);
  };



  return (
    <MainContainer maxWidth="lg">
      <Grid container columnSpacing={{ md: 4, lg: 6 }}>
        <Grid item xs={10}>
          <Typography variant="h1">{blogs[0]?.title}</Typography>
          {blogs[0]?.avgRating ? (
            <Rating sx={{pb: '40px'}} size="small" readOnly value={blogs[0]?.avgRating} />
          ) : (
            ''
          )}
        </Grid>
        <Grid item xs={2}>
          {currentUser?.uid === blogs[0]?.userId ? (
            <Grid
              container
              alignItems={'center'}
              justifyContent={'flex-end'}
              columnSpacing={1}
            >
              <Grid item>
                <Link to={`/edit/${blogId}`}>
                  <EditIcon aria-label="Rezept bearbeiten"
                    sx={{
                      color: Colors.secondary.light,
                      transition: '.3s ease-out',
                      '&:hover': {
                        color: Colors.primary.main,
                      },
                    }}
                  />
                  <Box sx={visuallyHidden}>Rezept bearbeiten</Box>
                </Link>
              </Grid>
              <Grid item>
                <DeleteOutlinedIcon aria-label="Rezept löschen"
                  sx={{
                    color: Colors.secondary.light,
                    transition: '.3s ease-out',
                    '&:hover': {
                      color: Colors.primary.main,
                    },
                  }}
                  onClick={openDeleteDialog}
                ></DeleteOutlinedIcon>
              </Grid>
            </Grid>
          ) : (
            ''
          )}
        </Grid>
      </Grid>
      <Grid container columnSpacing={{ md: 4, lg: 6 }}>
        <Grid item xs={12} md={7} lg={8}>
          <Card elevation={0} sx={{ mb: '30px' }}>
            <CardMedia
              component="img"
              image={blogs[0]?.imgUrl}
              title={blogs[0]?.title}
              alt={blogs[0]?.title}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={5} lg={4} sx={{ mb: '20px' }}>
          <Typography variant="body1" sx={{ mb: '40px' }}>
            {blogs[0]?.lead}
          </Typography>
          <Grid container>
            <Grid
              container
              alignItems={'center'}
              justifyContent={'space-between'}
              sx={{
                borderWidth: 0,
                borderBottomWidth: '1px',
                borderStyle: 'solid',
                borderColor: Colors.borderColors,
              }}
            >
              <Grid item>
                <Typography sx={{ fontWeight: '700' }}>
                  Auf dem Tisch in:
                </Typography>
              </Grid>
              <Grid item>
                <Typography>{blogs[0]?.duration} Min.</Typography>
              </Grid>
            </Grid>
            <Grid
              container
              alignItems={'center'}
              justifyContent={'space-between'}
              sx={{
                borderWidth: 0,
                borderBottomWidth: '1px',
                borderStyle: 'solid',
                borderColor: Colors.borderColors,
                p: '10px 0px 0px 0px',
              }}
            >
              <Grid item>
                <Typography sx={{ fontWeight: '700' }}>Kategorie:</Typography>
              </Grid>
              <Grid item>
                <Typography>{blogs[0]?.category}</Typography>
              </Grid>
            </Grid>
            <Grid
              container
              alignItems={'center'}
              justifyContent={'space-between'}
              sx={{ p: '10px 0px 0px 0px' }}
            >
              <Grid item>
                <Typography sx={{ fontWeight: '700' }}>Schwierigkeitsgrad:</Typography>
              </Grid>
              <Grid item>
                <Typography>{blogs[0]?.level}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid sx={{ m: '20px 0px 20px 0px' }}>
            {blogs[0]?.tags &&
              blogs[0].tags.map((tag, index) => (
                <StyledTagButton onClick={() => navigate(`/tags/${tag}`)} key={index}>
                  {tag.trim()}
                </StyledTagButton>
              ))}
          </Grid>
          <Typography sx={{mb: '5px'}}>
            <Box component="span" fontWeight="700" display="inline">
              Rezept von:
            </Box>{' '}
            {blogs[0]?.author}
            <a href={`mailto:${blogs[0]?.userEmail}`}>
              <EmailIcon style={IconStyle} sx={{ fontSize: 20, m: '0px 0px 0px 5px' }} aria-label="Autor kontaktieren" />
              <Box component={"span"} sx={visuallyHidden}>Autor kontaktieren</Box>
            </a>
          </Typography>
          <Typography variant="body1">
          <Box component="span" fontWeight="700" display="inline">
            Erfasst am:
            </Box>{' '}
            {blogs[0]?.timestamp ? formatTimestamp(blogs[0].timestamp) : ''}
          </Typography>
          <Sharing title={blogs[0]?.title} />
        </Grid>
      </Grid>
      <Grid container flexDirection={'row-reverse'} columnSpacing={{ md: 4, lg: 6 }}>
        <Grid item xs={12} md={5} lg={4}>
          <ZutatenCard elevation={0}>
            <CardContent component="div" sx={{ p: '20px' }}>
              <Grid container justifyContent={'space-between'}>
                <Grid item>
                  <Typography variant="h2">Zutaten</Typography>
                  <Typography variant="subtitle1">
                    {blogs[0]?.quantity}
                  </Typography>
                </Grid>
              </Grid>
              {blogs[0]?.ingredients &&
                blogs[0].ingredients.map((ingredient, index) => (
                  <ListItem key={index}>
                    <Grid container>
                      <Grid item xs={3} sx={{ fontWeight: 700 }}>
                        {ingredient.amount}
                      </Grid>
                      <Grid item xs={9}>
                        {ingredient.name.trim()}
                      </Grid>
                    </Grid>
                  </ListItem>
                ))}
            </CardContent>
          </ZutatenCard>
        </Grid>
        <Grid item xs={12} md={7} lg={8}>
          <Card elevation={0}>
            <CardContent>
              <Typography variant="h2">Zubereitung</Typography>
              <Typography sx={{ whiteSpace: "break-spaces" }}>{blogs[0]?.description}</Typography>
              {blogs[0]?.additional && (
                <>
                  <Typography sx={{ mt: '50px' }} variant="h4">
                  Tipps & Tricks
                  </Typography>
                  <Typography sx={{ whiteSpace: "break-spaces" }}>{blogs[0]?.additional}</Typography>
                </>
              )}
            </CardContent>
          </Card>

          <CommentSection blogId={blogId!} />
        </Grid>
      </Grid>
      <DialogDelete
        isOpen={deleteDialogOpen}
        handleClose={closeDeleteDialog}
        handleDelete={handleDelete}
      />
    </MainContainer>
  );
};

export default Detail;
