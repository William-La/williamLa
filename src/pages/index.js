import React from "react";
import Helmet from "react-helmet";

import "./index.css";
import About from "../components/About";
import Landing from "../components/Landing";
import Design from "../components/Design";
import Projects from "../components/Projects";
import Organizations from "../components/Organizations";
import Contact from "../components/Contact";

import favicon from "../assets/img/icons/favicon.ico"
import profile from "../assets/img/profile/Profile.jpg";

export default () => {

  return (
    <div css={{ overflowX: "hidden" }}>
      <Helmet
        title="William La"
        meta={[
          {
            name: "description",
            content:
              "William La's personal website!"
          },
          {
            name: "theme-color",
            content: "#0a205b"
          },
          {
            name: "keywords",
            content: "William La, Personal Website, Computer Science, Software"
          },
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0"
          },
          {
            property: "og:type",
            content: "website"
          },
          {
            property: "og:url",
            content: "William-la.github.io"
          },
          {
            property: "og:title",
            content: "William La"
          },
          {
            property: "og:image",
            content: profile
          },
          {
            property: "og:description",
            content: "William La's personal website!"
          },
          {
            property: "og:site_name",
            content: "William La"
          },
          {
            property: "og:locale",
            content: "en_US"
          }
        ]}
        link={[
          {
            rel: "shortcut icon",
            href: `${favicon}`
          }
        ]}
      >
        <html lang="en" />
      </Helmet>
      <div>
        <Landing />
        <About />
        <Projects />
        <Design />
        <Organizations />
        <Contact />
      </div>
    </div>
  );
};
