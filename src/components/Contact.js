import React from "react";
import Wrapper from "./Wrapper";

import mail from "../assets/img/icons/mail.png";
import linked from "../assets/img/icons/linkedin.png";
import git from "../assets/img/icons/github.png";

const social = [
  {
    icon: mail,
    url: "mailto:wla@g.hmc.edu",
    label: "wla@g.hmc.edu",
  },
  {
    icon: linked,
    url: "https://www.linkedin.com/in/la-william/",
  },
  {
    icon: git,
    url: "https://github.com/William-La",
  }
];

const Contact = () => (
  <section css={{
    position: "relative",
    backgroundColor: "#421B89"
  }}
  id = "contact"
  >
    <Wrapper>
        <h1 css={{
            color: "white",
            textAlign: "center",
            padding: "50px 0 0 0"
        }}>Contact</h1>

        <p css={{
            color: "white",
            textAlign: "center",
            padding: "15px 0 0 0",
            fontSize: "20px"
        }}>
        Interested in my work? I'm currently searching for PM and software engineering internships for this upcoming summer.
        </p>
        <div css={{
            paddingTop: "15px"
        }}>
            <p css={{
              color: "white",
              textAlign: "center",
              " a": { color: "", textSize: "24px" }
            }}>
              Send me an email (resume available upon request) and check out some of the other links below!
            </p>
        </div>
      <div
        css={{
          paddingTop: "40px",
        }}
      >
        <div
          css={{
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <div
            css={{
              gridTemplateColumns: "1fr 1fr 1fr",
              ">div": { paddingBottom: "18px" },
                display: "grid",
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "300px",
                paddingTop: "0px",
                paddingBottom: "60px"
            }}
          >
            {social.map(({ icon, label, url}) => (
              <div
                key={url}
                css={{
                  gridTemplateColumns: "min-content auto",
                  ":hover": {
                    " a": {
                      color: "#DDDDDD",
                      ">div": {
                        backgroundColor: "#0F0F0F"
                      }
                    }
                  },
                    display: "grid",
                    width: "75px",
                    height: "75px",
                    marginRight: "50px" //Icon spacing
                }}
              >
                <a aria-label={label} href={url} target="_blank" rel="noopener noreferrer" css={{}}>
                  <div
                    css={{
                      backgroundColor: "white",
                      mask: `url(${icon}) no-repeat center center`,
                      maskSize: "100% 100%",
                      width: "50px",
                      height: "50px",
                      marginTop: "-5px",
                      ":hover": {
                        backgroundColor: "#9279E5"
                      },
                      "@media(max-width: 950px)": {
                        width: "40px",
                        height: "40px"
                      }
                    }}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  </section>
);

export default Contact;
