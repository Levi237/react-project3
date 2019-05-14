// import React from 'react';
// import '../index.css'

// const Alerts = (props) => {

//     const alertList = props.closureList.map((e, i) => {

//             return (
//                 <section className="alertList" key={i}>
//                     <strong>{e.fullName}<br /></strong>{e.title} <br /><p>{e.description}</p>
//                     {/* {
//                         user.logged ? <button>BUTTON</button> : <h1>hi</h1>
//                     } */}
//                 </section>
//             )  
//     })

//     return(
//         <React.Fragment>
//           <h1>Current Park Closures</h1>
//                 {alertList}
//         </React.Fragment>
//     )
// }

// export default Alerts;

import React, { Component } from 'react';
import '../index.css'

class Alerts extends Component {
    doAddAlert = async (id, name) => {
        const { currentUser } = this.props
        const addAlert = await fetch('/users', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({id, name, currentUser}),
            headers: {
                'Content-type': 'application/json'
            }
        })
    }

    render(){
        const alertList = this.props.closureList.map((e, i) => {
                return (
                    <section className="alertList" key={i}>
                        <strong>{e.fullName}<br /></strong>{e.title} <br /><p>{e.description}</p>
                        {
                        this.props.currentUser && <button conclick={() => this.doAddAlert(this.props.closureList.id, this.props.closureList.name)}>Add to List</button>
                        }
                    </section>
                )  
        })
        return(
            <React.Fragment>
            <h1>Current Park Closures</h1>
                    {alertList}
            </React.Fragment>
        )
    }
}

export default Alerts;