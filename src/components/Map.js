import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';

const pointTo = ({ point }) => <img className="point" src={point} alt={"?"} />

class ShowMap extends Component {
    // static defaultProps = {
    //     zoom: 3
    // }
    render(){
        // console.log(this.props.parks)
        return(
            <div>
                <h1>FUTURE MAP</h1> 

            </div>
                //    <GoogleMapReact 
                //     bootstrapURLKeys={{ key: "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"}}
                //     defaultCenter={
                //         lat: this.props.parks... coordinate,
                //         lng: this props.parks... coordinate
                //     }
                //     defaultZoom={this.props.zoom}
                //    />
        )
    }
}

export default ShowMap;