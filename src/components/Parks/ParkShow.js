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
                                <button>Seasonal Weather:</button>                            
                        <div className="details">
                        <p>{park.weatherInfo}</p>
                        </div>
                    </div>

        
            
            </>
            }
            
            </>
        )
    }
}



export default ParkShow