import React from "react";
import "./Experience.css";

const experiences = [
  {
    company: "Argro Tech Solution (Freelance)",
    duration: "Nov 2024 - April 2025 (Ongoing)",
    details: [
      "Collaborating remotely as a freelance Flutter developer for smart utility solutions.",
      "Contributed to live cross-platform projects, ensuring responsive design and seamless performance across Android and iOS.",
      "Participated in agile development cycles, regularly integrating client feedback to refine app features."
    ]
  },  
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
  <div className="experience">
    <div className="info">
      <h3 className="title">{company}</h3>
      <p className="duration">{duration}</p>
      <ul className="details-list">
        {details.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Experience = () => {
  return (
    <div className="container-fluid experience-section">
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
