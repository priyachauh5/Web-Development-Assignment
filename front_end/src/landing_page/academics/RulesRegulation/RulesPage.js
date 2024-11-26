import React from 'react';
import Rules from './Rules';
import SchoolContact from '../SchoolContact';
import Navbar from "../Navbar";
import Footer from "../Footer";

function RulesPage() {
    return ( 
        <>  
            <Navbar/>
            <Rules/>
            <SchoolContact/>
            <Footer/>
        </>
     );
}

export default RulesPage;