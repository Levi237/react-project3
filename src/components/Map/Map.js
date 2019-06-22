import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import './Map.css';
const PointGreen = ({ ping }) => <img className="greenPoint" alt="?" className="pin" src={ping} />

export default class Map extends Component {

    static defaultProps = {
        zoom: 12
    }

    render(){
        return(
            <>
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
                    }}
                    defaultZoom={this.props.zoom}
                    >
                    
                    {this.props.closureList.map((e, i)=>{
                        const AlertPoint = ({ pin }) => 
                            <a href={e.url} target="_blank" rel="noopener noreferrer">
                                <img className="pin" src={pin} alt={e.fullName} title={e.fullName} />
                            </a>

                        let firstSplit = e.latLong.split(':')
                        
                        return (
                            
                            <AlertPoint
                            key={i}
                            lat={firstSplit[1].split(',')[0]}
                            lng={firstSplit[2]}
                            pin="../red-pin.png"
                            />
                        )
                    })}

                    <PointGreen
                        lat={+this.props.lat}
                        lng={+this.props.lng}
                        ping="../green-pin.png"
                        zoom="10"
                    />

                </GoogleMapReact>
            </div>
            </>
        );
    }
}