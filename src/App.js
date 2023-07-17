import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './components/login'
import SignUp from './components/signup'
import Home from './scenes/home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const userLoggedIn = isLoggedIn;
    setIsLoggedIn(userLoggedIn);
  }, []);

  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              {isLoggedIn ? (
                <Route path="/" element={<Home />} />
              ) : (
                <Navigate to="/sign-in" />
              )}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
