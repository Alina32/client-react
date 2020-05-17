import PropTypes from 'prop-types'
import Hotel from './Hotel';
import React, { Component } from 'react';
import {
  Button,
  Checkbox,
  Grid,
  Icon,
  Header,
  Item,
  Container,
  List,
  Segment,
  Sidebar,
  Responsive,
} from 'semantic-ui-react';

  function handleInputChange(e) {

      // get reference to element containing toppings checkboxes
      var el = document.getElementById('filter');
      console.log(el);

      // get reference to input elements in toppings container element
      /*var tops = el.getElementsByTagName('input');
      
      // assign updateTotal function to onclick property of each checkbox
      for (var i=0, len=tops.length; i<len; i++) {
          if ( tops[i].type === 'checkbox' ) {
              console.log(tops[i])
          }
      }*/
  }


const VerticalSidebar = ({ animation, direction, visible}) => (

  <Sidebar
    animation={animation}
    direction={direction}
    vertical
    visible={visible}
    style={{ width: '200px' }}
  >
        <Item.Group id="filter">
            <Item>
            	<Item.Content>
            		<Header as='h3'color='brown' block style={{ width: '100%', border:'none', borderRadius: '0px' }}>Цена за ночь</Header>
            		<List floated='left' style={{ marginLeft:'10px' }}>
    		        	<List.Item><Checkbox label='от 200 до 400 грн' value="200;400" name="price[]" onChange={handleInputChange()}/></List.Item>
    		     	    <List.Item><Checkbox label='от 400 до 750 грн' value="400;750" name="price[]" onChange={handleInputChange()}/></List.Item>
    		        	<List.Item><Checkbox label='от 750 до 1500 грн' value="750;1500" name="price[]" onChange={handleInputChange()}/></List.Item>
    		        	<List.Item><Checkbox label='дороже 1500 грн'value="1500;" name="price[]" onChange={handleInputChange()}/></List.Item>
            		</List>
    			</Item.Content>
    		</Item>
    	    <Item>
            	<Item.Content>
            		<Header as='h3'color='brown' block style={{ width: '100%', border:'none', borderRadius: '0px' }}>Количество звезд</Header>
            		<List floated='left' style={{ marginLeft:'10px' }}>
    		        	<List.Item><Checkbox label='2 звезды'/></List.Item>
    		     	    <List.Item><Checkbox label='3 звезды'/></List.Item>
    		        	<List.Item><Checkbox label='4 звезды'/></List.Item>
    		        	<List.Item><Checkbox label='без звезд'/></List.Item>
            		</List>
    			</Item.Content>
    		</Item>	
    	    <Item>
            	<Item.Content>
            		<Header as='h3'color='brown' block style={{ width: '100%', border:'none', borderRadius: '0px' }}>Услуги</Header>
            		<List floated='left' style={{ marginLeft:'10px' }}>
    		        	<List.Item><Checkbox label='автостоянка'/></List.Item>
    		     	    <List.Item><Checkbox label='ресторан'/></List.Item>
    		        	<List.Item><Checkbox label='интернет'/></List.Item>
    		        	<List.Item><Checkbox label='бар'/></List.Item>
            		</List>
    			</Item.Content>
    		</Item>	
    	</Item.Group>     
  </Sidebar>
)

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
};


function SetFireButton(props) {
  return (<button className="sidebar-visible" onClick={props.onClick}><Icon name='arrow left' /></button>);
};

function SnuffOutButton(props) {
  return (<button className="sidebar-visible" onClick={props.onClick}><Icon name='arrow right' /></button>);
};

export default class SidebarTransitions extends Component {
	constructor(props) {
    super(props)
    this.state = {
      animation: 'push',
      direction: 'left',
      visible: true,
    }
    this.onSetFire = this.onSetFire.bind(this);
    this.onSnuffOut = this.onSnuffOut.bind(this);  
   
    this.state = {isBurning: true};
    this.state = {visible: true};
  };




 onSetFire() {
    this.setState({isBurning: true});
  };

  onSnuffOut() {
    this.setState({isBurning: false});
  };


  handleAnimationChange = (animation) => () =>
    this.setState((prevState) => ({ animation, visible: !prevState.visible })); 

  handleDirectionChange = (direction) => () =>
    this.setState({ direction, visible: false });

  render() {
    const { animation, direction, visible, lable } = this.state;
    const vertical = direction === 'bottom' || direction === 'top';
    const isBurning = this.state.isBurning;

    let button = null;
        if(isBurning){
          button = <SnuffOutButton onClick={this.onSnuffOut} /> 
        } else {
          button = <SetFireButton onClick={this.onSetFire} />
        }

    return (
      <div>   
      <Responsive {...Responsive.onlyMobile}>
            <Button style={{ borderRadius: '0px',padding: '0px', height: '40px', width: '50px'}}onClick={this.handleAnimationChange('push')}>{button}</Button>
          </Responsive>
          <Responsive {...Responsive.onlyTablet}>
            <Button style={{ borderRadius: '0px',padding: '0px', height: '40px', width: '50px'}}onClick={this.handleAnimationChange('push')}>{button}</Button>
      </Responsive>
        
        <Sidebar.Pushable as={Segment} style={{borderRadius:'0px'}}> 
          
          {vertical ? null : (
            <VerticalSidebar
              animation={animation}
              direction={direction}
              visible={visible}
            />
          )}

          <Sidebar.Pusher>
            <Segment basic>
                <Hotel />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
