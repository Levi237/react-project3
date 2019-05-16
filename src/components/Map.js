import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';



class Map extends Component {
    static defaultProps = {
        zoom: 5
    }
    // center = () => {
        
    //     let latitude = this.props.lat;
    //     let longitutde = this.props.lng;
    //     let center = latitude + longitutde
    //     if (this.props.lat) {

    //         console.log(center, "<------center")
    //     }
    // }
    

    render(){
        return(
            <React.Fragment>

            <h1>MOCK MAP</h1>
            <div>
                 <GoogleMapReact 
                    bootstrapURLKeys={{ key: "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"}}
                    defaultCenter={{
                        lat: 39.8283,//center of US
                        lng: -95.5795
                    }}
                    center={{
                        lat: +this.props.lat,//center of US
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