import React from "react";
import CvCard from "../components/CvCard";
import Title from "../components/Title";
import "../App.css";

const Resume = () => {
  return (
    <section className="ResumeContainer">
      <Title backgroundTitle="Summary" frontalTitle="Resume" />
      <div className="CvInfo">
        <div className="educationContainer">
          <h1>My Education</h1>
          <CvCard />
        </div>
        <div className="experienceContainer">
          <h1>My Experience</h1>
          <CvCard />
        </div>
      </div>
    </section>
  );
};

export default Resume;
