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

    const showOpen = this.state.openList.map((makeOpenList, i) => <div key={i}><strong>{makeOpenList.fullName}</strong><br /><small>{makeOpenList.title}</small></div>)


        return(
            <React.Fragment>
                { showOpen.length > 0 &&
                <div><h1>Now Open</h1>{showOpen}</div>
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