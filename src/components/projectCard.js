import React from "react";
import link from "../assets/img/projects/externalLink.png"

const ProjectCard = (props) => (
  <div
    css={{
      display: props.mobile ? "block" : "inline-block",
      height: props.mobile ? null : "375px",
      whiteSpace: "normal",
      width: props.mobile ? null : "530px",
      borderRadius: "8px",
      boxShadow: "4px 7px 20px 2px rgba(7, 16, 75, 0.1)",
      border: "solid 1px #e8e8e8",
      padding: props.mobile ? "24px 24px 82px 24px" : "24px",
      margin: props.mobile ? "45px 0px" : "45px 23px",
      flex: props.mobile ? null : "0 0 530px",
      backgroundColor: "white",
      zIndex: 2,
      position: "relative",
      opacity: props.mobile || !props.index ? 1 : 0.6,
      transition: !props.index
        ? "opacity 300ms ease 0ms"
        : "opacity 300ms ease 200ms"
    }}
  >
    <div
      css={{
        display: "flex",
        alignItems: "center",
        marginBottom: "20px"
      }}
    >
      <img
        src={props.item.image}
        css={{ maxHeight: "125px", maxWidth: "125px", width: "100%" }}
        alt=""
      />
      <div css={{ display: props.mobile ? "block" : "inline-block", marginLeft: "24px" }}>
        <strong>
          <a
            rel="external noopener noreferrer"
            target="_blank"
            href={props.item.gitLink}
            css={{ 
              fontWeight: 700, 
              fontSize: "30px",
              marginBottom: "8px",
            }}
            >
            {props.item.name}
            {props.mobile ? ("") : (
            
              <img css={{
                display: props.mobile ? "none" : "inherit",
                width:"10%",
                padding: "0 0 0 6px"
              }}
                src = {link}
                alt = "exLink"
                />)}
            
            </a>
        </strong>
        <br />
        {props.item.date ? (
          <strong>
            <span css={{ color: "#424242", fontWeight: 500, }}>Date:</span>{" "}
              {props.item.date}
              <br />
          </strong>
        ) : (
          ""
        )}
        {props.item.partner ? (
          <strong>
            <span css={{ color: "#424242", fontWeight: 500 }}>Partner(s):</span>{" "}
              {props.item.partner}
          </strong>
        ) : (
          ""
        )}
      </div>
    </div>
    <p
      css={{
        lineHeight: "32px",
        fontSize: "15px",
        textAlign: "justify"
      }}
    >
      {props.item.text}
    </p>
    <img
      src={props.item.langImg}
      css={{
        position: "absolute",
        bottom: 24,
        right: 40
      }}
      alt=""
    />
  </div>
);

export default ProjectCard;
