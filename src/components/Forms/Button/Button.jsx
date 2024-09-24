import React from "react";
import { Link } from "react-router-dom";
import "./button.scss";

const Button = ({
  type,
  fullWidth,
  to,
  children,
  variant = "solid ",
  onClick,
}) => {
  const style = {
    width: fullWidth && "100%",
  };
  return (
    <>
      {to ? (
        <Link to={to} className={`btn ${variant || ""}`}>
          {children}
        </Link>
      ) : (
        <button
          style={style}
          type={type && type}
          className={`btn ${variant || ""}`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
