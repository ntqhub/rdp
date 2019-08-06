import React, {Component} from 'react'
import {View, ScrollView, SafeAreaView} from 'react-native';
import {Text} from 'native-base';

import styles from "../theme/Style";
import NavigationOptions from '../lib/NavigationOptions';
import StatusBarComp from "../components/StatusBarComp";

export default class ForgotScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static navigationOptions = ({ navigation }) => NavigationOptions(navigation, {title: 'ЗАБЫЛИ ПАРОЛЬ?'});

    render() {
        return (
            <SafeAreaView style={styles.container_global}>
                <StatusBarComp/>

                <ScrollView>
                    <View style={styles.content_global}>
                        <Text>В разработке</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}