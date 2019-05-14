import React, { Component } from 'react'

class UserList extends Component {

    // deleteMovie = async (id, e) => {
    //     console.log(id, ' this is id')
    //     e.preventDefault();
    //     try {
    //         const deleteMovie = await fetch('http://localhost:9000/api/v1/movies/' + id, {
    //           method: 'DELETE'
    //         });
    //         console.log('inside try')
    //         const deleteMovieJson = await deleteMovie.json();
    //         this.setState({movies: this.state.movies.filter((movie, i) => movie._id !== id)});
    
    //     } catch(err) {
    //       console.log(err, ' error')
    //     }
    //   }
    deleteItem = async (id, e) => {
        console.log(id, '<----------------------- this is id')
        e.preventDefault();
        try {
            const deleteItem = await fetch('/users/'+id, {
                method: 'DELETE'
            });
            console.log('==================inside try delete function==================')
            const deleteItemJson = await deleteItem.json();
            this.setState({currentUser: this.state.userList.filter((alert, i) => alert._id !== id)})

        } catch(err) {
            console.log(err, 'error')
        }
    }
    render (){
        const { currentUser } = this.props
        const myList = currentUser.userList.map((alert, i) => 
            <li key={i}>
                <a href={alert.url} target="_blank" rel="noopener noreferrer">{alert.name}</a>
                <button onClick={this.deleteItem.bind(null, alert._id)}>Delete</button>
            </li>
        )
        return (
            <div>
                <h4>Hello {currentUser.username}</h4>
                <ul>
                    { myList }
                </ul>
            </div>      
        )
    }
}

export default UserList