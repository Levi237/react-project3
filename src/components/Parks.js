import React from 'react';

const Parks = (props) => {
    console.log(props.parks)
    const parksList = props.parks.map((e, i) => {
        if (e.catagory = "Park Closure" && !e.title.includes('Restrooms') && e.description.includes('closed') || e.description.includes('closure')) {
        return <li key={i}>{e.title} : {e.description}</li>
    }
    })
    return(
        <React.Fragment>
            <ul>
                {parksList}
            </ul>
        </React.Fragment>
    )
}

export default Parks;