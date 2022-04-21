import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './routes/Home';
import Meal from './routes/Meal';
import Landing from './routes/Landing';
import ProtectedRoutes from './routes/ProtectedRoutes';
import PublicRoutes from './routes/PublicRoutes';
import Search from './routes/Search';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicRoutes />}>
          <Route path="/" element={<Landing />} />
        </Route>

        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="meal/:id" element={<Meal />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
