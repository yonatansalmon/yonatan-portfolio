import { createRef, useRef } from 'react';
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import SideBar from './components/SideBar.jsx';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Resume from './pages/Resume';

function App() {
  const parallax = useRef(null);

  return (
    <div className='AppContainer'>
      <SideBar parallax={parallax} />
      <div className='MainContainer'>
        <Parallax ref={parallax} pages={4} className='ParallaxContainer'>
          <ParallaxLayer offset={0} speed={0.8} className='Parallax'>
            <Home parallax={parallax} />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.8} className='Parallax'>
            <About />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.8} className='Parallax'>
            <Resume />
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.8} className='Parallax'>
            <Contact />
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
}

export default App;
