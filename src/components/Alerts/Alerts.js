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
// import '../index.css'
import './Alerts.css'

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

    toggle = event => {
        console.log('toggle click heard')
        event.currentTarget.classList.toggle('active');
    }
            // toggle = () => {
            //     var x = document.querySelector(".details");
            //     if (x.style.display === "none") {
            //       x.style.display = "block";
            //     } else {
            //       x.style.display = "none";
            //     }
            //   }
    render(){
       
        const alertList = this.props.closureList.map((park, i) => {
            
                return (
                          
                    <section className="alertList" key={i}>
                        <form onSubmit={(event) => this.doAddAlert(event, park)}>
                            <div className="title" onClick={this.toggle}>
                                <div>
                                    <strong>{park.fullName}<br /></strong>{park.title}
                                    </div>
                            
                            <div className="details">
                                {park.description}
                            </div>
                            </div>
                            {
                                this.props.currentUser && <button className="alertsButton" type="submit">Add to List</button>             
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

// const alertList = this.props.closureList.map((park, i) => {
//     // let list = this.props.currentUser.userList;
//     // for (let i = 0; i < list.length; i++){
       
    

//     // const filterLists = this.props.currentUser.data.filter(l => (l.id !== park.id))
//     // console.log(this.props.currentUser, '<--- currentUser')
//     console.log(park.id, '<--- park.id')
//     console.log(this.props.currentUser.userList[0].id, '<--- currentUser.userList')
//     // console.log(list[i].id, '<--- list.id')
//     // if (park.id === list[i].id){
//     //     console.log('match made', park.id)
//     // }
        
//         return (
            
                        
//             <section className="alertList" key={i}>
//             <form onSubmit={(event) => this.doAddAlert(event, park)}>
//                 <strong>{park.fullName}<br /></strong>{park.title} <br /><p>{park.description}</p>
//                 {
//                     // this.props.currentUser && <button type="submit">Add to List</button>


//                         this.props.currentUser && <button type="submit">Add to List</button>
                        
//                         // && (list[i].id === park.id) ? <div></div> :
//                         // <button type="submit">Add to List</button>
//                         // : <div />
//                         // this.props.currentUser.userList[i]._id != this.props.closureList[?].id
//                         // this.getAlerts().then(alerts => {
//                         //     this.getParkNames()
//                         //       .then(names => {
                    
//                 }