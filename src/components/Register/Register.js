

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// import './Register.css'

class Register extends Component {
    state = {
        username: '',
        password: '',
        logged: false
    }

    changeHandler = e => {
            console.log(e, "register changeHandler to this.setState")
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state.username, this.state.password)
    }

    onSubmit = async (e) => {
        console.log("on submit click")
        e.preventDefault();
        // const addUserResponse = await fetch('/users/register', {
        //     method: 'POST',
        //     credentials: 'include',
        //     body: JSON.stringify(this.state),
        //     headers: {
        //         'Content-type' : 'application/json'
        //     }
        // })

        // const parsedResponse = await addUserResponse.json();
        // if(parsedResponse.success) {
        //     this.props.doSetCurrentUser(parsedResponse.data)
        //         this.setState({
        //             logged: true,
        //         })
        // }
    }

    render(){
        const { username, password } = this.state
        return(
                <section className="registerForm">
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Your Name Here" name="username" onChange={this.changeHandler} value={username}></input>
                    <input type="password" placeholder="Your Password" name="password" onChange={this.changeHandler} value={password}></input>
                    <button type="submit">Register</button>
                </form>
             </section>
        )
    }
}


export default Register