// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Builder from './pages/Builder';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/builder" element={<Builder />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;