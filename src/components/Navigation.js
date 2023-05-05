import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navigation.css';

function Nav() {
  return (
    <nav className="nav">
      <h1>BookStore</h1>
      <ul>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/categories">Catergies</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
