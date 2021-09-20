import React from "react";

export const NextArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{ ...props.style, backgroundColor: "#e73245" }}
      onClick={props.onClick}
    />
  );
};

export const PrevArrow = (props) => {
    return (
      <div
        className={props.className}
        style={{ ...props.style, backgroundColor: "#e73245" }}
        onClick={props.onClick}
      />
    );
  };
  