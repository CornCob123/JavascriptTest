import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';

const Home = lazy(() => import('./pages/Home'));

const App = () => {
  return (
    <Router>
      <div className="app-shell">
        <nav>
          <h1>Micro-Frontend Shell</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products App</Link></li>
            <li><Link to="/dashboard">Dashboard App</Link></li>
          </ul>
        </nav>
        
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/products/*" 
              element={<MicroFrontend 
                name="products" 
                host={window.env.PRODUCTS_APP_URL} 
              />} 
            />
            <Route 
              path="/dashboard/*" 
              element={<MicroFrontend 
                name="dashboard" 
                host={window.env.DASHBOARD_APP_URL} 
              />} 
            />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;