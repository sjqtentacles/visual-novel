import React from 'react';
import './index.css';

export default class Character extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (this.props.side == "left"){
            this.setState({left: "25%"});
        } else {
            this.setState({left: "75%"});
        }

        const img = require('../../assets/'+this.props.img);
        this.setState({img});
    }

    render() {

        let charStyle = {
            "left": this.state.left,
            "width": "15%",
            "margin-left": "-7.5%"
        };

        if (this.props.active == true){
            charStyle["width"] = "20%";
            charStyle["margin-left"] = "-15%";
        }

        return (
            <div className="characterBox" style={charStyle}>
                <img src={this.state.img} />
            </div>
        );
    }
}