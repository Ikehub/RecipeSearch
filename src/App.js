import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './routes/Home';
import Meal from './routes/Meal';
import Login from './Login';
import ProtectedRoutes from './routes/ProtectedRoutes';
import PublicRoutes from './routes/PublicRoutes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ProtectedRoutes />}>
          <Route path='/' element={<Navigate replace to="home" />} />
          <Route path='home' element={<Home />} />
          <Route path="meal/:name" element={<Meal />} />
        </Route>

        <Route path='login' element={<PublicRoutes />}>
          <Route path='/login' element={<Login />} />
        </Route>


      </Routes>
    </Router>
  );
}

export default App;
