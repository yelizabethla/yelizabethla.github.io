import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './screens/Home';
import RouterError from './screens/RouterError';
import Thrifted from './screens/Thrifted';
import About from './screens/About';
import BlogScreen from './components/BlogScreen';
import ReactGA from 'react-ga4';
import { blogEntries } from './entries/blogEntries';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

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
  ...blogEntries.map(entry => ({
    path: entry.pathname,
    element: <BlogScreen blogData={entry} />,
    loader: () => entry
  }))
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
