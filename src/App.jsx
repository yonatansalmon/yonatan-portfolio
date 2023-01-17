import { createRef, useRef } from 'react';
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  const parallax = useRef(null);

  return (
    <div className='appContainer'>
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer offset={0} speed={0.8}>
          <Home parallax={parallax} />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.8}>
          <About />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.8}>
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
