import React, { forwardRef, useState } from 'react';
import pdf from '../pdf/yonatansalmon_cv.pdf';

import '../App.css';
import Maps from '../components/Maps';
import Title from '../components/Title';

const About = ({ aboutRef }) => {
  return (
    <section className='AboutContainer' ref={aboutRef}>
      <div className='About'>
        <Title backgroundTitle='About Me' frontalTitle='Know Me More' />
        <div className='AboutInfo'>
          <div className='Summary'>
            <h2>
              I'm <span className='name'>Yonatan Salmon</span>, a Full-Stack Developer
            </h2>
            <p>I have a passion for continuously advancing my skills and knowledge in the field.</p>
            <p>
              With over three years of experience in developing cutting-edge websites and applications, I am eager to take on new challenges and
              contribute to the growth and success of a company
            </p>
            <p>
              I am well-versed in various technologies, including React, JavaScript, Node, HTML/CSS, MongoDB and Git. In addition, I have a strong
              track record as a lecturer and mentor, having received high student satisfaction scores for my engaging and comprehensive teaching
              style.
            </p>
            <p>I am a quick learner, highly organized, and always ready to tackle new projects with enthusiasm.</p>
          </div>
          <div className='InfoTableContainer'>
            <ul className='InfoTable'>
              <li>
                <span className='key'>Name: </span>
                <span className='Info'>Yonatan Salmon</span>
              </li>
              <li>
                <span className='key'>Email: </span>
                <span className='email Info'>yonatansalmon@gmail.com</span>
              </li>

              <li>
                <span className='key'>Age: </span>
                <span className='Info'>30</span>
              </li>

              <li>
                <span className='key'>From: </span>
                <span className='Info'>La Paz, Bolivia</span>
              </li>
            </ul>
            <button>
              <a href={pdf} download='yonatansalmon_cv.pdf'>
                Download CV
              </a>
            </button>
          </div>
        </div>
        <Maps />
      </div>
    </section>
  );
};

export default About;
