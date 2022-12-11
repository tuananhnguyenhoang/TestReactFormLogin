import React from 'react'
import { useContext } from 'react'
import { StoreContext } from './component/Store/Store'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Product from './component/Product/Product';
import LoginLib from './component/LoginLib/LoginLib';
import LoginFormik from '../src/component/LoginFormik/LoginFormik'
import Login from './component/Login/Login';
export default function App() {
  const store = useContext(StoreContext)
  return (
    <BrowserRouter>
      <Link to="/">Login</Link>
      <Routes>
        <Route path="/Product" element={<Product />} />
        <Route path="/" element={<Login />} />
        {/* <Route path="/" element={<LoginLib />} /> */}
        {/* <Route path="/" element={<LoginFormik />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
