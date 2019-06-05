import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'

// import * as routes from '../../constants/routes'
// import './Nav.css'




class UserNav extends Component {


    toggleUserSession = e => {
        // e.currentTarget.classList.toggle('user-on');
        console.log("toggle on")
    } 
    render(){
        const { currentUser, logoutUser } = this.props
        return(

            <div className="userNav">
                { currentUser 
                ? <button className="user-off" onClick={this.toggleUserSession}>EDIT USER</button> 
                : <button className="user-off" onClick={this.toggleUserSession}>SIGN UP</button>
                }
                { currentUser 
                ? <button className="user-off" onClick={logoutUser}>LOGOUT</button> 
                : <button className="user-off" onClick={this.toggleUserSession}>LOGIN</button>
                }
                
                {/* { currentUser 
                ? <div className="user-off" onClick={this.toggle}>EDIT USER</div> 
                : <div className="user-off" onClick={this.toggle}>SIGN UP</div>
                <
                }
                { currentUser 
                ? <div className="user-off" onClick={logoutUser}>LOGOUT</div> 
                : <div className="user-off" onClick={this.toggle}>LOGIN</div>
                } */}

                <br/>
                <div></div>
            </div>
            )
        }
    }
export default UserNav