import React from 'react';

import Mandatory from './Mandatory';
import SchoolContact from '../SchoolContact';
import Navbar from '../Navbar';
import Footer from '../Footer';


function MandatoryPage() {
    return ( 
        <>
            <Navbar/>
            <Mandatory/>
            <SchoolContact/>
            <Footer/>
        </>
     );
}

export default MandatoryPage;
