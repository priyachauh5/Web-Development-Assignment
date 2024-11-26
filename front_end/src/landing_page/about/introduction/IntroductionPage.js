import React from 'react';
import Introduction from './Introduction';

import SchoolContact from '../SchoolContact';
import Navbar from "../Navbar";
import Footer from "../Footer";

function IntroductionPage() {
    return ( 
        <>  
            <Navbar/>
            <Introduction/>
            <SchoolContact/>
            <Footer/>
        </>
     );
}

export default IntroductionPage;