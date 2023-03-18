import React, { useEffect, useState } from 'react';
import "./Header.css";
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [userLogIn, setUserLogIn] = useState(false)

  useEffect(()=> {
    if(localStorage.getItem('idToken')=== null){
      setUserLogIn(false);
    }else{
      setUserLogIn(true)
    }
  }, []);
  const logoutHandler = async () => {

    await localStorage.removeItem('idToken');
    navigate('/login')
    alert("logout Successful")
  }
  return (
    <div className="mainNav">
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>{" "}
        </li>
        {userLogIn && (
          <>
            {" "}
            <li>
              <NavLink to="/expenses">Expenses</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          </>
        )}

        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink onClick={logoutHandler}>Logout</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;