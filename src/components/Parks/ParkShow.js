import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ParkInfo from '../Content/Parks'

import './Park.css'

class ParkShow extends Component {

    // showOnMap = (e) => {
    //     e.preventDefault()
    // }
    toggle = e => {
        e.currentTarget.classList.toggle('active');
    }
    render(){
    const { park, closureList } = this.props

    const alertOn = closureList.map((alert, i) => {
        if (alert.id === park.id){

            return <><h1>{park.name}<Link to={'/alertlist'}><img className="alertSign" key={i} src="./alert.png"/></Link></h1></>

        }
        
    })
    
        return (

            <>
            { !park.name && 
            <ParkInfo />

            }
            { park.name &&
            <>
            {alertOn}
            
            <h2>{park.designation}</h2>
            <h3>{park.fullName}, {park.states}</h3>
            <p>{park.description}</p>

            <div className="title" onClick={this.toggle}>
            Seasonal Weather Information<div className="weatherTitle"><span className="mn-dwn-arw"></span></div>                            
                        <div className="details">
                        {park.weatherInfo}
                        </div>
                    </div>

        
            
            </>
            }
            
            </>
        )
    }
}



export default ParkShow