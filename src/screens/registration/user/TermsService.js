import React, { Component } from 'react'
import {Dimensions, View, ScrollView, BackHandler} from 'react-native';
import {Container, Content, Text} from 'native-base';

import styles from "../../../theme/Style";
import NavigationOptions from "../../../lib/NavigationOptions";
import StatusBarComp from "../../../components/StatusBarComp";
import SvgTerms from "../../../assets/svg/SvgTerms";

export default class TermsServiceScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleBackPress = () => {
        this.props.navigation.goBack();
        //return true;
    };
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    static navigationOptions = ({ navigation }) => NavigationOptions(navigation, {title: 'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ'});

    render() {
        return (
            <Container style={{backgroundColor: "#fcfeff"}}>
                <StatusBarComp/>

                <Content contentContainerStyle={styles.content_global}>

                    <ScrollView>
                        <View>

                            <SvgTerms style={{alignItems: 'center',}}/>

                            <View style={{flex: 1, alignItems: 'center',}}>
                                <Text style={{flex: 1, alignItems: 'center', marginTop:30, fontSize: 14, color: '#262626', fontFamily: 'PFBeauSansPro-Regular',}}>Политика обработки персональных данных</Text>
                                <Text style={{flex: 1, alignItems: 'center', marginTop:0, fontSize: 14, color: '#262626', fontFamily: 'PFBeauSansPro-Regular',}}>в ООО «Маньяна»</Text>
                            </View>

                            <Text style={{marginTop:15, fontSize: 14, color: '#074a5d', fontFamily: 'PFBeauSansPro-Regular',}}>(для неограниченного доступа, опубликовано в соответствии с ч.2 ст.18.1 Федерального закона от 27 июля 2006 г. N 152-ФЗ &quot;О персональных данных&quot;)</Text>

                            <Text style={{marginTop:15, fontSize: 14, color: '#262626', fontFamily: 'PFBeauSansPro-Bold',}}>1. Общие положения</Text>

                        </View>
                    </ScrollView>

                </Content>
            </Container>
        );
    }
}