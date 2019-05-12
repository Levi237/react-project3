import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const PointTo = ({ pin }) => <img className="pin" src={pin} alt={"?"} />

class ShowMap extends Component {
    static defaultProps = {
        zoom: 9
    }
    render(){
        console.log(this.props.parkNames[0], '<----- Maps.js ShowMap this.props.parkNames')
        return(
            <div>
                <h1>FUTURE MAP</h1> 

            
                   <GoogleMapReact 
                    bootstrapURLKeys={{ key: "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"}}
                    defaultCenter={{

                        lat: 37.8651,//this.props.parkNames[0].latLong[0],
                        lng: -119.5383//this.props.parkNames[0].latLong[1]
                    }
                    }
                    defaultZoom={this.props.zoom}
                   >
                   
            {/* return (
                <AnyReactComponent
                lat={e.geometry.coordinates[1]}
                lng={e.geometry.coordinates[0]}
                text="./images/earthquake.png"
              />
            ) */}
                <PointTo
                lat={"37.8651"}
                lng={"-119.5383"}
                pin="./map-pin.png"
                />
            </GoogleMapReact>
                   </div>
        )
    }
}

export default ShowMap;