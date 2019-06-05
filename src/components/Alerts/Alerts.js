import React, { Component } from 'react';
import './Alerts.css'

class Alerts extends Component {

    doAddAlert = async (event, park) => {
        event.preventDefault()
        const addAlert = await fetch(`${process.env.REACT_APP_API}/api/v1/${this.props.currentUser._id}/parks`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({park}),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const alertJson = await addAlert.json()
        this.props.doSetCurrentUser(alertJson.user)
    }

    toggle = e => {
        e.currentTarget.classList.toggle('active');
    }

    showOnMap = (event) =>{
        event.preventDefault()
    }

    render(){
        const { closureList, handleSetMap, currentUser } = this.props
        let currentUserList = []
        if (currentUser) {
            currentUserList = currentUser.userList
        }
        
        const alertList = closureList.map((park, i) => {
            return (
                                
                <section className="alertList" key={i}>
                    <form className="mapBtn" onSubmit={(map) => this.showOnMap(map, park)}>
                        <button type="submit" onClick={handleSetMap} value={park.latLong}>Map</button>
                    </form>
                    <div className="title" onClick={this.toggle}>
                        <div>
                            <strong>
                                <div className="currentlyClosed">CURRENTLY CLOSED</div>
                                <div>{park.fullName}</div>                            
                            <small>
                                <a className="npsLink" href={park.url} target="_blank" rel="noopener noreferrer">{park.title}</a>
                            </small>
                            </strong>
                        </div>
                        <div className="details">
                            {park.description}
                        </div>
                    </div>
                        { currentUser && 
                        <form className="addBox" onSubmit={(e) => this.doAddAlert(e, park)}>                                 
                            <button className={currentUserList.map((check) => check.title === park.title && " selected ")+" alertsButton"} type="submit">Add to List</button>                    
                        </form>
                        }                
                </section>  
            )  
        })

        return(
            <>
                <h1>Current Park Closures</h1>
                <div>
                    {alertList}
                </div>
            </>
        )
    }
}

export default Alerts;