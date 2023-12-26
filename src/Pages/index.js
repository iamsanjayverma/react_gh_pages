// Example App.js with routes
import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/index'
// import About from './Login/index';
// import Contact from './Contact/index';

function index() {
  return ( <Home/>
    //  <BrowserRouter>
//     <Routes>
//     <Route path="/" exact component={Home} />
//         <Route path="/login" component={About} />
//         <Route path="/contact" component={Contact} />
//     </Routes>
//   </BrowserRouter>

  );
}

export default index;
