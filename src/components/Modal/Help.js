import React, { Component } from 'react'

export default class Help extends Component {
    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
    }
    render(){
        if (!this.props.help){
            return null;
        }
        return(
            <div className="helpModal">
                <div className="helpWindow">
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