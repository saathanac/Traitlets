// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Builder from './pages/Builder';
import {SelectionContextProvider} from './context/SelectionContext';
import * as THREE from 'three';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <SelectionContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/" element={<Home />} /> 
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </SelectionContextProvider>
  );
}

export default App;