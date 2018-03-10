import React from 'react';
import './index.css';

export default class MessageBox extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="messageBoxContainer">
                <div className="messageFrom">
                    {this.props.msgFrom}
                </div>
                <div className="messageText">
                    {this.props.msgText}
                </div>
            </div>
        );
    }
}