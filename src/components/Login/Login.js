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

    onSubmit = async (e) => {
        e.preventDefault();
        const loginResponse = await fetch('/users/login', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'Content-type' : 'application/json'
            }
        })

        const parsedResponse = await loginResponse.json();
        if(parsedResponse.success) {
            this.props.doSetCurrentUser(parsedResponse.user)
                this.setState({
                    logged: true,
                })
        }
    }

    render(){
        const { username, password } = this.state
        return(
            this.state.logged
            ? <Redirect to={`/users/${this.props.currenUser._id}`} />
            : <section className="loginForm">
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Your Name Here" name="username" onChange={this.changeHandler} value={username}></input>
                    <input type="password" placeholder="Your Password" name="password" onChange={this.changeHandler} value={password}></input>
                    <button type="submit">Submit</button>
                </form>
            </section>
        )
    }
}


export default Login