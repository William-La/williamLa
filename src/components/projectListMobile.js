import React, { Component } from "react";
import Slider from "react-slick";

import ProjectCard from "./ProjectCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ProjectListMobile extends Component {
  
  handleSwipe = (direction) => {
    const increment = direction === "left" ? 1 : -1;
    if (
      this.state.currentIndex + increment >= 0 &&
      this.state.currentIndex + increment < this.props.projects.length
    ) {
      this.setState({ currentIndex: this.state.currentIndex + increment });
    }
  };

  componentWillMount() {
    this.setState({ currentIndex: 0 });
  }

  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: false,
      onSwipe: (direction) => {
        this.handleSwipe(direction);
      }
    };

    const list = this.props.projects.map((item, i) => (
      <div
        key={`${item.name} ${item.project}`}
        css={{
          maxWidth: "700px",
          margin: "0 auto"
        }}
      >
        <ProjectCard item={item} index={i} mobile={true} />
      </div>
    ));

    return (
      <div css={{ width: "100%", paddingBottom: "20px"}}>
        <Slider css={{ marginTop: "-40px"}} {...settings}>{list}</Slider>
      </div>
    );
  }
}

export default ProjectListMobile;
