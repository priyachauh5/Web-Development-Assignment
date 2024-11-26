import React from 'react';
import Planner from './Planner';
import SchoolContact from '../SchoolContact';
import Navbar from '../Navbar';
import Footer from '../Footer';

function PlannerPage() {
    return ( 
        <>
            <Navbar/>
            <Planner/>
            <SchoolContact/>
            <Footer/>
        </>
     );
}

export default PlannerPage;