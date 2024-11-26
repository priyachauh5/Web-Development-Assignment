import React from "react";

import Principal from "/Principal";
import SchoolContact from '../SchoolContact';
import Navbar from "../Navbar";
import Footer from "../Footer";

function PrincipalPage() {
  return (
    <>
      <Navbar />
      <Principal />
      <SchoolContact/>
      <Footer />
    </>
  );
}

export default PrincipalPage;
