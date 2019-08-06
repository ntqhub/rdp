import React, {Component} from 'react'
import {connect} from 'react-redux';
import {View, ScrollView, SafeAreaView, TouchableOpacity, BackHandler, Text} from 'react-native';
import Svg, {Path, G, Circle, Rect,} from 'react-native-svg';

import NavigationOptions from "../../../lib/NavigationOptions";
import {verticalScale} from "../../../lib/Scaling";
import styles from "../../../theme/Style";
import styled from "../../../theme/StyleRequisites";
import StatusBarComp from "../../../components/StatusBarComp";

class ProfileRequisitesScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    static navigationOptions = ({navigation}) => NavigationOptions(navigation, {
        title: 'Реквизиты для оплаты',
        left_func: 'BottomTabStack',
        margin_top: false
    });

    handleBackPress = () => {
        this.props.navigation.navigate('BottomTabStack');
        return true;
    };

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    render() {
        return(
            <SafeAreaView style={styles.container_global}>
                <StatusBarComp/>

                <ScrollView style={styles.content_global}>
                    <View style={styled.border_requ}>
                        <View style={{flexDirection: "row"}}>
                            <Text style={{fontFamily: 'PFBeauSansPro-Regular', fontSize: 16}}>Валюта платежа:</Text>
                            <Text style={{
                                fontFamily: 'PFBeauSansPro-Regular',
                                fontWeight: "bold",
                                color: "#074A5D",
                                marginLeft: 10,
                                lineHeight: 20
                            }}>RUB(<Text style={styled.sign}>₽</Text>)</Text>
                        </View>
                        <View style={{marginTop: 30}}>
                            <Text style={{fontFamily: 'PFBeauSansPro-Regular', fontSize: 14}}>Ваш юридический
                                статус</Text>
                            <View full style={{flexDirection: "row", justifyContent: "space-between"}}>
                                <Text style={{fontFamily: 'PFBeauSansPro-Regular', fontSize: 16, color: "#074A5D"}}>Физическое
                                    лицо</Text>
                                <Text style={{
                                    textDecorationLine: "underline",
                                    color: "#074A5D",
                                    fontSize: 14,
                                }}>изменить</Text>
                            </View>
                        </View>
                    </View>
                    {/* Account number */}
                    <View style={styled.acc_numb}>
                        <View style={[styles.content_global, {marginTop: 20, marginBottom: 20}]}>
                            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                <View>
                                    <Text style={styled.fontMinF}>Номер счета</Text>
                                    <Text style={styled.fontF}>40817810400230088867</Text>
                                </View>
                                <View style={{flexDirection: "row"}}>
                                    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <Path
                                            d="M13.3954 1.50302L12.4548 0.557298C11.7158 -0.185766 10.4394 -0.185766 9.70042 0.557298L1.36998 8.93365C1.30279 9.00121 1.30279 9.06876 1.23561 9.13631L0.0263554 13.4596C-0.0408256 13.5947 0.0263554 13.7973 0.160717 13.8649C0.227898 13.9324 0.36226 14 0.496622 14C0.563803 14 0.563803 14 0.630984 14L4.93057 12.7841C4.99775 12.7841 5.06493 12.7165 5.13211 12.649L13.3954 4.34017C13.7985 3.93486 14 3.462 14 2.92159C14 2.38118 13.7985 1.90832 13.3954 1.50302ZM4.52748 11.9735L1.10125 12.9867L2.10897 9.47406L8.82706 2.71894L11.3128 5.21834L4.52748 11.9735ZM12.7907 3.66466L11.8502 4.61037L9.36451 2.11098L10.305 1.16526C10.7081 0.759952 11.4471 0.759952 11.8502 1.16526L12.7907 2.11098C12.9923 2.31363 13.1266 2.58384 13.1266 2.85404C13.1266 3.1918 12.9923 3.462 12.7907 3.66466Z"
                                            fill="#83EFFF"/>
                                    </Svg>
                                    <Text style={[styled.fontMinF, {
                                        marginLeft: 15,
                                        textDecorationLine: "underline"
                                    }]}>изменить</Text>
                                </View>
                            </View>

                            <View style={{marginTop: 20}}>
                                <Text style={styled.fontMinF}> Получатель</Text>
                                <Text style={styled.fontF}>Том Эдисон Алва</Text>
                            </View>
                            <View style={{marginTop: 20}}>
                                <Text style={styled.fontMinF}> Корр.счёт</Text>
                                <Text style={styled.fontF}>30101810200000000600</Text>
                            </View>
                            <View style={{marginTop: 20}}>
                                <Text style={styled.fontMinF}>Банк</Text>
                                <Text style={styled.fontF}>АО Альфа-Банк г.Москва</Text>
                            </View>
                            <View style={{marginTop: 20}}>
                                <Text style={styled.fontMinF}>Бик</Text>
                                <Text style={styled.fontF}>044525511</Text>
                            </View>
                        </View>
                        <View style={[styles.content_global]}>
                            <View style={styled.bottomAccNumb}>
                                <Svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <Path
                                        d="M19 13.5C19 13.5 19 13 19.5 13C20 13 20 13.5 20 13.5V19.0977C20 19.609 19.609 20 19.0977 20H0.902256C0.390977 20 0 19.609 0 19.0977V0.902256C0 0.390977 0.390977 0 0.902256 0H14C14 0 14.5 0.063384 14.5 0.5C14.5 0.936623 14 1 14 1H1.5C1 1 1 1.5 1 1.5V18.5C1 19 1.5 19 1.5 19H18.5C18.5 19 19 19 19 18.5V13.5Z"
                                        fill="#83EFFF"/>
                                    <Path
                                        d="M13.835 1.08703L4.6725 10.8069C4.55247 10.9356 4.41243 11 4.25239 11C4.09235 11 3.9323 10.9356 3.83228 10.8069L0.151291 6.81595C-0.0687684 6.55847 -0.0487631 6.1508 0.211307 5.91478C0.431366 5.70021 0.771457 5.70021 1.01152 5.91478L4.25239 9.43367L12.9947 0.164393C13.2348 -0.0716298 13.6149 -0.0501731 13.835 0.207307C14.055 0.44333 14.055 0.829549 13.835 1.08703Z"
                                        fill="#83EFFF"/>
                                </Svg>
                                <Text style={styled.alignText}>Основные</Text>

                                {/* </View> */}

                            </View>

                        </View>
                    </View>
                    {/* Account number */}
                    <View style={styled.acc_numb_second}>
                        <View style={[styles.content_global, {marginTop: 20, marginBottom: 20}]}>
                            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                <View>
                                    <Text style={styled.fontMinF_sec}>Номер счета</Text>
                                    <Text style={styled.fontF_sec}>40817810400230088867</Text>
                                </View>
                                <View style={{flexDirection: "row"}}>
                                    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <Path
                                            d="M13.3954 1.50302L12.4548 0.557298C11.7158 -0.185766 10.4394 -0.185766 9.70042 0.557298L1.36998 8.93365C1.30279 9.00121 1.30279 9.06876 1.23561 9.13631L0.0263554 13.4596C-0.0408256 13.5947 0.0263554 13.7973 0.160717 13.8649C0.227898 13.9324 0.36226 14 0.496622 14C0.563803 14 0.563803 14 0.630984 14L4.93057 12.7841C4.99775 12.7841 5.06493 12.7165 5.13211 12.649L13.3954 4.34017C13.7985 3.93486 14 3.462 14 2.92159C14 2.38118 13.7985 1.90832 13.3954 1.50302ZM4.52748 11.9735L1.10125 12.9867L2.10897 9.47406L8.82706 2.71894L11.3128 5.21834L4.52748 11.9735ZM12.7907 3.66466L11.8502 4.61037L9.36451 2.11098L10.305 1.16526C10.7081 0.759952 11.4471 0.759952 11.8502 1.16526L12.7907 2.11098C12.9923 2.31363 13.1266 2.58384 13.1266 2.85404C13.1266 3.1918 12.9923 3.462 12.7907 3.66466Z"
                                            fill="#074A5D"/>
                                    </Svg>

                                    <Text style={[styled.fontMinF_sec, {
                                        marginLeft: 15,
                                        textDecorationLine: "underline",
                                        color: "#074A5D"
                                    }]}>изменить</Text>
                                </View>
                            </View>

                            <View style={{marginTop: 20}}>
                                <Text style={styled.fontMinF_sec}> Получатель</Text>
                                <Text style={styled.fontF_sec}>Том Эдисон Алва</Text>
                            </View>
                            <View style={{marginTop: 20}}>
                                <Text style={styled.fontMinF_sec}> Корр.счёт</Text>
                                <Text style={styled.fontF_sec}>30101810200000000600</Text>
                            </View>
                            <View style={{marginTop: 20}}>
                                <Text style={styled.fontMinF_sec}>Банк</Text>
                                <Text style={styled.fontF_sec}>АО Альфа-Банк г.Москва</Text>
                            </View>
                            <View style={{marginTop: 20}}>
                                <Text style={styled.fontMinF_sec}>Бик</Text>
                                <Text style={styled.fontF_sec}>044525511</Text>
                            </View>
                        </View>
                        <View style={[styles.content_global]}>
                            <View style={styled.bottomAccNumbBord}>
                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "50%"
                                }}>
                                    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <Path
                                            d="M19 13.5C19 13.5 19 13 19.5 13C20 13 20 13.5 20 13.5V19.0977C20 19.609 19.609 20 19.0977 20H0.902256C0.390977 20 0 19.609 0 19.0977V0.902256C0 0.390977 0.390977 0 0.902256 0H14C14 0 14.5 0.063384 14.5 0.5C14.5 0.936623 14 1 14 1H1.5C1 1 1 1.5 1 1.5V18.5C1 19 1.5 19 1.5 19H18.5C18.5 19 19 19 19 18.5V13.5Z"
                                            fill="#074A5D"/>
                                    </Svg>

                                    <Text style={[styled.alignText, {color: "#2B2B2B"}]}>Сделать основной</Text>
                                </View>
                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "50%"
                                }}>
                                    <Svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <Path
                                            d="M11.7955 10.8068L6.95455 6L11.7955 1.19318C12.0682 0.920455 12.0682 0.477273 11.7955 0.238636C11.5227 0 11.0795 -0.0340909 10.8409 0.238636L6 5.04545L1.19318 0.204545C0.920455 -0.0681818 0.477273 -0.0681818 0.238636 0.204545C0 0.477273 -0.0340909 0.920455 0.238636 1.15909L5.04545 6L0.204545 10.8068C-0.0681818 11.0795 -0.0681818 11.5227 0.204545 11.7614C0.477273 12 0.920455 12.0341 1.15909 11.7614L6 6.95455L10.8068 11.7955C11.0795 12.0682 11.5227 12.0682 11.7614 11.7955C12 11.5227 12.0341 11.0795 11.7955 10.8068Z"
                                            fill="#074A5D"/>
                                    </Svg>

                                    <Text style={[styled.alignText, {color: "#2B2B2B"}]}>Удалить</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={{
                        backgroundColor: '#F9FBFF',
                        borderColor: '#074A5D',
                        borderWidth: 1,
                        borderRadius: 5,
                        borderStyle: 'dashed',
                        flex: 1,
                        paddingTop: 20,
                        paddingBottom: 20,
                        paddingLeft: 15,
                        paddingRight: 15,
                    }} onPress={() => {
                        this.props.Create(this.props.add);
                        this.props.navigation.navigate('UserSummaryView')
                    }}>
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            textAlign: 'center',
                            paddingTop: 20,
                            paddingBottom: 20
                        }}>
                            <Text style={{
                                fontSize: verticalScale(16),
                                color: '#074A5D',
                                fontFamily: 'PFBeauSansPro-Regular'
                            }}>+ добавить еще</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>

            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = dispatch => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileRequisitesScreen);