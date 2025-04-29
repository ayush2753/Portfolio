import React from "react";
import "./AboutMe.css";
import image from "../Images/code.png";

const AboutMe = () => {
  return (
    <div className="container-fluid">
      <h1 className="about">About Me</h1>
      <div className="text-section">
        <div className="paragraph">
          <p className="summary">
            Dedicated and motivated Java Backend Developer with hands-on experience in building scalable, database-driven applications using Java, Spring Boot, and MySQL. Proficient in REST APIs, backend logic, and relational databases. Also skilled in modern front-end technologies like React and cross-platform mobile development using Flutter. Familiar with version control, deployment tools, and software engineering best practices. Looking to contribute to a growth-focused team in a dynamic tech environment.
          </p>
        </div>
        <img src={image} alt="Ayush coding illustration" className="boi" />
      </div>
    </div>
  );
};

export default AboutMe;
