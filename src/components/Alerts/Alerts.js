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

    toggle = event => {
        event.currentTarget.classList.toggle('active');
    }

    showOnMap = (event) =>{
        event.preventDefault()
    }

    render(){
        const { closureList, handleSetMap, currentUser } = this.props
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
                    <form onSubmit={(event) => this.doAddAlert(event, park)}>
                    { currentUser.userList.map((check) => check.title === alert.title
                            // ? <div className="alertOpen">NOW OPEN</div>

                    
                        // { currentUser && 
                        ? <button className="alertsButton" type="submit">DO NOT ADD LIST</button>        
                        // }
                        : <button className="alertsButton" type="submit">Add to List</button>   )}
                    </form>
                </section>  
            )  
        })

        return(
            <React.Fragment>
            <h1>Current Park Closures</h1>
            <div>
                    {alertList}
            </div>
            </React.Fragment>
        )
    }
}

export default Alerts;