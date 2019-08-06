import React, {Component} from 'react'
import {connect} from "react-redux";
import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import {withNavigationFocus} from "react-navigation";

import NavigationOptions from "../../../lib/NavigationOptions";
import axios from '../../../lib/Axios';
import styles from "../../../theme/Style";
import {verticalScale} from "../../../lib/Scaling";
import StatusBarComp from "../../../components/StatusBarComp";

class CompanyRatingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static navigationOptions = ({navigation}) => NavigationOptions(navigation, {
        title: 'Рейтинг компании',
        margin_top: false,
    });

    render() {
        return (
            <SafeAreaView style={styles.container_global}>
                <StatusBarComp/>

                <ScrollView style={styles.content_global}>

                    <Text>Рейтинг компании</Text>

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

export default connect(mapStateToProps, mapDispatchToProps)(withNavigationFocus(CompanyRatingScreen));