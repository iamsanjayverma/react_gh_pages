import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/Pages/Home/index'
import Login from '../src/Pages/Login/index'
import Contact from '../src/Pages/Contact/index'


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<BrowserRouter>
    <Routes>
    <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/contact" component={Contact} />
    </Routes>
  </BrowserRouter>
  );