import React from 'react';
import ReactDOM from 'react-dom/client';
import Mastermind from './mastermind';
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Mastermind />
  </React.StrictMode>
);
