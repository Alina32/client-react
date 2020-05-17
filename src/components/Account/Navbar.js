import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';
import { Menu, Container,Image, Icon, Input, Button, Form } from 'semantic-ui-react';
import Profile from './Profile';

class Navbar extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
     <>
          <Link to="/login" id="linkmenu">
            <Menu.Item  name='ВХІД'/>
          </Link>
  
          <Link to="/register" id="linkmenu">
            <Menu.Item  name='РЕЄСТРАЦІЯ' 
            />
          </Link>
     </>     
    )

    const userLink = (
      <>
          <Link to="/profile" id="linkmenu">
           <Menu.Item  name='АККАУНТ'/>
          </Link>
   
          <Link to="" onClick={this.logOut.bind(this)} id="linkmenu">
            <Menu.Item  name='ВИХІД'/>
          </Link>
      </>
    )

    return (
      
      <Menu stackable borderless id="menu" inverted>
        <Link to="/" >
          <Menu.Item>
                   <div className="logo"/>
          </Menu.Item>
        </Link>

        <Link to="/" id="linkmenu">
          <Menu.Item  name='ГОЛОВНА'/>
        </Link>

        <Link to="/hotels" id="linkmenu">
          <Menu.Item  name='ГОТЕЛІ'/>
        </Link>

        <Link to="create-cities" id="linkmenu">
          <Menu.Item  name='ДОДАТИ МІСТО'/>
        </Link>
        <Link to="create-hotels" id="linkmenu">
          <Menu.Item  name='ДОДАТИ ГОТЕЛЬ'/>
        </Link>
        

        {localStorage.usertoken ? userLink : loginRegLink} 

         <Menu.Item position='right'>
            <Form>
                <input name="s" placeholder="місто або готель..." type="search"/>
                <button id="search-button" type="submit"></button>
             </Form>
        </Menu.Item>      
    </Menu>
    )
  }
}

export default withRouter(Navbar)