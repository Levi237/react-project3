import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Parks from './components/Parks'

class App extends Component {

  state = {
    parks: []
  }

  getParks = async () => {
    try {
      const parks = await fetch('https://developer.nps.gov/api/v1/alerts?api_key=WZ7TKRUSuVC5NEf18Txpco74bA3qKdFBZqxfq9W6')
      const parksJson = await parks.json();
      return parksJson
    } catch(err) {
      return err
    }
  }
//----------> USE lat and long to show locations on map just link on Earthquake
  // getMap = async () => {
  //   try {
  //     const m = await fetch("https://maps.googleapis.com/maps/api/js?key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg&callback=initMap")
  //     const mapJson = await m.json();
  //     return mapJson
  //   } catch (err) {
  //     return err
  //   }
  // }

  render(){
    return (
      <div className="App">
        <Parks parks={parks}/>
      </div>
    );
  }
}

export default App;
