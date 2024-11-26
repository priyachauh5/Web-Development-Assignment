import React from 'react';
import Procedure from './Procedure';
import SchoolContact from '../SchoolContact';
import Navbar from '../Navbar';
import Footer from '../Footer';

function ProcedurePage() {
    return ( 
        <>
            <Navbar/>
            <Procedure/>
            <SchoolContact/>
            <Footer/>
        </>
     );
}

export default ProcedurePage;