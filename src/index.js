import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './screens/Home';
import RouterError from './screens/RouterError';
import Thrifted from './screens/Thrifted';
import About from './screens/About';
import Render from './screens/blogs/Render';
import SleepU from './screens/blogs/SleepU';
import AerialMetrics from './screens/blogs/AerialMetrics';
import ReactGA from 'react-ga4';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import E1 from './screens/blogs/E1';
import AutoRefi from './screens/blogs/AutoRefi';

ReactGA.initialize('G-5RDXZ3Z1Q4', {
  gaOptions: {
    siteSpeedSampleRate: 100
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <RouterError />
  },
  {
    path: "/thrifted",
    element: <Thrifted />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: '/portfolio/render',
    element: <Render />
  },
  {
    path: '/portfolio/sleepu',
    element: <SleepU />
  },
  {
    path: '/portfolio/aerial_metrics',
    element: <AerialMetrics />
  },
  {
    path: '/portfolio/e1',
    element: <E1 />
  },
  {
    path: '/portfolio/auto_refi',
    element: <AutoRefi />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
