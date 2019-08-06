import React, {Component} from 'react'
import {connect} from 'react-redux';
import {View, Image, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import {Text, Button, List, ListItem} from 'native-base';
import Svg, {Path, Rect} from "react-native-svg";
import {TextMask} from "react-native-masked-text";

import axios from '../../../../lib/Axios';
import styles from "../../../../theme/Style";
import NavigationOptions from "../../../../lib/NavigationOptions";
import {Set} from '../../../../actions/user_summary/Add';
import {verticalScale} from "../../../../lib/Scaling";
import StatusBarComp from "../../../../components/StatusBarComp";

class UserSummaryViewIndexScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static navigationOptions = ({ navigation }) => NavigationOptions(navigation, {title: 'ДОБАВИТЬ ОБЪЯВЛЕНИЕ', left_func: 'BottomTabStack', margin_top: false});

    componentWillMount() {
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.id === null) {
            console.log('save');
            this.props.Set(this.props.item);
        }
        return true;
    }

    ListItemEmpty = (title) => {
        return (
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
            <View style={{}}>
                <Text style={{
                    fontSize: verticalScale(14),
                    color: '#A1AABA',
                    fontFamily: 'PFBeauSansPro-Regular'
                }}>{title}</Text>
            </View>
            <View style={{width:10,}}>
                <Svg width="7" height="14" viewBox="0 0 7 14" fill="none">
                    <Path d="M6.99697 6.93292C6.98144 6.80111 6.92462 6.6768 6.83388 6.57612L1.26954 0.28786C1.21464 0.211589 1.14355 0.147108 1.06087 0.0985703C0.978179 0.0500326 0.885725 0.0185149 0.78946 0.00604718C0.693194 -0.00642053 0.595252 0.000438283 0.501942 0.0261818C0.408631 0.0519253 0.322022 0.0959827 0.247693 0.155516C0.173363 0.215049 0.112962 0.288738 0.0703799 0.371837C0.0277977 0.454935 0.00397871 0.545599 0.000457177 0.63799C-0.00306436 0.730381 0.0137897 0.82245 0.0499336 0.908265C0.0860776 0.994081 0.14071 1.07174 0.210312 1.13624L5.39929 7.00011L0.210312 12.8644C0.078321 12.9871 0.00295155 13.1546 0.0007838 13.3302C-0.00138395 13.5058 0.0698275 13.675 0.198753 13.8006C0.327678 13.9262 0.503755 13.9979 0.68825 14C0.872746 14.002 1.05055 13.9343 1.18254 13.8116C1.21511 13.7813 1.24453 13.7481 1.27039 13.7124L6.83388 7.4241C6.89416 7.35674 6.93965 7.27858 6.96766 7.19421C6.99567 7.10985 7.00564 7.021 6.99697 6.93292Z" fill="#074A5D"/>
                </Svg>
            </View>
        </View>
        );
    };

    ListItemNotEmplty = () => {
        return (<Text>xxx</Text>);
    };

    render() {
        return(
            <SafeAreaView style={styles.container_global}>
                <StatusBarComp/>

                <ScrollView>
                    <View style={styles.content_global}>
                        <List>

                            <ListItem style={{marginLeft: 0,}} onPress={() => { console.log(this.props.navigation); this.props.navigation.navigate('UserSummaryViewPositionScreen')}}>
                                {Object.keys(this.props.positions).length>0 ?(
                                    <View style={{flex: 1, flexDirection: 'column',}}>
                                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                                            <View style={{}}>
                                                <Text style={{fontSize: verticalScale(14), color: '#074A5D', fontFamily: 'PFBeauSansPro-Regular'}}>Название должности или услуги</Text>
                                            </View>
                                            <View style={{width:15,}}>
                                                <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                    <Path d="M13.3954 1.50302L12.4548 0.557298C11.7158 -0.185766 10.4394 -0.185766 9.70042 0.557298L1.36998 8.93365C1.30279 9.00121 1.30279 9.06876 1.23561 9.13631L0.0263554 13.4596C-0.0408256 13.5947 0.0263554 13.7973 0.160717 13.8649C0.227898 13.9324 0.36226 14 0.496622 14C0.563803 14 0.563803 14 0.630984 14L4.93057 12.7841C4.99775 12.7841 5.06493 12.7165 5.13211 12.649L13.3954 4.34017C13.7985 3.93486 14 3.462 14 2.92159C14 2.38118 13.7985 1.90832 13.3954 1.50302ZM4.52748 11.9735L1.10125 12.9867L2.10897 9.47406L8.82706 2.71894L11.3128 5.21834L4.52748 11.9735ZM12.7907 3.66466L11.8502 4.61037L9.36451 2.11098L10.305 1.16526C10.7081 0.759952 11.4471 0.759952 11.8502 1.16526L12.7907 2.11098C12.9923 2.31363 13.1266 2.58384 13.1266 2.85404C13.1266 3.1918 12.9923 3.462 12.7907 3.66466Z" fill="#074A5D"/>
                                                </Svg>
                                            </View>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row',}}>
                                            {Object.keys(this.props.positions).length>0 ?
                                            this.props.positions.map((item,key)=>
                                                (
                                                    <View key={key} style={{marginRight:5, marginTop:5,}}>
                                                        <View style={{alignItems: 'center',  padding:5, borderWidth:1, borderColor:'#A1AABA', borderRadius:2,}}>
                                                            <Text style={{color: '#262626', fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular',}}>{item.title}</Text>
                                                        </View>
                                                    </View>
                                                )
                                            ) : null}
                                        </View>
                                    </View>
                                ):(
                                    this.ListItemEmpty('Название должности или услуги')
                                )}
                            </ListItem>

                            <ListItem style={{marginLeft: 0,}} onPress={() => this.props.navigation.navigate('UserSummaryViewSheduleScreen')}>
                                { (
                                    this.props.start_form ||
                                    this.props.start_to ||
                                    this.props.duration_from ||
                                    this.props.duration_to
                                ) ? (
                                    <View style={{flex: 1, flexDirection: 'column',}}>
                                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                                            <View style={{}}>
                                                <Text style={{fontSize: verticalScale(14), color: '#074A5D', fontFamily: 'PFBeauSansPro-Regular'}}>Название должности или услуги</Text>
                                            </View>
                                            <View style={{width:15,}}>
                                                <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                    <Path d="M13.3954 1.50302L12.4548 0.557298C11.7158 -0.185766 10.4394 -0.185766 9.70042 0.557298L1.36998 8.93365C1.30279 9.00121 1.30279 9.06876 1.23561 9.13631L0.0263554 13.4596C-0.0408256 13.5947 0.0263554 13.7973 0.160717 13.8649C0.227898 13.9324 0.36226 14 0.496622 14C0.563803 14 0.563803 14 0.630984 14L4.93057 12.7841C4.99775 12.7841 5.06493 12.7165 5.13211 12.649L13.3954 4.34017C13.7985 3.93486 14 3.462 14 2.92159C14 2.38118 13.7985 1.90832 13.3954 1.50302ZM4.52748 11.9735L1.10125 12.9867L2.10897 9.47406L8.82706 2.71894L11.3128 5.21834L4.52748 11.9735ZM12.7907 3.66466L11.8502 4.61037L9.36451 2.11098L10.305 1.16526C10.7081 0.759952 11.4471 0.759952 11.8502 1.16526L12.7907 2.11098C12.9923 2.31363 13.1266 2.58384 13.1266 2.85404C13.1266 3.1918 12.9923 3.462 12.7907 3.66466Z" fill="#074A5D"/>
                                                </Svg>
                                            </View>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row', marginTop:5,}}>
                                            <View style={{flex: 1, alignItems: 'flex-start',}}>
                                                {(this.props.start_form || this.props.start_to) && (
                                                    <View style={{flex: 1,}}>
                                                        <Text style={{textAlign:'left', fontSize: verticalScale(12), color: '#262626', fontFamily: 'PFBeauSansPro-Regular'}}>Время начала рабочей смены</Text>
                                                    </View>
                                                )}
                                                {(this.props.duration_from || this.props.duration_to) && (
                                                    <View style={{flex: 1, marginTop:5, }}>
                                                        <Text style={{textAlign:'left', fontSize: verticalScale(12), color: '#262626', fontFamily: 'PFBeauSansPro-Regular'}}>Продолжительность смены</Text>
                                                    </View>
                                                )}
                                            </View>
                                            <View style={{alignItems: 'flex-start', width:120,}}>
                                                {(this.props.start_form || this.props.start_to) && (
                                                    <View style={{flex: 1,}}>
                                                        <Text style={{textAlign:'left', fontSize: verticalScale(12), color: '#262626', fontFamily: 'PFBeauSansPro-Regular'}}>
                                                            {this.props.start_form && 'с '+this.props.start_form+' '}
                                                            {this.props.start_to && ' до '+this.props.start_to}
                                                        </Text>
                                                    </View>
                                                )}
                                                {(this.props.duration_from || this.props.duration_to) && (
                                                    <View style={{flex: 1, marginTop:5, }}>
                                                        <Text style={{textAlign:'left', fontSize: verticalScale(12), color: '#262626', fontFamily: 'PFBeauSansPro-Regular'}}>
                                                            {this.props.duration_from && 'от '+this.props.duration_from+' '}
                                                            {this.props.duration_to && 'до '+this.props.duration_to}
                                                        </Text>
                                                    </View>
                                                )}
                                            </View>
                                        </View>
                                    </View>
                                ) : (
                                    this.ListItemEmpty('График работы')
                                )}
                            </ListItem>

                            <ListItem style={{marginLeft: 0,}} onPress={() => this.props.navigation.navigate('UserSummaryViewSalaryScreen')}>
                                { (
                                    this.props.salary
                                ) ? (
                                    <View style={{flex: 1, flexDirection: 'column',}}>
                                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                                            <View style={{}}>
                                                <Text style={{fontSize: verticalScale(14), color: '#074A5D', fontFamily: 'PFBeauSansPro-Regular'}}>Расценки</Text>
                                            </View>
                                            <View style={{width:15,}}>
                                                <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                    <Path d="M13.3954 1.50302L12.4548 0.557298C11.7158 -0.185766 10.4394 -0.185766 9.70042 0.557298L1.36998 8.93365C1.30279 9.00121 1.30279 9.06876 1.23561 9.13631L0.0263554 13.4596C-0.0408256 13.5947 0.0263554 13.7973 0.160717 13.8649C0.227898 13.9324 0.36226 14 0.496622 14C0.563803 14 0.563803 14 0.630984 14L4.93057 12.7841C4.99775 12.7841 5.06493 12.7165 5.13211 12.649L13.3954 4.34017C13.7985 3.93486 14 3.462 14 2.92159C14 2.38118 13.7985 1.90832 13.3954 1.50302ZM4.52748 11.9735L1.10125 12.9867L2.10897 9.47406L8.82706 2.71894L11.3128 5.21834L4.52748 11.9735ZM12.7907 3.66466L11.8502 4.61037L9.36451 2.11098L10.305 1.16526C10.7081 0.759952 11.4471 0.759952 11.8502 1.16526L12.7907 2.11098C12.9923 2.31363 13.1266 2.58384 13.1266 2.85404C13.1266 3.1918 12.9923 3.462 12.7907 3.66466Z" fill="#074A5D"/>
                                                </Svg>
                                            </View>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row', marginTop:5,}}>
                                            <View style={{flex: 1, alignItems: 'flex-start',}}>
                                                <View style={{flex: 1,}}>
                                                    <Text style={{textAlign:'left', fontSize: verticalScale(12), color: '#262626', fontFamily: 'PFBeauSansPro-Regular'}}>Ставка за час работы</Text>
                                                </View>
                                            </View>
                                            <View style={{alignItems: 'flex-start', width:120,}}>
                                                <View style={{flex: 1,}}>
                                                    <TextMask type={'money'} options={{precision: 0, separator : ' ', delimiter: ' ', unit: '', suffixUnit: '₽/ч'}} style={{textAlign:'left', fontSize: verticalScale(12), color: '#10BD55', fontFamily: 'PFBeauSansPro-Regular'}} value={this.props.salary}/>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                ) : (
                                    this.ListItemEmpty('Расценки')
                                )}
                            </ListItem>

                            <ListItem style={{marginLeft: 0,}} onPress={() => this.props.navigation.navigate('UserSummaryViewLocationScreen')}>
                                { (
                                    this.props.country ||
                                    this.props.city
                                ) ? (
                                    <View style={{flex: 1, flexDirection: 'column',}}>
                                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                                            <View style={{}}>
                                                <Text style={{fontSize: verticalScale(14), color: '#074A5D', fontFamily: 'PFBeauSansPro-Regular'}}>Локация</Text>
                                            </View>
                                            <View style={{width:15,}}>
                                                <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                    <Path d="M13.3954 1.50302L12.4548 0.557298C11.7158 -0.185766 10.4394 -0.185766 9.70042 0.557298L1.36998 8.93365C1.30279 9.00121 1.30279 9.06876 1.23561 9.13631L0.0263554 13.4596C-0.0408256 13.5947 0.0263554 13.7973 0.160717 13.8649C0.227898 13.9324 0.36226 14 0.496622 14C0.563803 14 0.563803 14 0.630984 14L4.93057 12.7841C4.99775 12.7841 5.06493 12.7165 5.13211 12.649L13.3954 4.34017C13.7985 3.93486 14 3.462 14 2.92159C14 2.38118 13.7985 1.90832 13.3954 1.50302ZM4.52748 11.9735L1.10125 12.9867L2.10897 9.47406L8.82706 2.71894L11.3128 5.21834L4.52748 11.9735ZM12.7907 3.66466L11.8502 4.61037L9.36451 2.11098L10.305 1.16526C10.7081 0.759952 11.4471 0.759952 11.8502 1.16526L12.7907 2.11098C12.9923 2.31363 13.1266 2.58384 13.1266 2.85404C13.1266 3.1918 12.9923 3.462 12.7907 3.66466Z" fill="#074A5D"/>
                                                </Svg>
                                            </View>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row', marginTop:5,}}>
                                            <View style={{flex: 1, alignItems: 'flex-start',}}>
                                                <View style={{flex: 1,}}>
                                                    <Text style={{textAlign:'left', fontSize: verticalScale(12), color: '#262626', fontFamily: 'PFBeauSansPro-Regular'}}>{this.props.country}{(this.props.country) ? ' ' : null}{this.props.city}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                ) : (
                                    this.ListItemEmpty('Локация')
                                )}
                            </ListItem>

                            <ListItem style={{marginLeft: 0,}} onPress={() => this.props.navigation.navigate('UserSummaryViewBookingScreen')}>
                                { (
                                    this.props.booking
                                ) ? (
                                    <View style={{flex: 1, flexDirection: 'column',}}>
                                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                                            <View style={{}}>
                                                <Text style={{fontSize: verticalScale(14), color: '#074A5D', fontFamily: 'PFBeauSansPro-Regular'}}>Бронирование услуги</Text>
                                            </View>
                                            <View style={{width:15,}}>
                                                <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                    <Path d="M13.3954 1.50302L12.4548 0.557298C11.7158 -0.185766 10.4394 -0.185766 9.70042 0.557298L1.36998 8.93365C1.30279 9.00121 1.30279 9.06876 1.23561 9.13631L0.0263554 13.4596C-0.0408256 13.5947 0.0263554 13.7973 0.160717 13.8649C0.227898 13.9324 0.36226 14 0.496622 14C0.563803 14 0.563803 14 0.630984 14L4.93057 12.7841C4.99775 12.7841 5.06493 12.7165 5.13211 12.649L13.3954 4.34017C13.7985 3.93486 14 3.462 14 2.92159C14 2.38118 13.7985 1.90832 13.3954 1.50302ZM4.52748 11.9735L1.10125 12.9867L2.10897 9.47406L8.82706 2.71894L11.3128 5.21834L4.52748 11.9735ZM12.7907 3.66466L11.8502 4.61037L9.36451 2.11098L10.305 1.16526C10.7081 0.759952 11.4471 0.759952 11.8502 1.16526L12.7907 2.11098C12.9923 2.31363 13.1266 2.58384 13.1266 2.85404C13.1266 3.1918 12.9923 3.462 12.7907 3.66466Z" fill="#074A5D"/>
                                                </Svg>
                                            </View>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row', marginTop:5,}}>
                                            <View style={{flex: 1, alignItems: 'flex-start',}}>
                                                <View style={{flex: 1,}}>
                                                    <Text style={{textAlign:'left', fontSize: verticalScale(12), color: '#262626', fontFamily: 'PFBeauSansPro-Regular'}}>{this.props.booking}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                ) : (
                                    this.ListItemEmpty('Бронирование услуги')
                                )}
                            </ListItem>

                            <ListItem style={{marginLeft: 0,}} onPress={() => this.props.navigation.navigate('UserSummaryViewConditionsScreen')}>
                                { (
                                    Object.keys(this.props.conditions).length>0
                                ) ? (
                                    <View style={{flex: 1, flexDirection: 'column',}}>
                                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                                            <View style={{}}>
                                                <Text style={{fontSize: verticalScale(14), color: '#074A5D', fontFamily: 'PFBeauSansPro-Regular'}}>Условия труда и удобства</Text>
                                            </View>
                                            <View style={{width:15,}}>
                                                <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                    <Path d="M13.3954 1.50302L12.4548 0.557298C11.7158 -0.185766 10.4394 -0.185766 9.70042 0.557298L1.36998 8.93365C1.30279 9.00121 1.30279 9.06876 1.23561 9.13631L0.0263554 13.4596C-0.0408256 13.5947 0.0263554 13.7973 0.160717 13.8649C0.227898 13.9324 0.36226 14 0.496622 14C0.563803 14 0.563803 14 0.630984 14L4.93057 12.7841C4.99775 12.7841 5.06493 12.7165 5.13211 12.649L13.3954 4.34017C13.7985 3.93486 14 3.462 14 2.92159C14 2.38118 13.7985 1.90832 13.3954 1.50302ZM4.52748 11.9735L1.10125 12.9867L2.10897 9.47406L8.82706 2.71894L11.3128 5.21834L4.52748 11.9735ZM12.7907 3.66466L11.8502 4.61037L9.36451 2.11098L10.305 1.16526C10.7081 0.759952 11.4471 0.759952 11.8502 1.16526L12.7907 2.11098C12.9923 2.31363 13.1266 2.58384 13.1266 2.85404C13.1266 3.1918 12.9923 3.462 12.7907 3.66466Z" fill="#074A5D"/>
                                                </Svg>
                                            </View>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row', marginTop:5,}}>
                                            <View style={{flex: 1, alignItems: 'flex-start',}}>
                                                <View style={{flex: 1,}}>
                                                    <Text style={{textAlign:'left', fontSize: verticalScale(12), color: '#262626', fontFamily: 'PFBeauSansPro-Regular'}}>в разработке</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                ) : (
                                    this.ListItemEmpty('Условия труда и удобства')
                                )}
                            </ListItem>

                            <ListItem style={{marginLeft: 0,}} onPress={() => this.props.navigation.navigate('UserSummaryViewDateScreen')}>
                                { (
                                    Object.keys(this.props.dates).length>0
                                ) ? (
                                    <View style={{flex: 1, flexDirection: 'column',}}>
                                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                                            <View style={{}}>
                                                <Text style={{fontSize: verticalScale(14), color: '#074A5D', fontFamily: 'PFBeauSansPro-Regular'}}>Даты размещения</Text>
                                            </View>
                                            <View style={{width:15,}}>
                                                <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                    <Path d="M13.3954 1.50302L12.4548 0.557298C11.7158 -0.185766 10.4394 -0.185766 9.70042 0.557298L1.36998 8.93365C1.30279 9.00121 1.30279 9.06876 1.23561 9.13631L0.0263554 13.4596C-0.0408256 13.5947 0.0263554 13.7973 0.160717 13.8649C0.227898 13.9324 0.36226 14 0.496622 14C0.563803 14 0.563803 14 0.630984 14L4.93057 12.7841C4.99775 12.7841 5.06493 12.7165 5.13211 12.649L13.3954 4.34017C13.7985 3.93486 14 3.462 14 2.92159C14 2.38118 13.7985 1.90832 13.3954 1.50302ZM4.52748 11.9735L1.10125 12.9867L2.10897 9.47406L8.82706 2.71894L11.3128 5.21834L4.52748 11.9735ZM12.7907 3.66466L11.8502 4.61037L9.36451 2.11098L10.305 1.16526C10.7081 0.759952 11.4471 0.759952 11.8502 1.16526L12.7907 2.11098C12.9923 2.31363 13.1266 2.58384 13.1266 2.85404C13.1266 3.1918 12.9923 3.462 12.7907 3.66466Z" fill="#074A5D"/>
                                                </Svg>
                                            </View>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row', marginTop:5,}}>
                                            <View style={{flex: 1, alignItems: 'flex-start',}}>
                                                <View style={{flex: 1,}}>
                                                    <Text style={{textAlign:'left', fontSize: verticalScale(12), color: '#262626', fontFamily: 'PFBeauSansPro-Regular'}}>Выбрано {Object.keys(this.props.dates).length} дат</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                ) : (
                                    this.ListItemEmpty('Даты размещения')
                                )}
                            </ListItem>

                            <ListItem style={{marginLeft: 0,}} onPress={() => this.props.navigation.navigate('UserSummaryViewCommentScreen')}>
                                { (
                                    this.props.comment
                                ) ? (
                                    <View style={{flex: 1, flexDirection: 'column',}}>
                                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                                            <View style={{}}>
                                                <Text style={{fontSize: verticalScale(14), color: '#074A5D', fontFamily: 'PFBeauSansPro-Regular'}}>Комментарий к объявлению</Text>
                                            </View>
                                            <View style={{width:15,}}>
                                                <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                    <Path d="M13.3954 1.50302L12.4548 0.557298C11.7158 -0.185766 10.4394 -0.185766 9.70042 0.557298L1.36998 8.93365C1.30279 9.00121 1.30279 9.06876 1.23561 9.13631L0.0263554 13.4596C-0.0408256 13.5947 0.0263554 13.7973 0.160717 13.8649C0.227898 13.9324 0.36226 14 0.496622 14C0.563803 14 0.563803 14 0.630984 14L4.93057 12.7841C4.99775 12.7841 5.06493 12.7165 5.13211 12.649L13.3954 4.34017C13.7985 3.93486 14 3.462 14 2.92159C14 2.38118 13.7985 1.90832 13.3954 1.50302ZM4.52748 11.9735L1.10125 12.9867L2.10897 9.47406L8.82706 2.71894L11.3128 5.21834L4.52748 11.9735ZM12.7907 3.66466L11.8502 4.61037L9.36451 2.11098L10.305 1.16526C10.7081 0.759952 11.4471 0.759952 11.8502 1.16526L12.7907 2.11098C12.9923 2.31363 13.1266 2.58384 13.1266 2.85404C13.1266 3.1918 12.9923 3.462 12.7907 3.66466Z" fill="#074A5D"/>
                                                </Svg>
                                            </View>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row', marginTop:5,}}>
                                            <View style={{flex: 1, alignItems: 'flex-start',}}>
                                                <View style={{flex: 1,}}>
                                                    <Text style={{textAlign:'left', fontSize: verticalScale(12), color: '#262626', fontFamily: 'PFBeauSansPro-Regular'}}>{this.props.comment}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                ) : (
                                    this.ListItemEmpty('Комментарий к объявлению')
                                )}
                            </ListItem>

                            <ListItem style={{marginLeft: 0,}} onPress={() => this.props.navigation.navigate('UserSummaryViewNameScreen')}>
                                { (
                                    this.props.name
                                ) ? (
                                    <View style={{flex: 1, flexDirection: 'column',}}>
                                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                                            <View style={{}}>
                                                <Text style={{fontSize: verticalScale(14), color: '#074A5D', fontFamily: 'PFBeauSansPro-Regular'}}>Название шаблона объявления</Text>
                                            </View>
                                            <View style={{width:15,}}>
                                                <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                    <Path d="M13.3954 1.50302L12.4548 0.557298C11.7158 -0.185766 10.4394 -0.185766 9.70042 0.557298L1.36998 8.93365C1.30279 9.00121 1.30279 9.06876 1.23561 9.13631L0.0263554 13.4596C-0.0408256 13.5947 0.0263554 13.7973 0.160717 13.8649C0.227898 13.9324 0.36226 14 0.496622 14C0.563803 14 0.563803 14 0.630984 14L4.93057 12.7841C4.99775 12.7841 5.06493 12.7165 5.13211 12.649L13.3954 4.34017C13.7985 3.93486 14 3.462 14 2.92159C14 2.38118 13.7985 1.90832 13.3954 1.50302ZM4.52748 11.9735L1.10125 12.9867L2.10897 9.47406L8.82706 2.71894L11.3128 5.21834L4.52748 11.9735ZM12.7907 3.66466L11.8502 4.61037L9.36451 2.11098L10.305 1.16526C10.7081 0.759952 11.4471 0.759952 11.8502 1.16526L12.7907 2.11098C12.9923 2.31363 13.1266 2.58384 13.1266 2.85404C13.1266 3.1918 12.9923 3.462 12.7907 3.66466Z" fill="#074A5D"/>
                                                </Svg>
                                            </View>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row', marginTop:5,}}>
                                            <View style={{flex: 1, alignItems: 'flex-start',}}>
                                                <View style={{flex: 1,}}>
                                                    <Text style={{textAlign:'left', fontSize: verticalScale(12), color: '#262626', fontFamily: 'PFBeauSansPro-Regular'}}>{this.props.name}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                ) : (
                                    this.ListItemEmpty('Название шаблона объявления')
                                )}
                            </ListItem>

                        </List>

                        <Button onPress={() => {
                            alert('в разработке')
                        }} full primary
                                style={[styles.button_transparent, {marginTop: 35, backgroundColor: '#074A5D'}]}>
                            <Text uppercase={false} style={[styles.button_text_transparent, {color: '#ffffff'}]}>
                                Опубликовать объявление
                            </Text>
                        </Button>

                    </View>
                </ScrollView>

            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.UserSummaryView.id,
        positions: state.UserSummaryView.positions,
        start_form: state.UserSummaryView.start_form,
        start_to: state.UserSummaryView.start_to,
        duration_from: state.UserSummaryView.duration_from,
        duration_to: state.UserSummaryView.duration_to,
        salary: state.UserSummaryView.salary,
        country: state.UserSummaryView.country,
        city: state.UserSummaryView.city,
        booking: state.UserSummaryView.booking,
        conditions: state.UserSummaryView.conditions,
        dates: state.UserSummaryView.dates,
        comment: state.UserSummaryView.comment,
        name: state.UserSummaryView.name,
        item: state.UserSummaryView,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        Set: (value) => {
            dispatch(Set(value))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSummaryViewIndexScreen);