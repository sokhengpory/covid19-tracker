import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Covid19 Tracker</h1>
      <p>
        Api from{' '}
        <a href="https://covid19api.com/" target="blank" rel="noopener noreferrer">
          Covid19api.com
        </a>
      </p>
    </nav>
  );
};

export default Navbar;
