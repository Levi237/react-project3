import React from 'react'

const Parks = (props) => {

    const parksList = props.parks.maps((e, i) => {
        return <li key={i}>{e.data.catagory}</li>
    })
    return(
        <div>
            <h1>Parks</h1>
            <ul>
                {parksList}
            </ul>
        </div>
    )
}

export default Parks;