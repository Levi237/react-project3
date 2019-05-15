import React, { Component } from 'react'
import './UserList.css'

import EditUser from '../EditUser/EditUser'

class UserList extends Component {

    render (){
        const { currentUser, deleteItem } = this.props
        const myList = currentUser.userList.map((alert, i) => 
            <section className="listItem" key={i}>
                <strong>
                    <a className="listAlink" href={alert.url} target="_blank" rel="noopener noreferrer">{alert.name}</a><br />
                </strong>
                <button className="userListButton" onClick={deleteItem.bind(null, alert._id, currentUser._id)}>Remove from List</button>
            </section>
        )
        return (
            <div className="myListContainer">
                <h4>Hello {currentUser.username}</h4>
                <EditUser currentUser={currentUser} doSetCurrentUser={this.doSetCurrentUser} editSubmit={this.editSubmit}/>
                
                    { myList }
                
            </div>      
        )
    }
}

export default UserList