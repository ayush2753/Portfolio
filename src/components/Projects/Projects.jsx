import React from "react";
import "./Projects.css";
import Fee from "../Images/FEE.png"
import ATM from "../Images/ATM.png"
import Flixverse from "../Images/Flixverse.png"
import NewsVita from "../Images/NewsVita.png"
import MediQuick from "../Images/MediQuick.png"
import TextUtils from "../Images/TextUtils.png"
import Chi from "../Images/Chi.png"
import Marc from "../Images/Marc.png"
import portfolio from "../Images/portfolio.png"
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <h1 className="mywork">Projects</h1>
      <div className="kaam container">
        <div className="project card">
          <img src={portfolio} className="card-img-top" alt="..."  />
          <div className="card-body">
            <h5 className="card-title">Portfolio</h5>
            <p className="card-text">
              It is my Portfolio which is built in React and I have used EmailJS for sending the emails.
              The project has all the neccessary information of my works and excellence.
            </p>
            <Link to="#" className="View btn btn-primary">
              View Github
            </Link>
          </div>
          
        </div>
        <div className="project card">
          <img src={Flixverse} className="card-img-top" alt="..."  />
          <div className="card-body">
            <h5 className="card-title">Flixverse</h5>
            <p className="card-text">
            Introducing FlixVerse: an innovative streaming platform that transports viewers to an interconnected multiverse of boundless imagination.
            </p>
            <Link to="https://github.com/ayush2753/Flix-Verse" className="View btn btn-primary">
              View Github
            </Link>
          </div>
          
        </div>
        
        <div className="project card">
          <img src={Fee} className="card-img-top" alt="..."  />
          <div className="card-body">
            <h5 className="card-title">Fee Management</h5>
            <p className="card-text">
            My Fee Portal Project incorporates admin, operator, and student sections, enabling registration, course management, fee updates, utilizing diverse technologies.
            </p>
            <Link to="https://github.com/ayush2753/FeeManagementSystem" className="View btn btn-primary">
              View Github
            </Link>
          </div>
          
        </div>
        
      </div>
      <div className="kaam container">
        <div className="project card">
          <img src={MediQuick} className="card-img-top" alt="..."  />
          <div className="card-body">
            <h5 className="card-title">MediQuick</h5>
            <p className="card-text">
            MediQuick optimizes medical store management,
            meeting retailer and customer needs with a Java-based solution provided by manufacturers.
            </p>
            <Link to="https://github.com/ayush2753/MediQuick" className="View btn btn-primary">
              View Github
            </Link>
          </div>
          
        </div>
        <div className="project card">
          <img src={NewsVita} className="card-img-top" alt="..."  />
          <div className="card-body">
            <h5 className="card-title">NewsVita</h5>
            <p className="card-text">
            NewsVita serves as a comprehensive news hub, designed as a tutorial project to grasp the fundamentals of React.js.
            The project uses newsAPI for fetching news
            </p>
            <Link to="https://github.com/ayush2753/NewsVita" className="View btn btn-primary">
              View Github
            </Link>
          </div>
        
        </div>
        <div className="project card">
        <img src={TextUtils} className="card-img-top" alt="..."  />
          <div className="card-body">
            
            <h5 className="card-title">TextUtils</h5>
            <p className="card-text">
            React Project-1 is my inaugural tutorial endeavor—a dark mode compatible text editor, marking my first steps into React development.
            </p>
            <Link to="https://github.com/ayush2753/TextUtils" className="View btn btn-primary">
              View Github
            </Link>
          </div>
          
        </div>
        
    </div>
    <div className="kaam container">
        <div className="project card">
          <img src={ATM} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">ATM</h5>
            <p className="card-text">
              Built console-based ATM Interface System in core Java, enabling various operations for user account. 
            </p>
            <Link to="https://github.com/ayush2753/OASIS-Project" className="View btn btn-primary">
              View Github
            </Link>
          </div>
          
        </div>
        <div className="project card">
          <img src={Marc} className="card-img-top" alt="..."  />
          <div className="card-body">
            <h5 className="card-title">Marc-Pridmore</h5>
            <p className="card-text">
            My first industrial training project, designed the clone of landing page of Marc-pridmore using basics of frontend development. 
            </p>
            <Link to="https://github.com/ayush2753/Marc-Pridmore" className="View btn btn-primary">
              View Github
            </Link>
          </div>
          
        </div>
        <div className="project card">
          <img src={Chi} className="card-img-top" alt="..."  />
          <div className="card-body">
            <h5 className="card-title">Chi</h5>
            <p className="card-text">
            My second industrial training project,
             designed the clone of landing page of chi e-commerce cosmetic store.
            </p>
            <Link to="https://github.com/ayush2753/CHI" className="View btn btn-primary">
              View Github
            </Link>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Projects;
