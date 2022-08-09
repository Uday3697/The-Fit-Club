import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
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
      </div>
      <div className="right-h">right side</div>
    </div>
  );
};

export default Hero;
