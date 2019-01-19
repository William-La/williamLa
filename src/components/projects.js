import React, { Component } from "react";
import MediaQuery from "react-responsive";

import ContentWrapper from "./Wrapper";
import ProjectList from "./ProjectList.js";
import ProjectMsg from "./ProjectMsg";
import ProjectListMobile from "./ProjectListMobile.js";
import ProjectMsgMobile from "./ProjectMsgMobile";

import website from "../assets/img/projects/website.png";
import mathRoyale from "../assets/img/projects/mathRoyale.png";
import puttPuttPool from "../assets/img/projects/puttPuttPool.jpg";
import arduino from "../assets/img/projects/arduino.jpg";
import bulwark from "../assets/img/projects/projectBulwark.jpg"


import gatsby from "../assets/img/projects/reactGatsby.png"
import java from "../assets/img/projects/java.png"
import python from "../assets/img/projects/python.png"
import cplusplus from "../assets/img/projects/cplusplus.png"
import csharp from "../assets/img/projects/csharp.png"


const projects = [
  {
    name: "Personal Website",
    gitLink: "https://github.com/William-La/williamLa",
    date: "Dec. 2018-present",
    image: website,
    langImg: gatsby,
    text:
      "This website! I utilize GatsbyJS, ReactJS, HTML, and CSS to develop and maintain this website, which acts as my online portfolio. It can also be viewed on mobile!"
  },
  {
    name: "Math Royale",
    partner: "1:  Farzaan Kaiyom",
    gitLink: "https://github.com/farzaank/MathRoyale",
    date: "May 2018-present",
    image: mathRoyale,
    langImg: java,
    text:
      "Used Java and Android Studio for my final project for my AP Computer Science. In Math Royale, by clicking, the user gains knowledge which they can use to buy and learn about new math concepts."
  },
  {
    name: "Putt Putt Pool",
    partner: "1: Jeremy Tsai",
    gitLink: "https://github.com/William-La/PuttPuttPool",
    date: "Dec. 2018",
    image: puttPuttPool,
    langImg: python,
    text:
      "Programmed a combination of mini golf and billiards using the VPython library. Putt Putt Pool was my final project for the Introduction to Computer Science class (CSCI 005: Black Section) at Harvey Mudd College."
  },
  {
    name: "Turing Machine",
    partner: "2",
    gitLink: "https://github.com/William-La/Arduino-Turing-Machine",
    date: "Oct. 2018",
    image: arduino,
    langImg: cplusplus,
    text:
      "Constructed a decryption machine from an arduino using bit manipulation in C++. This was my project for MuddHacks, Harvey Mudd College's annual hackathon."
  },
  {
    name: "Project Bulwark",
    partner: "1",
    gitLink: "https://github.com/William-La/Project-Bulwark",
    date: "June 2017",
    image: bulwark,
    langImg: csharp,
    text: "Created a fantasy tower defense game using Unity and C#. I also created the art using Adobe Photoshop and Illustrator. Finished basic features and framework. Working demo on Github."
  }
];

class Projects extends Component {
  state = {
    currentProject: 0
  };

  nextProject() {
    this.setState({
      currentProject: Math.min(
        this.state.currentProject + 1,
        projects.length - 1
      )
    });
  }

  prevProject() {
    this.setState({
      currentProject: Math.max(this.state.currentProject - 1, 0)
    });
  }

  render() {
    const blurb = (
      <span>
        Here are a few coding projects I've worked on. These projects are available on 
        my <a href="https://github.com/William-La" target="_blank" rel="noopener noreferrer">GITHUB</a>. Also check out some of my
        <a href="/#design"> DESIGN PROJECTS</a> below!
      </span>
    );

    return (
      <section
        id="projects"
        css={{
          overflowX: "hidden"
        }}
      >
        <ContentWrapper>
          <MediaQuery query="screen and (min-width: 1000px)">
            <div
              css={{
                height: "575px",
                position: "relative"
              }}
            >
              <ProjectMsg
                nextProject={() => this.nextProject()}
                prevProject={() => this.prevProject()}
                firstProject={!this.state.currentProject}
                lastProject={
                  this.state.currentProject === projects.length - 1
                }
                text={blurb}
              />
              
              <ProjectList
                currentProject={this.state.currentProject}
                projects={projects}
              />
            </div>
            
          </MediaQuery>
          <MediaQuery query="screen and (max-width: 1000px)">
            <div css={{ margin: "0 0 10px 0" }}>
              <ProjectMsgMobile text={blurb} />
              <ProjectListMobile
                currentProject={this.state.currentProject}
                projects={projects}
              />
            </div>
          </MediaQuery>
          
        </ContentWrapper>
      </section>
    );
  }
}

export default Projects;
