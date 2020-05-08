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
            <Menu.Item  name='ВХОД'/>
          </Link>
  
          <Link to="/register" id="linkmenu">
            <Menu.Item  name='РЕГИСТРАЦИЯ' 
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
            <Menu.Item  name='ВЫХОД'/>
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
          <Menu.Item  name='ГЛАВНАЯ'/>
        </Link>

        <Link to="hotels" id="linkmenu">
          <Menu.Item  name='ОТЕЛИ'/>
        </Link>

        <Link to="createcities" id="linkmenu">
          <Menu.Item  name='ДОБАВИТЬ ГОРОД'/>
        </Link>
        

        {localStorage.usertoken ? userLink : loginRegLink} 

         <Menu.Item position='right'>
            <Form>
                <input name="s" placeholder="город или отель..." type="search"/>
                <button id="search-button" type="submit"></button>
             </Form>
        </Menu.Item>      
    </Menu>
    )
  }
}

export default withRouter(Navbar)