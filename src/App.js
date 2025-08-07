import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Head from './components/Head';
import Foot from './components/Foot';
import Login from './components/Login';
import Signup from './components/Signup';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Homie from './components/Homie';

function Home() {
  return (
    <div className="page-content">
      <div className="form-container" style={{ textAlign: "center" }}>
        <h2 className="form-title">Welcome to Prodapt Solutions</h2>
        <p style={{ fontSize: "1.2rem", color: "#34495e" }}>
          Your gateway to digital transformation.<br />
          Explore our platform using the navigation above.
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Head />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Homie />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
      <Foot />
    </Router>
  );
}

export default App;
