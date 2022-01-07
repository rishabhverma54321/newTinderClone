import React from 'react'
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {Link,useNavigate} from "react-router-dom"
function Header({backButton}) {
    const history = useNavigate();
    return (
         
        <div className='header'>
         {backButton?( 
         <IconButton onClick={()=>history(backButton)}>
        <ArrowBackIosIcon className='header__back'  fontSize="larger"/>
         </IconButton>

            ):(

            <IconButton >
        <PersonIcon  fontSize="large" />
         </IconButton>
         )}
        
         <Link to="/">
          <img className='header__logo' src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png" alt="tinder-log0" />
         </Link>
          <Link to="/chat">
          <IconButton>
         <ChatBubbleIcon className="header__icon" fontSize="large"  />
         </IconButton>
    
         </Link>
        </div>
    )
}

export default Header;
