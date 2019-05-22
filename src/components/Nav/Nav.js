import React from 'react'
import { NavLink } from 'react-router-dom'

import * as routes from '../../constants/routes'
import './Nav.css'

const Nav = ({currentUser, logoutUser}) => 
<div className="navBox">
    <NavLink activeClassName="active" className="navBtn" to={routes.HOME}>HOME</NavLink>
    {
    currentUser ? <NavLink activeClassName="active" className="navBtn" to={routes.TRACKER} >JOIN</NavLink> : <NavLink activeClassName="active" className="navBtn" to={routes.REGISTER} >JOIN</NavLink>
    }
    {
    currentUser ?  <NavLink activeClassName="active" className="navBtn" to={routes.LOGOUT} onClick={logoutUser}>LOGOUT</NavLink> : <NavLink activeClassName="active" className="navBtn" to={routes.LOGIN}>LOGIN</NavLink>
    }
</div>

export default Nav


