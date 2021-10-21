import React from "react";
import "../App";
import classes from "./Header.module.css";
import NavBar from "./NavBar";
import Button from "./UI/Button";
import HeroImg from "../img/image-intro-mobile.jpg";
import introPatternRight from "../img/bg-pattern-intro-right-mobile.svg";
import introPatternLeft from "../img/bg-pattern-intro-left-mobile.svg";

const Header = () => {
  return (
    <header>
      <NavBar />
      <div className="bg-primary">
        <div className={classes["header__img-container"]}>
          <img src={HeroImg} alt="Happy family of four" />
          <img
            className={classes.introPatternLeft}
            src={introPatternLeft}
            alt="Decorative Texture"
          />
        </div>
        <div className={`${classes.hero} ${"container"}`}>
          {/* <span>There's going to be a line here</span> */}
          <h1>Humanizing your insurance.</h1>
          <p>
            Get your life insurance coverage easier and faster, We blend out
            expertise and technology to hel you find the plan that is right for
            you. Ensure you and your loved ones are protected.
          </p>
          <Button theme={"light"}>View Plans</Button>
          {/* <Button color={classes.var(--primary - color)}>View Plans</Button> */}
          <img
            className={classes.introPatternRight}
            src={introPatternRight}
            alt="Decorative Texture"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
