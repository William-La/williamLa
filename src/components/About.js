import React from "react";
import { css } from "glamor";

import Wrapper from "./Wrapper";

import abstract1 from "../assets/img/icons/abstract1.png";
import pic from "../assets/img/profile/gradPic.jpg";

const picCSS = {
  maxHeight: "525px",
  maxWidth: "550px",
  width: "100%"
};

const wrap = {
  flex: 1,
  textAlign: "center",
  margin: "0 0 0 0",
};

const lCSS = (backgroundColor) =>
  css({
    backgroundColor,
    width: "130px",
    height: "4px"
  });

const about = () => (
  <section id="about">
    <div
    css={{
      position: "relative",
      width: "100%",
      background: "#f8f8f8",
      paddingTop: "80px",
      paddingBottom: "80px"
    }}
  >
    <Wrapper>
      <div
        css={{
          background: "#ffffff",
          display: "grid",
          gridTemplateColumns: "auto auto",
          padding: "80px 55px 80px 55px",
          margin: "0 auto 0 auto",
          borderRadius: "8px",
          boxShadow: "4px 9px 40px 2px rgba(7, 16, 75, 0.1)",
          border: "solid 1px #e8e8e8",
          "@media(max-width: 750px)": {
            padding: "32px 24px 32px 24px"
          },
          "@media(max-width: 1115px)": {
            display: "block"
          }
        }}
      >
        <div
          css={{
            paddingRight: "43px",
            "@media (max-width: 920px)": { paddingRight: "0px" }
          }}
        >
          <h1 css={{ paddingTop: "2px" }}>About Me</h1>
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "auto auto 1fr",
              gridColumnGap: "4px",
              padding: "13px 0 27px 0"
            }}
          >
            <div {...lCSS("#CCCCCC")} />
          </div>
          <p css={{ 
            lineHeight: "24px",
            padding: "0 6px 28px 0",
            fontColor: "#000000",
            textAlign: "justify",
            "@media(max-width: 920px)": {
              textAlign: "left"
            }
            }}>
            I'm an aspiring Computer Science major at 
             <a href="https://www.hmc.edu/about-hmc/fast-facts/" target="_blank" rel="noopener noreferrer"> HARVEY MUDD COLLEGE</a>.
            I am passionate about Full Stack Web Development, Machine Learning, and many other software 
            related fields. My non-technical interests include music, topics involving social justice & equity, and 
            various forms of digital design. Check out some of my <a href="/#projects">PROJECTS</a> below!
          </p>
        </div>
        <div css={wrap}>
          <picture css={picCSS}>
              <img
                css={picCSS}
                src={pic}
                alt="gradPic"
              />
            </picture>
        </div>
        
        <picture
          css={{
            width: "311px",
            height: "187px",
            "@media(max-width: 1000px)": {
              width: "280px",
              height: "168px",
              bottom: "-70px",
              right: "40px"
            },
            position: "absolute",
            bottom: "-120px",
            right: "120px"
          }}
        >
          <source srcSet={abstract1} type="image/png" />
          <img
            css={{
              width: "100%",
              height: "100%",
              "@media(max-width: 1000px)": {
                width: "280px",
                height: "168px"
              }
            }}
            src={abstract1}
            alt="Abstract 1"
          />
        </picture>
      </div>
      
    </Wrapper>
  </div>
  </section>
);

export default about;
