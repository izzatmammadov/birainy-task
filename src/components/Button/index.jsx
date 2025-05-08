import React from "react";

const Button = ({
  icon = "",
  children,
  functions = () => {},
  className = "",
}) => {
  return (
    <button
      onClick={functions}
      className={`${className}`}
    >
      {icon && <img src={icon} alt="icon" />}
      {children}
    </button>
  );
};

export default Button;
