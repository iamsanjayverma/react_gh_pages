import React from 'react';

import ReactDOM from 'react-dom/client';
import App from '../src/Pages/index'
import { HashRouter } from 'react-router-dom';


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(  <HashRouter>
    <App />
  </HashRouter>);