import React, { Component } from 'react';
import { Reveal, Button, Icon } from 'semantic-ui-react';

export default class TopHotels extends Component {
  render() {
    
    return (
      <div className="hotels-container">  
        <h2><span>лучшие отели</span></h2>
        <div className="top-hotels">
          <div className="hotel">
            <div className="photo">
              <img src="http://i.piccy.info/i9/8acef96c994f930ebd4f4203cb392822/1586587352/565820/1372283/radisson.jpg" alt=""/>
              <div className="description">
                <h3>Radisson Blue</h3>
                <span>Киев</span><br/>
                <Button id="button-for-booking" color='brown'>
                    Забронировать <Icon name='right chevron' />
                </Button>
              </div>
              </div>
          </div>

          <div className="hotel">
            <div className="photo">
              <img src="http://i.piccy.info/i9/09e28c074d69d08b4cf4df54b9f8e9ca/1586587130/63253/1372283/allure.jpg" alt=""/>
                <div className="description">
                  <h3>AllureInn</h3>
                  <span>Черновцы</span>
                </div>
              </div>
          </div>

          <div className="hotel">
            <div className="photo">
              <img src="http://i.piccy.info/i9/c63b3c802228271bcd67465bce55de4b/1586587241/136707/1372283/khortitsaplacejpg.jpg" alt=""/>
                <div className="description">
                  <h3>Khortitsa Place</h3>
                  <span>Запорожье</span>
                </div>
              </div>
          </div>

          <div className="hotel">
            <div className="photo">
              <img src="http://i.piccy.info/i9/2e81bb69599ba588f9fd866d3fc2b77e/1586587193/103232/1372283/frapoli.jpg" alt=""/>
                <div className="description">
                  <h3>Frapolli</h3>
                  <span>Одесса</span>
                </div>
              </div>  
          </div>

          <div className="hotel">
            <div className="photo">
              <img src="http://i.piccy.info/i9/01bc10e5287fc3ce7a843a5626041fe7/1586586970/159180/1372283/alexhof.jpg" alt=""/>
                <div className="description">
                  <h3>Alexhof</h3>
                  <span>Днепр</span>
                </div>
              </div>  
          </div>
          
          <div className="hotel">
            <div className="photo">
              <img src="http://i.piccy.info/i9/302dc975ef2fc3a3ac7649fad743acfe/1586587309/41743/1372283/nobilis.jpg" alt=""/>
                <div className="description">
                  <h3>Nobilis Hotel</h3>
                  <span>Львов</span>
                </div>
              </div>  
          </div>
        </div>
      </div>  
    );
  }
}