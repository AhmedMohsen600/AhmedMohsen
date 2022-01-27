import React, { Component } from "react";
import { Image } from "../all-carts/styles/all-carts";
import {
  SliderHolder,
  ImageHolder,
  RightArrow,
  LeftArrow,
} from "./styles/images-slider";

class ImageSlider extends Component {
  state = {
    current: 0,
    slidesLength: this.props.images.length,
  };

  nextSlide() {
    this.setState({
      current:
        this.state.current === this.state.slidesLength - 1
          ? 0
          : this.state.current + 1,
    });
  }
  prevSlide() {
    this.setState({
      current:
        this.state.current === 0
          ? this.state.slidesLength - 1
          : this.state.current - 1,
    });
  }

  render() {
    return (
      <SliderHolder>
        {this.state.slidesLength < 2 ? null : (
          <RightArrow onClick={this.nextSlide.bind(this)} />
        )}
        {this.state.slidesLength < 2 ? null : (
          <LeftArrow onClick={this.prevSlide.bind(this)} />
        )}
        {this.props.images.map((src, index) => {
          return (
            <ImageHolder
              active={index === this.state.current ? 1 : 0}
              key={src}
            >
              {index === this.state.current && <Image src={src} />}
            </ImageHolder>
          );
        })}
      </SliderHolder>
    );
  }
}

export default ImageSlider;
