import React, { Component } from 'react'
import Vnav from './Nav'
import './Vsky.css'

class Vsky extends Component {

    state = {
        showplanets: true, 
        showplanetlabels: false,
        constellations: true, 
        showstarlabels: false,
        showorbits: false, 
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
        constellations: !this.state.constellations
        })
    }
    
    // showModal = () => {
    //     this.setState({
    //       ...this.state,
    //       [show]: !this.state.show
    //     })
    //   }
    // <input type="button" onClick={this.showModal} value="Show Modal" />
    //           <Modal show={this.state.show} onClose={this.showModal}>
    //             <Vsky />
    //           </Modal>
    render() {

    const { showPlanets, showPlanetLabels, constellations, showStarLabels, showOrbits, showMeridian, azimuthGridlines, constellationLabels, projection } = this.state
    const { lat, lng, changeHandler  } = this.props    

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
color=dodgerblue&\
az=271.5665939727662`

// const { showPlanets, showPlanetLabels, constellations, showStarLabels, showOrbits, showMeridian, azimuthGridlines, constellationLabels, projection } = this.state
// const { changeHandler } = this.props

        return (

            <div className="vskyContainer">
            
                <iframe  title="VirtualSky" src={`https://virtualsky.lco.global/embed/index.html?${settings}`} />
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                {/* <Vnav setToggle={this.setToggle} changeHandler={this.changeHandler} /> */}



            <div className="vskyForm">

                <form>
                    <section>
                        Constellation: <br />
                        <input type="button" onClick={(e) => {this.setToggle(e)}} name={constellations} value={constellations}/>
                        {/* <select onChange={changeHandler} name='constellations' value={constellations}>
                            <option value="false">Off</option>
                            <option value="true">On</option>
                        </select> */}
                    </section>                    
                    
                    <section>
                        Names: <br />
                        <select onChange={changeHandler} name='constellationLabels'>
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


            </div>

        )
    }

}



export default Vsky




