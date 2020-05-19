import React, { Component } from 'react';

import TopHotels from './Index/TopHotels';
import Cityslider from './Index/Cityslider';
import Footer from './Index/Footer';



class Home extends Component {
  render() {
    return (
      <>
      	<Cityslider />
        <TopHotels />
      </>
    )
  }
}

export default Home;