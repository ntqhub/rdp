import React, {Component} from 'react'
import {Platform, StatusBar, TouchableHighlight, View} from "react-native";
import {Text, Title} from "native-base";

import styles from "../theme/Style";
import SvgArrowBack from '../assets/svg/SvgArrowBack';

const NavigationOptions = (navigation, param) => {

    const value = {
        title: (param.title) ? param.title.toUpperCase() : '',
        disabled_left: (param.disabled_left === true) ? true : false,
        left_func: (param.left_func) ? param.left_func : null,
        margin_top: (param.margin_top === false) ? 0 : (Platform.OS === 'ios' ? 20 : StatusBar.currentHeight),
        backgroundColor: (param.backgroundColor) ? param.backgroundColor : styles.container_global.backgroundColor,
        color: (param.color) ? param.color : styles.header_title.color,
    };

    const Options = {
        //tabBarVisible: false,
        //headerTransparent: true,
        headerStyle: {
            backgroundColor: value.backgroundColor,
            marginTop: value.margin_top,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
        },
        headerLeft: (value.disabled_left === true) ? (<Text></Text>) : (
            <TouchableHighlight style={{flex: 1,}} underlayColor="transparent" onPress={() => {
            if( value.left_func !== null ){
                navigation.navigate(value.left_func);
            }else{
                navigation.goBack(null);
            }
        }}>
                <View style={{flex: 1, width: 40, alignItems: 'center', justifyContent: 'center',}}>
                <SvgArrowBack fill={value.color}/>
            </View>
        </TouchableHighlight>),
        headerTitle: ( <Title style={[styles.header_title, {color: value.color}]}>{value.title}</Title> ),
        headerRight: ( <Text></Text> ),
    };

    return Options;
};

export default NavigationOptions;