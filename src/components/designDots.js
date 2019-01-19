import React from "react";

const designDots = (props) => (
  <div
    css={{
      marginLeft: "auto",
      marginRight: "auto",
      display: "grid",
      width: props.designs.length * 20,
      gridTemplateColumns: props.designs
        .map(() => "1fr ")
        .reduce((a, b) => a + b),
      paddingBottom: "16px"
    }}
  >
    {props.designs.map((_, i) => (
      <button
        onClick={props.onClick(i)}
        key={i}
        css={{
          backgroundColor: i === props.currentIndex ? "#00205b" : "#aeb7c8",
          transition: "0.5s",
          borderRadius: "50%",
          marginLeft: "auto",
          marginRight: "auto",
          width: "6px",
          height: "6px",
          border: "none"
        }}
      />
    ))}
  </div>
);

export default designDots;
