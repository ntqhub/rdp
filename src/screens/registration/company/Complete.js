import React, {Component} from 'react'
import {View, ScrollView, BackHandler, SafeAreaView} from 'react-native';
import {Text} from 'native-base';

import styles from '../../../theme/Style'
import NavigationOptions from "../../../lib/NavigationOptions";
import {verticalScale} from "../../../lib/Scaling";
import StatusBarComp from "../../../components/StatusBarComp";
import Button from "../../../components/Button";

export default class CompleteScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            take_photo: false,
        };
    }

    static navigationOptions = ({navigation}) => NavigationOptions(navigation, {
        title: 'Регистрация успешна',
        disabled_left: true
    });

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
            <SafeAreaView style={styles.container_global}>
                <StatusBarComp/>

                <ScrollView>
                    <View style={styles.content_global}>

                        <Button title="Далее" onPress={() => {
                            this.props.navigation.navigate('CompanyBrandScreen')
                        }}/>

                    </View>
                </ScrollView>

            </SafeAreaView>
        )
    }
}