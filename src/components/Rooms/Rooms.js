import React, { Component } from 'react';
import { Container, Button, Icon, Image, Item, Statistic, List, Segment, Rating} from 'semantic-ui-react';
import Moreinfo from './Moreinfo';

export default class Rooms extends Component {

 constructor(props) {
        super(props);
        this.state = {
            count: this.props.room.price,
            night: 1
          }        
    };
  
  _click_plus = () => {
            this.setState({
              count: this.state.count + this.props.room.price
            })

             this.setState({
              night: this.state.night + 1
            })
          }

 _click_minus = () => {
  if ( this.state.night != 1) {

            this.setState({
              count: this.state.count - this.props.room.price
            })

            this.setState({
              night: this.state.night - 1
            })
           
          }
  }

   render() {
 
   let count = this.props.room.price;
      return (
      
       <>
         
          <Item.Group divided style={{ maxWidth: '900px', margin:'8px' }} >
   
         <Segment style={{borderRadius:'0px'}}>
         <Item.Group divided>      
        
           <Item>
                <Item.Image src={this.props.room.image}/>
                <Item.Content>
                  <Statistic size='tiny' floated='right'>
                      <Statistic.Value>{this.state.count}<span className='price'>грн</span></Statistic.Value>
                      <Statistic.Label><Button icon='minus' onClick={this._click_minus} size= 'mini'/> 
                        {this.state.night} ніч <Button icon='plus' onClick={this._click_plus} size= 'mini'/>
                      </Statistic.Label>
                      
                  </Statistic>

                  <Item.Header as='a'>{this.props.room.type}</Item.Header>
      
                  <List>
                      
                      <List.Item><Icon color='grey' name='rss'/> Безкоштовний wi-fi</List.Item>
                      <List.Item><Icon color='grey' name='food'/> Сніданок включений</List.Item>
                      <List.Item><Icon color='grey' name='info'/> Безкоштовне скасування бронювання</List.Item>
                  </List>    
                 
            
                    <Button color='brown' floated='right' href={'/booking' }>
                        Забронювати <Icon name='right chevron' />
                    </Button>
                

              </Item.Content>
          </Item>
        
          <Moreinfo 
          description={this.props.room.description}
          berth={this.props.room.berth}
          bathroom={this.props.room.bathroom}
          comfort={this.props.room.comfort}
      
          />

           </Item.Group>
            </Segment>
      
      </Item.Group>
              
     </>
      ) 
    }
  }
