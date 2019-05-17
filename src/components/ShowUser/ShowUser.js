import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class ShowUser extends Component {
    
    state = {
        user: {}
    }

    componentDidMount() {
        this.doGetUser()
            .then(({user}) => this.setState({user: user}))
            
    }

    doGetUser = async () => {
        try {
            const user = await fetch(`${process.env.REACT_APP_API}/api/v1/${this.props.match.params.id}`)
            const parsedUser = await user.json()
            return parsedUser
        } catch(err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div className="showUser">
                <h1>{this.state.user.username}'s page</h1>
            </div>
        )
    }
}
export default withRouter(ShowUser)