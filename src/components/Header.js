import React from "react";
import "../App";
import classes from "./Header.module.css";
import NavBar from "./NavBar";
import Button from "./UI/Button";
import HeroImgDesk from "../img/image-intro-desktop.jpg";
import HeroImgMob from "../img/image-intro-mobile.jpg";
import introPatternRightMob from "../img/bg-pattern-intro-right-mobile.svg";
import introPatternLeftMob from "../img/bg-pattern-intro-left-mobile.svg";
import introPatternRightDesk from "../img/bg-pattern-intro-right-desktop.svg";
import introPatternLeftDesk from "../img/bg-pattern-intro-left-desktop.svg";

const Header = () => {
  return (
    <header className="bg-primary">
      <NavBar />
      <div className={`${classes["header__hero-container"]} ${"container"}`}>
        <div className={`${classes["header__img-container"]}`}>
          <img
            srcSet={`${HeroImgMob} 375w, ${HeroImgDesk} 550w`}
            src={HeroImgMob}
            alt="Happy family of four"
          />
          <img
            className={classes.introPatternLeftMob}
            src={introPatternLeftMob}
            alt="Decorative Texture"
          />
        </div>
        <div className={`${classes.hero} ${"container"} ${"mobile-container"}`}>
          <span className={classes.line}></span>
          <h1>Humanizing your insurance.</h1>
          <p>
            Get your life insurance coverage easier and faster, We blend out
            expertise and technology to help you find the plan that is right for
            you. Ensure you and your loved ones are protected.
          </p>
          <Button theme={"light"}>View Plans</Button>
          {/* <Button color={classes.var(--primary - color)}>View Plans</Button> */}
          <img
            className={classes.introPatternRightMob}
            src={introPatternRightMob}
            alt="Decorative Texture"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
