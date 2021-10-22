import React from "react";
import classes from "./Footer.module.css";
import footerPattern from "../img/bg-pattern-footer-mobile.svg";
import Logo from "../img/logo.svg";
import fbIcon from "../img/icon-facebook.svg";
import twIcon from "../img/icon-twitter.svg";
import pinIcon from "../img/icon-pinterest.svg";
import igIcon from "../img/icon-instagram.svg";

const socialLinks = [
  {
    link: "https://www.facebook.com/",
    icon: fbIcon,
    name: "Facebook",
    id: 1,
  },
  {
    link: "https://www.twitter.com/",
    icon: twIcon,
    name: "Twitter",
    id: 2,
  },
  {
    link: "https://www.pinterest.com/",
    icon: pinIcon,
    name: "Pinterest",
    id: 3,
  },
  {
    link: "https://www.instagram.com/",
    icon: igIcon,
    name: "Instagram",
    id: 4,
  },
];

const Footer = () => {
  return (
    <footer>
      <img
        className={classes["footer-pattern"]}
        src={footerPattern}
        alt="Decorative Texture"
      />
      <div className={classes["footer-head"]}>
        <img className={classes["footer-logo"]} src={Logo} alt="Insure Logo" />
        <ul>
          {socialLinks.map((socialLink) => {
            return (
              <li key={socialLink.id}>
                <a href={socialLink.link}>
                  <img src={socialLink.icon} alt="Insure's Face" />
                </a>
              </li>
            );
          })}
        </ul>
        <span className={classes.line}></span>
      </div>
      <div className={classes["footer-nav"]}>
        <ul>
          <h4>OUR COMPANY</h4>
          <li>HOW WE WORK</li>
          <li>WHY INSURE</li>
          <li>VIEW PLANS</li>
          <li>REVIEWS</li>
        </ul>
        <ul>
          <h4>HELP ME</h4>
          <li>FAQ</li>
          <li>TERMS OF USE</li>
          <li>PRIVACY POLICY</li>
          <li>COOKIES</li>
        </ul>
        <ul>
          <h4>CONTACT</h4>
          <li>SALES</li>
          <li>SUPPORT</li>
          <li>LIVE CHAT</li>
        </ul>
        <ul>
          <h4>OTHERS</h4>
          <li>CAREERS</li>
          <li>PRESS</li>
          <li>LICENSES</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
