import React, { Component } from 'react'
import './Park.css'

class ParkShow extends Component {

    showOnMap = (e) => {
        e.preventDefault()
    }

    render(){
    const { park } = this.props
        return (
            <>
            { park.name &&
            <>
            <h1>{park.name}</h1>
            <h2>{park.designation}</h2>
            <h3>{park.fullName}, {park.states}</h3>
            <p>{park.description}</p>
            Weather:
            <p>{park.weatherInfo}</p>
            </>
            }

            </>
        )
    }
}



export default ParkShow