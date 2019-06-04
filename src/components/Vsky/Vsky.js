import React, { Component } from 'react'
import Vnav from './Nav'
import './Vsky.css'

class Vsky extends Component {

    state = {
        showplanets: true, 
        showplanetlabels: true,
        constellations: false, 
        showstarlabels: false,
        showorbits: false, 
        meridian: false, 
        gridlines_az: false,
        constellationlabels: false,
        projection: 'equirectaungular',
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    // setToggle=(data) => {
    //     this.setState({
        // [data]: !this.state[data]
        // })
    // }
    
    render() {

    const { showPlanets, showPlanetLabels, constellations, showStarLabels, showOrbits, showMeridian, azimuthGridlines, constellationLabels, projection } = this.state
    const { lat, lng } = this.props    

    const settings=`longitude=${lng}&\
latitude=${lat}&\
showplanets=${showPlanets}&\
showplanetlabels=${showPlanetLabels}&\
constellations=${constellations}&\
showstarlabels=${showStarLabels}&\
scalestars=1.3&\
showorbits=${showOrbits}&\
meridian=${showMeridian}&\
gridlines_az=${azimuthGridlines}&\
constellationlabels=${constellationLabels}&\
showdate=true&\
projection=${projection}&\
showposition=true&\
live=true&\
color=black&\
az=271.5665939727662`

        return (

            <div className="vskyContainer">
            <Vnav changeHandler={this.changeHandler} /><br/>
                <iframe  title="VirtualSky" src={`https://virtualsky.lco.global/embed/index.html?${settings}`} />

            </div>

        )
    }

}



export default Vsky




