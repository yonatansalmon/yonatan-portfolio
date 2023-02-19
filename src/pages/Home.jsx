import React, { forwardRef, useEffect } from 'react';
import LandingPage from '../components/LandingPage';
import SideBar from '../components/SideBar';
import '../App.css';

const Home = ({homeRef, contactRef}) => {
  

  return (
    <section className='HomeContainer' ref={homeRef}>
      <LandingPage contactRef={contactRef} />
    </section>
  );
};

export default Home;
