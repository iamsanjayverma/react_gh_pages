import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import Home from '../src/Pages/Home/index'
import Contact from '../src/Pages/Contact/index'
import Login from '../src/Pages/Login/index'

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);