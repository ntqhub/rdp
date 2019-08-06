import React, {Component} from 'react'
import {Text, View} from 'react-native';

import {verticalScale} from "../../lib/Scaling";

export default class MessageType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            types: [
                {
                    title: '',
                    color: '#262626',
                    background_color: false,
                },
                {
                    title: 'Приглашение',
                    color: '#10BD55',
                    background_color: false,
                },
                {
                    title: 'Бронь',
                    color: '#074A5D',
                    background_color: true,
                },
                {
                    title: 'Отказ',
                    color: '#D43A3A',
                    background_color: false,
                },
                {
                    title: 'Системное',
                    color: '#2F80ED',
                    background_color: false,
                },
            ]
        };
    }

    static defaultProps = {
        type: 1,
    };

    render() {
        const type = this.state.types[this.props.type - 1];
        return (
            <View style={{
                borderWidth: 1,
                borderColor: type.color,
                paddingLeft: 4,
                paddingRight: 4,
                borderRadius: 2,
                backgroundColor: (type.background_color === true) ? type.color : 'transparent'
            }}>
                <Text style={{
                    color: (type.background_color === true) ? '#FFFFFF' : type.color,
                    fontSize: verticalScale(12),
                    fontFamily: 'PFBeauSansPro-Regular',
                    letterSpacing: 2,
                }}>
                    {type.title}
                </Text>
            </View>
        )
    }
}