import { Avatar, Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import User from "../models/user";
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
      <Typography variant="h2">Neueste Einträge</Typography>
      <Grid container spacing={4}>
        {blogs?.map((item) => (
          <Grid item xs={12} sm={12} md={6} key={item.id}>
              <Card>
                <CardContent component="div">
                  <p><strong>{item.category}</strong></p>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                  <div>
                    <p>{item.author}</p>
                    {item.timestamp.toDate().toDateString()}
                  </div>
                  <CardMedia component="img" image={item.imgUrl} />
                  <Typography variant="h3">{item.title}</Typography>
                  <Typography variant="body2">{item.description}</Typography>
                  <Link to={`/detail/${item.id}`}>
                    <Button variant="outlined" disableElevation>Read more</Button>
                  </Link>
                  { userId ? <DeleteOutlinedIcon onClick={() => handleDelete(item.id)} style={{ cursor: "pointer" }}></DeleteOutlinedIcon> : '' }
                  { userId ? <EditIcon style={{ cursor: "pointer" }}></EditIcon> : '' }
                </CardContent>
              </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default BlogSection;
