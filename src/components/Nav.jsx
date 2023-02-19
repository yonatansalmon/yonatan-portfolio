import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
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

  return (
    <ul className='NavContainer'>
      <img className='ProfilePic' src={ProfilePic} alt='yonatan' onClick={() => homeRef.current.scrollIntoView()}></img>

      {NavItems.map((item) => (
        <Link
          className='NavItem'
          key={item.name}
          id={item.name}
          style={{ color: selected === item ? '#20c997' : '#fff' }}
          to={item.ref.current}
          onClick={() => item.ref.current.scrollIntoView()}
        >
          {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
        </Link>
      ))}
    </ul>
  );
};

export default Nav;
