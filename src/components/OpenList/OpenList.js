import React, { Component } from 'react';

class OpenList extends Component {
    state = {
        openList: []
    }

    componentDidMount = () => {
        let currentUserList = this.props.currentUser.userList;
        let compareClosureList = this.props.closureList;
        
        // console.log(this.props.currentUser, "<================this.props.currentUser");
        // console.log(this.props.currentUser.userList, "<================this.props.currentUser.userList");
        // console.log(this.props.closureList, "<============================== this.props.closureList");
        
        let loopUser = [];
        for (let u = 0; u < currentUserList.length; u++){
            loopUser.push(currentUserList[u])
            // console.log("push into userLoop ---->", currentUserList[u].title)
        }

        for (let c = 0; c < compareClosureList.length; c++){
            for (let l = 0; l < loopUser.length; l++){
//--------------------> POSSIBLE GLITCH, MIGHT NEED TO REMOVE FROM OPENLIST, HOPE JUST REMOVES WHEN DELETED
                // console.log(loopUser[l].fullName, '<========loopUser[l].fullName')
                // console.log(compareClosureList[c].fullName, '<=======================compareClosureList[c].fullName')
                if (loopUser[l].id === compareClosureList[c].id){
                    // console.log("match", loopUser[l].fullName, '<======= match found =======>',compareClosureList[c].fullName)
                    loopUser.splice(l, 1);
                }
            }
        }        
        // console.log(loopUser, "<=============loopUser splice()")
        // console.log(currentUserList, "<=============currentUser.userList")


        this.setState({
            openList: loopUser
        })
    }

    render(){
    //     <section className="listItem" key={i}>
    //     <strong>
    //         <div>{alert.fullName}</div>
    //         <a className="listAlink" href={alert.url} target="_blank" rel="noopener noreferrer">{alert.title}{alert.name}</a>
    //     </strong><br />
    //     <form className="mapBtn" onSubmit={this.showOnMap}><button onClick={handleSetMap} value={alert.latLong}>Map</button></form><button className="userListButton" onClick={deleteItem.bind(null, alert._id, currentUser._id)}>Remove from List</button>
    // 
    const showOpen = this.state.openList.map((makeOpenList, i) => 
    <section className="listItem" key={i}>
    <strong>{makeOpenList.fullName}</strong>
    <br />
    <small>{makeOpenList.title}</small>
    </section>
    )


        return(
            <React.Fragment>
                { showOpen.length > 0 &&
                <React.Fragment><h1>Now Open</h1>{showOpen}</React.Fragment>
                }
            </React.Fragment>
        )
    }
}

export default OpenList


    // this.getAlerts().then(alerts => {
    //     this.getParkNames()
    //       .then(names => {
    //         const filterAlerts = alerts.data.filter(a => (a.category === "Park Closure" && !a.title.includes("Restrooms") && a.description.includes("closed" || "closure")))
        




    //        const list = filterAlerts.reduce((total, f) => {
    //           names.data.forEach(a => {
    //             if(a.parkCode === f.parkCode) {
    //               total.push(Object.assign(f, a))
    //               return total
    //             }
    //           })
    //           return total
    //         }, [])

    //     this.setState({
    //         closureList: list,
    //         loading: false
    //       })
    //     })
    // })
    // }