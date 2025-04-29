import React from "react";
import "./Experience.css";

const experiences = [
  {
    company: "Softserv Solutions Pvt Ltd, Jaipur",
    duration: "May 2024 - July 2024",
    details: [
      "Gained hands-on experience in mobile app development while working onsite.",
      "Worked on live projects using Flutter for cross-platform development.",
      "Developed a gas meter app UI for a smart meter company, focusing on user experience and real-time data."
    ]
  },
  {
    company: "Mxpertz Infolabs, Indore",
    duration: "June 2023 - July 2023",
    details: [
      "Summer Industrial Training in Frontend Web Development.",
      "Worked on project FlixVerse using HTML, CSS, JavaScript and Bootstrap framework."
    ]
  },
];

const ExperienceCard = ({ company, duration, details }) => (
  <div className="experience card">
    <div className="info">
      <h3 className="title">{company}</h3>
      <p className="duration">{duration}</p>
      <p>
        {details.map((line, index) => (
          <span key={index}>
            ● {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  </div>
);

const Experience = () => {
  return (
    <div className="container-fluid">
      <div className="timeline">
        <h1 className="heading">Experience</h1>
        <div className="outer">
          {experiences.map((exp, idx) => (
            <ExperienceCard
              key={idx}
              company={exp.company}
              duration={exp.duration}
              details={exp.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
