import React, {Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';
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
import Vsky from './components/Vsky/Vsky';
import ParkNav from './components/Parks/Nav';
import ParkShow from './components/Parks/ParkShow';
import Info from './components/Content/Info';
import Help from './components/Modal/Help';
import Intro from './components/Content/Intro';
import About from './components/Content/About';
import AboutFull from './components/Content/AboutFull';
import Modal from './components/Modal/Modal';
import UserModal from './components/Modal/User';

import * as routes from './constants/routes';
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
    parks: [],
    park: [],
    closureList: [],
    loading: true,
    lat: 37.8651,
    lng: -119.5383,
    show: false,
    help: false,
    user: false,
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
              filterAlerts.reduce((total, f) => {
                if(names.parkCode === f.parkCode) {
                  total.push(Object.assign(f, names))
                  newlist.push(total)
                  return total 
                }
                return total                             
              }, []) 
            })
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
      const parkNames = await fetch('https://developer.nps.gov/api/v1/parks&limit=10?api_key=WZ7TKRUSuVC5NEf18Txpco74bA3qKdFBZqxfq9W6')
      const nameJson = await parkNames.json();
        return nameJson
    } catch(err) {
        return err
    }
  }

  getAlerts = async () => {
    try {
      const alerts = await fetch('https://developer.nps.gov/api/v1/alerts&limit=10?api_key=WZ7TKRUSuVC5NEf18Txpco74bA3qKdFBZqxfq9W6')
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
  helpModal = () => {
    this.setState({
      ...this.state,
      help: !this.state.help
    })
  }
  userModal = () => {
    this.setState({
      ...this.state,
      user: !this.state.user
    })
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////                                                                  //////////////////////////////
//////////////////////////////                              RENDER(){                           //////////////////////////////
//////////////////////////////                              RETURN()}                           //////////////////////////////
//////////////////////////////                                                                  //////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  render(){
    const { closureList, currentUser, loading, lat, lng, parks, park, show, help } = this.state

    return (
      <div className="grid-container">
        <Modal show={show} onClose={this.showModal}>
          <Vsky lat={lat} lng={lng} show={show} park={park} parks={parks} handleSkyMap={this.handleSkyMap} changeShowPark={this.changeShowPark}/>
        </Modal>
        
        <Help onClose={this.helpModal} help={help}>
          <Info />
        </Help>
      <Switch>
        <Route exact path={routes.ABOUT} render={() =>
          <AboutFull /> }/>
      </Switch>

{/* HEADER */}
        <div className="grid-ha"/>
        <div className="grid-header">
          <h3>Welcome to Park Intel</h3>
        </div>
        <div className="grid-hb">
          <input type="button" onClick={this.helpModal} value="?" />
        </div>     

{/* IMAGE */}
        <div className="grid-image">
          <div className="image-holder">
            <Switch>
              <Route exact path={routes.HOME} render={() =>
                <img src="goblin-valley.png" alt="goblin valley" title="with Auntie Toy"/> }/>
              <Route exact path={routes.ABOUT} render={() =>
                <img src="header-yosemite.png" alt="yosemite" title="5 days Aug 2018"/> }/>
              <Route exact path={routes.PARKS} render={() =>
                <img src="devils-postpile.png" alt="devils postpile" title="Devil's Postpile"/> }/>
              <Route exact path={routes.STAR} render={() =>
                <img src="capital-reef.png" alt="capital reef" title="Capital Reef, Utah"/> }/>
              <Route exact path={routes.ALERTS} render={() =>
                <img src="great-saltlake.png" alt="capital reef" title="Capital Reef, Utah"/> }/>          
              <Route path={routes.ROOT}><img src="joshua-tree.png" /></Route>
            </Switch>
          </div>
        </div>

{/* TITLE */}
        <div className="grid-ta"/>
        <div className="grid-title">
          { loading && <div className="loading">Please allow time for data to load.  Compliments of nps.gov</div> }          
          <Switch>    
            <Route exact path={routes.PARKS} render={() =>
              park.name ? <div><h1>{park.name}</h1></div> : <div><h1>National Parks</h1></div> }/>
            <Route exact path={routes.STAR} render={() =>
              park.name ? <div><h1>{park.name}</h1></div> : <div><h1>National Parks</h1></div> }/>   
            <Route exact path={routes.ALERTS} render={() =>
              !currentUser ? <div><h1>Park Alerts</h1></div> : <div><h1>{currentUser.username}'s Park Alerts</h1></div> }/>            
            <Route exact path={routes.ROOT} render={() =>
              <div className="navAlert"></div> }/>
            <Route exact path={routes.ABOUT} render={() =>
              <div className="navAlert"><h1>About Me</h1></div> }/>
            <Route exact path={routes.HOME} render={() =>
              currentUser ? <div className="navAlert"><h1>Home</h1></div> : <div className="navAlert"><h1>Welcome</h1></div> }/>
            <Route component={My404}/>
          </Switch>
        </div>
        <div className="grid-tb"/>

{/* NAV BAR */}
        <div className="grid-na"/>
        <div className="grid-navPark">
          <Switch>
            <Route exact path={routes.ALERTS} render={() => <></> }/>
            <Route path={routes.ROOT} render={() => 
              <ParkNav parks={parks} park={park} handleSkyMap={this.handleSkyMap} changeShowPark={this.changeShowPark}/> }/>
          </Switch>
        </div>
        <div className="grid-navBar">
          <Nav currentUser={currentUser} logoutUser={this.logoutUser} loading={loading}/>
        </div>
        <div className="grid-nb"/>

{/* MENU */}
        <div className="grid-menu">            
          <Switch>
            <Route exact path={routes.PARKS} render={() =>
              <ParkShow park={park} closureList={closureList} handleSkyMap={this.handleSkyMap}/> }/>
            <Route exact path={routes.STAR} render={() =>
              <>
              { loading
              ? <div className="pacman"><PacmanLoader color={'gold'} size={10}/></div>
              : <input className="vskyModalBtn" type="button" onClick={this.showModal} value="Full Star Map"/>
              }
              <ParkShow park={park} closureList={closureList} handleSkyMap={this.handleSkyMap}/>                                
              </> }/>
            <Route exact path={routes.HOME} render={() =>
              <Intro /> }/>
            <Route exact path={routes.ABOUT} render={() =>
              <About /> }/>
            <Route exact path={routes.TRACK} render={() =>
              currentUser && <UserList deleteItem={this.deleteItem} currentUser={currentUser} edituser={this.edituser} handleSetMap={this.handleSetMap} closureList={closureList}/> }/>
            <Route exact path={routes.ALERTS} render={() =>
              <>   
              { currentUser
              ? <><input className="vskyModalBtn" type="button" onClick={this.userModal} value="User Edit" /><br /><br /></>
              : <><input className="vskyModalBtn" type="button" onClick={this.userModal} value="Log/Register" /><br /><br /></>
              }
              <UserModal onClose={this.userModal} user={this.state.user}>
              { currentUser 
              ? <EditUser submitEditUser={this.submitEditUser} currentUser={currentUser} doSetCurrentUser={this.doSetCurrentUser}/>
              : <>
                <Login currentUser={currentUser} doSetCurrentUser={this.doSetCurrentUser}/>
                <br/>
                <Register currentUser={currentUser} doSetCurrentUser={this.doSetCurrentUser}/>
                </>
              }
              </UserModal>
              <Alerts currentUser={currentUser} doSetCurrentUser={this.doSetCurrentUser} closureList={closureList} handleSetMap={this.handleSetMap}/>
              </> }/>
            <Route path={routes.ROOT} render={() =>
              <Intro /> }/>   
          </Switch>
        </div>  

{/* MAIN */}
        <div className="grid-main">
          <Switch>     
            { !show &&
            <Route exact path={routes.STAR} render={() =>
              <div className="vskyWindow"><Vsky show={show} lat={lat} lng={lng} park={park} parks={parks}/></div> }/>
            }
            <Route exact path={routes.PARKS} render={() =>
              <Map closureList={closureList} lat={lat} lng={lng}/> }/>
            <Route exact path={routes.ALERTS} render={() =>
              <Map closureList={closureList} lat={lat} lng={lng}/> }/>
            <Route exact path={routes.HOME} render={() =>
              <img className="resize" src="home-yosemite.png" /> }/>
            <Route exact path={routes.TRACK} render={() =>
              <Map closureList={closureList} lat={lat} lng={lng}/> }/>
            <Route exact path={routes.ABOUT} render={() => <></> }/>
            <Route path={routes.ROOT} render={() =>
              <img class="resize" src="franklin-lake.png" /> }/> 
          </Switch>  
        </div>

{/* FOOTER */}
        <div className="grid-fa" />
        <div className="grid-footer">
          <h3><a href="https://www.nps.gov" target="_blank" rel="noopener noreferrer">Please enjoy this tribute to the National Park Service</a> | <a href="https://virtualsky.lco.global/" target="_blank" rel="noopener noreferrer"> A special thanks to VirtualSky</a> & <a href="cahworks.com">Alex Hughes </a> | <a href="google.maps">maps.googleapis.com</a></h3>
        </div>
        <div className="grid-fb" />

      </div>
    );
  }
}

export default withRouter(App);