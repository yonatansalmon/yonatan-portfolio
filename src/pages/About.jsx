import React, { forwardRef, useState } from "react";
import pdf from "../pdf/yonatansalmon_cv.pdf";

import "../App.css";
import Maps from "../components/Maps";
import Title from "../components/Title";

const About = () => {
  return (
    <section className="AboutContainer">
      <div className="About">
        <Title backgroundTitle="About Me" frontalTitle="Know Me More" />
        <div className="AboutInfo">
          <div className="Summary">
            <h2>
              I'm <span className="name">Yonatan Salmon</span>, a Full-Stack Developer
            </h2>
            <p>I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p>Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</p>
          </div>
          <div className="InfoTableContainer">
            <ul className="InfoTable">
              <li>
                <span className="key">Name: </span>
                <span className="Info">Yonatan Salmon</span>
              </li>
              <li>
                <span className="key">Email: </span>
                <span className="email Info">yonatansalmon@gmail.com</span>
              </li>

              <li>
                <span className="key">Age: </span>
                <span className="Info">30</span>
              </li>

              <li>
                <span className="key">From: </span>
                <span className="Info">La Paz, Bolivia</span>
              </li>
            </ul>
            <button>
              <a href={pdf} download="yonatansalmon_cv.pdf">
                Download CV
              </a>
            </button>
          </div>
        </div>
        <Maps />
      </div>
    </section>
  );
};

export default About;
