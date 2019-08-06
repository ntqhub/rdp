import React, {Component} from 'react';
import {Text, View} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import {Root} from 'native-base';
import firebase from 'react-native-firebase';
import type {Notification, NotificationOpen} from 'react-native-firebase';
import storage from 'redux-persist/lib/storage';
import SplashScreen from 'react-native-splash-screen';

import {verticalScale} from "./lib/Scaling";
import checkVersion from "./lib/CheckVersion";
import Application from './route/Index';
import ModalView from "./components/ModalView";
import SvgInformationInternet from "./assets/svg/SvgInformationInternet";
import {connect} from "react-redux";
import {UserSetGEO} from "./actions/User";
import axios from "./lib/Axios";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            connectionType: '',
            connectionStatus: false,
            isLoaded: false,
        };
    }

    _getFirebaseToken = () => {
        firebase.messaging().getToken().then(fcmToken => {
            console.log('FireBaseToken: ' + fcmToken);
            storage.setItem('fcntoken', fcmToken)
        });
    };

    _parseNotificationOpen = (action, notification) => {
        console.log(action);
        console.log(notification);
    };

    async componentDidMount() {
        this.unsubscribeNetInfo = NetInfo.addEventListener(state => {
            this.setState({connectionType: state.type});
            this.setState({connectionStatus: state.isConnected});
        });

        checkVersion();

        firebase.messaging().hasPermission().then(enabled => {
            if (!enabled) {
                firebase.messaging().requestPermission().then(permission => {
                    if (permission === 'granted') this._getFirebaseToken();
                });
            } else {
                this._getFirebaseToken();
            }
        });
        this.onTokenRefreshListener = firebase.messaging().onTokenRefresh(() => this._getFirebaseToken());

        //регистрируем обработчик оповещений для приложение если оно активно(не свернуто)
        // this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification: Notification) => {
        //     console.log(notification);
        //     if (notification.data.type && parseInt(notification.data.type) === 2) {
        //         return true;
        //     }
        // });

        //регистрируем обработчки оповещений для фоновой работы
        this.removeNotificationListener = firebase.notifications().onNotification((notification: Notification) => {
            console.log(notification);
            if (notification.data.type && parseInt(notification.data.type) === 2) {
                return true;
            }

            // Process your notification as required
            const channel = new firebase.notifications.Android.Channel('test-channel', 'Test Channel', firebase.notifications.Android.Importance.Max)
                .setDescription('My apps test channel');
            firebase.notifications().android.createChannel(channel);

            const notification_test = new firebase.notifications.Notification({
                sound: 'default',
                show_in_foreground: true,
            }).setNotificationId(notification.notificationId)
                .setTitle(notification.title)
                .setSubtitle(notification.subtitle)
                .setBody(notification.body)
                .android.setChannelId('test-channel')
                .android.setSmallIcon('@mipmap/ic_launcher')
                .android.setPriority(firebase.notifications.Android.Priority.High);
            firebase.notifications()
                .displayNotification(notification_test)
                .catch(err => console.error(err));
        });

        //Вызов функционала при открытом приложении и нажали на оповещение
        this.removeNotificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen: NotificationOpen) => {
            const action = notificationOpen.action;
            const notification: Notification = notificationOpen.notification;
            this._parseNotificationOpen(action, notification);
        });

        //Вызов функционала при клике на оповещалку при закрытом приложении
        firebase.notifications().getInitialNotification().then((notificationOpen: NotificationOpen) => {
            if (notificationOpen) {
                const action = notificationOpen.action;
                const notification: Notification = notificationOpen.notification;
                this._parseNotificationOpen(action, notification);
            }
        });

        //Отслеживание координат
        this.GEOwatchId = navigator.geolocation.watchPosition((position) => {
            this.props.UserSetGEO(position.coords.latitude, position.coords.longitude);
        }, (err) => {
        }, {
            enableHighAccuracy: true,
            timeOut: 20000,
            maximumAge: 60 * 60 * 24,
            distanceFilter: 1
        });

        SplashScreen.hide();
    }

    componentWillUnmount() {
        this.unsubscribeNetInfo();
        navigator.geolocation.clearWatch(this.GEOwatchId);
        this.removeNotificationListener();
        this.notificationDisplayedListener();
        this.onTokenRefreshListener();
        this.removeNotificationOpenedListener();
    }

    render() {
        return (
            <Root>
                <Application/>
                <ModalView title="Нет подключения к сети" visible={!(this.state.connectionStatus)} information={true}
                           informationTitle={'Возобновить'}>
                    <View style={{marginTop: 60, alignItems: 'center'}}>
                        <SvgInformationInternet/>
                    </View>
                    <Text style={{
                        marginTop: 40,
                        textAlign: 'center',
                        color: '#FFFFFF',
                        fontSize: verticalScale(16),
                        fontFamily: 'PFBeauSansPro-Regular'
                    }}>Отсутсвует Интернет-соединение. Маньяна будет загружена, когда оно восстановится.</Text>
                </ModalView>
            </Root>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {
        UserSetGEO: (latitude, longitude) => {
            dispatch(UserSetGEO(latitude, longitude))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);