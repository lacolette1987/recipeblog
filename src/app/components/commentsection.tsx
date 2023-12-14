// import { Card, CardContent, Grid, Typography, Rating } from '@mui/material'
// import React from 'react'
// import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';




// interface CommentSectionProps {
//   blogId: string,
//   title: string;
// }

// const CommentSection:React.FC<CommentSectionProps> = ({blogId, comments, deleteComment, formatTimestamp}) => {

  
//   return (
//     <Card key={comment.uid} elevation={0} sx={{ marginTop: '30px' }}>
//         <CardContent>
//         <Grid container justifyContent={'space-between'}>
//             <Grid item>
//             <Typography variant='h4'>{comment.nickname}</Typography>
//             </Grid>
//             <Grid item>
//             <Rating size='small' readOnly value={comment.rating} />
//             </Grid>
//         </Grid>
//         <Typography variant='subtitle1'>
//             {blogs[0]?.timestamp
//             ? formatTimestamp(blogs[0]?.timestamp)
//             : ''}
//         </Typography>
//         <Typography>{comment.comment}</Typography>
//         {currentUser?.uid === comment.authorId ? <DeleteOutlinedIcon onClick={() => deleteComment(blogId!, comment.uid!)} />: ''}
//         </CardContent>
//     </Card>

//   )
// }

// export default CommentSection