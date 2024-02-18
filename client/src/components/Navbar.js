import { Link } from "react-router-dom";
import "./NavbarStyles.css";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor]=useState(false);
  const changeColor =()=>{
    if (window.scrollY >=100){
      setColor(true);
    }else{
      setColor(false);
    }
  }
  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Mentorian</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/login">LOGIN</Link>
        </li>
        <li>
          <Link to="/registration">REGISTRATION</Link>
        </li>
        <li>
          <Link to="/profilepages">PROFILE PAGES</Link>
        </li>
      </ul>
      <div className="menuicon" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
