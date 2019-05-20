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
        
        let loopUser = []
        let newList = [];

        for (let u = 0; u < currentUserList.length; u++){
            loopUser.push(currentUserList[u])
        }
        // console.log(loopUser, "<=============loopUser")
        for (let l = 0; l < loopUser.length; l++){
            for (let c = 0; c < compareClosureList.length; c++){
                console.log(loopUser[l].title, '<========loopUser[l].title')
                console.log(compareClosureList[c].title, '<=======================compareClosureList[c].title')
                while (loopUser[l].id === compareClosureList[c].id){
                    console.log(loopUser[l].title, '<======= match found =======>',compareClosureList[c].title)
                    loopUser.splice(l, 1);
                    return loopUser
                    // l--;
                }
            }
        }        
        console.log(loopUser, "<=============loopUser splice()")
        console.log(newList, "<=============attempt push to new list")

        this.setState({
            openList: loopUser
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

    const showOpen = this.state.openList.map((makeOpenList, i) => <div key={i}>{makeOpenList.fullName}</div>)


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