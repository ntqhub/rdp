import React, {Component} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import {verticalScale} from "../lib/Scaling";
import SvgCheck from "../assets/svg/SvgCheck";

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check: props.check,
            value: props.value,
        };
    }

    static defaultProps = {
        style: {},
        styleLabel: {},
        styleInput: {},
        value: '',
        label: '',
        placeholder: '',
        check: false,
        maxLength: 50,
        editable: true,
        textContentType: 'none',
    };


    render() {
        const input = <View style={[{flex: 1, borderBottomWidth: 1, borderBottomColor: '#E7EDF8'}, this.props.style]}>
            {(this.props.label.length > 0) && (<Text style={[{
                fontSize: verticalScale(12),
                color: '#A1AABA',
                fontFamily: 'PFBeauSansPro-Regular',
            }, this.props.styleLabel]}>{this.props.label}</Text>)}
            <TextInput
                autoCapitalize="sentences"
                autoCorrect={false}
                placeholder={this.props.placeholder}
                textContentType={this.props.textContentType}
                editable={this.props.editable}
                maxLength={this.props.maxLength}
                keyboardType={this.props.keyboardType}
                style={[(this.props.check === true) && {marginRight: 20,}, {
                    fontSize: verticalScale(16),
                    color: '#262626',
                    fontFamily: 'PFBeauSansPro-Regular',
                    paddingVertical: 5,
                }, this.props.styleInput]}
                onChangeText={this.props.onChangeText}
                value={this.props.value}
            />
            {(this.props.check === true) && (<SvgCheck style={{position: 'absolute', bottom: 12, right: 5}}/>)}
        </View>;
        return (
            (this.props.onPress) ? (
                <TouchableOpacity onPress={this.props.onPress}>{input}</TouchableOpacity>
            ) : input
        )

    }
}