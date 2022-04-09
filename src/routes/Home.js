/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';
import Logout from '../Logout';

function Home() {
  const location = useLocation();
  return (
    <div>
      <p>Welcome, {location.state.name}</p>
      <img src={location.state.imageUrl} alt="" />
      <Logout />
    </div>
  );
}

export default Home;
