import React from 'react';
import "./styles/main.scss"
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
function App() {

const Home = lazy(() => import('../questions/question4/question4.2/Home.tsx'));
const About = lazy(() => import('../questions/question4/question4.2/About.tsx'));
const Virtualisation = lazy(() => import('../questions/question3/ListRender.tsx'));
const RenderQuestion = lazy(() => import('../questions/question1/RenderQuestion.tsx'));
const RenderErrorBoundary = lazy(() => import('../questions/question3/renderQuestion/RenderErrorBoundary.tsx'));

  return (
    <>
    <div style={{paddingTop:'400px'}}>
    <AppBar position="fixed">
      <Toolbar>{'JAVASCRIPT '}</Toolbar>
      </AppBar>
      <Toolbar />
    <div > 
    <Suspense fallback={<div>Loading...</div>}>
      <RenderQuestion/>
    </Suspense>
    </div>

    </div>
    <div style={{paddingTop:'20px'}}></div>
    <Router>
      <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="/about">About</Link> | {" "}
        <Link to="/errorboundary">RenderErrorBoundary</Link> | {" "}
      </nav>
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/errorboundary" element={<RenderErrorBoundary/>} />
        </Routes>      
      </Suspense>
    </Router>

    <div style={{paddingTop:'20px'}}></div>

    <Suspense fallback={<div>Loading...</div>}>
      <Virtualisation/>
    </Suspense>
    
    </>

  );
}

export default App;