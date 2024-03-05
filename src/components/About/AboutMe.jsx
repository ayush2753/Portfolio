import React from "react";
import "./AboutMe.css";
import image from '../Images/code.png'

// import NavBar from "../Navbar/NavBar";



const AboutMe = () => {
  return (
    <div className="container-fluid">
      <h1 className="about">About Me</h1>
      <div className="text-section"> 
       <div className="paragraph">
            <p className="degree">
              Hello there! I'm Ayush Saxena, a passionate and ambitious Java Full Stack Developer eager to make a mark in the dynamic
              world of software development. As a recent graduate with a B.Tech degree in Computer Science,
              I bring fresh perspectives, a hunger for learning, and a solid foundation in Java technologies.
            </p>
            <p className="degree">
            During my academic journey, I delved deep into Java programming,
            gaining expertise in both front-end and back-end technologies.
            From crafting user-friendly interfaces with HTML, CSS, JavaScript, and React to building robust server-side applications with Java. 
            </p>
            <p className="degree">
            I am excited about the prospect of leveraging my skills to contribute meaningfully
            to real-world projects and am actively seeking opportunities to embark on this journey.
            </p>
            
       </div>
      <img src={image} alt="ayush" className="boi"/>
        
        
      </div>
      
      
    </div>
  );
};

export default AboutMe;
