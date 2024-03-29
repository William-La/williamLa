import React from "react";
import OrgCard from "./OrgCard";

import software from "../assets/img/extra/5csLogo.png";
import llc from "../assets/img/extra/LLC.png";
import api from "../assets/img/extra/APISPAM.png";
import mudd from "../assets/img/extra/Muddraker.jpg";

import Wrapper from "./Wrapper";

const txtAlgn = ["left", "right"]
const algn = ["0 0 0 150px", "0 150px 0 0"]

const orgs = [
  {
    name: "The Muddraker, Senior Advisor",
    text: "I advise the Editor-in-Chief and other editorial board members in leading the HMC student-run newspaper.",
    img: mudd
  },
  {
    name: "Living Learning Community, Co-President",
    text: "I lead a group of eleven students in planning and hosting social justice workshops for 250+ attendees.",
    img: llc
  },
  {
    name: "API Sponsor Program at Mudd, Mentor",
    text: "A diversity-focused API (Asian & Pacific Islander) group. I advise five freshmen and host diversity-focused workshops.",
    img: api
  },
];

export default () => (
  <section
    css={{
      backgroundColor: "#ffffff",
      position: "relative"
    }}
    id = "organizations"
  >
  
    <Wrapper>
      <h1
        css={{
          paddingTop: "50px",
          paddingBottom: "12px",
          textAlign: "center",
          position: "relative",
          zIndex: "3",
          "@media(max-width: 820px)": {
            paddingTop: "75px",
            paddingBottom: "24px"
          }
        }}
      >
        Organizations
      </h1>
      <p
        css={{
          lineHeight: "1.6",
          fontWeight: 500,
          textAlign: "center",
          fontSize: "20px",
          paddingBottom: "48px"
        }}>
        Here is a list of clubs and extracurriculars I participate in while at Harvey Mudd College.
      </p>
      {/* Desktop */}
      <div
        css={{
          position: "relative",
          zIndex: 3,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {orgs.map((org, i) => (
          <OrgCard {...org} key={org.name} align = {algn[i%2]} textAlign = {txtAlgn[i%2]}/>
        ))}

      </div>
    </Wrapper>
    <div css={{
      "@media(max-width: 820px)": {
        height: "75px"
      }
    }}
    />
  </section>
);

