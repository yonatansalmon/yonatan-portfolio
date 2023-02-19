import { useRef } from 'react';
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Resume from './pages/Resume';
import React from 'react';
import Nav from './components/Nav';
import { useEffect } from 'react';

function App() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const resumeRef = useRef();
  const contactRef = useRef();

  return (
    <div className='AppContainer'>
      <Nav homeRef={homeRef} aboutRef={aboutRef} resumeRef={resumeRef} contactRef={contactRef} />
      <div className='main'>
        <Home homeRef={homeRef} contactRef={contactRef} />
        <About aboutRef={aboutRef} />
        <Resume resumeRef={resumeRef} />
        <Contact contactRef={contactRef} />
      </div>
    </div>
  );
}

export default App;
