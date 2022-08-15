import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import { motion } from "framer-motion";
import NumberCounter from "number-counter"
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { type } from "@testing-library/user-event/dist/type";

const Hero = () => {
  const transition = { type: 'spring', duration: '3' }
  const mobile = window.innerWidth <= 768 ?true: false;
  return (
    <div className="hero">
      <div className="blur hero-blur"> </div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ?"170px":'238px' }}
            whileInView={{ left: '8px' }}
            transition={{...transition,type:"tween"}}
          >
          </motion.div>
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
            <span>
              <NumberCounter end={140} delay='1' preFix="+" />
            </span>
            <span> expert coachs</span>
          </div>
          <div>
            <span><NumberCounter end={978} delay='1' preFix="+" /></span>
            <span>members Joined </span>
          </div>
          <div>
            <span> <NumberCounter end={50} delay='1' preFix="+" /></span>
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
        <motion.div
          initial={{right:'-1rem'}}
          whileInView={{right:'4rem'}}
          transition={transition}
          className="heart-rate">
          <img src={Heart} alt="heart" />
          <span>Heart Rate</span>
          <span>116 Bpm</span>
        </motion.div>
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back} alt="" className="hero-image-back" />
        <motion.div
          initial={{ right: '37rem' }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories">
          <img src={Calories} alt="" />
          <span>Calories Burned</span>
          <span>220 Kcl</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
