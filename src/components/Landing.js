import React from "react";

import Header from "./Head";
import TransitionButton from "./TransitionButton";
import Wrapper from "./Wrapper";

import abstractLines from "../assets/img/backgrounds/abstractLines.svg";
import Profile from "./Profile";
import william from "../assets/img/profile/pngProfile.png";

const aboutCSS = {
  margin: "0 0 100px 0",
  "@media(max-width: 820px)": {
    margin: "30px 0 45px auto"
  }
};

const Landing = () => (
  <div
    id="top"
    css={{
      width: "100%",
      background: `url(${abstractLines}) no-repeat center center`,
      backgroundSize: "cover",
      "@media(max-width: 600px)": {
        minHeight: "600px"
      }
    }}
  >
    <Header standaloneVersion={false} />
    <Wrapper>
      <section
        css={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          "@media(max-width: 820px)": {
            textAlign: "center",
            display: "block"
          }
        }}
      >
        <div
          css={{
            paddingTop: "115px",
            "@media(min-width: 1200px)": {
              paddingRight: "50px",
              paddingTop: "215px"
            },
            "@media (min-width: 821px) and (max-width: 1200px)": {
              paddingRight: "50px",
              paddingTop: "215px"
            }
          }}
        >
        <img
            src={william}
            css={{
              width: "75vw",
              maxWidth: "250px",
              "@media(min-width: 821px)": { display: "none" }
            }}
            alt="me"
          />
          <br />
          <h1
            css={{
              fontWeight: 600,
              fontSize: "70px",
              paddingBottom: "5px",
              "@media(max-width: 821px)": { marginTop: "25px"}
            }}
          >
            Hello!
          </h1>

          <h2
            css={{
              color: "#421B89",
              fontWeight: 600,
              fontSize: "24px",
              paddingBottom: "30px",
              paddingRight: "5px",
              "@media(max-width: 820px)": {
                paddingBottom: "24px"
              }
            }}
          >
            I'm William La, a Computer Science and Digital Media Studies student at Harvey Mudd College.
          </h2>
              
          <TransitionButton
            backgroundColor="#ffffff"
            //foregroundColor="#00205b"
            foregroundColor="#421B89"
            style={aboutCSS}
            section = "about"
            type="rounded"
          >
            About Me
          </TransitionButton>
        </div>
        <div
          css={{
            position: "relative",
            textAlign: "right",
            display: "flex",
            paddingTop: "84px",
            alignItems: "center",
            "@media(max-width: 820px)": {
              display: "none"
            }
          }}
        >
          <Profile />
        </div>
      </section>
    </Wrapper>
    <div css={{
      height: "50px"
    }} 
    />
  </div>
  
);

export default Landing;
