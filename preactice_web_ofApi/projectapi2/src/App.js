import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Product from './Componet/Product';
import ProductSingle from './Componet/Productsingal';


function App() {
  return (
    <>
      <Routes>
        <Route path="/products" index element={<Product />} />
        <Route path="/products/:id" element={<ProductSingle />} />
      </Routes>
    </>
  );
}

export default App;