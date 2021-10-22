import React from "react";
import classes from "./Features.module.css";
import snappyIcon from "../img/icon-snappy-process.svg";
import affordIcon from "../img/icon-affordable-prices.svg";
import peopleIcon from "../img/icon-people-first.svg";
import CTA from "./CTA";

const benefits = [
  {
    icon: snappyIcon,
    heading: "Snappy Process",
    paragraph:
      "Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms",
    id: "ben1",
  },
  {
    icon: affordIcon,
    heading: "Affordable Prices",
    paragraph:
      "We don't want you worrying about high monthly consts. Out proces may be low, but w still offer the best coveerage possible",
    id: "ben2",
  },
  {
    icon: peopleIcon,
    heading: "People First",
    paragraph:
      "Our plans aren't fill of conditions and clauses to prevent payouts. We make sure you're covered when you need it.",
    id: "ben3",
  },
];

const Features = () => {
  return (
    <section
      className={`${classes.features} ${"container"} ${"mobile-container"}`}
    >
      <span className={classes.line}></span>
      <h2>We're different</h2>
      <ul>
        {benefits.map((benefit) => {
          return (
            <li key={benefit.id}>
              <img src={benefit.icon} alt={benefit.heading} />
              <h3>{benefit.heading}</h3>
              <p>{benefit.paragraph}</p>
            </li>
          );
        })}
      </ul>
      <CTA />
    </section>
  );
};

export default Features;
