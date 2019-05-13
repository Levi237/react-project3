import React from 'react';
import '../index.css'

const Alerts = (props) => {
    // console.log(props)
    




    const alertList = props.closureList.map((e, i) => {

            return (
                <section className="alertList" key={i}>
                    <strong>{e.fullName}</strong> <br /> {e.title} : {e.description} | {e.parkCode} |
                </section>
            )
        
    })

    // })
    return(
       
            <div>
                {alertList}
            </div>
       
    )
}

export default Alerts;