import React, { Component } from 'react';

class OpenList extends Component {
    state = {
        openList: []
    }

    componentDidMount = () => {
        console.log(this.props.currentUser, "<================this.props.currentUser");
        console.log(this.props.currentUser.userList, "<================this.props.currentUser.userList");
        console.log(this.props.closureList, "<============================== this.props.closureList");

        let newList = [];
        let currentUserList = this.props.currentUser.userList;
        let compareClosureList = this.props.closureList;
        for (let u = 0; u < currentUserList.length; u++){
            let loopUser = []
            loopUser.push(currentUserList[u])
            for (let c = 0; c < compareClosureList.length; c++){
                for (let lu = 0; lu < loopUser.length; lu++){
                    if (loopUser[lu].id === compareClosureList[c].id){
                        loopUser.slice(loopUser[lu].id)
                    }
                }
                

                // for (let n = 0; n < newList.length; n++){

                //     let loopClosure = compareClosureList[c].id
                //     if (loopUser.id !== loopClosure.id && loopUser.id !== newList[n].id ){
                //         newList.unshift(loopUser.id)
                //         // console.log(compareClosureList[c].id, '<======= match found =======>', currentUserList[u].id)
                //         console.log(loopUser.id, '<========= currentUser ============== nothing should show up ============ compareClosureList.id ===========>', loopClosure.id)
                //     }
                // }
            }
            console.log(loopUser, "<=============loopUser")
            console.log(newList, "<=============attempt push to new list")
        }
        this.setState({
            openList: newList
        })
        // currentUserList.then(user => {
        //     console.log("this.props.currentUser.then ===========>", user)
        //     // closure.then(park => {
        //     //     console.log("this.props.closureList.then ===========>", park)
        //     //     // const list = user.data.reduce((newList, u) => {
        //     //     //     console.log(u, "<------------------- u of user.data.reduceh => newList, u")
        //     //     //     // park.data.forEach(p => {
        //     //     //     //     console.log(p, "<------------------- park.data.forEach => p")
        //     //     //     //     // if (u.userList.title === p.title) {
        //     //     //     //     //     newList.push(Object.assign(u, p))
        //     //     //     //     //     return newList
        //     //     //     //     // }
        //     //     //     // })
        //     //     //     return newList
        //     //     // }, [])
        //     //     // this.setState({
        //     //     //     openList: list
        //     //     // })
        //     // })
        // })
    }

    render(){

    const showOpen = this.state.openList.map((makeOpenList, i) => <div key={i}>{makeOpenList.title}</div>)


        return(
            <div>
                { showOpen.length > 0 &&
                <div><h2>Not so Open List</h2>{showOpen}</div>
                }
            </div>
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