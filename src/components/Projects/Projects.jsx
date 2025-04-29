import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

// Image Imports
import Fee from "../Images/FEE.png";
import ATM from "../Images/ATM.png";
import Flixverse from "../Images/Flixverse.png";
import NewsVita from "../Images/NewsVita.png";
import MediQuick from "../Images/MediQuick.png";
import TextUtils from "../Images/TextUtils.png";
import Portfolio from "../Images/portfolio.png";

// Reusable Project Card Component
const ProjectCard = ({ img, title, desc, link }) => (
  <div className="project card">
    <img src={img} className="card-img-top" alt={title} />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{desc}</p>
      <Link to={link} className="View btn btn-primary" target="_blank" rel="noopener noreferrer">
        View Github
      </Link>
    </div>
  </div>
);

// All Projects Data
const projectData = [
  {
    img: Portfolio,
    title: "Portfolio",
    desc: "It is my Portfolio which is built in React and I have used EmailJS for sending emails. It contains all the necessary information about my works and excellence.",
    link: "#",
  },
  {
    img: Fee,
    title: "Fee Management",
    desc: "My Fee Portal Project includes admin, operator, and student sections with registration, fee updates, and course management.",
    link: "https://github.com/ayush2753/FeeManagementSystem",
  },
  {
    img: MediQuick,
    title: "MediQuick",
    desc: "MediQuick optimizes medical store management, providing a Java-based solution for retailers and customers.",
    link: "https://github.com/ayush2753/MediQuick",
  },
  {
    img: Flixverse,
    title: "Flixverse",
    desc: "FlixVerse is an innovative streaming platform transporting viewers to a multiverse of boundless imagination.",
    link: "https://github.com/ayush2753/Flix-Verse",
  },
  {
    img: NewsVita,
    title: "NewsVita",
    desc: "NewsVita is a React.js-based news hub using NewsAPI, created to learn fundamentals of React development.",
    link: "https://github.com/ayush2753/NewsVita",
  },
  {
    img: TextUtils,
    title: "TextUtils",
    desc: "My first React tutorial project—a dark mode text editor, helping me learn the basics of React.",
    link: "https://github.com/ayush2753/TextUtils",
  },
  {
    img: ATM,
    title: "ATM",
    desc: "Console-based ATM Interface System in core Java, enabling various user account operations.",
    link: "https://github.com/ayush2753/OASIS-Project",
  },
];

const Projects = () => {
  return (
    <div>
      <h1 className="mywork">Projects</h1>
      {/* Group projects in rows of 3 */}
      {Array.from({ length: Math.ceil(projectData.length / 3) }).map((_, rowIndex) => (
        <div key={rowIndex} className="kaam container">
          {projectData.slice(rowIndex * 3, rowIndex * 3 + 3).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Projects;
