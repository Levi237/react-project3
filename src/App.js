import React, {Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Alerts from './components/parkAlerts';
import Map from './components/Map';
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
    alerts: [],
    parkNames: [],
    closureList: [],
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

  componentDidMount(){
    this.getAlerts().then(alerts => {
      this.getParkNames()
        .then(names => {
          // console.log(names.data)
          const filterAlerts = alerts.data.filter(a => (a.category === "Park Closure" && !a.title.includes("Restrooms") && a.description.includes("closed" || "closure")))
          const list = filterAlerts.reduce((total, f) => {
            names.data.forEach(a => {
              // console.log(a.parkCode, f.parkCode)
              if(a.parkCode === f.parkCode) {
                total.push(Object.assign(f, a))
                return total
              }
            })
            return total
          }, [])

          // console.log(list)
          this.setState({
            closureList: list
          })
        })


      // this.setState({
      //   alerts: response.data,
      //   // const result = words.filter(word => word.length > 6); ????????? OMG FML
      // })
      // console.log(response.data, '<====== response getAlerts on componentDidMount')
    })
    // this.getParkNames().then(reply => {
    //   this.setState({
    //     parkNames: reply.data
    //     },
    //     this.makeClosureList
    //     )
        
    //   // console.log(reply.data, '<====== getParkNames response on componentDidMount')
    // })
  }
 
  getAlerts = async () => {
    try {
      const alerts = await fetch('https://developer.nps.gov/api/v1/alerts?api_key=WZ7TKRUSuVC5NEf18Txpco74bA3qKdFBZqxfq9W6')
      const alertsJson = await alerts.json();
        return alertsJson
    } catch(err) {
        return err
    }
  }

  getParkNames = async () => {
    try {
      const parkNames = await fetch('https://developer.nps.gov/api/v1/parks&limit=100?api_key=WZ7TKRUSuVC5NEf18Txpco74bA3qKdFBZqxfq9W6')
      const nameJson = await parkNames.json();
        return nameJson
    } catch(err) {
        console.log(err)
    }
  }
//==========> USE lat and long to show locations on map just link on Earthquake
  getMap = async () => {
    try {
      const map = await fetch("https://maps.googleapis.com/maps/api/js?key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg&callback=initMap")
      const mapJson = await map.json();
      return mapJson
    } catch (err) {
      return err
    }
  }
//==========> USE lat and long to show locations on map just link on Earthquake


  render(){
    const { closureList, currentUser } = this.state
    return (
      <div className="grid-container">

        <div className="grid-aa" />
        <div className="grid-header">
          <h1>WELCOME</h1>
            <Switch>
              <Route exact path={routes.ROOT} render={() => <div className="navAlert">YOU ARE AT THE ROOT PAGE</div>} />
              <Route exact path={routes.HOME} render={() => <div className="navAlert">YOU ARE AT THE HOME PAGE</div>} />
              <Route exact path={routes.POST} render={() => <div className="navAlert">YOU ARE AT THE POST PAGE</div>} />
              <Route exact path={`${routes.USERS}/:id`} render={() => <ShowUser />} />
              <Route exact path={routes.USERS} render={() => <div className="navAlert">YOU ARE AT THE USERS PAGE</div>} />
              <Route exact path={routes.LOGIN} render={() => <Login currentUser={currentUser} doSetCurrentUser={this.doSetCurrentUser}/>} />
              <Route component={My404} />
            </Switch>
        </div>
        <div className="grid-ab"/>
        
      <div className="grid-image"></div>


        <div className="grid-ba"/>
        <div className="grid-nav">
          <Nav currentUser={currentUser}/>       
        </div>
        <div className="grid-bb"/>


        <div className="grid-menu">
          <h1>Current Park Closures</h1>
          <Alerts closureList={closureList}  />
        </div>  
        <div className="grid-main map-container map">
          <h1>MOCK MAP</h1>
          <Map closureList={closureList} />
        </div>


        <div className="grid-ca" />
        <div className="grid-footer">
          <h3>This is the footer</h3>
        </div>
        <div className="grid-cb" />
        
      </div>
    );
  }
}

export default App;
