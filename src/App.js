import React, {Component } from 'react';
import { Switch, Route } from 'react-router-dom'
// import { ClipLoader, PacmanLoader} from 'react-spinners'
import { PacmanLoader } from 'react-spinners'

import Alerts from './components/Alerts';
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
    loading: true
  }

  doSetCurrentUser = user => {
    this.setState({
      currentUser: user
    })
  }

  logoutUser = () => {
    console.log('logout selected')
    this.setState({
      currentUser: null
    })
  }


  componentDidMount(){
    this.getAlerts().then(alerts => {
      this.getParkNames()
        .then(names => {
          const filterAlerts = alerts.data.filter(a => (a.category === "Park Closure" && !a.title.includes("Restrooms") && a.description.includes("closed" || "closure")))
          const list = filterAlerts.reduce((total, f) => {
            names.data.forEach(a => {
              if(a.parkCode === f.parkCode) {
                total.push(Object.assign(f, a))
                return total
              }
            })
            return total
          }, [])
          this.setState({
            closureList: list,
            loading: false
          })
        })
    })
  }
 
  getAlerts = async () => {
    try {
      const alerts = await fetch('https://developer.nps.gov/api/v1/alerts&limit=50?api_key=WZ7TKRUSuVC5NEf18Txpco74bA3qKdFBZqxfq9W6')
      const alertsJson = await alerts.json();
        return alertsJson
    } catch(err) {
        return err
    }
  }

  getParkNames = async () => {
    try {
      const parkNames = await fetch('https://developer.nps.gov/api/v1/parks&limit=50?api_key=WZ7TKRUSuVC5NEf18Txpco74bA3qKdFBZqxfq9W6')
      const nameJson = await parkNames.json();
        return nameJson
    } catch(err) {
        console.log(err)
    }
  }

  getMap = async () => {
    try {
      const map = await fetch("https://maps.googleapis.com/maps/api/js?key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg&callback=initMap")
      const mapJson = await map.json();
      return mapJson
    } catch (err) {
      return err
    }
  }

  render(){
    const { closureList, currentUser, loading } = this.state
    return (
      <div className="grid-container">
        <div className="grid-aa" /><div className="grid-header">
          <h1>Park Alert</h1>
          <PacmanLoader loading={loading} color={'#FFF'}/>
            <Switch>
              <Route exact path={routes.ROOT} render={() => <div className="navAlert">YOU ARE AT THE ROOT PAGE</div>} />
              <Route exact path={routes.HOME} render={() => <div className="navAlert">YOU ARE AT THE HOME PAGE</div>} />
              <Route exact path={routes.POST} render={() => <div className="navAlert">YOU ARE AT THE POST PAGE</div>} />
              <Route exact path={`${routes.USERS}/:id`} render={() => <ShowUser />} />
              <Route exact path={routes.USERS} render={() => <div className="navAlert">YOU ARE AT THE USERS PAGE</div>} />
              <Route exact path={routes.LOGIN} render={() => <Login currentUser={currentUser} doSetCurrentUser={this.doSetCurrentUser}/>} />
              <Route exact path={routes.LOGOUT} render={() => <div onChange={this.logoutUser}/>} />
              <Route component={My404} />
            </Switch>
        </div><div className="grid-ab"/>     
        
        <div className="grid-image"></div>
     
        <div className="grid-ba"/><div className="grid-nav">
          <Nav  currentUser={currentUser}/>       
        </div><div className="grid-bb"/>

        <div className="grid-menu">      
          <Alerts closureList={closureList} currentUser={currentUser} />
        </div>  
        <div className="grid-main map-container map">
          <Map closureList={closureList} />
        </div>

        <div className="grid-ca" /><div className="grid-footer">
          <h3>This is the footer</h3>
        </div><div className="grid-cb" />
               
      </div>
    );
  }
}

export default App;
