import React, { Component } from 'react'


class Vnav extends Component {

    render() {

    const { changeHandler, showPlanets, showPlanetLabels, constellations, showStarLabels, showOrbits, showMeridian, azimuthGridlines, constellationLabels, projection } = this.props

        return (

            <div className="largeStarBtn">
                <form>

                    <section>
                        Constellation: <br />
                        <select onChange={changeHandler} name='constellations' value={constellations}>
                            <option value="false">Off</option>
                            <option value="true">On</option>
                        </select>
                    </section>                    
                    
                    <section>
                        Names: <br />
                        <select onChange={changeHandler} name='constellationLabels' value={constellationLabels}>
                            <option value="false">Off</option>
                            <option value="true">On</option>
                        </select> 
                    </section>
                    
                    <section>
                        Gridlines: <br />
                        <select onChange={changeHandler} name='azimuthGridlines' value={azimuthGridlines}>
                            <option value="true">On</option>
                            <option value="false">Off</option>
                        </select> 
                    </section>
                    
                    <section>
                        Meridian: <br />
                        <select onChange={changeHandler} name='showMeridian' value={showMeridian}>
                            <option value="false">Off</option>
                            <option value="true">On</option>
                        </select> 
                    </section>
                    
                    <section>
                        Stars: <br />
                        <select onChange={changeHandler} name='showStarLabels' value={showStarLabels}>
                            <option value="false">Off</option>
                            <option value="true">On</option>
                        </select>                     
                    </section>
                    
                    <section>
                        Planets: <br />
                        <select onChange={changeHandler} name='showPlanets' value={showPlanets}>
                            <option value="true">On</option>
                            <option value="false">Off</option>
                        </select> 
                    </section>
                    
                    <section>
                        Names: <br />
                        <select onChange={changeHandler} name='showPlanetLabels' value={showPlanetLabels}>
                            <option value="true">On</option>
                            <option value="false">Off</option>
                        </select> 
                    </section>
                    
                    <section>
                        Orbits: <br />
                        <select onChange={changeHandler} name='showOrbits' value={showOrbits}>
                            <option value="false">Off</option>
                            <option value="true">On</option>
                        </select>  
                    </section>
                    
                    <section>
                        <select defaultValue={'DEFAULT'} onChange={changeHandler} name='projection' value={projection}>
                            <option value="DEFAULT" disabled>--- Select Projection ---</option>
                            <option value="equirectaungular">equirectaungular</option> 
                            <option value="stereo">Stereo</option>
                            <option value="polar">polar</option>
                            <option value="lambert">lambert</option>
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




