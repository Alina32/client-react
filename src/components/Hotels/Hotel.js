import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Container, Button, Icon, Image, Item, Label, Popup, Statistic, Rating, Form } from 'semantic-ui-react';

export default class Hotel extends Component {
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
	    fetch('http://localhost:8000/api/hotels')
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
      return <p>Loading</p>

    } else {
      return (
      	
	     <Item.Group divided style={{ maxWidth: '850px' }}>
	    	 <Form>
                <input name="search" placeholder="місто або готель..." type="search"
                	
                />
                <button id="search-button" type="submit"></button>
             </Form>
	     
	     {hotels.map(hotels => (
	       <Item key={hotels.id}>
	            <Item.Image src={hotels.image}/>
	            <Item.Content>
		            <Statistic color='green' size='small' floated='right'>
		                <Statistic.Value>{hotels.statistic}</Statistic.Value>
		               	<Statistic.Label id="statistic-label">{hotels.statistic_label}</Statistic.Label>
		            </Statistic>

		            <Item.Header as='a' href={'/hotels/' + hotels.id}> {hotels.name}
		            	<Rating defaultRating={hotels.raiting} maxRating={hotels.raiting} disabled />
		            
		            </Item.Header>

		            <Item.Meta>
		                <span className='price'>от {hotels.price} грн</span>
		            </Item.Meta>

		             <Item.Meta>    
		                <a><Icon name='marker' />{hotels.address}</a>
		            </Item.Meta>

		            	<p>{hotels.description}</p>

		            <Item.Extra>
		               	<Popup content='Бар' trigger={<Button size='mini' icon='bar' />} />
		                <Popup content='Wi-Fi' trigger={<Button size='mini' icon='rss' />} />
		                <Popup content='Автостоянка' trigger={<Button size='mini' size='mini' icon='car' />} />
		                <Popup content='Ресторан' trigger={<Button size='mini' icon='food' />} />
		            </Item.Extra>
					
			            <Button color='brown' floated='right' as='a' href={'/' + hotels.id + hotels.name}>
			                Детальніше <Icon name='right chevron' />
			            </Button>
							
	        	</Item.Content>
	    	</Item>
	    	))}
	    	  
	    </Item.Group>
	  
		   
	    
	 	) 
    }
  }
}
