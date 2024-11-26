import React from 'react';
import Mission from './Mission';
import SchoolContact from '../SchoolContact';
import Navbar from "../Navbar";
import Footer from "../Footer";

function MissionPage() {
    return ( 
        <>
            <Navbar/>
            <Mission/>
            <SchoolContact/>
            <Footer/>
        </>
     );
}

export default MissionPage;