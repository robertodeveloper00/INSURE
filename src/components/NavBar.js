import React from "react";
import "../App";
import classes from "./NavBar.module.css";
import logo from "../img/logo.svg";
import Button from "./UI/Button";
import HambBtn from "../img/icon-hamburger.svg";

const NavBar = () => {
  return (
    <nav className={`${classes["main-nav"]} ${"container"}`}>
      <div>
        <img
          className={classes["main-nav__logo"]}
          src={logo}
          alt="Insure-Logo"
        />
      </div>
      <button className={classes["hamb-btn"]}>
        <img src={HambBtn} alt="Hamburger Menu" />
      </button>
      <ul>
        <li>HOW WE WORK</li>
        <li>BLOG</li>
        <li>ACCOUNT</li>
        <li>
          <Button theme={"dark"}>VIEW PLANS</Button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
