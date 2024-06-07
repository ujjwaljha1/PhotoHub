import React from 'react';
import Photos from './Components/Photos';
import Favourites from './Components/Favourites';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className='navbar'>
          <div className='navbar_logo'>
            PhotoHub
          </div>
          <div className='navbar_link'>
            <Link to="/">Home</Link>
            <Link to="/favourites">Favourites</Link>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Photos />} />
          <Route path='/favourites' element={<Favourites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
