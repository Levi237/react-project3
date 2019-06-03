import React, { Component } from 'react'
// import React from 'react'

// const ParkInfo = (props) => (


class ParkInfo extends Component {
//     state = {

//     }
    render(){
        const { parks } = this.props
        const options = parks.map((park, i) => { return <option  key={i} value={park.id}>{park.fullName}</option>})

        return(
            <>
            <h1>TEST</h1>

            <div>
                <form>
                    <select>
                        {options}
                    </select>
                </form>
            </div>
            </>
        )
    }


}
// )
export default ParkInfo