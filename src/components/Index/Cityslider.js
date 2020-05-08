import React, { Component } from 'react';
import Slider from 'react-slick';
import { Container } from "semantic-ui-react";

export default class Cityslider extends Component {

  constructor() {
        super();

        this.state = {
          error: null,
            isLoaded: false,
            'cities': []
        }
    }

    componentDidMount() {
      this.getCities();
    }

    getCities() {
      fetch('http://localhost:8000/api/cities')
        .then(res => res.json())
        .then(
            (result) => {
              this.setState({
                   isLoaded: true, 
                   cities: result.cities 
                 });
            },
            (error) => {
              this.setState({
                   isLoaded: true, 
                   error
                 });
            }
        )
    }

  render() {
     var settings = {
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 530,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    };

    const { error, isLoaded, cities } = this.state;

    if (error) {
      return <p> Error {error.message} </p>
    } else if (!isLoaded){
      return <p> </p>

    } else {
      return (
        <Container style={{ width: '1200px' }}>  
        <h2><span>города украины</span></h2> 
         <div className="main">  
           <div className="city">
           <Slider {...settings}>
         
          {cities.map(cities => (
          <div className="bl fl8" key={cities.id}>
            <div className="image"><img src={cities.image} alt=""/></div>
            <div className="text">
              <h3>{ cities.name }</h3>
              <p>{ cities.description }</p>
              <span>20 отелей</span>
            </div>
          </div>

          ))}
          
              </Slider>
            </div>
           </div> 
          </Container> 
        );
    }
  }
}