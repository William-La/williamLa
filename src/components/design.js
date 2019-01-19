import React, { Component } from "react";
import DesignCard from "./designCard";
import DesignSlider from "./designSlider";
import { Lightbox } from "react-modal-image";

import abstract2 from "../assets/img/icons/abstract2.png";

import SWETshirt from "../assets/img/designs/SWETshirt72.jpg"
import info from '../assets/img/designs/info72.jpg'
import ad from "../assets/img/designs/HackdayAd72.jpg"
import pres from "../assets/img/designs/FirstSlideHackday72.jpg"
import journys from "../assets/img/designs/JOURNYS72.jpg"
import SWETshirt1 from "../assets/img/designs/SWETshirt.jpg"
import info1 from '../assets/img/designs/info.jpg'
import ad1 from "../assets/img/designs/HackdayAd.jpg"
import pres1 from "../assets/img/designs/FirstSlideHackday.jpg"
import journys1 from "../assets/img/designs/JOURNYS.jpg"

import Wrapper from "./wrapper";

const designs = [
  {
    name: "Shirt Design",
    title: "Society of Women Engineers at HMC",
    description:
      "A fundraising T-shirt design for the Harvey Mudd College branch of the Society of Women Engineers.",
    image: SWETshirt,
    img: SWETshirt1
  },
  {
    name: "Infographic",
    title: "The Muddraker",
    description:
      "An infographic I designed for the front page of the 2018 November issue of the Muddraker, Harvey Mudd College's student run newspaper.",
    image: info,
    img: info1
  },
  {
    name: "Social Media Ad",
    title: "5C Software Club",
    description:
      "A social media ad created for Claremont Local Hackday, a hackathon organized by 5C Software Club.",
    image: ad,
    img: ad1
  },
  {
    name: "Presentation",
    title: "5C Software Club",
    description:
      "A presentation I designed for Claremont Local Hackday, a hackathon organized by 5C Software Club. Only first slide is shown.",
    image: pres,
    img: pres1
  },
  {
    name: "Design Manager",
    title: "JOURNYS",
    description:
      "During my time as design manager I led a team of 8 designers and published issues 9.1-9.3. Online issues: www.journys.org/issue-archive",
    image: journys,
    img: journys1
  }
];

class projectsDesign extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      visible : false,
      currentImg: ad,
      currentAlt: ""
  }
}
openModal(design){
  this.setState({
      visible : true,
      currentImg : design.img,
      currentAlt: design.title + " " + design.name
  });
}

closeModal(){
  this.setState({
      visible : false
  });
}

  render(){

  return(
  <section
    css={{
      backgroundColor: "#f8f8f8",
      position: "relative"
    }}
    id = "design"
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
            paddingBottom: "24px"
          }
        }}
      >
        Design Projects
      </h1>
      <p
        css={{
          lineHeight: "1.6",
          fontWeight: 500,
          textAlign: "center",
          fontSize: "20px",
          paddingBottom: "32px"
          
        }}>
        As a hobby, I like to design various items and graphics. Most of my designs are created using Adobe InDesign, 
        Photoshop, and Illustrator.
      </p>
      {/* Desktop */}
      <div
        css={{
          display: "grid",
            "@media (min-width: 1100px)": {
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))"
            },
            "@media (max-width: 1100px)": {
              gridTemplateColumns: "auto auto"
            },
            "@media (max-width: 912px)": {
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))"
            },
          position: "relative",
          zIndex: 3,
          maxWidth: designs.length * 500,
          marginLeft: "auto",
          marginRight: "auto",
          "@media(max-width: 820px)": {
            display: "none"
          }
        }}
      >
        {designs.map((design) => (
          <DesignCard {...design} key={design.name} click={() => this.openModal(design)} />
        ))}
      </div>
      {/* Mobile */}
      <div
        css={{
          paddingBottom: "30px",
          "@media(min-width: 820px)": { display: "none" }
        }}
      >
        <DesignSlider designs={designs} />
      </div>
      <picture
        css={{
          zIndex: "1",
          width: "250px",
          height: "305px",
          position: "absolute",
          bottom: "-175px",
          left: "62px",
          display: "block",
          
        }}
      >
        <source srcSet={abstract2} type="image/png" />
        <img
          css={{
          }}
          src={abstract2}
          alt="abstract2"
        />
      </picture>
    </Wrapper>
    {this.state.visible && (
          <Lightbox 
            large={this.state.currentImg}
            onClose={() => this.closeModal()}
            hideDownload= "true"
            hideZoom= "true"
            alt={this.state.currentAlt}
          />
        )}
        <div css={{
          height: "25px"
        }}/>
  </section>
);
    }
    
  }
export default projectsDesign;
