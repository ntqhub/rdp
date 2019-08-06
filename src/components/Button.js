import React, {Component} from 'react'
import {TouchableOpacity, Text, StyleSheet} from "react-native";

import {verticalScale} from "../lib/Scaling";

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static defaultProps = {
        title: '',
        transparent: true,
        style: {},
        styleTitle: {},
        border: true,
        disabled: false,
    };

    render() {
        return(
            <TouchableOpacity onPress={() => (this.props.disabled === false) && this.props.onPress()} style={[
                (this.props.transparent === true) ? style.button_transparent : style.button,
                (this.props.border === true) && style.button_border,
                this.props.style
            ]}>
                {this.props.children}
                {(this.props.title !== '') && (<Text
                    style={[(this.props.transparent === true) ? style.button_text_transparent : style.button_text, {marginLeft: 15,}, this.props.styleTitle]}>{this.props.title}</Text>)}
            </TouchableOpacity>
        )
    }
}

const style = StyleSheet.create({
    button_border: {
        borderWidth: 1,
        borderColor: '#074A5D',
        borderRadius: 5,
    },
    button_transparent: {
        shadowOpacity: 0,
        elevation: 0,
        backgroundColor: 'transparent',
        height: 40,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button_text_transparent: {
        color: '#074a5d',
        fontSize: verticalScale(16),
        fontFamily: 'PFBeauSansPro-Regular'
    },
    button: {
        shadowOpacity: 0,
        elevation: 0,
        backgroundColor: '#074A5D',
        height: 40,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button_text: {
        color: '#ffffff',
        fontSize: verticalScale(16),
        fontFamily: 'PFBeauSansPro-Regular'
    }
});