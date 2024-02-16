import { FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaWhatsapp } from "react-icons/fa"
import "./FooterStyles.css"

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="phone">
                <h4><FaPhone size={20} 
                style={{color : "#fff", marginRight: "2rem" }}/>
                 </h4>
                </div>
                <div className="email">
                <h4><FaMailBulk size={20} 
                style={{color : "#fff", marginRight: "2rem" }}/>
                our mail </h4>
                </div>
            </div>
            <div className="right">
                <h4>title</h4>
                <p>text</p>
                    <div className="social">
                        <a href="" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={20} 
                        style={{color : "#fff", marginRight: "2rem"}}/> </a>
                         <a href="" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={20} 
                        style={{color : "#fff", marginRight: "2rem"}}/></a>
                         <a href="" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={20} 
                        style={{color : "#fff", marginRight: "2rem"}}/></a>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Footer