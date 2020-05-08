import React, { Component } from "react";
import Slider from "react-slick";
import { Item, Rating, Header, Container, Segment } from 'semantic-ui-react';


export default class HotelSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
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
    <Segment style={{borderRadius:'0px', width:'800px', paddingLeft:'100px', paddingRight:'100px'}}>
      <Item.Header as='h1'>Radisson Blue
        <Rating defaultRating={4} maxRating={4} disabled />
      </Item.Header>
      <div className="full">
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div className="fl">
                    <div className="image-fl"><img src="http://i.piccy.info/i9/8acef96c994f930ebd4f4203cb392822/1586587352/565820/1372283/radisson.jpg" alt=""/></div>
                  </div>

                  <div className="fl">
                    <div className="image-fl"><img src="https://radisson-blu-kiev.kievhotel.net/data/Photos/r1920x1080/9693/969302/969302848.JPEG" alt=""/></div>
                  </div>

                  <div className="fl">
                    <div className="image-fl"><img src="https://hotels.anywayanyday.com/hotelimages_new/c8/39/29/3da927/31BE3D_6213_z.jpg" alt=""/></div>
                  </div>

                  <div className="fl">
                    <div className="image-fl"><img src="https://media-cdn.tripadvisor.com/media/photo-s/07/fb/ca/1c/radisson-blu-hotel-kyiv.jpg" alt=""/></div>
                  </div>

                  <div className="fl">
                    <div className="image-fl"><img src="https://www.green-tour.com.ua/userfiles/catalog/5422d70f3f5a7.jpg" alt=""/></div>
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
                  <div className="image-pw"><img src="http://i.piccy.info/i9/8acef96c994f930ebd4f4203cb392822/1586587352/565820/1372283/radisson.jpg" alt=""/></div>
                </div>

                <div className="pw">
                  <div className="image-pw"><img src="https://radisson-blu-kiev.kievhotel.net/data/Photos/r1920x1080/9693/969302/969302848.JPEG" alt=""/></div>
                </div>

                <div className="pw">
                  <div className="image-pw"><img src="https://hotels.anywayanyday.com/hotelimages_new/c8/39/29/3da927/31BE3D_6213_z.jpg" alt=""/></div>
                </div>

                <div className="pw">
                  <div className="image-pw"><img src="https://media-cdn.tripadvisor.com/media/photo-s/07/fb/ca/1c/radisson-blu-hotel-kyiv.jpg" alt=""/></div>
                </div>

                <div className="pw">
                  <div className="image-pw"><img src="https://www.green-tour.com.ua/userfiles/catalog/5422d70f3f5a7.jpg" alt=""/></div>
                </div>
        </Slider>
        </div>
      </Segment>
    );
  }
}