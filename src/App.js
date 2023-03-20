import Signup from './Component/Pages/Signup';
import './App.css';
import React, { Fragment } from 'react';
import Home from './Component/Pages/Home';
import Header from './Component/Header/Header';
import { Route, Routes } from "react-router-dom"
import UpdateProfile from './Component/Pages/UpdateProfile';
import ForgetPassword from './Component/Pages/ForgetPassword';
import Expenses from './Component/Pages/Expenses';
import Premium from './Component/Premium';
import { useSelector } from 'react-redux';

function App() {

  const themeMode = useSelector((state) => state.theme.theme);
  return (
    <Fragment>
      <Header   />
      <div className={themeMode === 'dark' ? 'dark' : ''}>
      <Premium />
       <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/expenses" element={<Expenses/>} />

        <Route path="/login" element={<Signup />} />
        <Route path="/update" element={<UpdateProfile />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />



      </Routes> 
      </div>
    </Fragment>

  );
}

export default App;