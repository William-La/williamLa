import React from "react";

const ProjectMsgMobile = (props) => {
  return (
    <div css={{ textAlign: "center", marginBottom: "10px" }}>
      <h1 css={{ 
        marginTop: "32px", 
        marginBottom: "16px",
        "@media(max-width: 1000px)":{
          marginTop: "64px",

        } }}>
        Programming Projects
      </h1>
      <p
        css={{
          fontSize: "20px",
          fontWeight: 500,
          "@media(max-width: 600px)": {
            fontSize: "18px"
          },
          "@media(max-width: 1000px)": {
            marginTop: "20px"
          }
        }}
      >
        {props.text}
      </p>
    </div>
  );
};

export default ProjectMsgMobile;
