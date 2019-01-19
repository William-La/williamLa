import React from "react";

import menuClose from "../assets/img/icons/mobileMenuClose.svg";
import hamburger from "../assets/img/icons/mobileMenuOpen.svg";
import logo from "../assets/img/logos/abstractLogo.svg";

const MenuMobile = (props) => (
  <div
    align="right"
    css={{
      marginLeft: "auto",
      paddingTop: "32px",
      "@media(min-width: 820px)": {
        display: "none"
      }
    }}
  >
    <input
      type="image"
      onClick={props.toggleMenu}
      src={hamburger}
      css={{ width: "32px", height: "24px" }}
      alt="Open menu"
    />
    <div
      className={props.isMenuVisible ? "no-scroll" : ""}
      css={{
        display: props.isMenuVisible ? "block" : "none",
        position: "fixed",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        top: "0px",
        left: "0px",
        zIndex: "5",
        background: "#11213f"
      }}
    >
      <input
        type="image"
        align="right"
        css={{ padding: "32px" }}
        src={menuClose}
        onClick={props.toggleMenu}
        alt="Close menu"
      />
      <div
        css={{
          marginTop: "100px",
          color: "white",
          display: "grid",
          gridTemplateColumns: "1fr"
        }}
      >
        <div
          css={{
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            " a": {
              color: "white",
              textTransform: "uppercase",
              ":hover": {
                color: "#fedb01"
              }
            }
          }}
        >
          <div>
            <img
              src={logo}
              css={{ paddingBottom: "11px" }}
              alt="Logo"
            />
          </div>
          {props.menuItems.map((i) => (
            <div key={i} css={{ paddingBottom: "24px" }}>
              <a
                href={`#${i}`}
                onClick={props.toggleMenu}
                css={{ fontWeight: "bold" }}
              >
                {i}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default MenuMobile;
