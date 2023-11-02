import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
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
              <CardMedia component="img" image={item.imgUrl} title={item.title} />
              <CardContent>
                <Typography gutterBottom variant="h3">{item.title}</Typography>
                
                <p><strong>{item.category}</strong></p>
                <div>
                  <p>{item.author}</p>
                  {item.timestamp.toDate().toDateString()}
                </div>
                <Link to={`/detail/${item.id}`}>
                  <Button variant="outlined" disableElevation>Read more</Button>
                </Link>
              </CardContent>
              <CardActions>
                <Button size="small">{ userId ? <DeleteOutlinedIcon onClick={() => handleDelete(item.id)} style={{ cursor: "pointer" }}></DeleteOutlinedIcon> : '' }</Button>
                <Button size="small">{ userId ? <EditIcon style={{ cursor: "pointer" }}></EditIcon> : '' }</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default BlogSection;
