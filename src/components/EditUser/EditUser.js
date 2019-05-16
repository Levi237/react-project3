import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';

// import './Login.css'

class EditUser extends Component {
    state = {
        username: '',
        password: '',
        // logged: true
    }

editUsers = async (e) => {
    e.preventDefault();
  console.log(e.target, '<-----------e');
    
}

    changeHandler = e => {
        
        this.setState({
            [e.target.name]: e.target.value
        })
                console.log(this.state.username, this.state.password)
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
        const { username, password } = this.state
        return(
//             this.state.logged
//             ? <Redirect to={`/users/${this.props.currentUser._id}`} />
//             : 
            <section className="loginForm">
                <form onSubmit={this.editUsers}>
                    <input type="text" placeholder="Your Name Here" name="username" onChange={this.changeHandler} value={username}></input>
                    <input type="password" placeholder="Your Password" name="password" onChange={this.changeHandler} value={password}></input>
                    <button type="submit">EDIT USER</button>
                </form>
            </section>
        )
    }
}


export default EditUser

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