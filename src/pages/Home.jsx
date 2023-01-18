import React, { forwardRef, useEffect } from 'react';
import LandingPage from '../components/LandingPage';
import SideBar from '../components/SideBar';
import '../App.css';

const Home = ({parallax}) => {
  

  return (
    <section className='HomeContainer'>
      <LandingPage  parallax={parallax}/>
    </section>
  );
};

export default Home;
