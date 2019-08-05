import React from "react";
import { css } from "glamor";

import Wrapper from "./Wrapper";

import callaway from "../assets/img/experience/callawayLogo.jpg";
import tStem from "../assets/img/experience/thoughtSTEM.jpg";

const jobs = [
  {
    title: "Information Technology Intern",
    company: "Callaway Golf",
    date: "May 2019-Aug. 2019",
    desc: "",
    icon: callaway
  },
  {
    title: "Software Development Intern",
    company: "ThoughtSTEM",
    date: "June 2017-Aug. 2017",
    desc: "",
    icon: tSTEM
  }
  ];

export default () => (
    <section
      css={{
        backgroundColor: "#f8f8f8",
        position: "relative"
      }}
      id = "experience"
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
          Experience
        </h1>
        <p
          css={{
            lineHeight: "1.6",
            fontWeight: 500,
            textAlign: "center",
            fontSize: "20px",
            paddingBottom: "48px"
          }}>
          A timeline of my previous tech and design internships.
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
          {jobs.map((job, i) => (
            <OrgCard {...job} key={job.name} align = {algn[i%2]} textAlign = {txtAlgn[i%2]}/>
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
  
  