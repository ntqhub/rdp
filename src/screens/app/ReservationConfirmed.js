import React, {Component} from 'react'
import {connect} from "react-redux";
import {SafeAreaView, View, Text, BackHandler, RefreshControl, ScrollView} from 'react-native';
import {withNavigationFocus} from "react-navigation";

import NavigationOptions from "../../lib/NavigationOptions";
import axios from '../../lib/Axios';
import styles from "../../theme/Style";
import {verticalScale} from "../../lib/Scaling";
import StatusBarComp from "../../components/StatusBarComp";
import Button from "../../components/Button";

class ReservationConfirmedScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static navigationOptions = ({navigation}) => NavigationOptions(navigation, {
        title: 'Бронировнаие подтвержденно',
        margin_top: false,
    });

    handleBackPress = () => {
        this.props.navigation.goBack();
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

                <ScrollView style={styles.content_global}>

                    <Text>Бронирование подтверждено</Text>

                    <Button transparent={false} title="Готово"
                            onPress={() => this.props.navigation.goBack(null)}
                            style={{marginTop: 20,}}/>

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

export default connect(mapStateToProps, mapDispatchToProps)(withNavigationFocus(ReservationConfirmedScreen));