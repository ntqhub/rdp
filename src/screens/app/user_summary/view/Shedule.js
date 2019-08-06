import React, { Component } from 'react'
import { connect } from 'react-redux';
import {View, Image, ScrollView, SafeAreaView, TouchableOpacity, Switch, BackHandler} from 'react-native';
import {Text, Button, Item, Input,} from 'native-base';
import DateTimePicker from "react-native-modal-datetime-picker";
import Svg, {Path} from "react-native-svg";

import styles from "../../../../theme/Style";
import NavigationOptions from "../../../../lib/NavigationOptions";
import {verticalScale} from "../../../../lib/Scaling";
import { SetStartTo, SetStartFrom, SetStartAll, SetDurationTo, SetDurationFrom, SetDurationAll, } from "../../../../actions/user_summary/View";
import StatusBarComp from "../../../../components/StatusBarComp";

class UserSummaryViewSheduleScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            picker_start_form: false,
            picker_start_to: false,
            picker_duration_form: false,
            picker_duration_to: false,
        };
    }

    static navigationOptions = ({ navigation }) => NavigationOptions(navigation, {title: 'ГРАФИК РАБОТЫ', left_func: 'UserSummaryViewIndexScreen', margin_top: false});

    handleBackPress = () => {
        this.props.navigation.navigate('UserSummaryViewIndexScreen');
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

                    <ScrollView>
                        <View style={styles.content_global}>

                            <Text style={{color: '#262626', fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Bold',}}>Время начала рабочего дня</Text>
                            <Text style={{marginTop:5, color: '#A1AABA', fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular',}}>Укажите временной период, в который вы готовы начать рабочую смену</Text>

                            <View style={{flex:1, flexDirection: 'row', alignItems: 'center'}}>

                                <View style={{flex:1}}>
                                    <Item onPress={() => { (this.props.start_all === false) && this.setState({ picker_start_form: true }) }} style={{marginRight:5,}}>
                                        <Input
                                            style={{color: '#262626', fontFamily: 'PFBeauSansPro-Regular',}}
                                            autoCapitalize="sentences" autoCorrect={false}
                                            onTouchStart={() => this.setState({ picker_start_form: true })}
                                            editable={false}
                                            placeholder="Например с 07:00"
                                            placeholderTextColor="#A1AABA"
                                            value={(this.props.start_form) ? 'с '+this.props.start_form : ''}
                                        />
                                    </Item>
                                </View>
                                <View style={{flex:1}}>
                                    <Item onPress={() => { (this.props.start_all === false) && this.setState({ picker_start_to: true }) }} style={{marginLeft:5,}}>
                                        <Input
                                            style={{color: '#262626', fontFamily: 'PFBeauSansPro-Regular',}}
                                            autoCapitalize="sentences" autoCorrect={false}
                                            onTouchStart={() => this.setState({ picker_start_to: true })}
                                            editable={false}
                                            placeholder="Например до 11:00"
                                            placeholderTextColor="#A1AABA"
                                            value={(this.props.start_to) ? 'до '+this.props.start_to : ''}
                                        />
                                    </Item>
                                </View>

                            </View>

                            <View style={{marginTop:15, flex:1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',}}>
                                <Text style={{color: '#262626', fontSize: verticalScale(12), fontFamily: 'PFBeauSansPro-Bold',}}>В любое время</Text>
                                <Switch thumbColor={(this.props.start_all)? '#074A5D':'#F9FBFF'} onValueChange={()=>{ this.props.SetStartAll(!this.props.start_all); }} value={this.props.start_all}/>
                            </View>

                            <Text style={{marginTop:15, color: '#262626', fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Bold',}}>Продолжительность рабочего дня</Text>
                            <Text style={{marginTop:5, color: '#A1AABA', fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular',}}>Укажите минимальную и максимальную часовую продолжительность рабочей смены</Text>


                            <View style={{flexDirection: 'row', alignItems: 'center'}}>

                                <View style={{flex:1}}>
                                    <Item onPress={() => { (this.props.duration_all === false) && this.setState({ picker_duration_form: true }) }} style={{marginRight:5,}}>
                                        <Input
                                            style={{color: '#262626', fontFamily: 'PFBeauSansPro-Regular',}}
                                            autoCapitalize="sentences" autoCorrect={false}
                                            onTouchStart={() => this.setState({ picker_duration_form: true })}
                                            editable={false}
                                            placeholder="не менее 3ч"
                                            placeholderTextColor="#A1AABA"
                                            value={(this.props.duration_from) ? 'от '+this.props.duration_from.split(":")[0]+' часов' : ''}
                                        />
                                    </Item>
                                </View>
                                <View style={{flex:1}}>
                                    <Item onPress={() => { (this.props.duration_all === false) && this.setState({ picker_duration_to: true }) }} style={{marginLeft:5,}}>
                                        <Input
                                            style={{color: '#262626', fontFamily: 'PFBeauSansPro-Regular',}}
                                            autoCapitalize="sentences" autoCorrect={false}
                                            onTouchStart={() => this.setState({ picker_duration_to: true })}
                                            editable={false}
                                            placeholder="не более 12ч"
                                            placeholderTextColor="#A1AABA"
                                            value={(this.props.duration_to) ? 'до '+this.props.duration_to.split(":")[0]+' часов' : ''}
                                        />
                                    </Item>
                                </View>

                            </View>

                            <View style={{marginTop:15, flex:1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',}}>
                                <Text style={{color: '#262626', fontSize: verticalScale(12), fontFamily: 'PFBeauSansPro-Bold',}}>Не важно</Text>
                                <Switch thumbColor={(this.props.duration_all)? '#074A5D':'#F9FBFF'} onValueChange={()=>{ this.props.SetDurationAll(!this.props.duration_all); }} value={this.props.duration_all}/>
                            </View>

                            <DateTimePicker
                                date={ new Date(2019, 0, 1, (this.props.start_form) ? this.props.start_form.split(':')[0]:7, (this.props.start_form) ? this.props.start_form.split(':')[1]:0, 0, 0) }
                                mode="time"
                                timePickerModeAndroid="spinner"
                                isVisible={this.state.picker_start_form}
                                onConfirm={(date)=>{
                                    this.props.SetStartFrom((date.getHours()<10?'0':'')+date.getHours()+":"+(date.getMinutes()<10?'0':'')+date.getMinutes());
                                    this.setState({ picker_start_form: false });
                                }}
                                onCancel={()=>{
                                    this.setState({ picker_start_form: false });
                                }}
                            />
                            <DateTimePicker
                                date={ new Date(2019, 0, 1, (this.props.picker_start_to) ? this.props.picker_start_to.split(':')[0]:11, (this.props.picker_start_to) ? this.props.picker_start_to.split(':')[1]:0, 0, 0) }
                                mode="time"
                                timePickerModeAndroid="spinner"
                                isVisible={this.state.picker_start_to}
                                onConfirm={(date)=>{
                                    this.props.SetStartTo((date.getHours()<10?'0':'')+date.getHours()+":"+(date.getMinutes()<10?'0':'')+date.getMinutes());
                                    this.setState({ picker_start_to: false });
                                }}
                                onCancel={()=>{
                                    this.setState({ picker_start_to: false });
                                }}
                            />
                            <DateTimePicker
                                date={ new Date(2019, 0, 1, 7, 0, 0, 0) }
                                date={ new Date(2019, 0, 1, 11, 0, 0, 0) }
                                mode="time"
                                timePickerModeAndroid="spinner"
                                isVisible={this.state.picker_duration_form}
                                onConfirm={(date)=>{
                                    this.props.SetDurationFrom((date.getHours()<10?'0':'')+date.getHours()+":"+(date.getMinutes()<10?'0':'')+date.getMinutes());
                                    this.setState({ picker_duration_form: false });
                                }}
                                onCancel={()=>{
                                    this.setState({ picker_duration_form: false });
                                }}
                            />
                            <DateTimePicker
                                mode="time"
                                timePickerModeAndroid="spinner"
                                isVisible={this.state.picker_duration_to}
                                onConfirm={(date)=>{
                                    this.props.SetDurationTo((date.getHours()<10?'0':'')+date.getHours()+":"+(date.getMinutes()<10?'0':'')+date.getMinutes());
                                    this.setState({ picker_duration_to: false });
                                }}
                                onCancel={()=>{
                                    this.setState({ picker_duration_to: false });
                                }}
                            />

                        </View>
                    </ScrollView>

                {/*style={{flex:1, flexDirection: 'row', justifyContent: 'flex-end',}}*/}
                <View style={{position:'absolute', bottom:20, right:20,}}>
                    <Button full primary style={[styles.button, {width: 50,}]} onPress={() => this.props.navigation.navigate('UserSummaryViewSalaryScreen')}>
                        <Svg width="9" height="18" viewBox="0 0 9 18" fill="none">
                            <Path d="M8.9961 8.91375C8.97614 8.74428 8.90308 8.58445 8.78642 8.45501L1.63227 0.370106C1.56168 0.272043 1.47028 0.189139 1.36397 0.126733C1.25766 0.0643277 1.13879 0.0238049 1.01502 0.00777495C0.89125 -0.00825496 0.765324 0.000563507 0.645353 0.0336623C0.525383 0.0667611 0.414028 0.123406 0.318462 0.199949C0.222896 0.276492 0.145237 0.371235 0.0904885 0.478076C0.0357399 0.584916 0.00511549 0.701485 0.000587799 0.820273C-0.00393989 0.939062 0.0177296 1.05744 0.0642004 1.16777C0.110671 1.2781 0.180913 1.37795 0.270401 1.46088L6.94195 9.00014L0.270401 16.5399C0.100698 16.6977 0.00379485 16.9131 0.00100774 17.1388C-0.00177936 17.3646 0.0897783 17.5821 0.255539 17.7436C0.4213 17.9051 0.647685 17.9973 0.884893 17.9999C1.1221 18.0026 1.3507 17.9155 1.5204 17.7577C1.56229 17.7188 1.60012 17.6761 1.63335 17.6302L8.78642 9.54528C8.86392 9.45867 8.9224 9.35817 8.95842 9.2497C8.99443 9.14124 9.00725 9.027 8.9961 8.91375Z" fill="white"/>
                        </Svg>
                    </Button>
                </View>

            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        start_form: state.UserSummaryView.start_form,
        start_to: state.UserSummaryView.start_to,
        start_all: state.UserSummaryView.start_all,
        duration_from: state.UserSummaryView.duration_from,
        duration_to: state.UserSummaryView.duration_to,
        duration_all: state.UserSummaryView.duration_all,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        SetStartFrom: (time) => {
            dispatch(SetStartFrom(time))
        },
        SetStartTo: (time) => {
            dispatch(SetStartTo(time))
        },
        SetStartAll: (value) => {
            dispatch(SetStartAll(value))
        },
        SetDurationFrom: (time) => {
            dispatch(SetDurationFrom(time))
        },
        SetDurationTo: (time) => {
            dispatch(SetDurationTo(time))
        },
        SetDurationAll: (value) => {
            dispatch(SetDurationAll(value))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSummaryViewSheduleScreen);