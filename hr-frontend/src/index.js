import React from 'react';
import ReactDOM from 'react-dom/client';
import HrApp from './hr-app';
import "bootstrap/dist/css/bootstrap.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HrApp/>
    </React.StrictMode>
);