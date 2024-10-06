import "./HeroImgStyles.css";

import React from "react";

import IntroImg from "../assets/intro-bggg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
    return (
         <div className="hero">
        <div className="mask">
            <img className="into-img" 
            src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>HI, I'M A SOFTWARE ENGINEER</p>
            <h1>Full Stack Developer.</h1>
            <Link to="/project"
            className="btn">Projects</Link>
            <Link to="/contact"
            className="btn
            btn-light">Contact</Link>
        </div>
    </div>
    );
};

export default HeroImg;