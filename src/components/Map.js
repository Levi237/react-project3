import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const PointTo = ({ pin }) => <img className="pin" src={pin} alt={"?"} />

class Map extends Component {
    static defaultProps = {
        zoom: 4
    }
    render(){
        // cannot get latLng from parkNames
        // console.log(this.props.parkNames[0], '<----- Maps.js ShowMap this.props.parkNames')
        return(
            <div>
                 <GoogleMapReact 
                    bootstrapURLKeys={{ key: "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"}}
                    defaultCenter={{
                        lat: 39.8283,//center of US
                        lng: -98.5795
                    }}
                    defaultZoom={this.props.zoom}
                    >
                    {this.props.closureList.map((e, i)=>{
                        // console.log(e.latLong, "<====== latLong");
                        // console.log(e.latLong.split(','), "<====== latLong split");
                        let firstSplit = e.latLong.split(':')
                        console.log(firstSplit)
                        console.log(firstSplit[1].split(',')[0], firstSplit[2], '<=== firstSplit')
                        // let lastSplit = firstSplit.match(/\d+/)
                        // console.log(lastSplit, '<=== lastSplit')
                        
                        // console.log(e.latLong.match(/\d+/), "<====== latLong");
                        // var numbers = string.match(/\d+/g).map(Number);
                        return (
                            <PointTo
                            key={i}
                            lat={firstSplit[1].split(',')[0]}
                            lng={firstSplit[2]}
                            // lat="37.8651"
                            // lng="-119.5383"  // Yosemite Coordinates
                            pin="../map-pin.png"
                          
                          />
                        )
                    })}
                     
                    </GoogleMapReact>
            </div>
        );
    }
}

export default Map;