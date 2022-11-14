import React from 'react';
import AppRouter from "./pages/AppRouter";
import './App.css'
import {BrowserRouter} from "react-router-dom";
import Navbar from "./UI/Navbar/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    );
}
export default App;
