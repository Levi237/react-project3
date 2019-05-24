import React from 'react'
import { NavLink } from 'react-router-dom'

import * as routes from '../../constants/routes'
import './Nav.css'

const Nav = ({currentUser, logoutUser}) => 
<div className="navBox">
    <NavLink activeClassName="underline" className="navBtn" to={routes.HOME}>HOME</NavLink>
    { currentUser 
        ? <NavLink activeClassName="underline" className="navBtn" to={routes.TRACK} >TRACK</NavLink> 
        : <NavLink activeClassName="underline" className="navBtn" to={routes.REGISTER} >JOIN</NavLink>
    }
    { currentUser &&
        <NavLink activeClassName="underline" className="navBtn" to={routes.SEARCH}>SEARCH</NavLink>
    }
    { currentUser 
        ? <NavLink className="navBtn" to={routes.LOGOUT} onClick={logoutUser}>LOGOUT</NavLink> 
        : <NavLink activeClassName="underline" className="navBtn" to={routes.LOGIN}>LOGIN</NavLink>
    }

</div>

export default Nav


