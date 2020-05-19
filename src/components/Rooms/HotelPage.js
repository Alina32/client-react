import React, { Component } from 'react';
import Maps  from '../MapComponents/Maps';
import HotelSlider from './HotelSlider';
import Rooms from './Rooms';
import { Container, Button, Icon, Image, Item, Statistic, List, Segment, Rating} from 'semantic-ui-react';

export default class HotelPage extends Component {

 constructor() {
        super();

        this.state = {
          error: null,
            isLoaded: false,
            'hotels': [],         
        }
    }

    componentDidMount() {
      this.getHotels(); 
    }

    getHotels() {
      const id = this.props.match.params.id;
      fetch('http://localhost:8000/api/hotel/'+ id)
        .then(res => res.json())
        .then(
            (result) => {
              this.setState({
                   isLoaded: true, 
                   hotels: result
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
 
    const { error, isLoaded, hotels } = this.state;

    if (error) {
      return <p> Error {error.message} </p>
    } else if (!isLoaded){
      return <p> </p>

    } else {
      return (
       <Container  style={{width: '930px', minHeight:'1000px' }} > 
      
      
        <HotelSlider 
        name={hotels.name} 
        raiting={hotels.raiting}
        image1={hotels.image1}
        image2={hotels.image2}
        image3={hotels.image3}
        image4={hotels.image4}
        image5={hotels.image5}
        />
              
        <Maps lat={hotels.lat} lng={hotels.lng}/>

      {hotels.rooms.map(room => (
        <Rooms 
        room={room}
            
        />
      ))}
                   
      </Container>
      ) 
    }
  }
}