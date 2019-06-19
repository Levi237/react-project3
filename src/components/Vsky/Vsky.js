import React, { Component } from 'react';

import './Vsky.css';

import ParkNav from '../Parks/Nav';

class Vsky extends Component {

    state = {
        showplanets: true, 
        showplanetlabels: false,
        constellations: true, 
        showstarlabels: false,
        showorbits: false,
        meteorshowers: true, 
        negative: false,
        meridian: false, 
        azimuthGridlines: true,
        constellationlabels: false,
        projection: 'lambert',
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    setToggle=(e) => {
        this.setState({
        [e.target.name]: !this.state[e.target.name]
        })
    }
    
    render() {

    const { showPlanets, meteorshowers, negative, showPlanetLabels, constellations, showStarLabels, showOrbits, showMeridian, azimuthGridlines, constellationLabels, projection } = this.state
    const { lat, lng, park, parks, handleSkyMap, changeShowPark, show  } = this.props    

    const settings=`longitude=${lng}&\
latitude=${lat}&\
showplanets=${showPlanets}&\
showplanetlabels=${showPlanetLabels}&\
constellations=${constellations}&\
showstarlabels=${showStarLabels}&\
scalestars=1.3&\
showorbits=${showOrbits}&\
meteorshowers=${meteorshowers}&\
meridian=${showMeridian}&\
gridlines_az=${azimuthGridlines}&\
negative=${negative}&\
constellationlabels=${constellationLabels}&\
showdate=true&\
projection=${projection}&\
showposition=true&\
live=true&\
color=cornflowerblue&\
az=271.5665939727662`

        return (
            <div className={(show ? "vskyLargeContainer" : "vskySmallContainer")}>
                {
                show &&
                <form>
                    <section className="projection">
                        <select onChange={this.changeHandler} name='projection' value={projection}>
                            <option value="equirectaungular">Round</option> 
                            <option value="stereo">Stereo</option>
                            <option value="polar">polar</option>
                            <option value="lambert">lambert</option>
                            <option value="mollweide">mollweide</option>
                            <option value="planechart">planechart</option>
                            <option value="gnomic">gnomic</option>
                        </select>      
                    </section>              
                    <span><ParkNav park={park} parks={parks} handleSkyMap={handleSkyMap} changeShowPark={changeShowPark}/></span>
                </form>
                }
                <iframe  title="VirtualSky" src={`https://virtualsky.lco.global/embed/index.html?${settings}`} />
                <div className={(show ? "largeStarBtn" : "smallStarBtn")}>
                    <form>
                        <section>
                            <input type="button" onClick={(e) => {this.setToggle(e)}} name="constellations" value="Constellations"/>
                            <input type="button" onClick={(e) => {this.setToggle(e)}} name="constellationLabels" value="Const Names"/>
                            {show &&
                            <input type="button" onClick={(e) => {this.setToggle(e)}} name="azimuthGridlines" value="Gridlines"/>
                            }
                            {show &&
                            <input type="button" onClick={(e) => {this.setToggle(e)}} name="showMeridian" value="Meridian"/>
                            }
                            <input type="button" onClick={(e) => {this.setToggle(e)}} name="showStarLabels" value="Stars"/>
                            <input type="button" onClick={(e) => {this.setToggle(e)}} name="showPlanets" value="Planets"/>
                            <input type="button" onClick={(e) => {this.setToggle(e)}} name="showPlanetLabels" value="Planet Names"/>
                            {show &&
                            <input type="button" onClick={(e) => {this.setToggle(e)}} name="showOrbits" value="Orbits"/>
                            }
                            {show && 
                            <input type="button" onClick={(e) => {this.setToggle(e)}} name="negative" value="Negative"/>
                            }
                        </section>
                    </form>
                </div>
            </div>
        )
    }
}



export default Vsky




