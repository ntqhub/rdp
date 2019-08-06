import React, { Component } from 'react'
import { connect } from 'react-redux';
import {View, ScrollView, SafeAreaView, RefreshControl, Text, FlatList} from 'react-native';
import {withNavigationFocus} from "react-navigation";

import styles from "../../../theme/Style";
import NavigationOptions from "../../../lib/NavigationOptions";
import {verticalScale} from "../../../lib/Scaling";
import {UserSetViewInformationMessage} from "../../../actions/User";
import ModalView from "../../../components/ModalView";
import StatusBarComp from "../../../components/StatusBarComp";
import SvgInformationMessage from "../../../assets/svg/SvgInformationMessage";
import MessageBlock from "../../../components/message/MessageBlock";
import {MessageGetData} from "../../../actions/Message";

class MessageScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static navigationOptions = ({ navigation }) => NavigationOptions(navigation, {title: 'СООБЩЕНИЯ', disabled_left: true, margin_top: false, backgroundColor:'#F9FBFF'});

    componentDidMount() {
        this.props.MessageGetData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isFocused !== this.props.isFocused && this.props.isFocused === true) {
            this.props.MessageGetData();
        }
    }

    _onRefresh = () => {
        this.props.MessageGetData();
    };

    render() {
        return(
            <SafeAreaView style={styles.container_global}>
                <StatusBarComp/>

                <ModalView title="Сообщения"
                           visible={!this.props.view_information_message}
                           onClose={() => this.props.UserSetViewInformationMessage(true)}
                           information={true}
                           informationTitle={'Ясно'}
                >
                    <View style={{marginTop: 60, alignItems: 'center'}}>
                        <SvgInformationMessage/>
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
                    }}>сообщения</Text> приходят приглашения на работу, подтверждения бронирований и обычные сообщения
                        пользователей
                    </Text>
                </ModalView>

                <View style={{paddingLeft: 20, paddingRight: 20,}}>
                    <View style={{
                        paddingBottom: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderBottomColor: '#E7EDF8'
                    }}>
                        <View style={{flexDirection: 'row', alignItems: 'flex-start',}}>
                            <Text style={{
                                color: '#A1AABA',
                                fontSize: verticalScale(14),
                                fontFamily: 'PFBeauSansPro-Regular',
                            }}>У Вас </Text>
                            <Text style={{
                                color: '#262626',
                                fontSize: verticalScale(14),
                                fontFamily: 'PFBeauSansPro-Regular',
                                textDecorationLine: 'underline',
                            }}>{this.props.count_unread}</Text>
                            <Text style={{
                                color: '#A1AABA',
                                fontSize: verticalScale(14),
                                fontFamily: 'PFBeauSansPro-Regular',
                            }}> непрочитанных</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'flex-end',}}>
                            <Text style={{
                                color: '#A1AABA',
                                fontSize: verticalScale(14),
                                fontFamily: 'PFBeauSansPro-Regular',
                            }}>Мои запросы </Text>
                            <Text style={{
                                color: '#262626',
                                fontSize: verticalScale(14),
                                fontFamily: 'PFBeauSansPro-Regular',
                                textDecorationLine: 'underline',
                            }}>{this.props.count_requests}</Text>
                        </View>
                    </View>
                </View>

                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.props.loading}
                            onRefresh={this._onRefresh}
                        />
                    }
                >

                    <FlatList
                        style={{paddingLeft: 20, paddingRight: 20,}}
                        data={this.props.messages}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item, index}) => {
                            return (
                                <MessageBlock item={item} navigation={this.props.navigation}/>
                            )
                        }}
                    />

                    </ScrollView>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        view_information_message: state.User.view_information_message,
        messages: state.Message.messages,
        count_unread: state.Message.count_unread,
        count_requests: state.Message.count_requests,
        loading: state.Message.loading,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        UserSetViewInformationMessage: (boolean) => {
            dispatch(UserSetViewInformationMessage(boolean))
        },
        MessageGetData: () => {
            dispatch(MessageGetData())
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigationFocus(MessageScreen));