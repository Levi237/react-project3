import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Info from '../Content/Info'

import './Park.css'

class ParkShow extends Component {

    toggle = e => {
        e.currentTarget.classList.toggle('active');
    }
    render(){
        const { park, closureList } = this.props

        const alertOn = closureList.map((alert, i) => {
            if (alert.id === park.id){
                return <><Link to={'/alertlist'}><img className="alertSign" key={i} src="./alert.png"/></Link>{alert.title}</>
            }
    })
    
        return (
            <>
                { !park.name && 
                <Info />
                }
                { park.name &&
                    <>
                    
                    <h2>{park.designation}</h2>
                        {alertOn}
                    <h3><a className="npsLink" href={park.url} target="_blank" rel="noopener noreferrer">{park.fullName}, {park.states}</a></h3>
                        <p>{park.description}</p>

                    <div className="title" onClick={this.toggle}>
                        Seasonal Weather Information
                        <div className="weatherTitle">
                            <span className="mn-dwn-arw"></span>
                        </div>                            
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