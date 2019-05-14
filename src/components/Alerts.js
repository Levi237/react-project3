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
        const addAlert = await fetch(`/users/${this.props.currentUser._id}/parks`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({park}),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const alertJson = await addAlert.json()
        this.props.doSetCurrentUser(alertJson.user)
    }

    render(){
       
        const alertList = this.props.closureList.map((park, i) => {
            const list = this.props.currentUser.userList;
            for (let i = 0; i < list.length; i++){
               
            

            // const filterLists = this.props.currentUser.data.filter(l => (l.id !== park.id))
            // console.log(this.props.currentUser, '<--- currentUser')
            // console.log(park.id, '<--- park')
            // console.log(this.props.currentUser.userList[0].id, '<--- currentUser.userList')

            // if (park.id === this.props.currentUser.userList[0].id){
            //     console.log('match made', park.id)
            // }

                return (
                    
                                
                    <section className="alertList" key={i}>
                    <form onSubmit={(event) => this.doAddAlert(event, park)}>
                        <strong>{park.fullName}<br /></strong>{park.title} <br /><p>{park.description}</p>
                        {
                            // this.props.currentUser && <button type="submit">Add to List</button>


                                this.props.currentUser ? (list[i].id !== park.id) : <button type="submit">Add to List</button>
                                
            
                                // <button type="submit">Add to List</button>
                                // : <div />
                                // this.props.currentUser.userList[i]._id != this.props.closureList[?].id
                                // this.getAlerts().then(alerts => {
                                //     this.getParkNames()
                                //       .then(names => {
                            
                        }


                    </form>
                    </section>
                    
                )  
            } })

        return(
            <React.Fragment>
            <h1>Current Park Closures</h1>
                    {alertList}
            </React.Fragment>
        )
    }
}

export default Alerts;

