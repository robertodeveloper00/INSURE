import React from "react";
import "../../App.css";

const Button = (props) => {
  return (
    <button className={`${"global-btn"} ${props.theme} ${props.width}`}>
      {props.children}
    </button>
  );
};

export default Button;
