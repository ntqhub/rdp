import React, { Component } from 'react'
import {connect} from "react-redux";
import {View, StatusBar, ScrollView, SafeAreaView, TouchableOpacity, FlatList, RefreshControl} from 'react-native';
import {SwipeRow, Text, Tab, Tabs} from 'native-base';
import {TextMask} from 'react-native-masked-text'
//import { withNavigationFocus } from "react-navigation";
import Svg, {Path} from "react-native-svg";

//import NavigationOptions from "../../../services/NavigationOptions";
import axios from '../../../lib/Axios';

import styles from "../../../theme/Style";
import {verticalScale} from "../../../lib/Scaling";

import {Set} from "../../../actions/user_summary/View";

class UserSummaryMainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            refreshing: false,
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        this.setState({refreshing: true});
        axios.get('v1/user_summary.list_summary',{
            params :{
            }
        })
            .then(response => {
                if( Object.keys(response).length ){
                    if( Object.keys(response.items).length ){
                        this.setState({items: response.items});
                    }
                }
                this.setState({refreshing: false});
            });
    };

    _onRefresh = () => {
        this.getData();
    };

    ParseTime = (start_from, start_to) =>{
        if( start_from && start_to){
            return (
                <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-between', alignItems: 'center',}}>
                    <Svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <Path d="M3.99544 0C1.79704 0 0 1.79704 0 3.99544C0 6.20297 1.79704 8 3.99544 8C6.19384 8 8 6.20297 8 3.99544C8 1.79704 6.20297 0 3.99544 0ZM3.99544 7.5439C2.04333 7.5439 0.4561 5.94755 0.4561 3.99544C0.4561 2.04333 2.04333 0.4561 3.99544 0.4561C5.94755 0.4561 7.53478 2.04333 7.53478 3.99544C7.5439 5.94755 5.94755 7.5439 3.99544 7.5439Z" fill="#074A5D"/>
                        <Path d="M4.22352 1.25876C4.22352 1.15842 4.14142 1.07632 4.04108 1.07632H3.94986C3.84952 1.07632 3.76742 1.15842 3.76742 1.25876V3.76731H1.98863C1.88829 3.76731 1.80619 3.84941 1.80619 3.94975V4.04097C1.80619 4.14132 1.88829 4.22341 1.98863 4.22341H3.77654C3.83128 4.27815 3.91337 4.31463 3.99547 4.31463C4.16879 4.31463 4.31474 4.16868 4.31474 3.99536C4.31474 3.91327 4.27825 3.83117 4.22352 3.77644V1.25876Z" fill="#074A5D"/>
                    </Svg>
                    <Text style={{ marginLeft:5, marginRight:5, fontSize: verticalScale(12), color: '#262626', fontFamily: 'PFBeauSansPro-Regular'}}>{start_from.split(':')[0]}</Text>
                    <Svg width="11" height="5" viewBox="0 0 11 5" fill="none">
                        <Path d="M8.59286 0.227423C8.49218 0.328099 8.49218 0.491338 8.59286 0.592035L9.7085 1.69728H1.29148L2.40712 0.592035C2.5078 0.491359 2.5078 0.328121 2.40712 0.227423L2.2552 0.0755283C2.15453 -0.0251477 1.99129 -0.0251477 1.89061 0.0755283L0.0755068 1.88022C-0.0251689 1.98089 -0.0251689 2.14413 0.0755068 2.24483L1.89061 4.04952C1.99129 4.1502 2.15453 4.1502 2.2552 4.04952L2.40712 3.89763C2.5078 3.79695 2.5078 3.63371 2.40712 3.53301L1.29148 2.42775H9.70848L8.59284 3.53299C8.49216 3.63367 8.49216 3.79691 8.59284 3.89761L8.74475 4.0495C8.84543 4.15018 9.00867 4.15018 9.10934 4.0495L10.9245 2.24481C11.0251 2.14413 11.0251 1.9809 10.9245 1.8802L9.10934 0.075507C9.00867 -0.025169 8.84543 -0.025169 8.74475 0.075507L8.59286 0.227423Z" fill="#074A5D"/>
                    </Svg>
                    <Text style={{marginLeft:5, marginRight:5, fontSize: verticalScale(12), color: '#262626', fontFamily: 'PFBeauSansPro-Regular'}}>{start_to.split(':')[0]}</Text>
                    <Svg width="6" height="8" viewBox="0 0 6 8" fill="none">
                        <Path d="M5.75 0.5H5.8125C5.91605 0.5 6 0.416047 6 0.3125V0.1875C6 0.0839531 5.91605 0 5.8125 0H0.1875C0.0839531 0 0 0.0839531 0 0.1875V0.3125C0 0.416047 0.0839531 0.5 0.1875 0.5H0.25C0.25 1.9347 0.939187 3.52589 2.27572 4C0.934875 4.47564 0.25 6.06995 0.25 7.5H0.1875C0.0839531 7.5 0 7.58395 0 7.6875V7.8125C0 7.91605 0.0839531 8 0.1875 8H5.8125C5.91605 8 6 7.91605 6 7.8125V7.6875C6 7.58395 5.91605 7.5 5.8125 7.5H5.75C5.75 6.0653 5.06081 4.47411 3.72428 4C5.06512 3.52436 5.75 1.93005 5.75 0.5ZM0.75 0.5H5.25C5.25 2.22589 4.24264 3.625 3 3.625C1.75736 3.625 0.75 2.22589 0.75 0.5ZM5.25 7.5H0.75C0.75 5.77411 1.75736 4.375 3 4.375C4.24264 4.375 5.25 5.77411 5.25 7.5ZM4.46283 1.5H1.53717C1.49586 1.5 1.45569 1.48637 1.42292 1.46122C1.39014 1.43607 1.36658 1.4008 1.35589 1.36089C1.34421 1.31722 1.33349 1.27331 1.32372 1.22917C1.29772 1.11164 1.38622 1 1.50659 1H4.49342C4.6138 1 4.7023 1.11164 4.6763 1.22917C4.66653 1.27331 4.6558 1.31722 4.64412 1.36089C4.63343 1.4008 4.60986 1.43606 4.57709 1.46121C4.54431 1.48636 4.50414 1.5 4.46283 1.5ZM4.21344 2.2955C4.17995 2.34238 4.14464 2.38793 4.10759 2.43205C4.07164 2.47483 4.01898 2.49998 3.96309 2.49998H2.03691C1.98103 2.49998 1.92836 2.47483 1.89241 2.43205C1.85537 2.38792 1.82006 2.34237 1.78656 2.2955C1.69817 2.17191 1.78794 2 1.93989 2H4.06011C4.21206 2 4.30181 2.17192 4.21344 2.2955Z" fill="#074A5D"/>
                    </Svg>
                    <Text style={{marginLeft:5, fontSize: verticalScale(12), color: '#262626', fontFamily: 'PFBeauSansPro-Regular'}}>{start_to.split(':')[0]-start_from.split(':')[0]}</Text>
                </View>
            );
        }else if( start_from ){
            return (
                <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-between', alignItems: 'center',}}>
                    <Svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <Path d="M3.99544 0C1.79704 0 0 1.79704 0 3.99544C0 6.20297 1.79704 8 3.99544 8C6.19384 8 8 6.20297 8 3.99544C8 1.79704 6.20297 0 3.99544 0ZM3.99544 7.5439C2.04333 7.5439 0.4561 5.94755 0.4561 3.99544C0.4561 2.04333 2.04333 0.4561 3.99544 0.4561C5.94755 0.4561 7.53478 2.04333 7.53478 3.99544C7.5439 5.94755 5.94755 7.5439 3.99544 7.5439Z" fill="#074A5D"/>
                        <Path d="M4.22352 1.25876C4.22352 1.15842 4.14142 1.07632 4.04108 1.07632H3.94986C3.84952 1.07632 3.76742 1.15842 3.76742 1.25876V3.76731H1.98863C1.88829 3.76731 1.80619 3.84941 1.80619 3.94975V4.04097C1.80619 4.14132 1.88829 4.22341 1.98863 4.22341H3.77654C3.83128 4.27815 3.91337 4.31463 3.99547 4.31463C4.16879 4.31463 4.31474 4.16868 4.31474 3.99536C4.31474 3.91327 4.27825 3.83117 4.22352 3.77644V1.25876Z" fill="#074A5D"/>
                    </Svg>
                    <Text style={{ marginLeft:5, marginRight:5, fontSize: verticalScale(12), color: '#262626', fontFamily: 'PFBeauSansPro-Regular'}}>{start_from.split(':')[0]}</Text>
                </View>
            );
        }else if( start_to ){
            return (
                <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-between', alignItems: 'center',}}>
                    <Svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <Path d="M3.99544 0C1.79704 0 0 1.79704 0 3.99544C0 6.20297 1.79704 8 3.99544 8C6.19384 8 8 6.20297 8 3.99544C8 1.79704 6.20297 0 3.99544 0ZM3.99544 7.5439C2.04333 7.5439 0.4561 5.94755 0.4561 3.99544C0.4561 2.04333 2.04333 0.4561 3.99544 0.4561C5.94755 0.4561 7.53478 2.04333 7.53478 3.99544C7.5439 5.94755 5.94755 7.5439 3.99544 7.5439Z" fill="#074A5D"/>
                        <Path d="M4.22352 1.25876C4.22352 1.15842 4.14142 1.07632 4.04108 1.07632H3.94986C3.84952 1.07632 3.76742 1.15842 3.76742 1.25876V3.76731H1.98863C1.88829 3.76731 1.80619 3.84941 1.80619 3.94975V4.04097C1.80619 4.14132 1.88829 4.22341 1.98863 4.22341H3.77654C3.83128 4.27815 3.91337 4.31463 3.99547 4.31463C4.16879 4.31463 4.31474 4.16868 4.31474 3.99536C4.31474 3.91327 4.27825 3.83117 4.22352 3.77644V1.25876Z" fill="#074A5D"/>
                    </Svg>
                    <Text style={{marginLeft:5, marginRight:5, fontSize: verticalScale(12), color: '#262626', fontFamily: 'PFBeauSansPro-Regular'}}>{start_to.split(':')[0]}</Text>
                </View>
            );
        }
        return null;

    };

    render() {
        return(
            <ScrollView
                style={styles.container_global}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                }
            >
                <FlatList
                    style={{flex: 1, paddingTop: 20,}}
                    data={this.state.items}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => {
                        let date = new Date(item.date);
                        let date_text = ("0" + (date.getDate() + 1)).slice(-2) + "." + ("0" + (date.getMonth() + 1)).slice(-2) + "." + date.getFullYear() + "г.";
                        let position_text = (item.positions[0]) ? item.positions[0].lang_ru : '';
                        let city_text = (item.city) ? item.city.title : '';
                        let interval_text = (item.start_from || item.start_to) ? this.ParseTime(item.start_from, item.start_to) : '';

                        return (
                            <SwipeRow
                                style={{
                                    backgroundColor: 'transparent',
                                    marginLeft: 10,
                                    marginRight: 10,
                                    marginBottom: 10,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    paddingRight: 0,
                                    borderBottomWidth: 0,
                                }}
                                disableRightSwipe
                                rightOpenValue={-80}
                                stopRightSwipe={-80}
                                body={
                                    <View style={{flex: 1, backgroundColor: '#F9FBFF',}}>
                                        <TouchableOpacity style={{
                                            flex: 1,
                                            borderColor: '#E7EDF8',
                                            borderWidth: 1,
                                            borderRadius: 5,
                                            paddingTop: 20,
                                            paddingBottom: 20,
                                            paddingLeft: 15,
                                            paddingRight: 15,
                                        }} onPress={() => {
                                            delete item['city'];
                                            this.props.Set(item);
                                            this.props.navigation.navigate('UserSummaryView');
                                        }}>
                                            <View style={{
                                                flex: 1,
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                            }}>
                                                <Text style={{
                                                    fontSize: verticalScale(14),
                                                    color: '#262626',
                                                    fontFamily: 'PFBeauSansPro-Bold'
                                                }}>{item.title}</Text>
                                                <View style={{flexDirection: 'row',}}>
                                                    <Text style={{
                                                        marginRight: 5,
                                                        fontSize: verticalScale(14),
                                                        color: '#262626',
                                                        fontFamily: 'PFBeauSansPro-Bold'
                                                    }}></Text>
                                                    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                        <Path
                                                            d="M13.25 1.25H11.75V0.25C11.75 0.1 11.65 0 11.5 0C11.35 0 11.25 0.1 11.25 0.25V1.25H9.5V0.25C9.5 0.1 9.4 0 9.25 0C9.1 0 9 0.1 9 0.25V1.25H7.25V0.25C7.25 0.1 7.15 0 7 0C6.85 0 6.75 0.1 6.75 0.25V1.25H5V0.25C5 0.1 4.9 0 4.75 0C4.6 0 4.5 0.1 4.5 0.25V1.25H2.75V0.25C2.75 0.1 2.65 0 2.5 0C2.35 0 2.25 0.1 2.25 0.25V1.25H0.75C0.325 1.25 0 1.575 0 2V5.5V8.25V11V13.25C0 13.675 0.325 14 0.75 14H2.75H5.5H8.5H11.25H13.25C13.675 14 14 13.675 14 13.25V11V8.25V5.5V2C14 1.575 13.675 1.25 13.25 1.25ZM8.75 10.75V8.5H11V10.75H8.75ZM11 11.25V13.5H8.75V11.25H11ZM3 10.75V8.5H5.25V10.75H3ZM5.25 11.25V13.5H3V11.25H5.25ZM0.5 5.75H2.5V8H0.5V5.75ZM5.25 5.75V8H3V5.75H5.25ZM11 5.75V8H8.75V5.75H11ZM13.5 8H11.5V5.75H13.5V8ZM8.25 8H5.75V5.75H8.25V8ZM0.5 8.5H2.5V10.75H0.5V8.5ZM5.75 8.5H8.25V10.75H5.75V8.5ZM11.5 8.5H13.5V10.75H11.5V8.5ZM0.75 1.75H2.25V3C2.25 3.15 2.35 3.25 2.5 3.25C2.65 3.25 2.75 3.15 2.75 3V1.75H4.5V3C4.5 3.15 4.6 3.25 4.75 3.25C4.9 3.25 5 3.15 5 3V1.75H6.75V3C6.75 3.15 6.85 3.25 7 3.25C7.15 3.25 7.25 3.15 7.25 3V1.75H9V3C9 3.15 9.1 3.25 9.25 3.25C9.4 3.25 9.5 3.15 9.5 3V1.75H11.25V3C11.25 3.15 11.35 3.25 11.5 3.25C11.65 3.25 11.75 3.15 11.75 3V1.75H13.25C13.4 1.75 13.5 1.85 13.5 2V5.25H11.25H8.5H5.5H2.75H0.5V2C0.5 1.85 0.6 1.75 0.75 1.75ZM0.75 13.5C0.6 13.5 0.5 13.4 0.5 13.25V11.25H2.5V13.5H0.75ZM5.75 13.5V11.25H8.25V13.5H5.75ZM13.5 13.25C13.5 13.4 13.4 13.5 13.25 13.5H11.5V11.25H13.5V13.25Z"
                                                            fill="#074A5D"/>
                                                    </Svg>
                                                </View>
                                            </View>
                                            <View style={{
                                                marginTop: 5,
                                                flex: 1,
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                            }}>
                                                <View style={{alignItems: 'flex-start',}}>
                                                    <View style={{flex: 1,}}>
                                                        <Text style={{
                                                            fontSize: verticalScale(12),
                                                            color: '#262626',
                                                            fontFamily: 'PFBeauSansPro-Regular'
                                                        }}>{city_text}</Text>
                                                    </View>
                                                    <View style={{flex: 1, marginTop: 5,}}>
                                                        <Text style={{
                                                            fontSize: verticalScale(12),
                                                            color: '#262626',
                                                            fontFamily: 'PFBeauSansPro-Regular'
                                                        }}>{position_text}</Text>
                                                    </View>
                                                </View>
                                                <View style={{alignItems: 'flex-start',}}>
                                                    <View style={{flex: 1,}}>
                                                        <Text style={{
                                                            fontSize: verticalScale(12),
                                                            color: '#262626',
                                                            fontFamily: 'PFBeauSansPro-Regular'
                                                        }}>{date_text}</Text>
                                                    </View>
                                                    <View style={{flex: 1, marginTop: 5,}}>
                                                        <TextMask type={'money'} options={{
                                                            precision: 0,
                                                            separator: ' ',
                                                            delimiter: ' ',
                                                            unit: '',
                                                            suffixUnit: '₽/ч'
                                                        }} style={{
                                                            fontSize: verticalScale(12),
                                                            color: '#45E238',
                                                            fontFamily: 'PFBeauSansPro-Regular'
                                                        }} value={item.salary.split('.')[0]}></TextMask>
                                                    </View>
                                                </View>
                                                <View style={{alignItems: 'flex-end',}}>
                                                    <View style={{flex: 1,}}>
                                                        <Text style={{
                                                            fontSize: verticalScale(12),
                                                            color: '#262626',
                                                            fontFamily: 'PFBeauSansPro-Regular'
                                                        }}>без подтверждения</Text>
                                                    </View>
                                                    <View style={{flex: 1, marginTop: 5,}}>
                                                        {interval_text}
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                }
                                right={
                                    <View style={{flex: 1,}}>
                                        <TouchableOpacity
                                            style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}
                                            onPress={() => alert('Trash')}>
                                            <Svg width="20" height="25" viewBox="0 0 20 25" fill="none">
                                                <Path
                                                    d="M14.1259 24.6287H5.39235C3.57634 24.6287 2.09486 23.2181 2.09486 21.4889V7.07566C2.09486 6.70025 2.41744 6.3931 2.8117 6.3931C3.20597 6.3931 3.52855 6.70025 3.52855 7.07566V21.5003C3.52855 22.4786 4.36487 23.275 5.39235 23.275H14.1259C15.1534 23.275 15.9897 22.4786 15.9897 21.5003V7.07566C15.9897 6.70025 16.3123 6.3931 16.7066 6.3931C17.1008 6.3931 17.4234 6.70025 17.4234 7.07566V21.5003C17.4115 23.2295 15.9419 24.6287 14.1259 24.6287Z"
                                                    fill="#D43A3A"/>
                                                <Path
                                                    d="M7.3638 21.2274C6.96954 21.2274 6.64696 20.9202 6.64696 20.5448V6.89373C6.64696 6.51833 6.96954 6.21118 7.3638 6.21118C7.75807 6.21118 8.08065 6.51833 8.08065 6.89373V20.5448C8.08065 20.9202 7.75807 21.2274 7.3638 21.2274Z"
                                                    fill="#D43A3A"/>
                                                <Path
                                                    d="M12.6207 21.2274C12.2264 21.2274 11.9038 20.9202 11.9038 20.5448V6.89373C11.9038 6.51833 12.2264 6.21118 12.6207 6.21118C13.0149 6.21118 13.3375 6.51833 13.3375 6.89373V20.5448C13.3375 20.9202 13.0149 21.2274 12.6207 21.2274Z"
                                                    fill="#D43A3A"/>
                                                <Path
                                                    d="M19.4661 4.14084C19.3466 4.10671 17.0527 3.51516 13.4685 3.24214C13.3012 1.42199 11.7003 0 9.75286 0C7.79348 0 6.18057 1.44474 6.03721 3.27627C2.69193 3.56066 0.636967 4.11808 0.517493 4.15221C0.135175 4.25459 -0.079879 4.63 0.0276479 4.99403C0.135175 5.35806 0.541387 5.56283 0.911758 5.46044C0.9476 5.44907 4.55572 4.48211 9.90817 4.48211C15.2606 4.48211 19.048 5.44907 19.0838 5.46044C19.1435 5.48319 19.2152 5.48319 19.275 5.48319C19.5856 5.48319 19.8723 5.27843 19.9679 4.98265C20.0754 4.61862 19.8484 4.24322 19.4661 4.14084ZM9.92012 3.10563C9.07185 3.10563 8.25943 3.12838 7.49479 3.16251C7.68595 2.13867 8.61785 1.35373 9.75286 1.35373C10.8759 1.35373 11.8198 2.1273 12.0109 3.15113C11.3538 3.12838 10.6489 3.10563 9.92012 3.10563Z"
                                                    fill="#D43A3A"/>
                                            </Svg>
                                            <Text style={{
                                                fontSize: verticalScale(12),
                                                color: '#D43A3A',
                                                fontFamily: 'PFBeauSansPro-Regular'
                                            }}>удалить</Text>
                                        </TouchableOpacity>
                                    </View>
                                }
                            />)
                    }
                    }
                />
                <FlatList
                    data={[1]}
                    keyExtractor={(item) => '1'}
                    renderItem={({item}) =>
                        <SwipeRow
                            style={{
                                marginLeft: 10,
                                marginRight: 10,
                                marginBottom: 10,
                                paddingTop: 0,
                                paddingBottom: 0,
                                paddingRight: 0,
                                borderWidth: 0,
                                borderBottomWidth: 0,
                            }}
                            disableRightSwipe
                            disableLeftSwipe
                            body={
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
                                    this.props.Set(this.props.add);
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
                                        }}>+ добавить объявление</Text>
                                    </View>
                                </TouchableOpacity>
                            }
                        />
                    }
                />
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        add: state.UserSummaryAdd,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        Set: (value) => {
            dispatch(Set(value))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSummaryMainScreen);