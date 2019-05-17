import React, { Component } from 'react'
import './UserList.css'

class UserList extends Component {

    showOnMap = (event, park) =>{
        event.preventDefault()
    }

    render (){
        const { currentUser, deleteItem } = this.props
        const myList = currentUser.userList.map((alert, i) => 
            <section className="listItem" key={i}>
                <strong>
                    <div>{alert.fullName}</div>
                    <a className="listAlink" href={alert.url} target="_blank" rel="noopener noreferrer">{alert.title}{alert.name}</a>
                </strong><br />
                <form onSubmit={this.showOnMap}><button onClick={this.props.handleSetMap} value={alert.latLong}>Map</button></form><button className="userListButton" onClick={deleteItem.bind(null, alert._id, currentUser._id)}>Remove from List</button>
            </section>
        )
        return (
            <div className="myListContainer">
                <h4>Hello {currentUser.username}</h4>
                    { myList }
            </div>      
        )
    }
}

export default UserList