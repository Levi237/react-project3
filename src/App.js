import React, {Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import { PacmanLoader } from 'react-spinners'

import Alerts from './components/Alerts/Alerts';
import Map from './components/Map';
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import UserList from './components/UserList/UserList';
import EditUser from './components/EditUser/EditUser'

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
    console.log('logout selected')
    this.setState({
      currentUser: null //[]
    })
    this.props.history.push(routes.ROOT)
  }

  handleSetMap = e => {
    // console.log(e.target.value, '<--------e.target.value')
    // console.log('click handleSetMap')
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

  deleteItem = async (userListId, currentUserId, e) => {
    // console.log(userListId, '<----------------------- this is id', currentUserId)
    e.preventDefault();
    try {
        // const deleteItem = await fetch('/users/'+id, {
        //     method: 'DELETE'
        // });
        const deleteItem = await fetch(process.env.REACT_APP_API+'/api/v1/'+currentUserId+'/'+userListId, {
            method: 'DELETE'
        });
        // console.log('==================inside try delete function==================', deleteItem)
        const deleteItemJson = await deleteItem.json();
        // console.log(deleteItemJson.data, "<--deleteItemJson")
        // this.setState({currentUser: this.state.userList.filter((alert, i) => alert._id !== id)})
        this.setState({currentUser: deleteItemJson.data})
    } catch(err) {
        console.log(err, 'error')
    }
  }

  editUser = async (e) => {
  e.preventDefault();
  console.log(this.state, "<--------------this.state")
  console.log(this.state.currentUser.username, '<---------this.state.username===============<<<<<<')
  console.log(e.target.username, '<-----------e.target.username');
  let userid = this.state.currentUser
      const editUser = await fetch(process.env.REACT_APP_API+'/api/v1/'+userid._id+'/edit', {
          method: 'PUT',
          credentials: 'include',
          body: JSON.stringify(this.state),
          headers: {
              'Content-type' : 'application/json'
          }
      })
        console.log(editUser, "<-----------editUser in editUser")
        const parsedResponse = await editUser.json();
        console.log(parsedResponse, "<==========parsed response")
        if(parsedResponse.data) {
            this.doSetCurrentUser(parsedResponse.data)
                this.setState({
                    logged: true,
                })
        }
  }

// edituser = async (id, e) => {
//   console.log(e, "<------- id on edituser")

  // e.preventDefault();
  // const editUser = await fetch('/users/'+id, {
  //     method: 'PUT',
  //     // credentials: 'include',
  //     body: JSON.stringify(this.state),
  //     headers: {
  //         'Content-type' : 'application/json'
  //     }
  // })


  //   console.log(editUser)
  //   const parsedResponse = await editUser.json();
  //   console.log(parsedResponse)
  //   if(parsedResponse.data) {
  //       this.props.doSetCurrentUser(parsedResponse.data)
  //           this.setState({
  //               logged: true,
  //           })
  //   }
  // }



  // closeAndEdit = async (e) => {
  //   e.preventDefault();

  //   try {

  //     const editResponse = await fetch('http://localhost:9000/api/v1/movies/' + this.state.movieToEdit._id, {
  //       method: 'PUT',
  //       body: JSON.stringify(this.state.movieToEdit),
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     })

  //     const parsedResponse = await editResponse.json();


  //     const editedMovieArray = this.state.movies.map((movie) => {

  //       if(movie._id === this.state.movieToEdit._id){

  //           movie = parsedResponse.data;

  //       }

  //       return movie
  //     });


  //     this.setState({
  //       movies: editedMovieArray,
  //       modalShowing: false
  //     });

  //   }catch(err){
  //     console.log(err);
  //   }
  // }
















// renderElement(){
//   if(this.state.value == 'news')
//      return <Text>data</Text>;
//   return null;
// }

// render() {
//    return (   
//        <View style={styles.container}>
//            { this.renderElement() }
//        </View>
//    )
// }

  render(){
    const { closureList, currentUser, loading, lat, lng} = this.state
    return (
      <div className="grid-container">
        <div className="grid-aa" />
        <div className="grid-header">
          <h1>Park Alert</h1>
          
        </div><div className="grid-ab"/>     
        
        <div className="grid-image">
        
            <Switch>
              <Route exact path={routes.ROOT} render={() => <div className="navAlert">YOU ARE AT THE ROOT PAGE</div>} />
              <Route exact path={routes.HOME} render={() => <div className="navAlert">YOU ARE AT THE HOME PAGE</div>} />
              <Route exact path={routes.REGISTER} render={() => <Register currentUser={currentUser} doSetCurrentUser={this.doSetCurrentUser}/>} />
              { currentUser && 
              <Route exact path={`${routes.USERS}/:id`}/>
               }
              {/* <Route exact path={currentUser ? `${routes.USERS}/:id` : routes.LOGIN} render={() => <ShowUser />} /> */}
              <Route exact path={routes.USERS} />
              <Route exact path={routes.LOGIN} render={() => <Login currentUser={currentUser} doSetCurrentUser={this.doSetCurrentUser}/>} />
              <Route exact path={routes.LOGOUT} render={() => <div className="navAlert">Thank you for visiting.</div>} />
              <Route component={My404} />
            </Switch></div>
     
        <div className="grid-ba"/><div className="grid-nav">
        <PacmanLoader loading={loading} color={"gold"} size={8}/>  
        <Nav  currentUser={currentUser} logoutUser={this.logoutUser}/>       
        </div><div className="grid-bb"/>

        <div className="grid-menu">    
        
          <Alerts currentUser={currentUser} doSetCurrentUser={this.doSetCurrentUser} closureList={closureList} handleSetMap={this.handleSetMap}/>
        </div>  
        <div className="grid-list">
          {
          currentUser && 
          <UserList deleteItem={this.deleteItem} currentUser={currentUser} doSetCurrentUser={this.doSetCurrentUser} edituser={this.edituser} handleSetMap={this.handleSetMap}/>
                 }
          {
            currentUser &&  <EditUser currentUser={currentUser} doSetCurrentUser={this.doSetCurrentUser} editUser={this.editUser}/>

          }
        </div>
        <div className="grid-main map-container map">
          <Map closureList={closureList} lat={lat} lng={lng}/>
        </div>

        <div className="grid-ca" /><div className="grid-footer">
          <h3>This is the footer</h3>
        </div><div className="grid-cb" />
               
      </div>
    );
  }
}

export default withRouter(App);
