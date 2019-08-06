import React, {Component} from 'react';
import {StatusBar, Text, View} from 'react-native';

import axios from '../lib/Axios';
import styles from '../theme/Style'
import {verticalScale} from '../lib/Scaling';
import SvgLogoLoader from '../assets/svg/SvgLogoLoader';
import {connect} from "react-redux";
import {UserGetData} from "../actions/User";

class LoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.CheckToken();
    }

    CheckToken = () => {
        axios.post('v1/user.signin')
            .then(response => {
                if( Object.keys(response).length ){
                    if( response.reg_complete == false ){
                        axios.get('v1/reg.check')
                            .then(response => {
                                if( response.phone == false ) {
                                    this.props.navigation.navigate('UserSmsConfirmScreen');
                                }else if( response.profile == false ){
                                    this.props.navigation.navigate('UserProfileScreen');
                                }else if( response.profile_photo == false ){
                                    this.props.navigation.navigate('UserProfileAvatarScreen');
                                }else{
                                    this.props.navigation.navigate('App');
                                }
                            })
                    }else{
                        this.props.navigation.navigate('App');
                    }
                    this.props.UserGetData();
                }else{
                    this.props.navigation.navigate('Global');
                }
            }).catch((error) => {
            this.props.navigation.navigate('Global');
        });
    };

    render() {
        return (
            <View style={[styles.content_global, {backgroundColor: "#074A5D",}]}>
                <StatusBar backgroundColor="#074A5D" barStyle="light-content" />
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
                    <View style={{flex: 1, justifyContent: 'center',}}>
                        <SvgLogoLoader/>
                        <View style={{alignItems: 'center',}}>
                            <View style={{
                                marginTop: 15,
                                borderBottomColor: '#fcfeff',
                                borderBottomWidth: 0.5,
                                width: 160,
                                opacity: 0.5
                            }}/>
                            <Text style={{
                                marginTop: 10,
                                color: '#ffffff',
                                fontSize: verticalScale(14),
                                fontFamily: 'PFBeauSansPro-Regular',
                                letterSpacing: 4,
                            }}>Loading...</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {
        UserGetData: () => {
            dispatch(UserGetData())
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadingScreen);