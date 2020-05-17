import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from 'react';
import { GoogleComponent } from 'react-google-location';
import { Container } from 'semantic-ui-react';

const ARI_KEY = 'AIzaSyDXySRuCFCqUZyLUuANyUoQmGErdmY2jLQ';


export class Maps extends Component {

    constructor(props) {
          super(props);
          this.state = {
              lat: null,
              lng: null,
          }
      }
   
  render() {
   
    const mapStyles = {
      width: "900px",
      height: "200px",
    };
    return (
      <div style={{width:'900px', height:'200px', marginBottom:"5px"}}>
        

        <Map
          google={this.props.google}
          zoom={17}
          style={mapStyles}
          language={'ua'}
          initialCenter={{ lat: this.props.lat, lng: this.props.lng }}

        >
          <Marker position={{ lat: this.props.lat, lng: this.props.lng }} 
          />
        </Map>
       </div> 
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDXySRuCFCqUZyLUuANyUoQmGErdmY2jLQ",
})(Maps);