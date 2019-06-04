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

    // editUser = async () => {
    //     try { const editUserResponse = await fetch(`/users/update/${this.props.match.params.id}`, {
    //       method: 'PUT',
    //       credentials: 'include',
    //       body: JSON.stringify(this.state.userToEdit),
    //       headers: {
    //         'Content-Type': 'application/json'
    //       }
          
    //     })
    //     console.log(editUserResponse)
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
                headers: {
                    'Content-type' : 'application/json'
                }
              })
              console.log(editUser, "<-----------editUser in editUser")
              const parsedResponse = await editUser.json();
              console.log(parsedResponse, "<==========parsed response")
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
        // const { submitEditUser, changeHandler } = this.props

        return(

            <section  className="enter">
                <form onSubmit={e => this.submitEditUser(e)}>
                    <input type="text" placeholder="Your Name Here" name="username" onChange={this.changeHandler()} value={this.props.currentUser.username}/>
                    <button type="submit">Edit User</button>
                </form>
                {/* <form onSubmit={e => this.submitEditUser(e)}>
                    <input type="password" placeholder="Your Password" name="password" onChange={this.changeHandler()} value={password}/>
                    <button type="submit">Edit Password</button>
                </form> */}
            </section> 
        )
    }
}

//   closeAndEdit = async (e) => {
//     e.preventDefault();

//     try {

//       const editResponse = await fetch('http://localhost:9000/api/v1/movies/' + this.state.movieToEdit._id, {
//         method: 'PUT',
//         body: JSON.stringify(this.state.movieToEdit),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })

//       const parsedResponse = await editResponse.json();


//       const editedMovieArray = this.state.movies.map((movie) => {

//         if(movie._id === this.state.movieToEdit._id){

//             movie = parsedResponse.data;

//         }

//         return movie
//       });


//       this.setState({
//         movies: editedMovieArray,
//         modalShowing: false
//       });

//     }catch(err){
//       console.log(err);
//     }
//   }

export default EditUser