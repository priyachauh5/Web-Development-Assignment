import React from 'react';
import Glimpse from './Glimpse';
import SchoolContact from '../SchoolContact';
import Navbar from "../Navbar";
import Footer from "../Footer";

function GlimpsePage() {
    return ( 
        <>
            <Navbar/>
            <Glimpse/>
            <SchoolContact/>
            <Footer/>
        </>
     );
}

export default GlimpsePage;