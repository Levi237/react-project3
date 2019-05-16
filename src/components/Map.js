import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';



class Map extends Component {
    static defaultProps = {
        zoom: 5
    }

    render(){
        return(
            <React.Fragment>
            <div>
                 <GoogleMapReact 
                    bootstrapURLKeys={{ key: "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"}}
                    defaultCenter={{
                        lat: 37.8651,//YOSEMITE
                        lng: -119.5383
                    }}
                    center={{
                        lat: +this.props.lat,
                        lng: +this.props.lng
                    }}
                    defaultZoom={this.props.zoom}
                    >
                    {this.props.closureList.map((e, i)=>{
                        const PointTo = ({ pin }) => <a href={e.url} target="_blank" rel="noopener noreferrer"><img className="pin" src={pin} alt={e.fullName} title={e.fullName} /></a>
                        let firstSplit = e.latLong.split(':')
                        // console.log(firstSplit)
                        // console.log(firstSplit[1].split(',')[0], firstSplit[2], '<=== firstSplit')
                        return (
                            <PointTo
                            key={i}
                            lat={firstSplit[1].split(',')[0]}
                            lng={firstSplit[2]}
                            pin="../map-pin.png"
                            
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