// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/records">Records</Link></li>
          <li><Link to="/analysis">Analysis</Link></li>
          <li><Link to="/info">Info</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
