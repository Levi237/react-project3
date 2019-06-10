import React, { Component } from 'react'

export default class UserModal extends Component {
    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
    }
    render(){
        if (!this.props.user){
            return null;
        }
        return(
            <div className="userModal">
                <div className="userWindow">
                    <div>
                <button className="closeHelp" onClick={(e) => {this.onClose(e)}}>
                    X
                </button>
                    </div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}