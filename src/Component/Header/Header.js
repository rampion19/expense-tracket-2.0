import React, { useEffect, useState } from 'react';
import "./Header.css";
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { authAction } from '../../Store/Auth';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuthenticated);


  useEffect(() => {
    if (localStorage.getItem('idToken') === null) {
      // setUserLogIn(false);
      dispatch(authAction.logout());
    } else {
      // setUserLogIn(true)
      dispatch(authAction.login());
    }
  }, []);

  const logoutHandler = async () => {
    await localStorage.removeItem('idToken');
    await localStorage.removeItem("email")
    navigate('/login')
    dispatch(authAction.logout());
    alert("logout Successful")
  }
  return (
    <div className="mainNav">
      <nav>
        <ul>
          {auth && (
            <>
              <li>
                <NavLink to="/home">Update Profile</NavLink>{" "}
              </li>
              <li>
                <NavLink to="/expenses">Expenses</NavLink>
              </li>
              <li>
                <NavLink onClick={logoutHandler}>Logout</NavLink>
              </li>{" "}
            </>
          )}
          {!auth && (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;