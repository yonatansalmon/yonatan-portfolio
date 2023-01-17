import React, { forwardRef, useEffect } from 'react';
import LandingPage from '../components/LandingPage';
import SideBar from '../components/SideBar';
import '../App.css';

const Home = ({parallax}) => {
  

  return (
    <div className='homeContainer'>
      <SideBar parallax={parallax}    />
      <LandingPage />
    </div>
  );
};

export default Home;
