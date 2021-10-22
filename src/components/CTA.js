import React from "react";
import classes from "./CTA.module.css";
import Button from "./UI/Button";
import workPatternMobile from "../img/bg-pattern-how-we-work-mobile.svg";

const CTA = () => {
  return (
    <article className={`${classes.cta}`}>
      <div>
        <h2>Find out more about how we work</h2>
        <Button theme={"light"}>HOW WE WORK</Button>
      </div>
    </article>
  );
};

export default CTA;
