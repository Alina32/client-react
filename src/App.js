import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Navbar from './components/Account/Navbar';
import Sidebar from './components/Hotels/Sidebar';
import Footer from './components/Index/Footer';
import Home from './components/Home';
import NewCity from './components/Create/NewCity';
import Login from './components/Account/Login';
import Register from './components/Account/Register';
import Profile from './components/Account/Profile';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />      
          <Container style={{ width: '1200px' }}>
            <Route exact path="/hotels" component={Sidebar} />
            <Route exact path="/createcities" component={NewCity} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
          </Container>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App