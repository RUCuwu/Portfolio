import "./footerStyles.css";

import React from "react";

import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#d89ae7",
                            marginRight: "2rem"
                        }} />
                        <div>
                            <p>Chicago, IL</p>
                            <p>60617</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#d89ae7",
                            marginRight: "2rem"
                        }} />708-340-3420</h4>
                    
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "#d89ae7",
                            marginRight: "2rem"
                        }} />theBestcoder@gmail.com</h4>
                    
                    </div>
                </div>
                <div className="right">
                    <h4>About Me</h4>
                    <p>Paragraph about myself.</p>
                    <div className="social">
                    <FaFacebook size={30} style={{ color: "#d89ae7",
                            marginRight: "1rem"
                        }} />
                        
                         <FaLinkedin size={30} style={{ color: "#d89ae7",
                            marginRight: "1rem"
                        }} /> 
                        
                        <FaTwitter size={30} style={{ color: "#d89ae7",
                            marginRight: "1rem"
                        }} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;


