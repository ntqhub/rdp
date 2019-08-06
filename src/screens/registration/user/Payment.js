import React, { Component } from 'react'
import {View, ScrollView, BackHandler,} from 'react-native';
import {Container, Content, Text, Button} from 'native-base';

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
            take_avatar: false,
        };
    }

    static navigationOptions = ({ navigation }) => NavigationOptions(navigation, {title: 'ПЛАТЕЖНЫЕ РЕКВЕЗИТЫ', disabled_left: true});


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
                                <Text style={{fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular'}}> оплата</Text>
                            </Text>

                            <View>
                                <View style={{justifyContent: 'center',alignItems: 'center'}}>
                                </View>

                                <Text style={{marginTop:20, color: '#262626', fontSize: 16, fontFamily: 'PFBeauSansPro-Regular'}}>Введите реквизиты для 100% гарантированной оплаты труда Внимание! Мы не можем платить по реквизитам третьих лиц. Вы можете изменить данные после создания профиля в личном кабинете.</Text>

                                <Button onPress={() => {}} full primary bordered style={[styles.button_transparent,{marginTop:30}]}>
                                    <Text uppercase={false} style={styles.button_text_transparent}>Физическое лицо</Text>
                                </Button>

                                <Button onPress={() => {}} full primary bordered style={[styles.button_transparent,{marginTop:30}]}>
                                    <Text uppercase={false} style={styles.button_text_transparent}>Индивидуальный предприниматель</Text>
                                </Button>

                                <Button onPress={() => {}} full primary bordered style={[styles.button_transparent,{marginTop:30}]}>
                                    <Text uppercase={false} style={styles.button_text_transparent}>Самозанятый гражданин</Text>
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