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

class VacancyScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static navigationOptions = ({navigation}) => NavigationOptions(navigation, {
        title: 'Просмотр вакансии',
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

                    <Text>Просмотр вакансии</Text>

                    <Button transparent={false} title="О компании"
                            onPress={() => this.props.navigation.navigate('CompanyIndex')}
                            style={{marginTop: 20,}}/>

                    <Button transparent={false} title="Рейтинг компании"
                            onPress={() => this.props.navigation.navigate('CompanyRating')}
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

export default connect(mapStateToProps, mapDispatchToProps)(withNavigationFocus(VacancyScreen));