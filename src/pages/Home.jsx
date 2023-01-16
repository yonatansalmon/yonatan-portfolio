import React from 'react';
import LandingPage from '../components/LandingPage';
import SideBar from '../components/SideBar';
import '../App.css';

const Home = () => {
  return (
    <div className='homeContainer'>
      <SideBar />
      <LandingPage />
    </div>
  );
};

export default Home;
