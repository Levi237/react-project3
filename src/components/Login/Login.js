import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

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
            this.props.doSetCurrentUser(parsedResponse.user, {
                logged: true,
            })
            // data: foundUser,
            // success: true
        }
    }

    render(){
        if (this.state.logged) {
            return <Redirect to='/' />
        }
        return(
            <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Your Name" name="name" onChange={this.changeHandler} value={this.state.name}></input>
                <input type="password" placeholder="Your Password" name="password" onChange={this.changeHandler} value={this.state.password}></input>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Login