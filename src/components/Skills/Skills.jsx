import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <div>
      <h1 className="skills">Skills</h1>
      <div className="skills-section">
        <div className="skills-container">
          {/* Java */}
          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-img">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/226/226777.png"
                  alt="Java"
                  className="skills-icons"
                  style={{ height: "75px" }}
                />
              </div>
              <h3 className="language">Java</h3>
            </div>
          </div>

           {/* Spring */}
           <div className="skills-box">
            <div className="skills-title">
              <div className="skills-img">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/79/Spring_Boot.svg"
                  alt="Spring"
                  className="skills-icons"
                  style={{ height: "60px" }}
                />
              </div>
              <h3 className="language">Spring</h3>
            </div>
          </div>

          {/* Spring Boot */}
          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-img">
                <img
                  src="https://img.icons8.com/?size=100&id=2oBx9FpXcbLa&format=png&color=000000"
                  alt="Spring Boot"
                  className="skills-icons"
                  style={{ height: "60px" }}
                />
              </div>
              <h3 className="language">Spring Boot</h3>
            </div>
          </div>
        
        {/* Flutter */}
        <div className="skills-box">
            <div className="skills-title">
              <div className="skills-img">
                <img
                  src="https://img.icons8.com/?size=100&id=pCvIfmctRaY8&format=png&color=000000"
                  alt="Flutter"
                  className="skills-icons"
                  style={{ height: "60px" }}
                />
              </div>
              <h3 className="language">Flutter</h3>
            </div>
          </div>

          {/* React */}
          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-img">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                  alt="React"
                  className="skills-icons"
                />
              </div>
              <h3 className="language">React</h3>
            </div>
          </div>

          
          {/* JavaScript */}
          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-img">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                  alt="JavaScript"
                  className="skills-icons"
                />
              </div>
              <h3 className="language">JavaScript</h3>
            </div>
          </div>

          {/* MySQL */}
          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-img">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4248/4248443.png"
                  alt="MySQL"
                  className="skills-icons"
                />
              </div>
              <h3 className="language">SQL</h3>
            </div>
          </div>

          {/* GitHub */}
          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-img">
                <img
                  src="https://img.icons8.com/?size=100&id=wJgJKIfHmQOd&format=png&color=000000"
                  alt="GitHub"
                  className="skills-icons"
                  style={{ height: "50px" }}
                />
              </div>
              <h3 className="language">Version Control</h3>
            </div>
          </div>

          {/* DSA */}
          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-img">
                <img
                  src="https://img.icons8.com/?size=100&id=21265&format=png&color=000000"
                  alt="DSA"
                  className="skills-icons"
                  style={{ height: "55px" }}
                />
              </div>
              <h3 className="language">DSA</h3>
            </div>
          </div>

         

        </div>
      </div>
    </div>
  );
}
