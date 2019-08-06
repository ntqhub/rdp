import React, {Component} from 'react'
import {connect} from "react-redux";
import {SafeAreaView, View, Text} from 'react-native';
import {Tab, Tabs} from 'native-base';
import {withNavigationFocus} from "react-navigation";

import NavigationOptions from "../../../lib/NavigationOptions";
import axios from '../../../lib/Axios';
import styles from "../../../theme/Style";
import {verticalScale} from "../../../lib/Scaling";
import JobAllScreen from "./All";
import JobInWorkScreen from "./InWork";
import ModalView from "../../../components/ModalView";
import StatusBarComp from "../../../components/StatusBarComp";
import SvgInformationJob from "../../../assets/svg/SvgInformationJob";
import {UserSetViewInformationJobInWork, UserSetViewInformationJobAll} from "../../../actions/User";

class JobIndexScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        props.navigation.setParams({title: 'Мои работы'})
    }

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        let title = params.title;
        return NavigationOptions(navigation, {title: title, disabled_left: true, margin_top: false});
    };

    componentDidMount() {
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
                        heading="Мои работы">

                        <ModalView title="Работы"
                                   visible={!this.props.view_information_job_all}
                                   onClose={() => this.props.UserSetViewInformationJobAll(true)}
                                   information={true}
                                   informationTitle={'Ясно'}
                        >
                            <View style={{marginTop: 60, alignItems: 'center'}}>
                                <SvgInformationJob/>
                            </View>
                            <Text style={{
                                marginTop: 40,
                                textAlign: 'center',
                                color: '#FFFFFF',
                                fontSize: verticalScale(16),
                                fontFamily: 'PFBeauSansPro-Regular'
                            }}>
                                В меню <Text style={{
                                color: '#FFFFFF',
                                fontSize: verticalScale(16),
                                fontFamily: 'PFBeauSansPro-Bold',
                                textDecorationLine: 'underline',
                            }}>Мои работы</Text> отражается информация о всех подтвержденных бронированиях
                            </Text>
                        </ModalView>

                        <JobAllScreen {...this.props}/>
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
                        heading="Прогресс дня">

                        <ModalView title="Работы"
                                   visible={!this.props.view_information_job_in_work}
                                   onClose={() => this.props.UserSetViewInformationJobInWork(true)}
                                   information={true}
                                   informationTitle={'Ясно'}
                        >
                            <View style={{marginTop: 60, alignItems: 'center'}}>
                                <SvgInformationJob/>
                            </View>
                            <Text style={{
                                marginTop: 40,
                                textAlign: 'center',
                                color: '#FFFFFF',
                                fontSize: verticalScale(16),
                                fontFamily: 'PFBeauSansPro-Regular'
                            }}>
                                В меню <Text style={{
                                color: '#FFFFFF',
                                fontSize: verticalScale(16),
                                fontFamily: 'PFBeauSansPro-Bold',
                                textDecorationLine: 'underline',
                            }}>Прогресс дня</Text> отражается информация о ходе выполнения работ в режиме он-лайн
                            </Text>
                        </ModalView>

                        <JobInWorkScreen {...this.props}/>
                    </Tab>
                </Tabs>


            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        view_information_job_all: state.User.view_information_job_all,
        view_information_job_in_work: state.User.view_information_job_in_work,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        UserSetViewInformationJobAll: (boolean) => {
            dispatch(UserSetViewInformationJobAll(boolean))
        },
        UserSetViewInformationJobInWork: (boolean) => {
            dispatch(UserSetViewInformationJobInWork(boolean))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigationFocus(JobIndexScreen));