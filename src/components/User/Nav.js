import React from 'react'
import { NavLink } from 'react-router-dom'

import * as routes from '../../constants/routes'
import './Nav.css'

const UserNav = ({currentUser, logoutUser}) => 
    <div className="userBox">
        { currentUser 
        ? ''
        : <NavLink activeClassName="underline" className="navBtn" to={routes.REGISTER} >JOIN</NavLink>
        }
        { currentUser 
        ? <NavLink className="navBtn" to={routes.LOGOUT} onClick={logoutUser}>LOGOUT</NavLink> 
        : <NavLink activeClassName="underline" className="navBtn" to={routes.LOGIN}>LOGIN</NavLink>
        }
    </div>

export default UserNav