import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Product from './Componet/Product';
import ProductSingle from './Componet/Productsingal';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/Productsingal/:id" element={<ProductSingle />} />
      </Routes>
    </>
  );
}

export default App;