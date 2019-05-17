import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './Register.css'

class Register extends Component {
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
        const registerResponse = await fetch(process.env.REACT_APP_API+'/api/v1', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'Content-type' : 'application/json'
            }
        })
        const parsedResponse = await registerResponse.json();
        if(parsedResponse.user) {
            this.props.doSetCurrentUser(parsedResponse.user)
                this.setState({
                    logged: true,
                })
        }
    }

    render(){
        const { username, password } = this.state
        return(
            <React.Fragment>
                {
            this.state.logged
            ? <Redirect to={`${process.env.REACT_APP_API}'/api/v1/'${this.props.currentUser._id}`} />
            : <RegisterForm 
                changeHandler={this.changeHandler}
                onSubmit={this.onSubmit}
                username={username}
                password={password}
                />
                }

            </React.Fragment>
        )
    }
}

const RegisterForm = ({changeHandler, onSubmit, username, password}) => 
<section  className="registerForm">
    <form onSubmit={e => onSubmit(e)}>
         <input type="text" placeholder="Your Name Here" name="username" onChange={e => changeHandler(e)} value={username}></input>
         <input type="password" placeholder="Your Password" name="password" onChange={e => changeHandler(e)} value={password}></input>
         <button type="submit">Register</button>
     </form>
</section>



export default Register