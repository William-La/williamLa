import React from "react";

const TransitionButton = (props) => {
  const roundedStyles = {
    borderRadius: "28px",
    border: `solid 2px ${props.foregroundColor}`,
    paddingLeft: "55px",
    paddingRight: "55px",
    "@media screen and (max-width: 450px)": {
      width: "92%",
      paddingLeft: "4%",
      paddingRight: "4%"
    }
  };

  const rectStyles = {
    borderRadius: "4px",
    border: "none",
    paddingLeft: "25px",
    paddingRight: "25px"
  };

  let commonStyles = {
    ...props.style,
    minHeight: "48px",
    lineHeight: "48px",
    width: props.width,
    textAlign: "center",
    textTransform: "uppercase",
    backgroundColor: props.backgroundColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: props.foregroundColor,
    fontSize: "18px",
    transition: "0.5s ease",
    fontWeight: 700,
    ":hover:not(:disabled)": {
      backgroundColor: props.hoverBackgroundColor || props.foregroundColor,
      color: props.backgroundColor
    }
  };

  switch (props.type) {
    case "rounded":
      commonStyles = { ...roundedStyles, ...commonStyles };
      break;
    case "rect":
      commonStyles = { ...rectStyles, ...commonStyles };
      break;
  }

  return(
    <a
      css={{
        ...commonStyles,
        ...props.style,
        transition: "0.5s",
        display: "inline-block",
        boxSizing: "content-box"
      }}
      disabled={props.disabled}
      onClick={props.onClick}
      href={`/#${props.section}`}
    >
      {props.children}
    </a>
  )
};

export default TransitionButton;
