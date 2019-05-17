import React, { Component } from 'react';
// import '../index.css'
import './Alerts.css'

class Alerts extends Component {

    doAddAlert = async (event, park) => {
        console.log(park, "<----park on doAddAlert")
        event.preventDefault()
        const addAlert = await fetch(`${process.env.REACT_APP_API}'/api/v1/${this.props.currentUser._id}/parks`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({park}),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const alertJson = await addAlert.json()
        this.props.doSetCurrentUser(alertJson.user)
        console.log(alertJson, "<----alertJson")
        console.log(addAlert, "<----addAlert")
    }

    toggle = event => {
        event.currentTarget.classList.toggle('active');
    }

    showOnMap = (event, park) =>{
        console.log(park)
        event.preventDefault()
        // console.log(this.props.lat, this.props.lng, "<==========showOnMap")
    }

    render(){
       
        const alertList = this.props.closureList.map((park, i) => {
            
                return (
                          
                    <section className="alertList" key={i}>
                            <div className="title" onClick={this.toggle}>
                                <div>
                                    <strong>{park.fullName}</strong>
                                        <br />
                                    <small>{park.title}</small>
                                    </div>
                                    
                            <div className="details">
                                {park.description}
                            </div>
                            

                        </div>

                        <form onSubmit={(map) => this.showOnMap(map, park)}>
                                    <button type="submit" onClick={this.props.handleSetMap} value={park.latLong}>Map</button>
                        </form>

                        <form onSubmit={(event) => this.doAddAlert(event, park)}>
                            {
                                this.props.currentUser && <button className="alertsButton" type="submit">Add to List</button>             
                            }
                        </form>
                    </section>  
                )  
        })

        return(
            <React.Fragment>
            <h1>Current Park Closures</h1>
                    {alertList}
            </React.Fragment>
        )
    }
}

export default Alerts;