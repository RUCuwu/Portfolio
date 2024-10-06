import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import HeroImg2 from "../components/HeroImg2";
import PricingCard from "../components/PricingCard";


const Project = () => {
  return <div>
    <Navbar />
    <HeroImg2 heading="PROJECTS." text="some of my more recent works." />
    <PricingCard />
    <Footer />
  </div>;
};

export default Project;