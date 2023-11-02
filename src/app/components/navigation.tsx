import { Avatar, Button } from '@mui/material';
import { User } from 'firebase/auth';
import React from 'react'
import { Link } from 'react-router-dom'



const Navigation: React.FC<{ user: User | null; handleLogout?: () => void }> = ({
    user,
    handleLogout
}) => {


    const userId = user?.uid;
    console.log("userID", userId);
    console.log("name", user?.displayName);

    const onLogoutClick = () => {
        if (handleLogout) {
            handleLogout();
        }
    };

    return (
                    <nav>
                        <ul>
                            <li>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link to={'/create'}>Create</Link>
                            </li>
                            {/* Hier funktioniert noch etwas nicht */}
                            {userId ? (
                                <div>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                                    <p>Hallo {user?.displayName}</p>
                                    <Button onClick={handleLogout} variant="outlined">Logout</Button>
                                </div>
                            ) : (
                                <li>
                                    <Link to={'/login'}>Login</Link>
                                </li>
                            )}
                        </ul>
                    </nav>
)}

export default Navigation