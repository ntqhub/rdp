import React, {Component} from 'react'
import {StatusBar, Platform} from "react-native";

export default class StatusBarComp extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        backgroundColor: (Platform.Version >= 23) ? '#F9FBFF' : '#074A5D', //Marshmallow 6.0 api23 (October 5, 2015)
        barStyle: 'dark-content',
        translucent: false,
    };

    render() {
        if (this.props.translucent) {
            return (
                <StatusBar backgroundColor={this.props.backgroundColor} translucent barStyle={this.props.barStyle}/>
            )
        } else {
            return (
                <StatusBar backgroundColor={this.props.backgroundColor} barStyle={this.props.barStyle}/>
            )
        }
    }
}