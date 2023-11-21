import { Avatar, Button, Container } from '@mui/material';
import { User } from 'firebase/auth';
import React, { useState } from 'react'
import Blog from '../models/Blog';




interface ProfileProps {
    user: User | null;
  }

  
const Profile: React.FC<ProfileProps> = ({ user }) => {

    const [blog, setBlog] = useState<Blog | null>(null);
    
    return (
        <Container maxWidth='lg'>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
            <p>Hallo {blog?.author}</p>
            <p>Hier sind alle meine Einträge.</p>
        </Container>
    )
}

export default Profile;