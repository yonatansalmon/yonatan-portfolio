import { createRef, useRef } from 'react';
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import SideBar from './components/SideBar.jsx';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Resume from './pages/Resume';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import Nav from './components/Nav';
import { Root } from './components/Root';

function App() {
  const parallax = useRef(null);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'resume',
          element: <Resume />,
        },
        {
          path: 'contact',
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
