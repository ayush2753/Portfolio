import React from "react";
import image from "../Images/photo.png";
import "./Home.css";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { SocialIcon } from "react-social-icons"; // Import SocialIcon for social media links

const Home = () => {
  const socialLinks = [
    { url: "https://www.instagram.com/ayushsaxena_27/", label: "Instagram" },
    { url: "https://www.linkedin.com/in/ayush-saxena-501b1a27a/", label: "LinkedIn" },
    { url: "https://github.com/ayush2753", label: "GitHub" },
    { url: "https://leetcode.com/ayush2753/", label: "LeetCode" },
  ];

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
                  "I'm a Tech Enthusiast",
                ],
              }}
            />
          </div>
          <p className="description">
            Driven and passionate about learning, I am eager to take on new challenges.
            Seeking an entry-level role to apply my technical skills, collaborate with professionals, and contribute to creative projects.
          </p>

          {/* Social Media Links */}
          <div className="social-links">
            {socialLinks.map(({ url, label }) => (
              <SocialIcon
                key={label}
                url={url}
                className="social-icon"
                title={label}
              />
            ))}
          </div>

          <button className="btn btn-success use" type="button">
            <Link
              className="resume"
              to="https://drive.google.com/file/d/1ul1FzQSRAvdVmzfIhv8w-Hq5SkaFxRiP/view?usp=sharing"
              style={{ color: "white", textDecoration: "none" }}
            >
              Download CV
            </Link>
          </button>
        </div>
        <img className="fix" src={image} alt="Ayush" />
      </div>
    </div>
  );
};

export default Home;
