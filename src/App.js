import React from 'react';
import './style.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';

//404 page not found!!
import Error from './pages/Error';

//React router v6 - Training..
export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> <Link to="/about">About</Link>{' '}
        <Link to="/profile">Profile</Link>{' '}
        <Link to="/SDASDSDSADS">404 Pgae | Not found!</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:user" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <footer>
        <h1>This is a footer</h1>
      </footer>
    </Router>
  );
}
