import React, { Component } from 'react';

class Message extends Component {
    render() {
        return (
            <article class="message">
                <div class="message-header">
                    <p>{this.props.title}</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">
                    {this.props.children}
                </div>
            </article>
        );
    }
}

export default Message;



//npx create react app 
//npm installed a package
//Wrote components 
//Export and imported components
//Passed props to components
//Reused components with different props 