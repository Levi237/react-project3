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
    console.log(this.state.username, this.state.password, "<--------changeHandler")
    }


          
    //     })

    //     const editUserJson = await editUserResponse.json();
    //     console.log(editUserJson)
    //     this.setState({
    //       user: editUserJson
    //     },()=>{
    //       this.props.doSetCurrentUser(editUserJson)
    //     })
          
    //     } catch(err){
    //       console.log(err)
    //     }
    //   }


    submitEditUser = async (e) => {
        e.preventDefault();
        console.log(this.state.username, '<---------this.state.username===============<<<<<<')
        console.log(this.state, "<--------------this.state")
        console.log(e.target.username, '<-----------e.target.username');
        let userid = this.props.currentUser
        try {
            const editUser = await fetch(process.env.REACT_APP_API+'/api/v1/'+userid._id+'/edit', {
                method: 'PUT',
                credentials: 'include',
                body: JSON.stringify(this.state),
                // body: JSON.stringify(this.state.editUser),
                headers: {
                    'Content-type' : 'application/json'
                }
              })
              console.log(editUser, "<-----------editUser in submitEditUser")
              const parsedResponse = await editUser.json();
              console.log(parsedResponse, "<==========parsed response from submitEditUser")
              if(parsedResponse.data) {
                  this.props.doSetCurrentUser(parsedResponse.data)
                      this.setState({
                          logged: true,
                      })
              }
        } catch(err){
            console.log(err)
        }

      }

    // edituser = async (id, e) => {
    //     console.log(id, "<------- id on edituser")
      
    //     e.preventDefault();
    //     const editUser = await fetch('/users/'+id+'/edit', {
    //         method: 'PUT',
    //         credentials: 'include',
    //         body: JSON.stringify(this.state),
    //         headers: {
    //             'Content-type' : 'application/json'
    //         }
    //     })
    //       console.log(editUser)
    //       const parsedResponse = await editUser.json();
    //       console.log(parsedResponse)
    //       if(parsedResponse.data) {
    //           this.props.doSetCurrentUser(parsedResponse.data)
    //               this.setState({
    //                   logged: true,
    //               })
    //       }
    //     }

    render(){

        console.log(this.state.username, this.state.password)

        // const { username, password } = this.state
        const { currentUser } = this.props

        return(

            <section  className="enter">
                <form onSubmit={e => this.submitEditUser(e)}>
                    <input type="text" placeholder={currentUser.username} name="username" onChange={this.changeHandler}/>
                    <button type="submit">Edit User</button>
                </form>
                <form onSubmit={e => this.submitEditUser(e)}>
                    <input type="password" placeholder="Your Password" name="password" onChange={this.changeHandler} value={password}/>
                    <button type="submit">Edit Password</button>
                </form>
            </section> 
        )
    }
}


export default EditUser