import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactDOM from "react-dom/client";
import { Routes, Route, Link } from "react-router-dom";
import Product1 from './Component/Product1';
import Index from './Index';


function App() {

  return (
    <div className="App">

      <Routes>
        <Route>
          <Route path='/Products' index element={<Index />} />
          <Route path="/Products/:id" element={<Product1/>} />

        </Route>
      </Routes>

    </div >
  );
}

export default App;
