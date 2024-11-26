import React from 'react';
import Home from './Home';
import Navbar from '../Navbar';
import Footer from '../Footer';
import SchoolContact from '../SchoolContact';
import Display from './Display';

function HomePage() {
    return ( 
        <>
            <Navbar/>
            <Display/>
            <Home/>
            <SchoolContact/>
            <Footer/>
        </>
     );
}

export default HomePage;