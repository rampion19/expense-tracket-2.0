import React from 'react';
import "./Header.css";
import {NavLink} from 'react-router-dom';

 const Header = () => {
  return (
    <div className='mainNav'>
    <nav>
        <ul>
            <li><NavLink to="/home">Home</NavLink> </li>
             <li><NavLink to="/expenses">Expenses</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/profile">Profile</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li> 
        </ul>
    </nav>
    </div>
  )
}

export default Header;