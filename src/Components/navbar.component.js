import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
      <Link to='/' className='navbar-brand'>fl0h</Link>
      <div className='collapse navbar-collapse'>
          <ul className='navbar-nav mr-auto'>
            <li><Link to='/login'>Login</Link></li>
          </ul>
      </div>
  </nav>
);

export default Navbar;