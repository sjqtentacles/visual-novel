import React from 'react';
import './index.css'

export default class Background extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img className="bgImage" src={this.props.img} />
            </div>
        );
    }
}