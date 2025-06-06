//C:\react-js\myreactdev\src\App.js
import React, { } from 'react';
import './App.css';
  
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
  
import LandingPage from "./pages/Landingpage";
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AboutPage from './pages/Aboutpage';
import ProgrammePage from './pages/Programmepage';
import CampusLifePage from './pages/CampusPage';
import Contactpage from './pages/ContactPage';
 
function App() {
  return (
    <div className="vh-100 gradient-custom">
    <div className="container">
      {/* <h1 className="page-header text-center">Login/signup page</h1> */}
   
      <BrowserRouter>
        <Routes>
          <Route path='/contact' element={<Contactpage/>}/>
          <Route path='/campuslife' element={<CampusLifePage/>}/>
          <Route path='/programme' element={<ProgrammePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}
   
export default App;