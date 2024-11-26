import React from 'react';
import Registration from './Registration';
import SchoolContact from '../SchoolContact';
import Navbar from '../Navbar';
import Footer from '../Footer';

function RegistrationPage() {
    return ( 
        <>
            <Navbar/>
            <Registration/>
            <SchoolContact/>
            <Footer/>
        </>
     );
}

export default RegistrationPage;