import React from 'react';
import Admission from './Admission';
import SchoolContact from '../SchoolContact';
import Navbar from '../Navbar';
import Footer from '../Footer';

function AdmissionPage() {
    return ( 
        <>
            <Navbar/>
            <Admission/>
            <SchoolContact/>
            <Footer/>
        </>
     );
}

export default AdmissionPage;