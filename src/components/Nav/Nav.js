import React from 'react';
import { NavLink } from 'react-router-dom';

import * as routes from '../../constants/routes';
import './Nav.css';

const Nav = ({currentUser, logoutUser, loading}) => 
<div className="navBox">
    <NavLink activeClassName="underline" className="navBtn" to={routes.HOME}>HOME</NavLink>
    <NavLink activeClassName="underline" className="navBtn" to={routes.ABOUT}>ABOUT</NavLink>
    <NavLink activeClassName="underline" className="navBtn" to={routes.PARKS}>PARKS</NavLink>
    <NavLink activeClassName="underline" className="navBtn" to={routes.STAR}>STAR MAP</NavLink>
    { loading 
    ? <NavLink to={routes.ALERTS} className="navBtn neuter">ALERTS</NavLink>
    : <NavLink activeClassName="underline" className="navBtn" to={routes.ALERTS}>ALERTS</NavLink>
    }
    { currentUser &&
    <NavLink activeClassName="underline" className="navBtn" to={routes.TRACK} >TRACK</NavLink>    
    }
    { currentUser &&
    <NavLink className="navBtn" to={routes.LOGOUT} onClick={logoutUser}>LOGOUT</NavLink> 
    }
    </div>

export default Nav