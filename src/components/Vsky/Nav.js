import React, { Component } from 'react'
import Vnav from './Nav'


class Vnav extends Component {

    state = {
        longitude: -117.8133,
        latitude: 33.8885,
        showplanets: true, 
        showplanetlabels: true,
        constellations: false, 
        showstarlabels: false,
        showorbits: false, 
        meridian: false, 
        gridlines_az: false,
        constellationlabels: false,
        projection: 'stereo',
    }

    // changeHandler = e => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    render() {

    const { showPlanets, showPlanetLabels, constellations, showStarLabels, showOrbits, showMeridian, azimuthGridlines, constellationLabels, projection } = this.state
    const { changeHandler } = this.props

        return (

            <div className="vskyForm">

                <form>
                    <section>
                        Constellation: 
                        <select onChange={changeHandler} name='constellations' value={constellations}>
                            <option value="false">Off</option>
                            <option value="true">On</option>
                        </select>
                    </section>                    
                    <br />
                    <section>
                        Constellation Names: 
                        <select onChange={changeHandler} name='constellationLabels' value={constellationLabels}>
                                <option value="false">Off</option>
                                <option value="true">On</option>
                        </select> 
                    </section>
                    <br />
                    <section>
                        Gridlines: 
                        <select onChange={changeHandler} name='azimuthGridlines' value={azimuthGridlines}>
                                <option value="false">Off</option>
                                <option value="true">On</option>
                        </select> 
                    </section>
                    <br />
                    <section>
                        Meridian: 
                        <select onChange={changeHandler} name='showMeridian' value={showMeridian}>
                                <option value="false">Off</option>
                                <option value="true">On</option>
                        </select> 
                    </section>
                    <br />
                    <section>
                        Star Names: 
                        <select onChange={changeHandler} name='showStarLabels' value={showStarLabels}>
                                <option value="false">Off</option>
                                <option value="true">On</option>
                        </select>                     
                    </section>
                    <br />
                    <section>
                        Planets: 
                        <select onChange={changeHandler} name='showPlanets' value={showPlanets}>
                                <option value="true">On</option>
                                <option value="false">Off</option>
                        </select> 
                    </section>
                    <br />
                    <section>
                        Planet Names: 
                        <select onChange={changeHandler} name='showPlanetLabels' value={showPlanetLabels}>
                                <option value="true">On</option>
                                <option value="false">Off</option>
                        </select> 
                    </section>
                    <br />
                    <section>
                        Planet Orbits: 
                        <select onChange={changeHandler} name='showOrbits' value={showOrbits}>
                                <option value="false">Off</option>
                                <option value="true">On</option>
                        </select>  
                    </section>
                    <br />
                    <section>
                        View: 
                        <select onChange={changeHandler} name='projection' value={projection}>
                            <option value="stereo">Stereo</option>
                            <option value="polar">polar</option>
                            <option value="lambert">lambert</option>
                            <option value="equirectaungular">equirectaungular</option> 
                            <option value="mollweide">mollweide</option>
                            <option value="planechart">planechart</option>
                            <option value="gnomic">gnomic</option>
                        </select>      
                    </section>                               
                </form>
                        
            </div>


        )
    }

}



export default Vnav




