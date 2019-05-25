import React, {Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import { PacmanLoader } from 'react-spinners'
// import moment from 'moment' and react-live-clock
// import Particles from 'react-particles-???'  also can rip from json
// virtualsky.lco.global/embed/custom.html // Alex Project
// npm package react-globe for the globe


import Alerts from './components/Alerts/Alerts';
import Map from './components/Map/Map';
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import UserList from './components/UserList/UserList';
// import EditUser from './components/EditUser/EditUser'

import Intro from './components/Intro/Intro'

import * as routes from './constants/routes'
import './App.css';

const My404 = () =>{
  return (
    <div>
      {/* 404 */}
    </div>
    )
}

class App extends Component {

  state = {
    currentUser: null,
    alerts: [],
    parkNames: [],
    closureList: [],
    loading: true,
    lat: 37.8651,
    lng: -119.5383,
  }

  doSetCurrentUser = user => {
    this.setState({
      currentUser: user
    })
  }

  logoutUser = () => {
    this.setState({
      currentUser: null //[]
    })
    this.props.history.push(routes.ROOT)
  }

  handleSetMap = e => {
    let firstSplit = e.target.value.split(':')
    this.setState({
        lat: firstSplit[1].split(',')[0],
        lng: firstSplit[2]
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
        return err
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

  deleteItem = async (userListId, currentUserId, e) => {
    e.preventDefault();
    try {
        const deleteItem = await fetch(process.env.REACT_APP_API+'/api/v1/'+currentUserId+'/'+userListId, {
            method: 'DELETE'
        });
        const deleteItemJson = await deleteItem.json();
          this.setState({currentUser: deleteItemJson.data})
    } catch(err) {
        return err
    }
  }

  // editUser = async (e) => {
  // e.preventDefault();
  // let userid = this.state.currentUser
  //     const editUser = await fetch(process.env.REACT_APP_API+'/api/v1/'+userid._id+'/edit', {
  //         method: 'PUT',
  //         credentials: 'include',
  //         body: JSON.stringify(this.state),
  //         headers: {
  //             'Content-type' : 'application/json'
  //         }
  //     })
  //       const parsedResponse = await editUser.json();
  //       if(parsedResponse.data) {
  //           this.doSetCurrentUser(parsedResponse.data)
  //               this.setState({
  //                   logged: true,
  //               })
  //       }
  // }

  render(){
    const { closureList, currentUser, loading, lat, lng } = this.state
    return (
      <div className="grid-container">
        <div className="grid-ha" />
        <div className="grid-header">
          <img src="../alert.png" alt="logo" /><h3>National Park Alert System</h3>

        </div><div className="grid-hb"/>     

        <div className="grid-image">
          <div className="image-holder">
              <img src="../header-yosemite.png" alt="header-yosemite" title="5 days Aug 2018"/>
          </div>
        </div>

        
        <div className="grid-ta"/>
        <div className="grid-title">
        { loading && <div className="loading">Please allow time for data to load.  Compliments of nps.gov</div> }
        { currentUser && <div><h1>{currentUser.username}'s Tracker</h1></div> }
        
          <Switch>
              <Route exact path={routes.ROOT} render={() => <div className="navAlert"></div>} />
              <Route exact path={routes.HOME} render={() => currentUser || loading ? '' : <div className="navAlert"><h1>Welcome to Park Alert</h1></div>} />
              <Route exact path={routes.REGISTER} render={() => <Register currentUser={currentUser} doSetCurrentUser={this.doSetCurrentUser}/>} />
              {/* { currentUser && 
              <Route exact path={`${routes.USERS}/:id`} render={() => <div className="navAlert"><h1>{currentUser.username}'s Tracker from USER/:id TEST LINK</h1></div>}/>
              } */}
              <Route exact path={routes.LOGIN} render={() => <Login currentUser={currentUser} doSetCurrentUser={this.doSetCurrentUser}/>} />
              <Route exact path={routes.LOGOUT} render={() => <div className="navAlert"><h1>{currentUser.username}'s Tracker from LOGOUT</h1></div>} />
              <Route component={My404} />
            </Switch>
          </div><div className="grid-tb"/>
              
        <div className="grid-na"/><div className="grid-nav">
          {loading ? 
          <PacmanLoader loading={loading} color={"gold"} size={12}/> : <Nav currentUser={currentUser} logoutUser={this.logoutUser}/>
          }
        </div><div className="grid-nb"/>

        <div className="grid-menu">  
        { currentUser ? '' : <Intro /> }

        <Switch>
          <Route exact path={routes.HOME} render={() => currentUser && <Intro />} />
          <Route exact path={routes.TRACK} render={() => currentUser && <UserList deleteItem={this.deleteItem} currentUser={currentUser} edituser={this.edituser} handleSetMap={this.handleSetMap} closureList={closureList}/> } />
          <Route exact path={routes.SEARCH} render={() => currentUser && <Alerts currentUser={currentUser} doSetCurrentUser={this.doSetCurrentUser} closureList={closureList} handleSetMap={this.handleSetMap}/>} />
          {/* <Route exact path={`${routes.USERS}/${this.props.currentUser._id}`} render={() => currentUser && <div>Welcome to your user page.<br />There isn't much here to use yet</div>} /> */}
        </Switch>
        </div>  

        <div className="grid-main">

        <Map closureList={closureList} lat={lat} lng={lng}/>
      
        <Switch>
                    <Route exact path={routes.SEARCH} render={() => currentUser && <UserList deleteItem={this.deleteItem} currentUser={currentUser} edituser={this.edituser} handleSetMap={this.handleSetMap} closureList={closureList}/>} />
        </Switch>
        
        </div>


        <div className="grid-fa" /><div className="grid-footer">
          <h3><a href="https://www.nps.gov">Please enjoy this tribute to the National Park Service</a></h3>
        </div><div className="grid-fb" />
               
      </div>
    );
  }
}

export default withRouter(App);
