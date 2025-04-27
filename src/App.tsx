import React from 'react';
import "./styles/main.scss"
import {compose} from "../questions/question1/Compose.ts"
import {createRateLimitedScheduler} from "../questions/question1/Limiting.ts"
import './App.css';
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import {BuggyComponent, ErrorFallback} from "../questions/question3/HigherOrderComponent.tsx"
import {List } from 'react-virtualized';
import {list,renderRow} from '../questions/question3/Virtualisation.tsx'
function App() {
const add5 = (x: number): number => x + 5;
const multiply3 = (x :number):number => x * 3;
const square = (x: number):number => x * x;
const rowCount = 5000;
const listHeight = 400;
const rowHeight = 50;
const rowWidth = 700;
const Home = lazy(() => import('../questions/question4/question4.2/Home.tsx'));
  return (
    <>
    <div>
      <h1>Hello React with Webpack!</h1>
    </div>

    <Router>
      <nav>
        <Link to="/">Home</Link> | {" "}
      </nav>
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>      
      </Suspense>
    </Router>

    <ErrorBoundary FallbackComponent={ErrorFallback}>
          <BuggyComponent />
    </ErrorBoundary>
    <div style={{paddingTop:'50px'}}> 
        <button className="btn" onClick={() => {createRateLimitedScheduler(()=>{console.log('resolved')} , 4 , 3000)}} >Question 1.3 click to block view in console log</button>
    </div>
    <div style={{paddingTop:'20px'}}></div>
    <h2>Question 3.2</h2>
    <div className="App">
      <div className="list">
        <List
          width={rowWidth}
          height={listHeight}
          rowHeight={rowHeight}
          rowRenderer={renderRow}
          rowCount={list.length}
          overscanRowCount={3} />
      </div>
    </div>

   
    </>

  );
}

export default App;