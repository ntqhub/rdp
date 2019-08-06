import React, {Component} from 'react'
import {connect} from "react-redux";
import {StatusBar, SafeAreaView} from 'react-native';
import {Tab, Tabs} from 'native-base';
import {withNavigationFocus} from "react-navigation";

import NavigationOptions from "../../../lib/NavigationOptions";
import axios from '../../../lib/Axios';

import styles from "../../../theme/Style";
import {verticalScale} from "../../../lib/Scaling";

import UserSummaryMainScreen from "./Main";
import UserSummaryDraftScreen from "./Draft";
import StatusBarComp from "../../../components/StatusBarComp";

class UserSummaryIndexScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        props.navigation.setParams({title: 'Мои объявления'})
    }

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        let title = params.title;
        return NavigationOptions(navigation, {title: title, disabled_left: true, margin_top: false});
    };

    componentDidMount() {
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isFocused !== this.props.isFocused && this.props.isFocused === true) {

        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container_global}>
                <StatusBarComp/>

                <Tabs
                    tabContainerStyle={{elevation: 0}}
                    tabBarUnderlineStyle={{
                        backgroundColor: styles.statusBar_bgcolor.backgroundColor,
                        borderBottomWidth: 1,
                        borderBottomColor: '#074A5D'
                    }}
                    locked={true}
                    onChangeTab={(e) => {
                        this.props.navigation.setParams({title: e.ref.props.heading})
                    }}
                >
                    <Tab
                        tabStyle={{backgroundColor: styles.statusBar_bgcolor.backgroundColor,}}
                        activeTabStyle={{backgroundColor: styles.statusBar_bgcolor.backgroundColor,}}
                        textStyle={{
                            color: '#074A5D',
                            fontSize: verticalScale(16),
                            fontFamily: 'PFBeauSansPro-Regular',
                        }}
                        activeTextStyle={{
                            color: '#074A5D',
                            fontSize: verticalScale(16),
                            fontFamily: 'PFBeauSansPro-Bold',
                        }}
                        heading="Мои объявления">
                        <UserSummaryMainScreen {...this.props}/>
                    </Tab>
                    <Tab
                        tabStyle={{backgroundColor: styles.statusBar_bgcolor.backgroundColor,}}
                        activeTabStyle={{backgroundColor: styles.statusBar_bgcolor.backgroundColor,}}
                        textStyle={{
                            color: '#074A5D',
                            fontSize: verticalScale(16),
                            fontFamily: 'PFBeauSansPro-Regular',
                        }}
                        activeTextStyle={{
                            color: '#074A5D',
                            fontSize: verticalScale(16),
                            fontFamily: 'PFBeauSansPro-Bold',
                        }}
                        heading="Мои черновики">
                        <UserSummaryDraftScreen {...this.props}/>
                    </Tab>
                </Tabs>

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

export default connect(mapStateToProps, mapDispatchToProps)(withNavigationFocus(UserSummaryIndexScreen));