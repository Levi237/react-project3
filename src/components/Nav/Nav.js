import React from 'react'
import { NavLink } from 'react-router-dom'

import * as routes from '../../constants/routes'
import './Nav.css'

const Nav= (currentUser) => 
<div>
    <NavLink exact activeClassName="active" className="navBtn" to={routes.ROOT}>ROOT</NavLink>
    <NavLink activeClassName="active" className="navBtn" to={routes.HOME}>HOME</NavLink>
    <NavLink activeClassName="active" className="navBtn" to={routes.USERS}>USERS</NavLink>
    <NavLink activeClassName="active" className="navBtn" to={routes.POST}>POST</NavLink>
    {
        currentUser ? <h1>{currentUser.username}</h1> : <NavLink activeClassName="active" to={'/login'}>LOGIN</NavLink>
    }
</div>

export default Nav