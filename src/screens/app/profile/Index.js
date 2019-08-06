import React, { Component } from 'react'
import {connect} from "react-redux";
import Svg, {Path, G, Circle, Rect,} from 'react-native-svg';
import {View, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import {Text, Left, Right, List, ListItem} from 'native-base';

import axios from './../../../lib/Axios';
import styles from "../../../theme/Style";
import NavigationOptions from "../../../lib/NavigationOptions";
import Style from "../../../theme/Profile";
import StatusBarComp from "../../../components/StatusBarComp";
import CacheImage from "../../../components/CacheImage";
import Button from "../../../components/Button";

class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static navigationOptions = ({navigation}) => NavigationOptions(navigation, {
        title: 'Мой профиль',
        disabled_left: true,
        margin_top: false
    });

    LogOut = () => {
        axios.get('v1/user.logout')
            .then(response => {
                this.props.Clear();
                this.props.navigation.navigate('Global');
            });
    };

    render() {
        return(
            <SafeAreaView style={styles.container_global}>
                <StatusBarComp/>

                <ScrollView>
                    <View style={[Style.dop_block, {flexDirection: "row", alignItems: "center"}]}>
                        <View>
                            <CacheImage style={{width: 100, height: 100, borderRadius: 5}} uri={this.props.avatar}/>
                        </View>
                        <View style={{marginLeft: 20}}>
                            <Text style={{
                                fontFamily: 'PFBeauSansPro-Bold',
                                fontSize: 23,
                                color: "#262626",
                            }}>{this.props.last_name}</Text>
                            <Text style={{
                                fontFamily: 'PFBeauSansPro-Bold',
                                fontSize: 23,
                                color: "#262626",
                            }}>{this.props.fist_name}</Text>
                            <TouchableOpacity style={{flexDirection: "row", alignItems: "center", marginTop: 20}}
                                              onPress={() => {
                                                  this.props.navigation.navigate('ProfileEditMainScreen')
                                              }}>
                                <Text style={{
                                    marginRight: 10,
                                    color: "#074A5D",
                                    fontSize: 14,
                                    fontFamily: 'PFBeauSansPro-Regular'
                                }}>Смотреть и редактировать</Text>
                                <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <Path
                                        d="M13.3954 1.50302L12.4548 0.557298C11.7158 -0.185766 10.4394 -0.185766 9.70042 0.557298L1.36998 8.93365C1.30279 9.00121 1.30279 9.06876 1.23561 9.13631L0.0263554 13.4596C-0.0408256 13.5947 0.0263554 13.7973 0.160717 13.8649C0.227898 13.9324 0.36226 14 0.496622 14C0.563803 14 0.563803 14 0.630984 14L4.93057 12.7841C4.99775 12.7841 5.06493 12.7165 5.13211 12.649L13.3954 4.34017C13.7985 3.93486 14 3.462 14 2.92159C14 2.38118 13.7985 1.90832 13.3954 1.50302ZM4.52748 11.9735L1.10125 12.9867L2.10897 9.47406L8.82706 2.71894L11.3128 5.21834L4.52748 11.9735ZM12.7907 3.66466L11.8502 4.61037L9.36451 2.11098L10.305 1.16526C10.7081 0.759952 11.4471 0.759952 11.8502 1.16526L12.7907 2.11098C12.9923 2.31363 13.1266 2.58384 13.1266 2.85404C13.1266 3.1918 12.9923 3.462 12.7907 3.66466Z"
                                        fill="#074A5D"/>
                                </Svg>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection: "row", alignItems: "center",}} onPress={() => {
                                this.props.navigation.navigate('ProfileMainScreen')
                            }}>
                                <Text style={{color: "#074A5D", fontFamily: 'PFBeauSansPro-Regular'}}>Профиль 2</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <View style={Style.dop_block}>
                            <View style={Style.dop_block_title}>
                                <View style={Style.border_dop}>
                                    <View style={Style.dop_header}>
                                        <Text style={Style.dop_header__title}>Дополните профиль</Text>
                                    </View>
                                    <View>
                                        <View style={{
                                            padding: 15,
                                        }}>
                                            <View style={{
                                                position: "relative",
                                                height: 2,
                                                width: "100%",
                                                backgroundColor: "#E7EDF8",
                                            }}>
                                                <View style={{
                                                    position: "absolute",
                                                    left: 0,
                                                    top: 0,
                                                    height: 2,
                                                    width: "66%",
                                                    backgroundColor: "#074A5D",
                                                }}></View>
                                            </View>
                                        </View>
                                        <View>
                                            <View style={{
                                                flexDirection: "row",
                                                alignItems: "center",
                                                marginLeft: 15,
                                                marginBottom: 20,
                                            }}>
                                                <Svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <Path
                                                        d="M13.3954 1.50302L12.4548 0.557298C11.7158 -0.185766 10.4394 -0.185766 9.70042 0.557298L1.36998 8.93365C1.30279 9.00121 1.30279 9.06876 1.23561 9.13631L0.0263554 13.4596C-0.0408256 13.5947 0.0263554 13.7973 0.160717 13.8649C0.227898 13.9324 0.36226 14 0.496622 14C0.563803 14 0.563803 14 0.630984 14L4.93057 12.7841C4.99775 12.7841 5.06493 12.7165 5.13211 12.649L13.3954 4.34017C13.7985 3.93486 14 3.462 14 2.92159C14 2.38118 13.7985 1.90832 13.3954 1.50302ZM4.52748 11.9735L1.10125 12.9867L2.10897 9.47406L8.82706 2.71894L11.3128 5.21834L4.52748 11.9735ZM12.7907 3.66466L11.8502 4.61037L9.36451 2.11098L10.305 1.16526C10.7081 0.759952 11.4471 0.759952 11.8502 1.16526L12.7907 2.11098C12.9923 2.31363 13.1266 2.58384 13.1266 2.85404C13.1266 3.1918 12.9923 3.462 12.7907 3.66466Z"
                                                        fill="#074A5D"/>
                                                </Svg>
                                                <Text style={Style.text_dop_zapoln}>Заполнено на 66%</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <View style={{flexDirection: "row", alignItems: "center", marginLeft: 15}}>
                                                <Svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <Path fillRule="evenodd" clipRule="evenodd"
                                                          d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM9 17C13.2605 17 17 13.2605 17 9C17 4.73952 13.2605 1 9 1C4.73952 1 1 4.73952 1 9C1 13.2605 4.73952 17 9 17Z"
                                                          fill="#074A5D"/>
                                                    <Path
                                                        d="M9.5 10.5C9.5 10.5 9.5 11 9 11C8.5 11 8.5 10.5 8.5 10.5C8.5 10.2311 8.02567 5.49647 8.02567 5.49647C8.02567 5.39304 8.05547 5.28961 8.11506 5.18618C8.19452 5.06206 8.32364 5 8.50241 5L9.5173 5.00012C9.71594 5.00012 9.84506 5.06218 9.90465 5.1863C9.98411 5.28973 10.0139 5.39316 9.99404 5.49659L9.5 10.5Z"
                                                        fill="#074A5D"/>
                                                    <Path
                                                        d="M9.96654 13C9.96654 13.5523 9.52631 14 8.98327 14C8.44022 14 8 13.5523 8 13C8 12.4477 8.44022 12 8.98327 12C9.52631 12 9.96654 12.4477 9.96654 13Z"
                                                        fill="#074A5D"/>
                                                </Svg>

                                                <Text style={Style.text_dop_solar}>Вы сможете зарабатывать больше, если
                                                    заказчики будут знать о Вас немного больше.</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <List style={{marginRight: 20, marginLeft: 10}}>
                            <ListItem style={{paddingTop: 10, paddingBottom: 20}} onPress={() => {
                                this.props.navigation.navigate('ProfileWorkHistoryScreen')
                            }}>
                                <Left>
                                    <Text style={Style.list_item_text}>История работ</Text>
                                </Left>
                                <Right>
                                    <Svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path opacity="0.8" d="M5.9974 6.0575C5.98409 6.17048 5.93539 6.27703 5.85761 6.36332L1.08818 11.7533C1.04112 11.8186 0.980188 11.8739 0.909313 11.9155C0.838439 11.9571 0.759193 11.9841 0.67668 11.9948C0.594167 12.0055 0.510216 11.9996 0.430236 11.9776C0.350255 11.9555 0.276019 11.9177 0.212308 11.8667C0.148597 11.8157 0.0968247 11.7525 0.0603256 11.6813C0.0238266 11.6101 0.00341029 11.5323 0.000391819 11.4532C-0.00262665 11.374 0.0118197 11.295 0.0428002 11.2215C0.0737807 11.1479 0.120608 11.0814 0.180267 11.0261L4.62797 5.9999L0.180266 0.973386C0.0671313 0.868226 0.00252892 0.724606 0.000670839 0.574119C-0.00118725 0.423632 0.0598512 0.278605 0.170358 0.170945C0.280866 0.0632848 0.431789 0.00180813 0.589928 4.00023e-05C0.748067 -0.00172812 0.900467 0.0563573 1.0136 0.161518C1.04153 0.187481 1.06674 0.215957 1.0889 0.246545L5.85761 5.63648C5.90928 5.69422 5.94827 5.76122 5.97228 5.83353C5.99629 5.90584 6.00483 5.982 5.9974 6.0575Z" fill="#074A5D"/>
                                    </Svg>
                                </Right>
                            </ListItem>
                            <ListItem style={{paddingTop: 20, paddingBottom: 20}} onPress={() => {
                                this.props.navigation.navigate('ProfileMyRatingScreen')
                            }}>
                                <Left>
                                    <Text style={Style.list_item_text}>Мой рейтинг</Text>
                                </Left>
                                <Right>
                                    <Svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path opacity="0.8" d="M5.9974 6.0575C5.98409 6.17048 5.93539 6.27703 5.85761 6.36332L1.08818 11.7533C1.04112 11.8186 0.980188 11.8739 0.909313 11.9155C0.838439 11.9571 0.759193 11.9841 0.67668 11.9948C0.594167 12.0055 0.510216 11.9996 0.430236 11.9776C0.350255 11.9555 0.276019 11.9177 0.212308 11.8667C0.148597 11.8157 0.0968247 11.7525 0.0603256 11.6813C0.0238266 11.6101 0.00341029 11.5323 0.000391819 11.4532C-0.00262665 11.374 0.0118197 11.295 0.0428002 11.2215C0.0737807 11.1479 0.120608 11.0814 0.180267 11.0261L4.62797 5.9999L0.180266 0.973386C0.0671313 0.868226 0.00252892 0.724606 0.000670839 0.574119C-0.00118725 0.423632 0.0598512 0.278605 0.170358 0.170945C0.280866 0.0632848 0.431789 0.00180813 0.589928 4.00023e-05C0.748067 -0.00172812 0.900467 0.0563573 1.0136 0.161518C1.04153 0.187481 1.06674 0.215957 1.0889 0.246545L5.85761 5.63648C5.90928 5.69422 5.94827 5.76122 5.97228 5.83353C5.99629 5.90584 6.00483 5.982 5.9974 6.0575Z" fill="#074A5D"/>
                                    </Svg>
                                </Right>
                            </ListItem>
                            <ListItem style={{paddingTop: 20, paddingBottom: 20}} onPress={() => {
                                this.props.navigation.navigate('ProfileRequisitesScreen')
                            }}>
                                <Left>
                                    <Text style={Style.list_item_text}>Реквизиты для оплаты</Text>
                                </Left>
                                <Right>
                                    <Svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path opacity="0.8" d="M5.9974 6.0575C5.98409 6.17048 5.93539 6.27703 5.85761 6.36332L1.08818 11.7533C1.04112 11.8186 0.980188 11.8739 0.909313 11.9155C0.838439 11.9571 0.759193 11.9841 0.67668 11.9948C0.594167 12.0055 0.510216 11.9996 0.430236 11.9776C0.350255 11.9555 0.276019 11.9177 0.212308 11.8667C0.148597 11.8157 0.0968247 11.7525 0.0603256 11.6813C0.0238266 11.6101 0.00341029 11.5323 0.000391819 11.4532C-0.00262665 11.374 0.0118197 11.295 0.0428002 11.2215C0.0737807 11.1479 0.120608 11.0814 0.180267 11.0261L4.62797 5.9999L0.180266 0.973386C0.0671313 0.868226 0.00252892 0.724606 0.000670839 0.574119C-0.00118725 0.423632 0.0598512 0.278605 0.170358 0.170945C0.280866 0.0632848 0.431789 0.00180813 0.589928 4.00023e-05C0.748067 -0.00172812 0.900467 0.0563573 1.0136 0.161518C1.04153 0.187481 1.06674 0.215957 1.0889 0.246545L5.85761 5.63648C5.90928 5.69422 5.94827 5.76122 5.97228 5.83353C5.99629 5.90584 6.00483 5.982 5.9974 6.0575Z" fill="#074A5D"/>
                                    </Svg>
                                </Right>
                            </ListItem>
                            <ListItem style={{paddingTop: 20, paddingBottom: 20}} onPress={() => {
                                this.props.navigation.navigate('MessageChat', {title: 'Служба поддержки'})
                            }}>
                                <Left>
                                    <Text style={Style.list_item_text}>Служба поддерки</Text>
                                </Left>
                                <Right>
                                    <Svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path opacity="0.8" d="M5.9974 6.0575C5.98409 6.17048 5.93539 6.27703 5.85761 6.36332L1.08818 11.7533C1.04112 11.8186 0.980188 11.8739 0.909313 11.9155C0.838439 11.9571 0.759193 11.9841 0.67668 11.9948C0.594167 12.0055 0.510216 11.9996 0.430236 11.9776C0.350255 11.9555 0.276019 11.9177 0.212308 11.8667C0.148597 11.8157 0.0968247 11.7525 0.0603256 11.6813C0.0238266 11.6101 0.00341029 11.5323 0.000391819 11.4532C-0.00262665 11.374 0.0118197 11.295 0.0428002 11.2215C0.0737807 11.1479 0.120608 11.0814 0.180267 11.0261L4.62797 5.9999L0.180266 0.973386C0.0671313 0.868226 0.00252892 0.724606 0.000670839 0.574119C-0.00118725 0.423632 0.0598512 0.278605 0.170358 0.170945C0.280866 0.0632848 0.431789 0.00180813 0.589928 4.00023e-05C0.748067 -0.00172812 0.900467 0.0563573 1.0136 0.161518C1.04153 0.187481 1.06674 0.215957 1.0889 0.246545L5.85761 5.63648C5.90928 5.69422 5.94827 5.76122 5.97228 5.83353C5.99629 5.90584 6.00483 5.982 5.9974 6.0575Z" fill="#074A5D"/>
                                    </Svg>
                                </Right>
                            </ListItem>
                        </List>

                        <Button onPress={this.LogOut} transparent={false} style={{backgroundColor: '#D43A3A'}}
                                title='Выход'/>

                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fist_name: state.User.first_name,
        last_name: state.User.last_name,
        avatar: state.User.avatar,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        Clear: () => {
            dispatch({type: 'SIGNOUT_REQUEST'})
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);