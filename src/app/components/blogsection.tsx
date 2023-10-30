import { Avatar, Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import User from "../models/User";
import EditIcon from '@mui/icons-material/Edit';

interface BlogSectionProps {
  blogs: any[];
  user?: User;
  handleDelete: (id: any) => void;
}

const BlogSection: React.FC<BlogSectionProps> = ({ blogs, user, handleDelete }) => {

  const userId = user?.uid

  return (
    <div>
      <h2>Blogeinträge</h2>
      {blogs?.map((item) => (
        <Box sx={{ flexGrow: 1 }} key={item.id}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <Container>
                <Card>
                  <CardContent component="div">
                    <p><strong>{item.category}</strong></p>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                    <div>
                      <p>{item.author}</p>
                      {item.timestamp.toDate().toDateString()}
                    </div>
                    <img src={item.imgUrl} alt={item.title} />
                    <Typography variant="h4" component="div" gutterBottom={true}>
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                      {item.description}
                    </Typography>
                    <Link to={`/detail/${item.id}`}>
                      <Button variant="outlined" disableElevation>Read more</Button>
                    </Link>
                    { userId ? <DeleteOutlinedIcon onClick={() => handleDelete(item.id)} style={{ cursor: "pointer" }}></DeleteOutlinedIcon> : '' }
                    { userId ? <EditIcon style={{ cursor: "pointer" }}></EditIcon> : '' }
                  </CardContent>
                </Card>
              </Container>
            </Grid>
          </Grid>
        </Box>
      ))}
    </div>
  )
}

export default BlogSection;



