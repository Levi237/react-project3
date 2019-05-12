import React from 'react';
import '../index.css'

const Parks = (props) => {
//     // const parkName = props.parkNames.map((n) => {
//     // console.log(n.parkCode)
//     // if(n.parkCode = props.parks.pro)
    
//     // })
    const parkNames = props.parkNames
    const alertList = props.parks.map((e, i) => {
        // props.parkNames.map((n, i) => {
        if (e.catagory = "Park Closure" && !e.title.includes('Restrooms') && e.description.includes('closed') || e.description.includes('closure')) {
            console.log(e.length);
            // if (e.parkCode = n.parkCode){
            console.log(parkNames)
        // }
        
        // if (n.parkCode = e.parkCode){
            // console.log(e.length)
            // console.log(e.title)
            
            // console.log(e.parkCode, "<--- e")
            // console.log(n.parkCode, "<--- n")
            
            // console.log(e.parkCode, "<--- e")
            // console.log(n.parkCode, "<--- n")
            return (
                <section className="alertList" key={i}>
                    {e.title} : {e.description} | {e.parkCode} |
                </section>
            )
        }
    })

    // })
    return(
       
            <div>
                {alertList}
            </div>
       
    )
}

export default Parks;