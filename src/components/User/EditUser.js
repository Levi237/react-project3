import React, { Component } from 'react';

export class EditUser extends Component {
    
    state = {
        username: '',
        password: '',
        logged: true
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitEditUser = async (e) => {
        e.preventDefault();
        const { currentUser, doSetCurrentUser } = this.props
        try {
            const editUser = await fetch(process.env.REACT_APP_API+'/api/v1/'+currentUser._id+'/edit', {
                method: 'PUT',
                credentials: 'include',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-type' : 'application/json'
                }
              })
              const parsedResponse = await editUser.json();
              if(parsedResponse.data) {
                  doSetCurrentUser(parsedResponse.data)
                      this.setState({
                          logged: true,
                      })
              }
        } catch(err){
            console.log(err)
        }

      }


    render(){
        const { currentUser } = this.props

        return(

            <section  className="enter">
                <form onSubmit={e => this.submitEditUser(e)}>
                    <input type="text" placeholder={currentUser.username} name="username" onChange={this.changeHandler}></input>
                    <input type="password" placeholder="Change Password" name="password" onChange={this.changeHandler}></input>
                    <button type="submit">Edit</button>
                </form>
            </section> 
        )
    }
}


export default EditUser