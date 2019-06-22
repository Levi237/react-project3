import React, { Component } from 'react';

export default class ParkNav extends Component {

    render(){
        const { parks, changeShowPark, handleSkyMap, park } = this.props
        let options = parks.map((p, i) => { return <option key={i} value={i}>{p.name} - {p.states}</option>})

        return(
            <>
            <div className="parkMenu">
                <form>
                    <select  defaultValue={'DEFAULT'} onChange={(e) => {changeShowPark(parks[e.target.value]); handleSkyMap(parks[e.target.value].latLong)}}>
                        { park.name 
                        ? <option value="DEFAULT" disabled>{park.name} - {park.states}</option>
                        : <option value="DEFAULT" disabled>--- Select a Park ---</option>
                        }
                        {options}
                    </select>
                </form>
            </div>
            </>
        )
    }
}