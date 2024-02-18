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
        <h1>Empower. Inspire. Mentor.</h1>
          <p>MENTORIAN</p>
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