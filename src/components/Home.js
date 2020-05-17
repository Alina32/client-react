import React, { Component } from 'react';

import TopHotels from './Index/TopHotels';
import Cityslider from './Index/Cityslider';



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