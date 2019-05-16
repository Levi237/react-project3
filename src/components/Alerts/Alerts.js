import React, { Component } from 'react';
// import '../index.css'
import './Alerts.css'

class Alerts extends Component {
    state = {
        lat: '',
        lng: ''
    }

    doAddAlert = async (event, park) => {
        console.log(park)
        event.preventDefault()
        const addAlert = await fetch(`/users/${this.props.currentUser._id}/parks`, {
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


    showOnMap = (event, park) =>{
        console.log(park)
        event.preventDefault()
        // console.log(this.state.lat, this.state.lng, "<showOnMap")
    }

    handleSetMap = e => {
        // console.log(e.target.value, '<--------e.target.value')
        // console.log('click handleSetMap')
        let firstSplit = e.target.value.split(':')
        // console.log(firstSplit)
        // console.log(firstSplit[1].split(',')[0], firstSplit[2], '<=== check splits 1, 2')
        this.setState({
            lat: firstSplit[1].split(',')[0],
            lng: firstSplit[2]
        })
        
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
                                    <button type="submit" onClick={this.handleSetMap} value={park.latLong}>Map</button>
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