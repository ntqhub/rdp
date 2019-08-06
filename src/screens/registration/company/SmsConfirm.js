import React, {Component} from 'react'
import {connect} from "react-redux";
import {View, ScrollView, BackHandler, SafeAreaView} from 'react-native';

import NavigationOptions from "../../../lib/NavigationOptions";
import axios from '../../../lib/Axios';
import styles from '../../../theme/Style'
import {verticalScale} from '../../../lib/Scaling';
import StatusBarComp from "../../../components/StatusBarComp";
import SvgHandPhone from "../../../assets/svg/SvgHandPhone";
import SvgUserPlus from "../../../assets/svg/SvgUserPlus";
import Button from "../../../components/Button";

class SmsConfirmScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            timer: 60,
        };
    };

    static navigationOptions = ({navigation}) => NavigationOptions(navigation, {
        title: 'СМС ПОДТВЕРЖДЕНИЕ',
        left_func: 'CompanyIndexScreen'
    });

    handleBackPress = () => {
        this.props.navigation.navigate('CompanyIndexScreen');
        return true;
    };

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    };

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
        clearInterval(this.clockCall);
    };

    render() {
        return (
            <SafeAreaView style={styles.container_global}>
                <StatusBarComp/>

                <ScrollView>

                    <Button title="Далее" onPress={() => {
                        this.props.navigation.navigate('CompanyCompleteScreen')
                    }}/>

                </ScrollView>

            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        phone_code: state.User.phone_code,
        phone_number: state.User.phone_number,
    }
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(SmsConfirmScreen);