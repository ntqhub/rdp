import React, { Component } from 'react'
import {View, ScrollView, BackHandler, Dimensions} from 'react-native';
import {Container, Content, Text, Button} from 'native-base';
import Svg,{ Path, G, Circle, Rect } from 'react-native-svg';

import axios from '../../../lib/Axios';
import styles from '../../../theme/Style'
import BackgroundLogo from './../../../components/BackgroundLogo';
import FooterCompany from './../../../components/FooterCompany';
import NavigationOptions from "../../../lib/NavigationOptions";
import * as Progress from "react-native-progress";
import {verticalScale} from "../../../lib/Scaling";
import StatusBarComp from "../../../components/StatusBarComp";

export default class PassportPhotoScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            take_photo: false,
        };
    }

    static navigationOptions = ({ navigation }) => NavigationOptions(navigation, {title: 'ЗАВЕРШЕНИЕ ЗАПОЛНЕНИЯ', disabled_left: true});

    handleBackPress = () => {
        //this.props.navigation.goBack();
        return true;
    };

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    };

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    };

    render() {
        return (
            <Container style={styles.container_global}>
                <StatusBarComp/>
                <BackgroundLogo/>
                <Content contentContainerStyle={styles.content_global}>

                    <ScrollView>
                        <View>

                            <Progress.Bar progress={1.0} animated={false} borderRadius={10} color={"#074A5D"} borderColor={"#E7EDF8"} width={null}/>
                            <Text style={{marginTop:5, marginBottom:15, color: '#A1AABA', fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular'}}>Этап заполнения:
                                <Text style={{fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular'}}> завершение</Text>
                            </Text>

                            <View>
                                <View style={{justifyContent: 'center',alignItems: 'center'}}>
                                    <Svg width="82" height="68" viewBox="0 0 82 68" fill="none">
                                        <Path d="M34 68C27.2755 68 20.7019 66.0059 15.1107 62.27C9.51938 58.534 5.16149 53.2239 2.58811 47.0112C0.0147357 40.7985 -0.658583 33.9623 0.653314 27.3669C1.96521 20.7716 5.20344 14.7133 9.95842 9.9583C14.7134 5.20331 20.7716 1.96521 27.367 0.653315C33.9623 -0.658583 40.7986 0.0147357 47.0113 2.58812C53.2239 5.1615 58.534 9.51926 62.27 15.1105C66.0059 20.7018 68 27.2754 68 34C68 43.0173 64.4178 51.6654 58.0416 58.0417C51.6654 64.4179 43.0174 68 34 68ZM34 2.1417C27.6991 2.1417 21.5396 4.01018 16.3005 7.51081C11.0615 11.0114 6.97811 15.9869 4.56684 21.8083C2.15556 27.6296 1.52468 34.0353 2.75393 40.2152C3.98319 46.3951 7.01736 52.0717 11.4728 56.5271C15.9283 60.9826 21.6049 64.0168 27.7848 65.2461C33.9647 66.4754 40.3703 65.8445 46.1916 63.4333C52.013 61.022 56.9885 56.9385 60.4892 51.6995C63.9898 46.4604 65.8583 40.301 65.8583 34C65.8583 25.5506 62.5018 17.4474 56.5272 11.4728C50.5526 5.49825 42.4493 2.1417 34 2.1417ZM47.1026 47.6535C45.7924 47.6535 46.0317 46.2989 46.0317 46.0472V24.1078C45.394 24.708 36.4052 30.4357 35.8703 31.0643C37.1837 32.1442 38.5448 33.7226 38.5448 35.8799C38.5448 38.3049 37.0295 41.2309 34.2661 41.2309V39.6246C36.1524 39.6246 36.9401 37.3673 36.9401 35.8766C36.9401 34.386 35.9356 32.7567 34.2661 31.5959V29.4542C34.2661 29.4542 43.9323 22.561 45.4969 21.4275C47.0614 20.294 48.1707 19.6766 48.1707 21.4275V46.0472C48.1718 46.6218 48.4128 47.6535 47.102 47.6535H47.1026ZM29.9843 35.874C29.9843 33.7146 31.3464 32.1356 32.6614 31.0551C32.126 30.4254 23.1259 24.6952 22.4882 24.0945V46.0472C22.4882 46.2984 22.7297 47.6535 21.4173 47.6535C20.105 47.6535 20.3465 46.6212 20.3465 46.0472V21.4173C20.3465 19.6654 21.4575 20.2833 23.0236 21.4173C24.5898 22.5514 34.2677 29.4488 34.2677 29.4488V31.5905C32.5961 32.7519 31.5906 34.385 31.5906 35.874C31.5906 37.363 32.3787 39.622 34.2677 39.622V41.2283C31.5006 41.2283 29.9843 38.3 29.9843 35.874Z" fill="#074A5D"/>
                                        <Circle cx="67" cy="53" r="14" fill="#F9FBFF" stroke="#074A5D" stroke-width="2"/>
                                        <Path d="M72.5 49C72.3586 49.0046 72.1639 49.0655 72.065 49.17L64.8253 56.6418L61.9373 53.6677C61.8877 53.6145 61.8284 53.572 61.7628 53.5424C61.6972 53.5129 61.6267 53.497 61.5551 53.4956C61.4836 53.4942 61.4125 53.5074 61.3459 53.5343C61.2793 53.5613 61.2184 53.6015 61.1669 53.6527C61.1154 53.704 61.0741 53.7651 61.0455 53.8328C61.0169 53.9005 61.0014 53.9733 61.0001 54.0471C60.9974 54.1961 61.0522 54.3402 61.1524 54.4476L61.1669 54.4626L64.4363 57.8356C64.5385 57.9409 64.6771 58 64.8215 58C64.9659 58 65.1045 57.9409 65.2067 57.8356L72.8347 49.9656C72.9135 49.8867 72.9673 49.7851 72.9892 49.674C73.011 49.563 72.9997 49.4477 72.9569 49.3434C72.9141 49.239 72.8417 49.1505 72.7493 49.0894C72.6568 49.0282 72.5486 48.9973 72.4388 49.0008L72.5 49Z" fill="#074A5D" stroke="#074A5D"/>
                                    </Svg>
                                </View>

                                <Text style={{marginTop:20, color: '#262626', fontSize: verticalScale(16), fontFamily: 'PFBeauSansPro-Regular'}}>Подтверждение аккаунта произойдёт в течении нескольких часов.</Text>

                                <Text style={{marginTop:20, color: '#262626', fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular'}}>Вы можете начать пользоваться сервисом пока в ограниченном режиме.</Text>

                                <Button onPress={() => { this.props.navigation.navigate('App');}} full primary bordered style={[styles.button_transparent,{marginTop:30}]}>
                                    <Text uppercase={false} style={styles.button_text_transparent}>Приступить</Text>
                                </Button>
                            </View>

                        </View>
                    </ScrollView>
                    <View>
                        <FooterCompany/>
                    </View>

                </Content>
            </Container>
        )
    }
}