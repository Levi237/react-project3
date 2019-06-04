import React, { Component } from 'react'


class ParkNav extends Component {
//     state = {

//     }
    render(){
        const { parks, changeShowPark, handleSkyMap } = this.props
        const options = parks.map((park, i) => { return <option key={i} value={i}>{park.name} | {park.states}</option>})

        return(
            <>
            <div className="parkMenu">
                <form>
                    <select  defaultValue={'DEFAULT'} onChange={(e) => {changeShowPark(parks[e.target.value]); handleSkyMap(parks[e.target.value].latLong)}}>
                        <option value="DEFAULT" disabled>--- Select a Park ---</option>
                        {options}
                    </select>
                </form>
            </div>
            </>
        )
    }


}
// )
export default ParkNav