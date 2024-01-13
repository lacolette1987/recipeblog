import React, { useEffect } from 'react';
import { Card, CardContent, Grid, Rating, Typography } from '@mui/material';
import AddCommentForm from './add-comment-form';
import BlankSlateComment from './blankslate/blankslate-comment';
import useComments from '../hooks/useComments';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

interface CommentSectionProps {
  blogId: string;
}


const CommentSection: React.FC<CommentSectionProps> = ({ blogId }) => {

  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  const { comments, queryComments, createComment, deleteComment } = useComments();

  useEffect(() => {
    if (blogId) {
      queryComments(blogId);
    }
  }, [blogId]);


  return (
    <>
      <Typography variant='h2' sx={{ m: '50px 0px 0px 0px' }}>Kommentare</Typography>
      {currentUser ? (
        <AddCommentForm
          submitForm={(comment) =>
            createComment(blogId!, { ...comment, authorId: currentUser.uid })
          }
        />
      ) : (
        ''
      )}
      {comments.length === 0 ? (
        <BlankSlateComment />
      ) : (
        comments.map((comment) => (
          <Card key={comment.uid} elevation={0} sx={{ marginTop: '30px' }}>
            <CardContent>
              <Grid container justifyContent={'space-between'}>
                <Grid item>
                  <Typography sx={{mr: '15px'}} variant='h4'>{comment.nickname}</Typography>
                </Grid>
                <Grid item sx={{pt: '2px'}}>
                  {currentUser?.uid === comment.authorId ? (
                    <DeleteOutlinedIcon
                      color='disabled'
                      fontSize='small'
                      onClick={() => deleteComment(blogId!, comment.uid!)}
                    />
                  ) : (
                    ''
                  )}
                </Grid>
                <Grid item sx={{ml: 'auto'}}>
                  <Rating size='small' readOnly value={comment.rating} />
                </Grid>
              </Grid>
              <Typography>{comment.comment}</Typography>
            </CardContent>
          </Card>
        ))
      )}
    </>
  );
};

export default CommentSection;
