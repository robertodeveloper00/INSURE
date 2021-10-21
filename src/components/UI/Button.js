import React from "react";
import "../../App.css";

const Button = (props) => {
  return (
    <button className={`${"global-btn"} ${props.theme}`}>
      {props.children}
    </button>
  );
};

export default Button;
