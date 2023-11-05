import { Avatar, Button } from '@mui/material';
import { User, signOut } from 'firebase/auth';
import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase-config';


interface NavigationProps {
    user: User | null;
    handleLogout?: () => void;
    setActive?: (active: string) => void;
  }

  
const Navigation: React.FC<NavigationProps> = ({ user, handleLogout, setActive }) => {

    const userId = user?.uid;
    console.log("userID", userId);
    console.log("name", user?.displayName);

    // const onLogoutClick = () => {
    //     if (handleLogout) {
    //         handleLogout();
    //     }
    // };

    const onLogoutClick = async () => {
        try {
          await signOut(auth); // Benutzer ausloggen
          if (handleLogout) {
            handleLogout();
          }
        } catch (error) {
          console.error("Fehler beim Ausloggen:", error);
        }
      };
    


    const handleSetActive = () => {
      if (setActive) {
        setActive("home"); 
      }
    };
    

    return (
        <nav>
            <Link color="text.primary" to={'/'} onClick={handleSetActive}>Home</Link>
            <Link to={'/cooking'}>Cooking</Link>
            <Link to={'/baking'}>Baking</Link>
            <Link to={'/create'}>Create</Link>
        {/* Hier funktioniert noch etwas nicht */}
        {userId ? (
            <div>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                <p>Hallo {user?.displayName}</p>
                <Button onClick={onLogoutClick} variant="outlined">Logout</Button>
            </div>
        ) : (
              <Link to={'/login'}>Login</Link>
          )}
        </nav>
)}

export default Navigation