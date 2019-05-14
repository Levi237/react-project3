import React from 'react'
import { NavLink } from 'react-router-dom'

import * as routes from '../../constants/routes'
import './Nav.css'

const Nav= ({currentUser}) => 
<div>
    <NavLink activeClassName="active" className="navBtn" to={routes.ROOT} exact>ROOT</NavLink>
    <NavLink activeClassName="active" className="navBtn" to={routes.HOME}>HOME</NavLink>
    <NavLink activeClassName="active" className="navBtn" to={routes.USERS}>USERS</NavLink>
    <NavLink activeClassName="active" className="navBtn" to={routes.POST}>POST</NavLink>
    {
    currentUser ?  <NavLink activeClassName="active" className="navBtn" to={`${routes.USERS}/:id`}>{currentUser.username}</NavLink> : <NavLink activeClassName="active" className="navBtn" to={routes.LOGIN}>LOGIN</NavLink>
    }

</div>

export default Nav


