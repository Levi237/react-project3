import React, { Component } from 'react'

export default class Model extends Component {

    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
    }

    render(){
        if (!this.props.show){
            return null;
        }
        
        return(
            <div className="vskyModal">
                <div>
                    {this.props.children}
                </div>
                <button className="close" onClick={(e) => {this.onClose(e)}}>
                    X
                </button>
            </div>
        )
    }
}