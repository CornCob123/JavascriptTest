// src/App.js (Optimized React App)
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import(/* webpackChunkName: "home" */ './pages/Home'));
const About = lazy(() => import(/* webpackChunkName: "about" */ './pages/About'));
const Products = lazy(() => import(/* webpackChunkName: "products" */ './pages/Products'));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;