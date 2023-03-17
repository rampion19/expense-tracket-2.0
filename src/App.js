import Signup from './Component/Pages/Signup';
import './App.css';
import React, { Fragment } from 'react';
import Home from './Component/Pages/Home';
import Header from './Component/Header/Header';
import { Route, Routes } from "react-router-dom"

function App() {


  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/login" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Fragment>
  );
}

export default App;