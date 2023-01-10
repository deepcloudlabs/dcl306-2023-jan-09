import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import Mastermind from "./mastermind";
import {Route, Routes} from "react-router";
import UserWins from "./component/mastermind/user-wins";
import UserLoses from "./component/mastermind/user-loses";
import {BrowserRouter} from "react-router-dom";

const routing =
    <Routes>
        <Route path="/" element={<Mastermind/>}></Route>
        <Route path="/wins" element={<UserWins/>}></Route>
        <Route path="/loses" element={<UserLoses/>}></Route>
    </Routes>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
            {routing}
        </BrowserRouter>
);
