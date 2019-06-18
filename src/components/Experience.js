import React from "react";
import { css } from "glamor";

import Wrapper from "./Wrapper";

const jobs = [
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
  
  