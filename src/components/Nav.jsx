import React from 'react';
import '../App.css';

const Nav = ({ parallax }) => {
  return (
    <ul className='navContainer'>
      <li className='navItem' onClick={(e) => parallax.current.scrollTo(0)}>
        Home
      </li>
      <li className='navItem' onClick={(e) => parallax.current.scrollTo(1)}>
        About
      </li>
      <li className='navItem' onClick={(e) => parallax.current.scrollTo(2)}>
        Contact
      </li>
    </ul>
  );
};

export default Nav;
