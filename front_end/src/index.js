import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import HomePage from './landing_page/home/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import IntroductionPage from "./landing_page/about/introduction/IntroductionPage";
import MandatoryPage from "./landing_page/about/mandatoryDisclosure/MandatoryPage";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <HomePage/>
  // </React.StrictMode>
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/introduction" element={<IntroductionPage/>}/>
      <Route path="/mandatory" element={<MandatoryPage/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
);


