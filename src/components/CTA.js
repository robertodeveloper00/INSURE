import React from "react";
import Button from "./UI/Button";
import workPatternMobile from "../img/bg-pattern-how-we-work-mobile.svg";

const CTA = () => {
  return (
    <section>
      <div>
        <h2>Find out more about how we work</h2>
        <Button>HOW WE WORK</Button>
        <img src={workPatternMobile} alt="Decorative Texture" />
      </div>
    </section>
  );
};

export default CTA;
