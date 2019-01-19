import React from "react";

export default ({
  headshot,
  color
}) => (
  <div css={{ textAlign: "center", margin: "10px", marginTop: "56px" }}>
    <div
      css={{
        width: "350px",
        height: "350px",
        borderRadius: "50%",
        color,
        marginLeft: "auto",
        marginRight: "auto",
        borderWidth: "7px",
        borderStyle: "solid",
        overflow: "hidden"
      }}
    >
      <img
          css={{ width: "360px", marginLeft: "-10px" }}
        src={headshot}
        alt="headshot"
      />
    </div>
  </div>
);