import React, { Component } from "react";
import Slider from "react-slick";
import { Item, Rating, Header, Container, Segment } from 'semantic-ui-react';


export default class HotelSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      name: null,
      raiting: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
    <Segment style={{borderRadius:'0px', width:'900px', paddingLeft:'80px', paddingRight:'80px'}}>
      <Item.Header as='h1'>{this.props.name}
        <Rating defaultRating={this.props.raiting} maxRating={this.props.raiting} disabled />
      </Item.Header>
      <div className="full">
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div className="fl">
                    <div className="image-fl"><img src={this.props.image1} alt=""/></div>
                  </div>

                  <div className="fl">
                    <div className="image-fl"><img src={this.props.image2} alt=""/></div>
                  </div>

                  <div className="fl">
                    <div className="image-fl"><img src={this.props.image3} alt=""/></div>
                  </div>

                  <div className="fl">
                    <div className="image-fl"><img src={this.props.image4} alt=""/></div>
                  </div>

                  <div className="fl">
                    <div className="image-fl"><img src={this.props.image5} alt=""/></div>
                  </div>
        </Slider>
        </div>
        <div className="preview">
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
        >
         <div className="pw">
                  <div className="image-pw"><img src={this.props.image1} alt=""/></div>
                </div>

                <div className="pw">
                  <div className="image-pw"><img src={this.props.image2} alt=""/></div>
                </div>

                <div className="pw">
                  <div className="image-pw"><img src={this.props.image3} alt=""/></div>
                </div>

                <div className="pw">
                  <div className="image-pw"><img src={this.props.image4} alt=""/></div>
                </div>

                <div className="pw">
                  <div className="image-pw"><img src={this.props.image5} alt=""/></div>
                </div>
        </Slider>
        </div>
      </Segment>
    );
  }
}