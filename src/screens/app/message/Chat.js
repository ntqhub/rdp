import React, { Component } from 'react'
import { connect } from 'react-redux';
import {View, SafeAreaView, Text} from 'react-native';
import Svg,{ Path, G, Circle, Rect, } from 'react-native-svg';
import {GiftedChat, Actions, SystemMessage, Send, Bubble, Time, LoadEarlier,} from 'react-native-gifted-chat'

import axios from '../../../lib/Axios';
import styles from "../../../theme/Style";
import NavigationOptions from "../../../lib/NavigationOptions";
import {verticalScale} from "../../../lib/Scaling";
import StatusBarComp from "../../../components/StatusBarComp";
import Button from "../../../components/Button";

class MessageChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            last_id: null,
            prepare: false,
        };
    }

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        let title = params.title;
        return NavigationOptions(navigation, {
            title: title,
            left_func: 'BottomTabStack',
            margin_top: false,
            backgroundColor: '#F9FBFF'
        });
    };

    componentWillMount() {
        this.getData();
        this.startTimer();
    }

    getData = () => {
        if(this.state.prepare === true ) return true;
        this.setState({prepare: true});
        axios.get('v1/support.getMessage',{
            params :{
                last_id: this.state.last_id,
            }
        })
            .then(response => {
                if( Object.keys(response).length ){
                    if( Object.keys(response.items).length ){
                        response.items.forEach((item) => {
                            let message = {
                                _id: item.id,
                                text: item.content,
                                createdAt: new Date(item.created_at),
                                system: item.system,
                                type: item.type,
                                sent: true,
                                received: true,
                                pending: false,
                                user: {
                                    _id: (item.is_support) ? 0 : this.props.user_id,
                                    avatar: 'https://api.client.manana.life/tmp/3.jpg',
                                    name: 'zzz'
                                },
                            };
                            this.setState(previousState => ({
                                messages: GiftedChat.append(previousState.messages, message),
                            }));
                            this.setState({last_id: item.id});
                        });
                    }
                    this.setState({prepare: false});
                }
            });
    };

    componentWillUnmount(){
        clearInterval(this.interval_update);
    }

    startTimer = () => {
        this.interval_update = setInterval(() => {
            this.getData();
        }, 3000);
    };

    onSend(messages = []) {
        console.log( messages[0]._id);
        axios.post('v1/support.sendMessage', {
            content: messages[0].text,
        })
            .then(response => {

            })
            .catch((error) => {
                alert('Ошибка сервера'+error);
            });
    }

    renderSend(props) {
        return (
            <Send
                {...props}
            >
                <View style={{marginRight: 5, marginBottom: 10}}>
                    <Svg width="30" height="31" viewBox="0 0 30 31" fill="none">
                        <Path d="M15 0.0209961C17.9667 0.0209961 20.8668 0.902767 23.3335 2.5548C25.8003 4.20684 27.7229 6.55494 28.8582 9.30217C29.9935 12.0494 30.2906 15.0724 29.7118 17.9888C29.133 20.9053 27.7044 23.5842 25.6066 25.6869C23.5088 27.7895 20.8361 29.2214 17.9263 29.8015C15.0166 30.3817 12.0006 30.0839 9.25975 28.946C6.51886 27.808 4.17618 25.881 2.52796 23.4086C0.879734 20.9361 0 18.0293 0 15.0557C0 11.0683 1.58035 7.24412 4.3934 4.42456C7.20644 1.60501 11.0218 0.0209961 15 0.0209961Z" fill="#074A5D"/>
                        <Path d="M21.7747 14.7629L8.41844 10.0757C8.37308 10.0505 8.32046 10.0398 8.26832 10.0454C8.21617 10.0509 8.16727 10.0724 8.12881 10.1066C8.05521 10.1705 8.00928 10.2585 8.00008 10.3532V13.6529C8.00142 13.8598 8.07504 14.0602 8.2092 14.2223C8.34336 14.3844 8.53033 14.4987 8.74025 14.5471L12.4367 15.0404L8.74025 15.5954C8.53035 15.6324 8.34088 15.7394 8.20541 15.8974C8.06994 16.0554 7.9972 16.2543 8.00008 16.4587V19.7579C8.00928 19.8527 8.05521 19.9407 8.12881 20.0046C8.18752 20.0388 8.25352 20.0598 8.32189 20.0662C8.33937 20.0683 8.3571 20.0666 8.3738 20.0613C8.3905 20.0559 8.40575 20.0471 8.41844 20.0354L21.7747 15.3174C21.8383 15.3002 21.8944 15.264 21.935 15.2141C21.9755 15.1642 21.9983 15.1031 22 15.0399C21.9936 14.9781 21.969 14.9192 21.9291 14.8702C21.8893 14.8212 21.8357 14.784 21.7747 14.7629Z" fill="white"/>
                    </Svg>

                </View>
            </Send>
        );
    }

    renderBubble(props) {
        if (props.currentMessage.type === 2) {
            return (
                <View style={{
                    flex: 1,
                    borderWidth: 1,
                    borderColor: '#074A5D',
                    padding: 15,
                    marginRight: 20,
                    borderRadius: 5,
                }}>
                    <Text>Приглашение на работу</Text>

                    <View style={{
                        MarginTop: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <Button transparent={true} title="Отказать" onPress={() => {
                            this.props.navigation.navigate('ReservationConfirmed')
                        }}/>

                        <Button transparent={false} title="Принять" onPress={() => {
                            this.props.navigation.navigate('ReservationConfirmed')
                        }}/>
                    </View>

                </View>
            )
        } else {
            return (<Bubble {...props}
                            wrapperStyle={{
                                left: {backgroundColor: '#FFFFFF'},
                                right: {backgroundColor: '#FFFFFF'},
                            }}
                            bottomContainerStyle={{
                                color: '#262626'
                            }}
                            tickStyle={{
                                color: '#262626', fontSize: verticalScale(12),
                            }}
                            textStyle={{
                                left: {
                                    color: '#262626',
                                    fontSize: verticalScale(14),
                                    fontFamily: 'PFBeauSansPro-Regular',
                                },
                                right: {
                                    color: '#262626',
                                    fontSize: verticalScale(14),
                                    fontFamily: 'PFBeauSansPro-Regular',
                                },
                            }}

            />)
        }
    }

    renderTime(props) {
        return (
            <Time
                {...props}
                textStyle={{
                    right: {
                        color: '#262626', fontSize: verticalScale(12), fontFamily: 'PFBeauSansPro-Regular',
                    },
                    left: {
                        color: '#262626', fontSize: verticalScale(12), fontFamily: 'PFBeauSansPro-Regular',
                    }
                }}
            />
        );
    }

    renderLoadEarlier(props) {
        return (
            <LoadEarlier {...props}/>
        );
    }

    onLoadEarlier = async () => {
        alert('В разработке');
    };

    render() {
        return(
            <SafeAreaView style={styles.container_global}>
                <StatusBarComp/>

                    <GiftedChat
                        style={styles.container_global}
                        messages={this.state.messages}
                        onSend={messages => this.onSend(messages)}
                        placeholder="Введите сообщение..."
                        locale={"ru"}
                        dateFormat={'DD.MM.YYYY'}
                        timeFormat={'HH:mm'}
                        alwaysShowSend={true}
                        //renderAvatar={null}
                        showUserAvatar={true}
                        //showAvatarForEveryMessage={false}
                        renderSend={this.renderSend}
                        renderTime={this.renderTime}
                        renderBubble={this.renderBubble.bind(this)}
                        loadEarlier={true}
                        onLoadEarlier={this.onLoadEarlier}
                        renderLoadEarlier={this.renderLoadEarlier}
                        user={{
                            _id: this.props.user_id,
                            avatar: this.props.avatar,
                            name: this.props.first_name
                        }}
                    />

            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user_id: state.User.id,
        avatar: state.User.avatar,
        first_name: state.User.first_name
    }
};

const mapDispatchToProps = dispatch => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageChatScreen);