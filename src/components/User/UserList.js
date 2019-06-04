import React, { Component } from 'react'

import '../Alerts/Alerts.css'

class UserList extends Component {

    state = {
        checkList: []
    }

    componentDidMount = () => {
        const { currentUser, closureList } = this.props
        let currentUserList = currentUser.userList;
        let compareClosureList = closureList;    
        let makeCheckList = [...currentUserList];

        for (let c = 0; c < compareClosureList.length; c++){
            for (let l = makeCheckList.length - 1; l >= 0; l--){
                if (makeCheckList[l].title === compareClosureList[c].title){
                    makeCheckList.splice(l, 1);
                }
            }
        }        
        this.setState({
            checkList: makeCheckList
        })
    }

    toggle = e => {
        e.currentTarget.classList.toggle('active');
    }

    showOnMap = (e) => {
        e.preventDefault()
    }

    render (){
        const { checkList } = this.state
        const { currentUser, deleteItem, handleSetMap } = this.props

        const myList = currentUser.userList.map((alert, i) => 
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
                            <div className="currentlyClosed">CURRENTLY CLOSED</div>
                            <div>{alert.fullName}</div>
                        <small>
                            <a className="npsLink" href={alert.url} target="_blank" rel="noopener noreferrer">{alert.title}</a>
                        </small>
                        </strong>
                    </div>
                    <div className="details">
                            {alert.description}<br/>
                            {/* {alert.addresses.postalCode}<br/>
                            {alert.addresses.city}<br/>
                            {alert.addresses.stateCode}<br/> */}
                    </div>
                </div>
                <div className="deleteBox">
                    <button className="deleteBtn" onClick={deleteItem.bind(null, alert._id, currentUser._id)}>Remove</button>
                </div>
            </section>
        )
        
        return (
            <>
                <h1>Tracking Closures:</h1>
                    { myList }
            </>      
        )
    }
}

export default UserList