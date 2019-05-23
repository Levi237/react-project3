import React, { Component } from 'react';
import '../Alerts/Alerts'

class OpenList extends Component {
    state = {
        openList: []
    }

    componentDidMount = () => {
        let currentUserList = this.props.currentUser.userList;
        let compareClosureList = this.props.closureList;
        
        let loopUser = [...currentUserList];
        //Array.from(currentuserList) // also works

        for (let c = 0; c < compareClosureList.length; c++){
            for (let l = loopUser.length - 1; l >= 0; l--){

//--------------------> POSSIBLE GLITCH, MIGHT NEED TO REMOVE FROM OPENLIST, HOPE JUST REMOVES WHEN DELETED
                if (loopUser[l].id === compareClosureList[c].id){
                    loopUser.splice(l, 1);
                }
            }
        }        
        this.setState({
            openList: loopUser
        })
    }

    toggle = event => {
        event.currentTarget.classList.toggle('active');
    }

    showOnMap = (event) => {
        event.preventDefault()
    }

    render(){

    const showOpen = this.state.openList.map((makeOpenList, i) => {
        return (
            
            <section className="alertList" key={i}>
                <form className="mapBtn" onSubmit={this.showOnMap}>
                    <button onClick={this.props.handleSetMap} value={makeOpenList.latLong}>Map</button>
                </form>
                <div className="title" onClick={this.toggle}>
                    <div>
                        <strong>{makeOpenList.fullName}</strong>
                            <br />
                        <small>{makeOpenList.title}</small>
                    </div>
                    <div className="details">
                        {makeOpenList.description}
                    </div>
                    <button className="userListButton" onClick={this.props.deleteItem.bind(null, alert._id, makeOpenList._id)}>Remove from List</button>
                </div>
            </section>
        )
    })

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