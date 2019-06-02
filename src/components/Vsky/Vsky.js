import React, { Component } from 'react'


// import styled from "styled-components"

// const Vframe = styled.iframe`
// height: 70vh;
// width: 70vw;
// position: absolute;
// border-radius: 10% 10% 10% 10%;
// border: none;
// z-index: 1;
// scrolling: no;
// left: 0;
// right: 0;
// margin-top: 14vh;
// margin-left: auto;
// margin-right: auto;
// allow-transparency: true
// `

class Vsky extends Component {

    // state = {
    //     id: 'starmap',
    //     projection: 'mollweide',
    //     showstarlabels: true,
    //     ground: true,
    //     mouse: true,
    //     keyboard: false,
    //     az: 0,
    //     negative: true,
    //     constellations: true,
    //     latitude: 36,
    //     longitude: -96
    // }
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


  changeHandler = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

    render() {

    const settings=`longitude=${this.state.longitude}&\
latitude=${this.state.longitude}&\
showplanets=${this.state.showPlanets}&\
showplanetlabels=${this.state.showPlanetLabels}&\
constellations=${this.state.constellations}&\
showstarlabels=${this.state.showStarLabels}&\
scalestars=1.3&\
showorbits=${this.state.showOrbits}&\
meridian=${this.state.showMeridian}&\
gridlines_az=${this.state.azimuthGridlines}&\
constellationlabels=${this.state.constellationLabels}&\
showdate=false&\
projection=${this.state.projection}&\
showposition=true&\
live=true&\
color=black&\
az=271.5665939727662`
        return (
            // <div id="starmap"></div> // This just doens't work
            // <iframe 
            //     title="Vsky"
            //     width="1000" 
            //     height="700" 
            //     frameborder="0" 
            //     scrolling="no" 
            //     marginheight="0" 
            //     marginwidth="0" 
            //     src="https://virtualsky.lco.global/embed/index.html" 
            //     allowTransparency="true"
            //     />
        // <form onSubmit={this.createBlog} className="container entryContainer">
        //     <input onChange={this.changeHandler} type='text' name='title' value={title}/><br />
        //     <input onChange={this.changeHandler} type="text" name='location' value={location}/><br /> 
        //     <textarea onChange={this.changeHandler} type='text' name='entry' value={entry}/><br />
        //     <button type='submit'>Create Blog</button>
        // </form> 
            <div>
                <iframe  title="VirtualSky" src={`https://virtualsky.lco.global/embed/index.html?${settings}`} />


                
                <form>
                Constellation: 
                <select onChange={this.changeHandler} name='constellations' value={this.state.constellations}>
                        <option value="true">On</option>
                        <option value="false">Off</option>
                </select>
                <br />
                Constellation Names: 
                <select onChange={this.changeHandler} name='constellationLabels' value={this.state.constellationLabels}>
                        <option value="true">On</option>
                        <option value="false">Off</option>
                </select> 
                <br />
                Gridlines: 
                <select onChange={this.changeHandler} name='azimuthGridlines' value={this.state.azimuthGridlines}>
                        <option value="true">On</option>
                        <option value="false">Off</option>
                </select> 
                <br />
                Meridian: 
                <select onChange={this.changeHandler} name='showMeridian' value={this.state.showMeridian}>
                        <option value="true">On</option>
                        <option value="false">Off</option>
                </select> 
                <br />
                Star Names: 
                <select onChange={this.changeHandler} name='showStarLabels' value={this.state.showStarLabels}>
                        <option value="true">On</option>
                        <option value="false">Off</option>
                </select>                     
                <br />
                Planets: 
                <select onChange={this.changeHandler} name='showPlanets' value={this.state.showPlanets}>
                        <option value="true">On</option>
                        <option value="false">Off</option>
                </select> 
                <br />
                Planet Names: 
                <select onChange={this.changeHandler} name='showPlanetLabels' value={this.state.showPlanetLabels}>
                        <option value="true">On</option>
                        <option value="false">Off</option>
                </select> 
                <br />
                Planet Orbits: 
                <select onChange={this.changeHandler} name='showOrbits' value={this.state.showOrbits}>
                        <option value="true">On</option>
                        <option value="false">Off</option>
                </select>  
                <br />
                View: 
                <select onChange={this.changeHandler} name='projection' value={this.state.projection}>
                        <option value="stereo">Stereo</option>
                        <option value="false">Off</option>
                        <option value="true">On</option>
                        <option value="false">Off</option>
                </select>                                     
                {/* showStarLabels: false,
        showOrbits: false,
        showMeridian: false,
        showPlanets: true,
        showPlanetLabels: true,
        azimuthGridlines: false,
        constellationLabels: false,
        constellations: false, */}

                    {/* <input type="text" onChange={this.changeHandler} name='constellations' value={this.state.constellations}></input>
                    <button>Show</button> */}
                </form>
                        
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




