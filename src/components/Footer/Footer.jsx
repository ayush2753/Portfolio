import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";
import "react-social-icons/instagram";
import "react-social-icons/linkedin";
import "react-social-icons/github";

const Footer = () => {
  return (
    <div>
      <div className="footer container-fluid">
        <div className="creation">
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-happy-emoji-6492067-5439413.png?f=webp&w=100"
            alt=""
            className="emoji"
          />{" "}
          Created by @Ayush Saxena
        </div>
        <div className="icons">
          <SocialIcon
            url="https://www.instagram.com/ayushsaxena_27/"
            style={{ height: "40px" }}
            className="social"
          ></SocialIcon>
          <SocialIcon
            url="https://www.linkedin.com/in/ayush-saxena-501b1a27a/"
            style={{ height: "40px" }}
            className="social"
          ></SocialIcon>
          <SocialIcon
            url="https://github.com/ayush2753"
            style={{ height: "40px" }}
            className="social"
          ></SocialIcon>
        </div>
      </div>
    </div>
  );
};

export default Footer;
