import React, { Component } from 'react'
import './UserList.css'

class UserList extends Component {

    state = {
        checkList: []
    }

    componentDidMount = () => {
        let currentUserList = this.props.currentUser.userList;
        let compareClosureList = this.props.closureList;
        
        let loopUser = [...currentUserList];
        //Array.from(currentuserList) // also works

        for (let c = 0; c < compareClosureList.length; c++){
            for (let l = loopUser.length - 1; l >= 0; l--){

                if (loopUser[l].id === compareClosureList[c].id){
                    loopUser.splice(l, 1);
                }
            }
        }        
        this.setState({
            checkList: loopUser
        })
    }

    // showOnMap = (event, park) =>{
    showOnMap = (event) => {
        event.preventDefault()
    }

    render (){
        const { currentUser, deleteItem, handleSetMap } = this.props
        const myList = currentUser.userList.map((alert, i) => 
            <section className="listItem" key={i}>
                <strong>
                    {   this.state.checkList.id === alert.id &&
                        <div>THIS PARK IS NOW OPEN</div>

                    }
                    <div>{alert.fullName}</div>
                    <a className="listAlink" href={alert.url} target="_blank" rel="noopener noreferrer">{alert.title}{alert.name}</a>
                </strong><br />
                <form className="mapBtn" onSubmit={this.showOnMap}>
                    <button onClick={handleSetMap} value={alert.latLong}>Map</button>
                </form>
                    <button className="userListButton" onClick={deleteItem.bind(null, alert._id, currentUser._id)}>Remove from List</button>
            </section>
        )
        return (
            <React.Fragment>
                <h1>Tracking Closures:</h1>
                    { myList }
            </React.Fragment>      
        )
    }
}

export default UserList