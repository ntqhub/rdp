import React, {Component} from 'react'
import {StyleSheet, Text} from "react-native";

import {version} from '../../package.json';
import {verticalScale} from '../lib/Scaling';

export default class FooterCompany extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static defaultProps = {
        marginTop: 0,
        marginBottom: 0
    };

    render() {
        return(
            <Text style={[style.text_block, {marginTop: this.props.marginTop, marginBottom: this.props.marginBottom,}]}>
                <Text style={style.text_one}>
                    <Text style={style.text_two}>Маньяна © 2019.</Text> Все права защищены. v{version}
                </Text>
            </Text>
        )
    }
}

const style = StyleSheet.create({
    text_block: {
        textAlign: 'center'
    },
    text_one: {
        fontSize: verticalScale(9),
        color:'#257084',
        fontFamily: 'PFBeauSansPro-Regular'
    },
    text_two: {
        fontSize: verticalScale(9),
        color:'#257084',
        fontFamily: 'PFBeauSansPro-Regular'
    }
});