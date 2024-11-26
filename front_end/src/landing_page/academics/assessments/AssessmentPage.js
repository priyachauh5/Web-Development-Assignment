import React from 'react'
import Assessment from './Assessment';
import SchoolContact from '../SchoolContact';
import Navbar from "../Navbar";
import Footer from "../Footer";

function AssessmentPage(){
    return(
        <>
            <Navbar />
            <Assessment/>
            <SchoolContact/>
            <Footer/>
        </>
    );
}
export default AssessmentPage;