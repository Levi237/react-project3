import React, { Component } from 'react'
import Vnav from './Nav'

class Vsky extends Component {

    state = {
        // longitude: -117.8133,
        // latitude: 33.8885,
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

                {/* <form>
                Constellation: 
                <select onChange={this.changeHandler} name='constellations' value={constellations}>
                        <option value="false">Off</option>
                        <option value="true">On</option>
                </select>
                <br />
                Constellation Names: 
                <select onChange={this.changeHandler} name='constellationLabels' value={constellationLabels}>
                        <option value="false">Off</option>
                        <option value="true">On</option>
                </select> 
                <br />
                Gridlines: 
                <select onChange={this.changeHandler} name='azimuthGridlines' value={azimuthGridlines}>
                        <option value="false">Off</option>
                        <option value="true">On</option>
                </select> 
                <br />
                Meridian: 
                <select onChange={this.changeHandler} name='showMeridian' value={showMeridian}>
                        <option value="false">Off</option>
                        <option value="true">On</option>
                </select> 
                <br />
                Star Names: 
                <select onChange={this.changeHandler} name='showStarLabels' value={showStarLabels}>
                        <option value="false">Off</option>
                        <option value="true">On</option>
                </select>                     
                <br />
                Planets: 
                <select onChange={this.changeHandler} name='showPlanets' value={showPlanets}>
                        <option value="true">On</option>
                        <option value="false">Off</option>
                </select> 
                <br />
                Planet Names: 
                <select onChange={this.changeHandler} name='showPlanetLabels' value={showPlanetLabels}>
                        <option value="true">On</option>
                        <option value="false">Off</option>
                </select> 
                <br />
                Planet Orbits: 
                <select onChange={this.changeHandler} name='showOrbits' value={showOrbits}>
                        <option value="false">Off</option>
                        <option value="true">On</option>
                </select>  
                <br />
                View: 
                <select onChange={this.changeHandler} name='projection' value={projection}>
                        <option value="stereo">Stereo</option>
                        <option value="polar">polar</option>
                        <option value="lambert">lambert</option>
                        <option value="equirectaungular">equirectaungular</option>
                        <option value="mollweide">mollweide</option>
                        <option value="planechart">planechart</option>
                        <option value="gnomic">gnomic</option>
                </select>                                     

                </form> */}
                        
            </div>



                // <div>
                // <ToggleDiv setToggle={this.setToggle} setCoordinates={this.setCoordinates} />
                // <IframeWrangler title="virtualSky" style={{
                //         }}
                //             src={`https://virtualsky.lco.global/embed/index.html?${settings}`}>
                //     </IframeWrangler>
                // </div>

        )
    }

}



export default Vsky




