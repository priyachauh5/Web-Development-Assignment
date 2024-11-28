import React from 'react';
import Home from './Home';
import Navbar from '../Navbar';
import Footer from '../Footer';
import SchoolContact from '../SchoolContact';
import Display from './Display';
import MainPage from './MainPage';

function HomePage() {
    return ( 
        <>
            <Navbar/>
            <MainPage/>
            <Home/>
            <SchoolContact/>
            <Footer/>
        </>
     );
}

export default HomePage;