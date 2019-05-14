import React from 'react';
import '../index.css'

const Alerts = (props) => {

    const alertList = props.closureList.map((e, i) => {

            return (
                <section className="alertList" key={i}>
                    <strong>{e.fullName} : </strong>{e.title} <br /><p>{e.description}</p>
                </section>
            )
        
    })

    return(
       
            <div>
                {alertList}
            </div>
       
    )
}

export default Alerts;