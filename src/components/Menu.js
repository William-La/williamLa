import React from "react";
import ScrollSpy from "react-scrollspy";

// old navy blue logo
// import abstract from "../assets/img/logos/abstractLogo1.svg";

// old purple logo
// import abstract from "../assets/img/logos/abstractLogo2.svg";

// new logo
import logo from "../assets/img/logos/wlaLogo.svg"

const Menu = (props) => {
  return (
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "min-content auto",
        overflow: "visible",
        height: "84px"
      }}
    >
      <a
        href="/#"
        css={{
          transition: "0.5s",
          "@media(min-width:820px)": {
            display: props.standaloneVersion
              ? "inline-block"
              : props.imgCss
                ? "inline-block"
                : "none"
          }
        }}
      >
        <img
          src={logo}
          alt="logo"
          css={{
            padding: "5px 0 5px 0",
            marginLeft: "10px",
            marginTop: "5px",
            height: "70px"
          }}
        />
      </a>
      <a
        id="abstractLog"
        href="/#"
        css={{
          display: "none",
          "@media(min-width:820px)": {
            display: props.standaloneVersion
              ? "none"
              : props.imgCss
                ? "none"
                : "inline-block"
          },
          transition: "0.5s"
        }}
      >
        <img
          src={logo}
          alt="logo"
          css={{
            padding: "5px 0 5px 0",
            marginLeft: "10px",
            marginTop: "5px",
            height: "70px"
          }}
        />
      </a>
      <div
        align="right"
        css={{
          paddingTop: "32px",
          paddingBottom: "32px",
          height: "84px",
          display: "grid",
          transition: "1s",
          marginLeft: "auto",
          "@media(max-width: 820px)": {
            display: "none"
          },
          " li": {
            listStyleType: "none"
          }
        }}
      >
        <ScrollSpy
          css={{
            display: "grid",
            gridColumnGap: "40px",
            gridTemplateColumns: props.menuItems
              .map(() => "min-content ")
              .reduce((a, b) => a + b)
          }}
          offset={-1}
          items={props.menuItems}
          currentClassName="is-current"
        >
          {props.menuItems.map((label) => (
            <li
              key={label}
              css={{
                ":hover": {
                  " a": {
                    color: "#421B89"
                  },
                  ">div": {
                    width: "100%",
                    height: "2px"
                  }
                }
              }}
            >
              <a
                css={{
                  lineHeight: "1.43",
                  textAlign: "center",
                  paddingLeft: "2px",
                  paddingRight: "2px",
                  textTransform: "uppercase"
                }}
                href={`/#${label}`}
              >
                {label}
              </a>
              <div
                css={{
                  width: "100%",
                  height: "2px",
                  transition: "0.5s",
                  marginLeft: "auto",
                  marginRight: "auto",
                  backgroundColor: "#421B89",
                  width: "0px"
                }}
              />
            </li>
          ))}
        </ScrollSpy>
      </div>
    </div>
  );
};

export default Menu;
