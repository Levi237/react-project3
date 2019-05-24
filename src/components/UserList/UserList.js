import React, { Component } from 'react'
import './UserList.css'

class UserList extends Component {

    state = {
        checkList: []
    }

    componentDidMount = () => {
        let currentUserList = this.props.currentUser.userList;
        let compareClosureList = this.props.closureList;
        
        let makeCheckList = [...currentUserList];
        //Array.from(currentuserList) // also works

        for (let c = 0; c < compareClosureList.length; c++){
            for (let l = makeCheckList.length - 1; l >= 0; l--){

                if (makeCheckList[l].id === compareClosureList[c].id){
                    makeCheckList.splice(l, 1);
                }
            }
        }        
        this.setState({
            checkList: makeCheckList
        })
    }

    toggle = event => {
        event.currentTarget.classList.toggle('active');
    }
    // showOnMap = (event, park) =>{
    showOnMap = (event) => {
        event.preventDefault()
    }

    render (){
        const { checkList } = this.state
        console.log(checkList, "<==============checkList on UserList")
        const { currentUser, deleteItem, handleSetMap } = this.props
        const myList = currentUser.userList.map((alert, i) => 
            // checkList.map((check) =>
            <section className="alertList" key={i}>
                <form className="mapBtn" onSubmit={this.showOnMap}>
                    <button onClick={handleSetMap} value={alert.latLong}>Map</button>
                </form>
                <div className="title" onClick={this.toggle}>
                    <div>
                    <strong>
                        { checkList.map((check) => check.id === alert.id
                        ? <div className="alertOpen">THIS PARK IS NOW OPEN</div>
                        : ''  
                        )}
                        <div>{alert.fullName}</div>
                        <a className="listAlink" href={alert.url} target="_blank" rel="noopener noreferrer">{alert.title}{alert.name}</a>
                    </strong>
                    </div>
                    <div className="details">
                            {alert.description}
                    </div>
                    <button className="userListButton" onClick={deleteItem.bind(null, alert._id, currentUser._id)}>Remove from List</button>
                </div>
            </section>
        )
        // )
        
        return (
            <React.Fragment>
                <h1>Tracking Closures:</h1>
                    { myList }
            </React.Fragment>      
        )
    }
}

export default UserList