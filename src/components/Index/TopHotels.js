import React, { Component } from 'react';
import { Reveal, Button, Icon } from 'semantic-ui-react';

export default class TopHotels extends Component {
  constructor() {
        super();

        this.state = {
          error: null,
            isLoaded: false,
            hotels: [], 
        }
    }

    componentDidMount() {
      this.getHotels();
    }

    getHotels() {
      fetch('http://localhost:8000/api/top-hotels')
        .then(res => res.json())
        .then(
            (result) => {
              this.setState({
                   isLoaded: true, 
                   hotels: result.hotels
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
      return <p>Loading...</p>

    } else {
    
    return (
      <div className="hotels-container">  
        <h2><span>найкращі готелі</span></h2>
        <div className="top-hotels">
         {hotels.map(hotels => (
          <div className="hotel" key={hotels.id}>
            <div className="photo">
              <img src={hotels.image} alt=""/>
              <div className="description">
                <h3>{hotels.name}</h3>
                <h3 className="stat">{hotels.statistic}</h3>
                <span>{hotels.cities.name}</span><br/>
                <Button id="button-for-booking" color='brown' href={'/hotels/' + hotels.id}>
                    Детальніше <Icon name='right chevron' />
                </Button>
                </div>
              </div>
          </div>
             ))}
              
        </div>
      </div>  
      );
    }
  }
}