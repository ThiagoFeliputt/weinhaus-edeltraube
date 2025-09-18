// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WineDetail from './pages/WineDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <h1>WENHAUS EDELTRADBE</h1>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wine/:id" element={<WineDetail />} />
        </Routes>
      </div>
    </Router>
  );

}

export default App;