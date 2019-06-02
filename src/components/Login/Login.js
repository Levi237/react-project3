import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './Login.css'

class Login extends Component {

    state = {
        username: '',
        password: '',
        logged: false
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitLogin = async (e) => {
        e.preventDefault();
        const loginResponse = await fetch(process.env.REACT_APP_API+'/api/v1/login', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'Content-type' : 'application/json'
            }    
        })
        const parsedResponse = await loginResponse.json();
        if(parsedResponse.data) {
            this.props.doSetCurrentUser(parsedResponse.data)
                this.setState({
                    logged: true,
                })
        }
      }

    render(){
        const { username, password, logged } = this.state
        return(
            logged
            ? <Redirect to={'/home'} />
            : <section className="enter">
                {/* <form onSubmit={this.props.submitLogin}> */}
                <form onSubmit={this.submitLogin}>
                    <input type="text" placeholder="Your Name Here" name="username" onChange={this.changeHandler} value={username}></input>
                    <input type="password" placeholder="Your Password" name="password" onChange={this.changeHandler} value={password}></input>
                    <button type="submit">Login</button>
                </form>
            </section>
        )
    }
}

export default Login