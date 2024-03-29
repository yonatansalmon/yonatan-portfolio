import React, { useState } from 'react';
import { useEffect } from 'react';
import '../App.css';
import ProfilePic from '../images/profilepic.png';

const Nav = ({ homeRef, aboutRef, resumeRef, contactRef }) => {
  const [selected, setSelected] = useState('');
  const NavItems = [
    { name: 'home', ref: homeRef },
    { name: 'about', ref: aboutRef },
    { name: 'resume', ref: resumeRef },
    { name: 'contact', ref: contactRef },
  ];

  const handleNavClick = (item) => {
    setSelected(item.name);
    item.ref.current.scrollIntoView();

  };


  return (
    <ul className='NavContainer'>
      <img className='ProfilePic' src={ProfilePic} alt='yonatan' onClick={() => homeRef.current.scrollIntoView()}></img>

      {NavItems.map((item) => {
        return (
          <li
            className='NavItem'
            key={item.name}
            id={item.name}
            style={{ color: selected === item.name ? '#20c997' : '#fff' }}
            to={item.ref.current}
            onClick={() => handleNavClick(item)}
          >
            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
