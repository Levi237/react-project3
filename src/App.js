import React, {Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Parks from './components/Parks';
import ShowMap from './components/Map';
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login'
import ShowUser from './components/ShowUser/ShowUser'

import * as routes from './constants/routes'
import './App.css';

const My404 = () =>{
  return (
    <div>
      You are lost
    </div>
    )
}

class App extends Component {

  state = {
    currentUser: null,
    parks: [],
    parkNames: [],
    map: {
      lat: '',
      long: '',
      local: ''
    }
  }

  doSetCurrentUser = user => {
    this.setState({
      currentUser: user
    })
  }

//   componentDidMount() {

//   }
  componentDidMount(){
    this.getParks().then(response => {
      this.setState({
        parks: response.data,
        
      })
      // console.log(response.data, '<====== response getParks on componentDidMount')
    })
    this.getParkNames().then(reply => {
      this.setState({
        parkNames: reply.data
      })
      // console.log(reply.data, '<====== getParkNames response on componentDidMount')
    })
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

  getParkNames = async () => {
    try {
      const parkNames = await fetch('https://developer.nps.gov/api/v1/parks?api_key=WZ7TKRUSuVC5NEf18Txpco74bA3qKdFBZqxfq9W6')
      const nameJson = await parkNames.json();
        return nameJson
    } catch(err) {
        console.log(err)
    }
  }
//----------> USE lat and long to show locations on map just link on Earthquake
  getMap = async () => {
    try {
      const m = await fetch("https://maps.googleapis.com/maps/api/js?key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg&callback=initMap")
      const mapJson = await m.json();
      return mapJson
    } catch (err) {
      return err
    }
  }
//----------> USE lat and long to show locations on map just link on Earthquake




//   render() {
//     return (
//       <div>
//         <NavBar currentUser={this.state.currentUser}/>
//         <Switch>
//           <Route exact path={routes.ROOT} render={() => <div>ROOT</div>} />
//           <Route exact path={routes.HOME} render={() => <div>HOME</div>} />
//           <Route exact path={routes.USERS} render={() => <div>USER</div>} />
//           <Route exact path={`${routes.USERS}/:id`} render={() => <ShowUser />} />
//           <Route exact path={routes.POSTS} render={() => <div>POST</div>} />
//           <Route exact path={routes.LOGIN} render={() => <Login currentUser={this.state.currentUser} doSetCurrentUser={this.doSetCurrentUser}/>} />
//           <Route render={() => <div>NOT FOUND</div>} />
//         </Switch>
//       </div>
//     );
//   }
// }



//         <Switch>
//           <Route exact path={routes.ROOT} render={() => <div>ROOT</div>} />
//           <Route exact path={routes.HOME} render={() => <div>HOME</div>} />
//           <Route exact path={routes.USERS} render={() => <div>USER</div>} />
//           <Route exact path={`${routes.USERS}/:id`} render={() => <ShowUser />} />
//           <Route exact path={routes.POSTS} render={() => <div>POST</div>} />
//           <Route exact path={routes.LOGIN} render={() => <Login currentUser={this.state.currentUser} doSetCurrentUser={this.doSetCurrentUser}/>} />
//           <Route render={() => <div>NOT FOUND</div>} />
//         </Switch>
  render(){
    const { parks, parkNames, currentUser } = this.state
    return (
      <div className="grid-container">
        <div className="grid-header">
          <h1>WELCOME</h1>
          <Nav />
          {/* <Login /> */}
        </div>
        <div className="grid-menu">
        <Switch>
          <Route exact path={routes.ROOT} render={() => <div>ROOT</div>} />
          <Route exact path={routes.HOME} render={() => <div>HOME</div>} />
          <Route exact path={routes.POST} render={() => <div>POST</div>} />
          <Route exact path={`${routes.USERS}/:id`} render={() => <ShowUser />} />
          <Route exact path={routes.USERS} render={() => <div>USERS</div>} />
          <Route exact path={routes.LOGIN} render={() => <Login currentUser={currentUser} doSetCurrentUser={this.doSetCurrentUser} />} />
          <Route component={My404} />
        </Switch>
          <h1>Current Park Closures</h1>
          <Parks parkNames={parkNames} parks={parks}  />
        </div>  
        <div className="grid-main map-container map">
          <ShowMap parkNames={parkNames} parks={parks} />
        </div>
        <div className="grid-footer">
          <h3>This is the footer</h3>
        </div>
      </div>
    );
  }
}

export default App;
