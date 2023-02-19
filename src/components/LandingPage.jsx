import React, { useEffect } from 'react';
import '../App.css';
import { TypeAnimation } from 'react-type-animation';
import pdf from '../pdf/yonatansalmon_cv.pdf';

const LandingPage = ({ contactRef }) => {

  return (
    <div className='LandingPage'>
      <h4 className='Welcome'>Welcome</h4>
      <TypeAnimation
        className='TypeAnimation'
        sequence={["I'm Yonatan Salmon.", 2000, "I'm a Full-Stack Developer.", 2000, "I'm a Teacher.", 2000, "I'm a Psychology Graduate.", 2000]}
        wrapper='div'
        cursor={true}
        repeat={Infinity}
      />
      <h1 className='BasedIn'>Based in Tel Aviv</h1>
      <div className='HireButtons'>
        <a className='HireBtn CV' download='yonatansalmon_cv.pdf' href={pdf}>
          Download CV
        </a>
        <span className='HireBtn HireMe' id='HireMe' onClick={() => contactRef.current.scrollIntoView({block: 'center'})}>
          Hire Me
        </span>
      </div>
    </div>
  );
};

export default LandingPage;
