import React, { Component } from "react";
import Slider from "react-slick";

import DesignCard from "./DesignCard";
import DesignDots from "./DesignDots";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class DesignSlider extends Component {

  handleChange = (currentIndex) => this.setState({ currentIndex });

  componentWillMount() {
    this.setState({ currentIndex: 0 });
  }

  onDesignDotsClicked = (num) => () => {
    this.slider.slickGoTo(num);
  };

  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: false,
      afterChange: (direction) => {
        this.handleChange(direction);
      }
    };

    return (
      <div css={{ width: "100%", position: "relative", zIndex: 3 }}>
        <DesignDots
          designs={this.props.designs}
          currentIndex={this.state.currentIndex}
          onClick={this.onDesignDotsClicked}
          
        />
        <div css={{ height: "24px"}} />
        <Slider {...settings} ref={(slider) => (this.slider = slider)}>
          {this.props.designs.map((design) => (
            <DesignCard {...design} key={design.name} />
          ))}
        </Slider>
      </div>
    );
  }
}

export default DesignSlider;
