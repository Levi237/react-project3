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
    doAddAlert = async (event, park) => {
        console.log(park)
        event.preventDefault()
        // const { currentUser } = this.props
        const addAlert = await fetch(`/users/${this.props.currentUser._id}/parks`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({park}), //userList
            headers: {
                'Content-type': 'application/json'
            }
        })
        const alertJson = await addAlert.json()
        this.props.doSetCurrentUser(alertJson.user)
    }

    render(){
        const alertList = this.props.closureList.map((e, i) => {
                return (
                    
                    <section className="alertList" key={i}>
                    <form onSubmit={(event) => this.doAddAlert(event, e)}>
                        <strong>{e.fullName}<br /></strong>{e.title} <br /><p>{e.description}</p>
                        {
                            this.props.currentUser && <button type="submit">Add to List</button>
                        }
                    </form>
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