import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  "Bogota,col","Cali,col","Miami,usa"
];

class App extends Component {
  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
  }

  render() {
    return (
      <div className="App">        
        <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation} ></LocationList>
      </div>
    );
  }
}

export default App;
