import React, {Component} from 'react'
import {connect} from "react-redux";
import {View, ScrollView, BackHandler, SafeAreaView} from 'react-native';
import {Text} from 'native-base';

import styles from '../../../theme/Style'
import NavigationOptions from "../../../lib/NavigationOptions";
import {verticalScale} from "../../../lib/Scaling";
import StatusBarComp from "../../../components/StatusBarComp";
import Button from "../../../components/Button";

class LogoScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static navigationOptions = ({navigation}) => NavigationOptions(navigation, {
        title: 'Лого компании',
        disabled_left: true
    });

    handleBackPress = () => {
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
                            this.props.navigation.navigate('CompanyInnScreen')
                        }}/>

                    </View>
                </ScrollView>

            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoScreen);