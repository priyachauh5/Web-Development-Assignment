import React from 'react';
import Contact from './Contact';
import SchoolContact from '../SchoolContact';
import Navbar from '../Navbar';
import Footer from '../Footer';

function ContactPage() {
    return ( 
        <>
            <Navbar/>
            <Contact/>
            <SchoolContact/>
            <Footer/>
        </>
     );
}

export default ContactPage;