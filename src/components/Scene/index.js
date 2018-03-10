import React from 'react';
import './index.css';
import MessageBox from '../MessageBox';
import Character from '../Character';
import Background from '../Background';
import bgImg from '../../assets/bg.jpg';

export default class Scene extends React.Component {

    constructor(props) {
        super(props);
        this.readScript = this.readScript.bind(this);
        this.turnScriptPage = this.turnScriptPage.bind(this);
        this.left_or_right_name = this.left_or_right_name.bind(this);
    }

    readScript(scriptName) {
        return require('../../assets/scripts/'+scriptName+'.json');
    }

    componentWillMount() {
        const script = this.readScript(this.props.script);
        const messages = script['messages'];
        this.setState({messages});

        const leftChar = script['left_character'];
        this.setState({leftChar});

        const rightChar = script['right_character'];
        this.setState({rightChar});
    }

    turnScriptPage() {
        const nextPage = this.state.messages.slice(1);
        if (nextPage.length > 0) {
            this.setState({messages: nextPage});
        }
    }

    left_or_right_name(messageFrom) {
        switch(messageFrom){
            case "left":
                return this.state.leftChar.name;
            case "right":
                return this.state.rightChar.name;
            default:
                return null;
        }
    }

    render() {
        let currentMessage = this.state.messages[0];
        let messageFrom = this.left_or_right_name(Object.keys(currentMessage)[0]);
        let messageText = Object.values(currentMessage)[0];

        return (
            <div>
                <Character img={this.state.leftChar.img} side="left"/>
                <Character img={this.state.rightChar.img} active={true} side="right"/>
                <Background img={bgImg}/>
                <div onClick={this.turnScriptPage}>
                    <MessageBox msgFrom={messageFrom} msgText={messageText}/>
                </div>
            </div>
        );
    }
}