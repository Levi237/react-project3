import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// import './Login.css'

class EditUser extends Component {
    state = {
        username: '',
        password: '',
        // logged: true
    }

    changeHandler = e => {
        
        this.setState({
            [e.target.name]: e.target.value
        })
                // console.log(this.state.username, this.state.password)
    }
    // export function updateBlogPost(id, data) {
    //     return fetch('http://api.symfony-3.dev/app_dev.php/posts/' + id, {
    //         method: 'PUT',
    //         mode: 'CORS',
    //         body: JSON.stringify(data),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(res => {
    //         return res;
    //     }).catch(err => err);
    // }


    // editSubmit = async (e) => {
    //     e.preventDefault();
    //     const editUser = await fetch('/users/'+currentUserId+'/edit', {
    //         method: 'POST',
    //         credentials: 'include',
    //         body: JSON.stringify(this.state),
    //         headers: {
    //             'Content-type' : 'application/json'
    //         }
    //     })
    //     console.log(editUser)
    //     const parsedResponse = await editUser.json();
    //     console.log(parsedResponse)
    //     if(parsedResponse.data) {
    //         this.props.doSetCurrentUser(parsedResponse.data)
    //             this.setState({
    //                 logged: true,
    //             })
    //     }
    // }

    render(){
        console.log(this.state.username, this.state.password)
        const { username, password } = this.state
        return(
//             this.state.logged
//             ? <Redirect to={`/users/${this.props.currentUser._id}`} />
//             : 
            <section className="loginForm">
                <form editSubmit={this.editSubmit}>
                    <input type="text" placeholder="Your Name Here" name="username" onChange={this.changeHandler} value={username}></input>
                    <input type="password" placeholder="Your Password" name="password" onChange={this.changeHandler} value={password}></input>
                    <button type="submit">Submit</button>
                </form>
            </section>
        )
    }
}


export default EditUser