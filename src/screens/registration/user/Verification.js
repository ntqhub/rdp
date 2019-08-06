import React, { Component } from 'react'
import {View, ScrollView, BackHandler} from 'react-native';
import {Container, Content, Text, Button} from 'native-base';
import Svg,{ Path, G, Circle, Rect } from 'react-native-svg';


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

                            <Progress.Bar progress={0.95} animated={false} borderRadius={10} color={"#074A5D"} borderColor={"#E7EDF8"} width={null}/>
                            <Text style={{marginTop:5, marginBottom:15, color: '#A1AABA', fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular'}}>Этап заполнения:
                                <Text style={{fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular'}}> верификация</Text>
                            </Text>

                            <View>
                                <View style={{justifyContent: 'center',alignItems: 'center'}}>
                                    <Svg width="83" height="68" viewBox="0 0 83 68" fill="#fff">
                                        <Circle cx="34" cy="34" r="33" stroke="#074A5D" stroke-width="2"/>
                                        <Path fill-rule="evenodd" clip-rule="evenodd" d="M33.4444 38C29.5895 38 26.4645 34.866 26.4645 31C26.4645 27.134 29.5895 24 33.4444 24C37.2993 24 40.4244 27.134 40.4244 31C40.4244 34.866 37.2993 38 33.4444 38ZM33.4444 36C30.6909 36 28.4588 33.7614 28.4588 31C28.4588 28.2386 30.6909 26 33.4444 26C36.1979 26 38.4301 28.2386 38.4301 31C38.4301 33.7614 36.1979 36 33.4444 36Z" fill="#074A5D"/>
                                        <Path d="M44 44C42.6979 39.383 38.4651 36 33.4444 36C28.4238 36 24.191 39.383 22.8889 44H24.9809C26.2129 40.5044 29.537 38 33.4444 38C37.3519 38 40.676 40.5044 41.908 44H44Z" fill="#074A5D"/>
                                        <Path d="M52.0004 43.769V40.3268C51.9943 40.1302 52.0574 39.9374 52.1793 39.7808C52.3013 39.6242 52.4747 39.5132 52.6705 39.4662L66.7878 36.0249C66.9269 35.9917 67.0721 35.9917 67.2111 36.0249L81.3284 39.4662C81.5243 39.5132 81.6977 39.6242 81.8199 39.7808C81.942 39.9374 82.0055 40.1301 81.9996 40.3268V43.769C81.9996 53.414 77.3498 67 67.0002 67C56.6506 67 52.0049 53.4208 52.0049 43.7747L52.0004 43.769Z" fill="#F9FBFF"/>
                                        <Path d="M52.0004 43.769H51.0004C51.0004 43.9962 51.0777 44.2165 51.2197 44.3939L52.0004 43.769ZM52.0004 40.3268H53.0004C53.0004 40.3164 53.0002 40.3061 52.9999 40.2957L52.0004 40.3268ZM52.6705 39.4662L52.9039 40.4386L52.9074 40.4378L52.6705 39.4662ZM66.7878 36.0249L66.5552 35.0524L66.551 35.0534L66.7878 36.0249ZM67.2111 36.0249L67.4479 35.0534L67.4437 35.0524L67.2111 36.0249ZM81.3284 39.4662L81.0915 40.4378L81.0952 40.4387L81.3284 39.4662ZM81.9996 40.3268L81.0001 40.2971C80.9998 40.307 80.9996 40.3169 80.9996 40.3268H81.9996ZM52.0049 43.7747H53.0049C53.0049 43.5475 52.9276 43.3272 52.7857 43.1498L52.0049 43.7747ZM53.0004 43.769V40.3268H51.0004V43.769H53.0004ZM52.9999 40.2957C53.0011 40.334 52.9886 40.3693 52.9683 40.3953L51.3904 39.1664C51.1262 39.5056 50.9875 39.9264 51.0009 40.3578L52.9999 40.2957ZM52.9683 40.3953C52.9486 40.4205 52.9247 40.4336 52.9039 40.4386L52.4371 38.4938C52.0247 38.5928 51.654 38.8279 51.3904 39.1664L52.9683 40.3953ZM52.9074 40.4378L67.0247 36.9965L66.551 35.0534L52.4337 38.4947L52.9074 40.4378ZM67.0205 36.9975C67.0066 37.0008 66.9923 37.0008 66.9784 36.9975L67.4437 35.0524C67.1518 34.9825 66.8471 34.9825 66.5552 35.0524L67.0205 36.9975ZM66.9743 36.9965L81.0915 40.4378L81.5652 38.4947L67.4479 35.0534L66.9743 36.9965ZM81.0952 40.4387C81.0742 40.4336 81.0506 40.4205 81.0314 40.3959L82.6083 39.1657C82.3448 38.828 81.9745 38.5928 81.5615 38.4938L81.0952 40.4387ZM81.0314 40.3959C81.0117 40.3706 80.9989 40.3357 81.0001 40.2971L82.9992 40.3564C83.012 39.9245 82.8724 39.5042 82.6083 39.1657L81.0314 40.3959ZM80.9996 40.3268V43.769H82.9996V40.3268H80.9996ZM80.9996 43.769C80.9996 48.4584 79.8642 54.0985 77.4988 58.5305C75.1328 62.9636 71.6568 66 67.0002 66V68C72.6931 68 76.7168 64.2434 79.2632 59.4722C81.8101 54.7001 82.9996 48.7247 82.9996 43.769H80.9996ZM67.0002 66C62.3434 66 58.8685 62.9652 56.5037 58.5338C54.1394 54.1034 53.0049 48.4647 53.0049 43.7747H51.0049C51.0049 48.7308 52.1933 54.7048 54.7392 59.4754C57.2846 64.2453 61.3073 68 67.0002 68V66ZM52.7857 43.1498L52.7811 43.1442L51.2197 44.3939L51.2242 44.3995L52.7857 43.1498Z" fill="#074A5D"/>
                                        <Path d="M72.5 47C72.3586 47.0046 72.1639 47.0655 72.065 47.17L64.8253 54.6418L61.9373 51.6677C61.8877 51.6145 61.8284 51.572 61.7628 51.5424C61.6972 51.5129 61.6267 51.497 61.5551 51.4956C61.4836 51.4942 61.4125 51.5074 61.3459 51.5343C61.2793 51.5613 61.2184 51.6015 61.1669 51.6527C61.1154 51.704 61.0741 51.7651 61.0455 51.8328C61.0169 51.9005 61.0014 51.9733 61.0001 52.0471C60.9974 52.1961 61.0522 52.3402 61.1524 52.4476L61.1669 52.4626L64.4363 55.8356C64.5385 55.9409 64.6771 56 64.8215 56C64.9659 56 65.1045 55.9409 65.2067 55.8356L72.8347 47.9656C72.9135 47.8867 72.9673 47.7851 72.9892 47.674C73.011 47.563 72.9997 47.4477 72.9569 47.3434C72.9141 47.239 72.8417 47.1505 72.7493 47.0894C72.6568 47.0282 72.5486 46.9973 72.4388 47.0008L72.5 47Z" fill="#074A5D" stroke="#074A5D"/>
                                    </Svg>
                                </View>

                                <Text style={{marginTop:20, color: '#262626', fontSize: verticalScale(16), fontFamily: 'PFBeauSansPro-Regular'}}>Наш приоритет - безопасность сервиса Каждый соискатель и работодатель проходит верификацию.</Text>

                                <Text style={{marginTop:20, color: '#262626', fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular'}}>Ваши данные не будут переданы третьим лицам.</Text>

                                <Button onPress={() => { this.props.navigation.navigate('UserCompleteScreen');}} full primary bordered style={[styles.button_transparent,{marginTop:30}]}>
                                    <Text uppercase={false} style={styles.button_text_transparent}>Далее</Text>
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