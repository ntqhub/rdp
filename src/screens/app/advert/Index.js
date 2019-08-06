import React, {Component} from 'react'
import {View, Image, ScrollView, SafeAreaView, Text} from 'react-native';

import axios from '../../../lib/Axios';
import styles from "../../../theme/Style";
import NavigationOptions from "../../../lib/NavigationOptions";
import StatusBarComp from "../../../components/StatusBarComp";

export default class AdvertScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static navigationOptions = ({ navigation }) => NavigationOptions(navigation, {title: 'ОБЪЯВЛЕНИЯ', disabled_left: true, margin_top: false});

    render() {
        return(
            <SafeAreaView style={styles.container_global}>
                <StatusBarComp/>

                <ScrollView>
                    <View style={styles.content_global}>
                        <Text>Объявления</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}