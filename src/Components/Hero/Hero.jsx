import React from "react";
import Header from "../Header/Header";
import "./Hero.css";

import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="blur blur-h"> </div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <div></div>
          <span>The Best Fitness Club in The Town</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In Here we will help you to shape and build your ideal body
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>+140 </span>
            <span> expert coachs</span>
          </div>
          <div>
            <span> +978</span>
            <span>members Joined </span>
          </div>
          <div>
            <span> +50</span>
            <span> fitness Programs</span>
          </div>
        </div>
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          < buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <div className="heart-rate">
          <img src={Heart} alt="heart" />
          <span>Heart Rate</span>
          <span>116 Bpm</span>
        </div>
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />
        <div className="calories">
          <img src={Calories} alt="" />
          <span>Calories Burned</span>
          <span>220 Kcl</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
