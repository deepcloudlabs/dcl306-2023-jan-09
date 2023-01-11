import React from 'react';
import ReactDOM from 'react-dom/client';
import HrApp from './hr-app';
import "bootstrap/dist/css/bootstrap.css";
import HrProvider from "./provider/hr-provider";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HrProvider/>
    </React.StrictMode>
);