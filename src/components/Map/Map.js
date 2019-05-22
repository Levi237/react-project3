import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import './Map.css';
// const PointGreen = ({ ping }) => <img alt="?" className="pin" src={ping} />

class Map extends Component {
    static defaultProps = {
        zoom: 5
    }

    render(){
        return(
            <React.Fragment>
            <div className="map">
                 <GoogleMapReact 
                    bootstrapURLKeys={{ key: "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"}}
                    defaultCenter={{
                        //Yosemite coordinates
                        lat: 37.8651,  
                        lng: -119.5383
                    }}
                    center={{
                        lat: +this.props.lat,
                        lng: +this.props.lng,
                        // pin: '../map-pin-green.png'
                    }}
                    defaultZoom={this.props.zoom}
                    >
                    {/* <PointGreen lat={37.8651} lng={-119.5383} ping="../map-pin-green.png" / > */}
                    {this.props.closureList.map((e, i)=>{
                        const PointTo = ({ pin }) => <a href={e.url} target="_blank" rel="noopener noreferrer"><img className="pin" src={pin} alt={e.fullName} title={e.fullName} /></a>
                        let firstSplit = e.latLong.split(':')
                        return (
                            <PointTo
                            key={i}
                            lat={firstSplit[1].split(',')[0]}
                            lng={firstSplit[2]}
                            pin="../red-pin.png"
                            
                            />
                            )
                        })}
                     
                    </GoogleMapReact>
            </div>
            </React.Fragment>
        );
    }
}

export default Map;