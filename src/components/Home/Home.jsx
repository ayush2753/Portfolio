import React from "react";
import image from "../Images/photo.png";
import "./Home.css";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="landing container-fluid">
      <div className="home-page">
        <div className="home">
        <h1>
          <span className="ayush">Ayush Saxena</span>
        </h1>
        <div className="text">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "I'm a Java developer",
                "I'm a React developer",
                "I'm a Software developer",
                "I'm a Programmer",
                "I'm a Tech Enthuse",
              ],
            }}
          />
        </div>
        <p className="description">
        A driven and energetic person who is committed to achieving excellent results. Passionate about learning and always ready to take on new challenges.
        Looking for an entry-level job where I can use my technical experience,
        work well with professionals, and lead creative projects to success.
        </p>
        <button className="btn btn-success use" type="button">
          <Link
            className="resume"
            to="https://drive.google.com/file/d/1BnCGHjpUMXKt_ImPv0XhREljb7GWcS6b/view?usp=sharing"
            style={{color:"white",textDecoration:"none"}}
          >
            Download CV
          </Link>
        </button>
        </div>
        <img className="fix " src={image} alt="ayush" />
      </div>
      
      
      
      
    </div>
  );
};

export default Home;
