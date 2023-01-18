import React, { useState } from 'react';
import '../App.css';

const Nav = ({ parallax }) => {
  const [selected, setSelected] = useState('');
  const NavItems = ['home', 'about', 'resume', 'contact'];
  const handleScroll = (e) => {
    setSelected(e.target.id);
    switch (e.target.id) {
      case 'home':
        parallax.current.scrollTo(0);
        break;
      case 'about':
        parallax.current.scrollTo(1);
        break;
      case 'resume':
        parallax.current.scrollTo(2);
        break;
      case 'contact':
        parallax.current.scrollTo(3);
        break;
      default:
        parallax.current.scrollTo(0);
    }
  };
  return (
    <ul className='NavContainer'>
      {NavItems.map((item) => (
        <li className='NavItem' id={item} style={{ color: selected === item ? '#20c997' : '#fff' }} onClick={handleScroll}>
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </li>
      ))}
    </ul>
  );
};

export default Nav;
