import { Button, Card, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import User from "../models/user";
import EditIcon from '@mui/icons-material/Edit';
import DialogDelete from './dialog-delete';

interface BlogSectionProps {
  blogs: any[];
  user?: User;
  handleDelete: (id: any) => void;
}

const BlogSection: React.FC<BlogSectionProps> = ({ blogs, user, handleDelete }) => {

  const userId = user?.uid
  const [value, setValue] = React.useState<number | null>(2);


  return (
    <div>
      <Typography variant="h2">Neueste Einträge</Typography>
      <Grid container spacing={4}>
        {blogs?.map((item) => (
          <Grid item xs={12} sm={12} md={6} key={item.id}>
            <Card>
              <CardMedia component="img" image={item.imgUrl} title={item.title} />
              <CardContent>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <Typography variant="h3">{item.title}</Typography>
                <p><strong>{item.category}</strong></p>
                <div>
                  <p>{item.author}</p>
                  {item.timestamp.toDate().toDateString()}
                </div>
                <Link to={`/detail/${item.id}`}>
                  <Button variant="outlined" disableElevation>Read more</Button>
                </Link>
                <DialogDelete handleDelete={handleDelete} />
              </CardContent>
              <Button autoFocus size="small">{ userId ? <EditIcon style={{ cursor: "pointer" }}></EditIcon> : '' }</Button>
              {/* <CardActions>
                <Button size="small">{ userId ? <DeleteOutlinedIcon onClick={() => handleDelete(item.id)} style={{ cursor: "pointer" }}></DeleteOutlinedIcon> : '' }</Button>
                <Button autoFocus size="small">{ userId ? <EditIcon style={{ cursor: "pointer" }}></EditIcon> : '' }</Button>
              </CardActions> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default BlogSection;
