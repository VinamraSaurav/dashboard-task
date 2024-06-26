import React from "react";
import JobTitle from "./JobTitle";
import JobSkill from "./JobSkill";
import JobAbout from "./JobAbout";
import Footer from "./Footer";

const LeftBody = () => {
  return (
    <div>
     <JobTitle/>

     <JobSkill/>

     <JobAbout/>

     <Footer/>

      <div></div>

      <div></div>
    </div>
  );
};

export default LeftBody;
