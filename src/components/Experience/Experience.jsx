import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="timeline">
        <h1 className="heading">Experience</h1>
          
          <div className="outer">
          <div className="experience card">
              <div className="info">
                <h3 className="title">Mxpertz Infolabs, Indore</h3>
                <p>
                ● Summer Industrial Training in FrontendWeb Development.
                <br/>
                ● Worked on project FlixVerse using HTML, CSS, JavaScript and Bootstrap framework
                </p>
              </div>
            </div>
            <div className="experience card">
              <div className="info">
                <h3 className="title">Oasis Infobytes, New Delhi</h3>
                <p>
                ● Project-based online internship
                <br/>
                ● Build a console-based ATM Interface project using Java skills
                </p>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
