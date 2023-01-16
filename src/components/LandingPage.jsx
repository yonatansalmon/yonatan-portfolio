import React from 'react';
import '../App.css';
import { TypeAnimation } from 'react-type-animation';

const LandingPage = () => {
  return (
    <div className='landingPage'>
      <h4 className='welcome'>Welcome</h4>
      <TypeAnimation
      className='typeAnimation'
        sequence={[
          "I'm Yonatan Salmon.",
          2000,
          "I'm a Full-Stack Developer.",
          2000,
          "I'm a Teacher.",
          2000,
          "I'm a Psychology Graduate.",
          2000
        ]}
        wrapper='div'
        cursor={true}
        repeat={Infinity}

      />
    </div>
  );
};

export default LandingPage;
