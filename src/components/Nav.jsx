import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Nav = ({ parallax }) => {
  const [selected, setSelected] = useState('');
  const NavItems = ['home', 'about', 'resume', 'contact'];
  return (
    <ul className='NavContainer'>
      {NavItems.map((item) => (
        <Link
          className='NavItem'
          key={item}
          id={item}
          style={{ color: selected === item ? '#20c997' : '#fff' }}
          to={item === 'home' ? '/' : item}
          onClick={() => setSelected(item)}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </Link>
      ))}
    </ul>
  );
};

export default Nav;