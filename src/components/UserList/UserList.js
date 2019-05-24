import React, { Component } from 'react'

import './UserList.css'
import '../Alerts/Alerts.css'
// import Alerts from '../Alerts/Alerts';

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
                        { checkList.map((check) => check.title === alert.title
                        ? <div className="alertOpen">NOW OPEN</div>
                        : ''  
                        )}
                        <div>{alert.fullName}</div>
                        <a className="listAlink" href={alert.url} target="_blank" rel="noopener noreferrer">{alert.title}{alert.name}</a>
                    </strong>
                    </div>
                    <div className="details">
                            {alert.description}<br/>
                            {/* {alert.addresses.postalCode}<br/>
                            {alert.addresses.city}<br/>
                            {alert.addresses.stateCode}<br/> */}
                    </div>
                    <div><button className="deleteBtn" onClick={deleteItem.bind(null, alert._id, currentUser._id)}>Remove</button></div>
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