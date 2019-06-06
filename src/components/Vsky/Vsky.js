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
        console.log(e.target.value, "value", e.target.name, "name")
        this.setState({
        [e.target.name]: !this.state[e.target.name]
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
                <form>
                    <section className="projectionD">
                        <select defaultValue={'DEFAULT'} onChange={this.changeHandler} name='projection' value={projection}>
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
                <iframe  title="VirtualSky" src={`https://virtualsky.lco.global/embed/index.html?${settings}`} />
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                {/* <Vnav setToggle={this.setToggle} changeHandler={this.changeHandler} /> */}



            <div className="vskyForm">

                <form>
                    <section>
                        <input type="button" onClick={(e) => {this.setToggle(e)}} name="constellations" value="Constellations"/>
                        <input type="button" onClick={(e) => {this.setToggle(e)}} name="constellationLabels" value="Names"/>
                        <input type="button" onClick={(e) => {this.setToggle(e)}} name="azimuthGridlines" value="Gridlines"/>
                        <input type="button" onClick={(e) => {this.setToggle(e)}} name="showMeridian" value="Meridian"/>
                        <input type="button" onClick={(e) => {this.setToggle(e)}} name="showStarLabels" value="Stars"/>
                        <input type="button" onClick={(e) => {this.setToggle(e)}} name="showPlanets" value="Planets"/>
                        <input type="button" onClick={(e) => {this.setToggle(e)}} name="showPlanetLabels" value="Planet Names"/>
                        <input type="button" onClick={(e) => {this.setToggle(e)}} name="showOrbits" value="Orbits"/>
                    </section>
                    </form>

            </div>


            </div>

        )
    }

}



export default Vsky




