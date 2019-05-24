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
    const { currentUser, deleteItem, handleSetMap } = this.props
    const showOpen = this.state.openList.map((makeOpenList, i) => {
        return (
            
            <section className="alertList" key={i}>
                <form className="mapBtn" onSubmit={this.showOnMap}>
                    <button onClick={handleSetMap} value={makeOpenList.latLong}>Map</button>
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
                    <button className="userListButton">Eventually this will be a delete button</button>
                    {/* <button className="userListButton" onClick={deleteItem.bind(null, makeOpenList.title, currentUser.title)}>Remove from List Coming Soon</button> */}
                </div>
            </section>
        )
    })

        return(
            <React.Fragment>
                { showOpen.length > 0
                ? <React.Fragment><h1>Now Open</h1>{showOpen}</React.Fragment>
                : <React.Fragment><h1>Nothing Open Yet</h1></React.Fragment>
                }
            </React.Fragment>
        )
    }
}

export default OpenList