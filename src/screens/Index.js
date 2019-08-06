import React, {Component} from 'react'
import {View, Text, StatusBar, ScrollView, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from '../theme/Style'
import {verticalScale} from '../lib/Scaling';
import SvgLogo from '../assets/svg/SvgLogo';
import SvgLogoComment from '../assets/svg/SvgLogoComment';
import SvgCircleUser from '../assets/svg/SvgCircleUser';
import SvgCircleCompany from '../assets/svg/SvgCircleCompany';
import SvgArrow from '../assets/svg/SvgArrow';
import BackgroundLogo from '../components/BackgroundLogo';
import FooterCompany from '../components/FooterCompany';

export default class IndexScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static navigationOptions = ({ navigation }) => ({header: null, headerTransparent: true,});

    render() {
        return(
            <LinearGradient colors={['#1A7089', '#074A5D']} style={{flex: 1,}}>
                <StatusBar backgroundColor={'transparent'} translucent barStyle="light-content"/>
                <BackgroundLogo opacity={0.3}/>

                <ScrollView>
                    <View style={styles.content_global}>

                        <View style={{justifyContent: 'center',alignItems: 'center',}} >

                            <View style={{marginTop: 150, justifyContent: 'center', alignItems: 'center',}}>

                                <SvgLogo/>

                                <View
                                    style={{
                                        marginTop: 10,
                                        borderBottomColor: '#fcfeff',
                                        borderBottomWidth: 0.5,
                                        width: 160,
                                        opacity: 0.5
                                    }}
                                />

                                <SvgLogoComment style={{marginTop: 10,}}/>

                            </View>
                        </View>

                        <View style={{marginTop: 60, justifyContent: 'center', alignItems: 'center', flex: 1,}}>

                            <Text style={{
                                color: '#ffffff',
                                fontSize: verticalScale(10),
                                transform: [{rotate: '-90deg'}],
                                letterSpacing: 2,
                                fontFamily: 'PFBeauSansPro-Regular',
                                position: 'relative',
                                top: 45,
                                left: -115,
                                opacity: 0.5
                            }}>регистрация</Text>

                            <TouchableOpacity transparent
                                              onPress={() => this.props.navigation.navigate('UserIndexScreen')} style={{
                                flexDirection: 'row',
                                marginTop: 0,
                                width: 160,
                                alignItems: 'center',
                            }}>
                                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',}}>
                                    <SvgCircleUser/>
                                    <Text style={{
                                        marginLeft: 15,
                                        textAlign: 'left',
                                        fontSize: verticalScale(15),
                                        color: '#ffffff',
                                        fontFamily: 'PFBeauSansPro-Regular',
                                    }}>Соискатель</Text>
                                </View>
                                <SvgArrow fill="#FFFFFF"/>
                            </TouchableOpacity>

                            <TouchableOpacity transparent
                                              onPress={() => this.props.navigation.navigate('CompanyIndexScreen')}
                                              style={{
                                                  flexDirection: 'row',
                                                  marginTop: 20,
                                                  width: 160,
                                                  alignItems: 'center',
                                              }}>
                                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',}}>
                                    <SvgCircleCompany/>
                                    <Text style={{
                                        marginLeft: 15,
                                        textAlign: 'left',
                                        fontSize: verticalScale(15),
                                        color: '#ffffff',
                                        fontFamily: 'PFBeauSansPro-Regular',
                                    }}>Работодатель</Text>
                                </View>
                                <SvgArrow fill="#FFFFFF"/>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')} style={{
                                flexDirection: 'row',
                                marginTop: 60,
                                width: 160,
                                alignItems: 'center',
                            }}>
                                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',}}>
                                    <Text uppercase={false} style={{
                                        marginLeft: 45,
                                        color: '#ffffff',
                                        fontSize: verticalScale(15),
                                        fontFamily: 'PFBeauSansPro-Regular',
                                    }}>ВОЙТИ</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center',}}>
                                    <SvgArrow opacity={0.1} fill="#FFFFFF"/>
                                    <SvgArrow opacity={0.2} fill="#FFFFFF" style={{marginLeft: 5,}}/>
                                    <SvgArrow opacity={0.5} fill="#FFFFFF" style={{marginLeft: 5,}}/>
                                    <SvgArrow opacity={0.8} fill="#FFFFFF" style={{marginLeft: 5,}}/>
                                </View>
                            </TouchableOpacity>

                        </View>

                    </View>
                </ScrollView>

                <FooterCompany marginBottom={10}/>

            </LinearGradient>
        )
    }
}