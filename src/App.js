import React, {Component } from 'react';
import { Switch, Route } from 'react-router-dom'
// import logo from './logo.svg';
// import './App.css';
import * as routes from './constants/routes'
import Parks from './components/Parks';
import ShowMap from './components/Map';
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login'

const My404 = () =>{
  return (
    <div>
      You are lost
    </div>
    )
}

class App extends Component {

  state = {
    parks: [],
    map: {
      lat: '',
      lng: '',
      local: ''
    }
  }

  doSetCurrentUser = user => {
    this.setState({
      currentUser: user
    })
  }

  componentDidMount(){
    this.getParks().then(response => {
      this.setState({
        parks: response.data,
        
      })
      console.log(response.data, '<====== response on componentDidMount')
    })
  }

  getParks = async () => {
    try {
      const parks = await fetch('https://developer.nps.gov/api/v1/alerts?api_key=WZ7TKRUSuVC5NEf18Txpco74bA3qKdFBZqxfq9W6')
      
      const parksJson = await parks.json();
      console.log(parksJson, '<===parksJson')
      
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
    const { parks } = this.state
    return (
      <div className="grid-container">
        <div className="grid-header">
          <h1>WELCOME</h1>
          <Nav />
          <Login />
        </div>
        <div className="grid-menu">
        <Switch>
          <Route exact path={routes.ROOT} render={() => <div>ROOT</div>} />
          <Route exact path={routes.HOME} render={() => <div>HOME</div>} />
          <Route exact path={routes.LOGIN} render={() => <div>LOGIN</div>} />
          <Route exact path={routes.USERS} render={() => <div>USERS</div>} />
          <Route exact path={'/login'} render={() => <Login />} />
          <Route component={My404} />
        </Switch>
          <h1>Current Park Closures</h1>
          {console.log(parks, '<----parks in render')}
          <Parks parks={this.state.parks} />
        </div>  
        <div className="grid-main map-container map">
          {/* { parks ? <ShowMap parks={parks} /> : <div/> } */}
          <ShowMap />
        </div>
        <div className="grid-footer">
          <h3>This is the footer</h3>
        </div>
      </div>
    );
  }
}

export default App;
