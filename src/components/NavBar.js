import React, { useState } from "react";
import "../App";
import classes from "./NavBar.module.css";
import logo from "../img/logo.svg";
import Button from "./UI/Button";
import HambBtn from "../img/icon-hamburger.svg";
import HambClose from "../img/icon-close.svg";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav>
      <div
        className={`${
          openNav ? classes["active-hamb"] : classes["active-hamb__hidden"]
        } ${"classes.nav-bar"}`}
      >
        <ul>
          <li>HOW WE WORK</li>
          <li>BLOG</li>
          <li>ACCOUNT</li>
          <li>
            <Button width={"btn__full-width"} theme={"light"}>
              VIEW PLANS
            </Button>
          </li>
        </ul>
      </div>
      <div
        className={`${
          classes["main-nav"]
        } ${"container"} ${"mobile-container"}`}
      >
        <div>
          <img
            className={classes["main-nav__logo"]}
            src={logo}
            alt="Insure-Logo"
          />
        </div>
        <button
          className={classes["hamb-btn"]}
          onClick={() => setOpenNav((value) => !value)}
        >
          <img src={openNav ? HambClose : HambBtn} alt="Hamburger Menu" />
        </button>
        <ul>
          <li>HOW WE WORK</li>
          <li>BLOG</li>
          <li>ACCOUNT</li>
          <li>
            <Button theme={"dark"}>VIEW PLANS</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
