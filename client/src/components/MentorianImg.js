import "./MentorianImgStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import mentorian1 from "../assets/mentorian1.png";

const MentorianImg = () => {
  return (
    <div className="hero">
      <div className="mask">
      <img className="into-img" src={mentorian1} alt="mentorian1" /> </div>
        <div className="content">
          <p>MENTORIAN</p>
          <h1>slogan goes here</h1>
          <div>
            <Link to="/login" className="btn">
              Login
            </Link>
            <Link to="/registration" className="btn btn-light">
              Registration
            </Link>
          </div>
        </div>
      
    </div>
  );
};

export default MentorianImg;