import React, {Component} from 'react'
import {connect} from "react-redux";
import {StatusBar, SafeAreaView, View, Text} from 'react-native';
import {Tab, Tabs} from 'native-base';
import {withNavigationFocus} from "react-navigation";

import NavigationOptions from "../../../lib/NavigationOptions";
import axios from '../../../lib/Axios';
import styles from "../../../theme/Style";
import {verticalScale} from "../../../lib/Scaling";
import CalendarDaysScreen from "./Days";
import CalendarMonthsScreen from "./Months";
import ModalView from "../../../components/ModalView";
import StatusBarComp from "../../../components/StatusBarComp";
import {UserSetViewInformationCalendar} from "../../../actions/User";
import SvgInformationCalendar from "../../../assets/svg/SvgInformationCalendar";

class CalendarIndexScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        props.navigation.setParams({title: 'Месяцы'})
    }

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        let title = params.title;
        return NavigationOptions(navigation, {title: title, disabled_left: true, margin_top: false});
    };

    componentDidUpdate(prevProps) {
        if (prevProps.isFocused !== this.props.isFocused && this.props.isFocused === true) {
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container_global}>
                <StatusBarComp/>

                <ModalView title="Календарь"
                           visible={!this.props.view_information_calendar}
                           onClose={() => this.props.UserSetViewInformationCalendar(true)}
                           information={true}
                           informationTitle={'Ясно'}
                >
                    <View style={{marginTop: 60, alignItems: 'center'}}>
                        <SvgInformationCalendar/>
                    </View>
                    <Text style={{
                        marginTop: 40,
                        textAlign: 'center',
                        color: '#FFFFFF',
                        fontSize: verticalScale(16),
                        fontFamily: 'PFBeauSansPro-Regular'
                    }}>
                        <Text style={{
                            color: '#FFFFFF',
                            fontSize: verticalScale(16),
                            fontFamily: 'PFBeauSansPro-Bold',
                            textDecorationLine: 'underline',
                        }}>В календаре</Text>
                        отражаются все подтвержденные или ожидающие подтверждения бронирования; так же Вы можете
                        управлять расписанием, присваивая статус доступности или указывая комментарий к каждой дате
                    </Text>
                </ModalView>

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
                        heading="Месяцы">
                        <CalendarMonthsScreen {...this.props}/>
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
                        heading="Дни">
                        <CalendarDaysScreen {...this.props}/>
                    </Tab>
                </Tabs>

            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        view_information_calendar: state.User.view_information_calendar,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        UserSetViewInformationCalendar: (boolean) => {
            dispatch(UserSetViewInformationCalendar(boolean))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigationFocus(CalendarIndexScreen));