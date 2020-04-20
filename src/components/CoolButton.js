import React, { Component } from 'react';

class CoolButton extends Component {
    render() {
        console.log(this) 
        return (
            <div>
                <button className={this.props.style} >{this.props.text}</button>
            </div>
        );
    }
}

export default CoolButton;