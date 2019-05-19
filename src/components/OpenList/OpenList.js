import React, { Component } from 'react';

class OpenList extends Component {
    state = {
        openList: []
    }

    makeList = () => {
        console.log(this.props.currentUser)
        console.log(this.props.closureList)

        
        this.props.currentUser.then(user => {
            console.log("this.props.currentUser.then ===========>", user)
            this.props.closureList.then(park => {
                console.log("this.props.closureList.then ===========>")
                const list = user.data.reduce((newList, u) => {
                    console.log(u, "<------------------- u of user.data.reduceh => newList, u")
                    park.data.forEach(p => {
                        console.log(p, "<------------------- park.data.forEach => p")
                        if (u.userList.title === p.title) {
                            newList.push(Object.assign(u, p))
                            return newList
                        }
                    })
                    return newList
                }, [])
                this.setState({
                    openList: list
                })
            })
        })
    }

    render(){

    const showOpen = this.state.openList.map((makeOpenList, i) => <div key={i}>{makeOpenList.title}</div>)


        return(
            <div>
                <h2>Open List</h2>
                {showOpen}
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