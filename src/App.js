import React, {Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import { PacmanLoader } from 'react-spinners'
// import moment from 'moment' and react-live-clock
// import Particles from 'react-particles-???'  also can rip from json
// npm package react-globe for the globe


import Alerts from './components/Alerts/Alerts';
import Map from './components/Map/Map';
import Nav from './components/Nav/Nav';
import Login from './components/User/Login';
import Register from './components/User/Register';
import UserList from './components/User/UserList';
import EditUser from './components/User/EditUser'
import Vsky from './components/Vsky/Vsky'
import ParkNav from './components/Parks/Nav'
import ParkShow from './components/Parks/ParkShow'
// import UserNav from './components/User/Nav'
import Intro from './components/Content/Intro'

import Modal from './components/Modal/Modal'

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
    // alerts: [],
    parks: [],
    park: [],
    closureList: [],
    loading: true,
    lat: 37.8651,
    lng: -119.5383,
    show: false,
  }

  doSetCurrentUser = user => {
    this.setState({
      currentUser: user
    })
  }

  logoutUser = () => {
    this.setState({
      currentUser: null
    })
    this.props.history.push(routes.HOME)
  }

  changeShowPark = (selectedPark) => {
    this.setState({
      park: selectedPark
    })
  }

  handleSetMap = e => {
    let firstSplit = e.target.value.split(':')
    this.setState({
        lat: firstSplit[1].split(',')[0],
        lng: firstSplit[2]
    })  
  }
  handleSkyMap = e => {
    let firstSplit = e.split(':')
    this.setState({
        lat: firstSplit[1].split(',')[0],
        lng: firstSplit[2]
    })  
  }

  componentDidMount(){
  
    this.getParkNames().then(response => {
      this.setState({
        parks: response.data,
        
      }, () => {
    
                  this.getAlerts().then(alerts => {
                      let newlist = [];            
                          this.state.parks.forEach(names => {
                              const filterAlerts = alerts.data.filter(a => (a.category === "Park Closure" && !a.title.includes("Restrooms") && a.description.includes("closed" || "closure")))
                              const list = filterAlerts.reduce((total, f) => {

                                        if(names.parkCode === f.parkCode) {
                                          total.push(Object.assign(f, names))
                                          console.log("it's a match ---------->", names.parkCode, f.parkCode)
                                          console.log(total, "total")
                                          newlist.push(total)
                                          return total
                                          
                                        }

                                return total
                                
                              }, []) 

                          })
                          console.log(newlist, "< NEW LIST")
                          newlist = [].concat.apply([], newlist)
                          this.setState({
                            closureList: [...newlist],
                            loading: false

                          })

                        })
  })

      })
  }

  getParkNames = async () => {
    try {
      const parkNames = await fetch('https://developer.nps.gov/api/v1/parks&limit=500?api_key=WZ7TKRUSuVC5NEf18Txpco74bA3qKdFBZqxfq9W6')
      const nameJson = await parkNames.json();
        return nameJson
    } catch(err) {
        return err
    }
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
  
  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    })
  }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////                                                                  //////////////////////////////
//////////////////////////////                              RENDER(){                           //////////////////////////////
//////////////////////////////                              RETURN()}                           //////////////////////////////
//////////////////////////////                                                                  //////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  render(){

    const { closureList, currentUser, loading, lat, lng, parks, park, show } = this.state

    return (

      <div className="grid-container">
          <Modal show={show} onClose={this.showModal}>
            <Vsky lat={lat} lng={lng} show={show} park={park} parks={parks} handleSkyMap={this.handleSkyMap} changeShowPark={this.changeShowPark}/>
          </Modal>
        <div className="grid-ha">
        
          {/* <input type="button" onClick={this.showModal} value="Show Modal" /> */}

        </div>
        <div className="grid-header">
          { currentUser ? <div><h1>{currentUser.username}'s Tracker</h1></div> : <h3>Welcome to Park-instance</h3>}  
        </div>
        
        <div className="grid-hb"/>     

        <div className="grid-image">
          <div className="image-holder">
              <img src="../header-yosemite.png" alt="header-yosemite" title="5 days Aug 2018"/>
          </div>
        </div>

        <div className="grid-ta"/>
        <div className="grid-title">
          { loading && <div className="loading">Please allow time for data to load.  Compliments of nps.gov</div> }          
        <Switch>    
          <Route exact path={routes.PARKS} render={() =>
              <div><h1>National Parks</h1></div>} />
            <Route exact path={routes.ROOT} render={() =>
               <div className="navAlert"></div>} />
            <Route exact path={routes.HOME} render={() =>
               currentUser ? '' : <div className="navAlert"><h1>Welcome to Park Alert</h1></div>} />
            <Route component={My404} />
        </Switch>
        </div>
        <div className="grid-tb"/>
              
        <div className="grid-na"/>
        <div className="grid-nav">
          <ParkNav parks={parks} park={park} handleSkyMap={this.handleSkyMap} changeShowPark={this.changeShowPark}/>
          <Nav currentUser={currentUser} logoutUser={this.logoutUser} loading={loading}/>
        </div>
        <div className="grid-nb"/>

        <div className="grid-menu">            
          <Switch>
            <Route exact path={routes.ROOT} render={() =>
               <Intro />} />
            <Route exact path={routes.PARKS} render={() =>
              <>
              {loading
              ?<div className="pacman"><PacmanLoader color={'gold'} size={10}/></div>
              :<input className="vskyModalBtn" type="button" onClick={this.showModal} value="Full Star Map" />
              }
                <ParkShow park={park} closureList={closureList} handleSkyMap={this.handleSkyMap}/>                
                {/* <input type="button" onClick={this.showModal} value="Enlarge Virtual Sky" />                  */}
              </>} />

            <Route exact path={routes.STAR} render={() =>
              <>
              <input className="vskyModalBtn" type="button" onClick={this.showModal} value="Full Star Map" />
              <ParkShow park={park} closureList={closureList} handleSkyMap={this.handleSkyMap}/>                
                               
            </>} />
            <Route exact path={routes.HOME} render={() =>
               <Intro />} />
            <Route exact path={routes.TRACK} render={() =>
               currentUser && <UserList deleteItem={this.deleteItem} currentUser={currentUser} edituser={this.edituser} handleSetMap={this.handleSetMap} closureList={closureList}/> } />
            <Route exact path={routes.ALERTS} render={() =>
               <Alerts currentUser={currentUser} doSetCurrentUser={this.doSetCurrentUser} closureList={closureList} handleSetMap={this.handleSetMap}/>} />
          </Switch>
        </div>  

        <div className="grid-main">
        <Switch>     
            { !show &&
            <Route exact path={routes.STAR} render={() =>
              <div className="vskyWindow"><Vsky show={show} lat={lat} lng={lng} park={park} parks={parks}/></div> } />
            }
            <Route exact path={routes.PARKS} render={() =>
              <Map closureList={closureList} lat={lat} lng={lng}/>} />
            { currentUser
            ? <Route exact path={routes.ALERTS} render={() =>
                <><br/>
                <span>Edit your Username/Password here</span><br />
                  <EditUser submitEditUser={this.submitEditUser} currentUser={currentUser} doSetCurrentUser={this.doSetCurrentUser}/> 
                  <Map closureList={closureList} lat={lat} lng={lng}/>
                </> }/>
            : <Route exact path={routes.ALERTS} render={() =>                
                <><br />
                <span>Login/Register here to see what parks are closed. <br /> Track parks on your own list to see when they open!</span><br />
                  <Login currentUser={currentUser} doSetCurrentUser={this.doSetCurrentUser}/>
                  <br />
                  <Register currentUser={currentUser} doSetCurrentUser={this.doSetCurrentUser}/>
                  <Map closureList={closureList} lat={lat} lng={lng}/>
                </>} />
            }
            <Route exact path={routes.HOME} render={() =>
                <Map closureList={closureList} lat={lat} lng={lng}/>} />
            <Route exact path={routes.TRACK} render={() =>
                <Map closureList={closureList} lat={lat} lng={lng}/>} />
        </Switch>
          
        </div>

        <div className="grid-fa" />
        <div className="grid-footer">
          <h3><a href="https://www.nps.gov" target="_blank" rel="noopener noreferrer">Please enjoy this tribute to the National Park Service</a></h3>
        </div>
        <div className="grid-fb" />
               
      </div>
    );
  }
}

export default withRouter(App);

