import React, {Component} from 'react'
import {View} from 'react-native';

export default class Block extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static defaultProps = {
        style: {},
    };


    render() {
        return (
            <View style={[{borderColor: '#CCD5E8', borderRadius: 5, borderWidth: 1,}, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}