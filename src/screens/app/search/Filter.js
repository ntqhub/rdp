import React, {Component} from 'react'
import {connect} from "react-redux";
import {TextMask} from "react-native-masked-text";
import {ScrollView, View} from "react-native";
import {Button, Input, Item, Label, Text, CheckBox, Switch} from "native-base";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import {withNavigationFocus} from "react-navigation";

import {UserSetViewInformationSearch} from "../../../actions/User";
import axios from "../../../lib/Axios";
import {verticalScale} from "../../../lib/Scaling";
import styles from "../../../theme/Style";
import NavigationOptions from "../../../lib/NavigationOptions";

import {
    SwitchMin,
    SwitchMax,
    SwitchMaxBtm,
    SwitchMinBtm,
    SwitchReserv,
    Checked_F,
    Checked_S,
    Checked_T,
    SwitchNoMatter,
    SwitchAnyTime
} from "../../../actions/search/index";

class SearchFilterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // sort_type: '0',
            // salary_shift_start: 100,
            // salary_shift_end: 500000,
            // salary_shift_width: 0,
            // salary_hour_start: 100,
            // salary_hour_end: 500000,
            // salary_hour_width: 0,
            // switch1Value: false,
        };
    }

    static navigationOptions = ({navigation}) => NavigationOptions(navigation, {
        title: 'Фильтры',
        left_func: 'SearchIndexScreen',
        margin_top: false,
    });

    // toggleSwitch = (value) =>{
    //     this.setState({switch1Value: value})
    //     SwitchReserv()
    // }

    render() {
        return (
            <ScrollView style={styles.container_global}>
                <View style={styles.content_global}>
                    <View style={{
                        //  flexDirection:"row"
                    }}>
                        <View style={{
                            flexDirection: "row",
                            marginTop: 5,
                            alignItems: "center"
                        }}>
                            <View style={{

                                width: 0,
                                flexGrow: 1,
                                flex: 1
                            }}>
                                <Text style={{
                                    fontSize: verticalScale(16),
                                    fontFamily: 'PFBeauSansPro-Regular',
                                }}>Мгновенное бронирование</Text>
                                <Text style={{
                                    fontSize: verticalScale(12),
                                    fontFamily: 'PFBeauSansPro-Regular',
                                    marginTop: 5
                                }}>не ждите принятие запроса – бронируйте сразу</Text>
                            </View>
                            <View>
                                <Switch onValueChange={(e) => this.props.SwitchReserv(e)}
                                        value={this.props.switch_reserv} style={{marginTop: 10}}/>
                                <Text style={{
                                    fontSize: verticalScale(12),
                                    fontFamily: 'PFBeauSansPro-Regular',
                                    marginTop: 10,
                                    color: "#074A5D"
                                }}>что это?</Text>
                            </View>
                        </View>
                        <View style={{
                            height: 1,
                            width: "100%",
                            backgroundColor: "#E7EDF8",
                            marginTop: 20,
                            marginBottom: 20,
                        }}></View>
                    </View>
                    <View style={{marginTop: 20,}}
                          onLayout={(event) => this.setState({salary_shift_width: event.nativeEvent.layout.width})}>
                        <View>
                            <Text style={{
                                fontSize: verticalScale(18),
                                color: '#262626',
                                fontFamily: 'PFBeauSansPro-Bold'
                            }}>Цена за смену</Text>
                        </View>
                        <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'space-between',}}>
                            <TextMask type={'money'} options={{
                                precision: 0,
                                separator: ' ',
                                delimiter: ' ',
                                unit: '',
                                suffixUnit: '₽'
                            }} style={{
                                fontSize: verticalScale(24),
                                color: '#10BD55',
                                fontFamily: 'PFBeauSansPro-Bold',
                            }} value={this.props.switchMin}/>
                            <TextMask type={'money'} options={{
                                precision: 0,
                                separator: ' ',
                                delimiter: ' ',
                                unit: '',
                                suffixUnit: '₽'
                            }} style={{
                                fontSize: verticalScale(24),
                                color: '#10BD55',
                                fontFamily: 'PFBeauSansPro-Bold',
                            }} value={this.props.switchMax}/>
                        </View>
                        <MultiSlider
                            style={{backgroundColor: "red"}}
                            values={[
                                this.props.switchMin,
                                this.props.switchMax,
                            ]}
                            sliderLength={this.state.salary_shift_width}
                            snapped
                            min={100}
                            max={500000}
                            step={100}
                            selectedStyle={{
                                backgroundColor: '#074A5D',
                            }}
                            unselectedStyle={{
                                backgroundColor: '#E7EDF8',
                            }}
                            markerStyle={{
                                backgroundColor: '#FFFFFF',
                                borderColor: '#074A5D',
                                borderWidth: 1,
                                borderRadius: 15,
                                height: 20, width: 20
                            }}
                            pressedMarkerStyle={{
                                backgroundColor: '#074A5D',
                                borderColor: '#074A5D',
                                borderWidth: 0,
                                height: 20, width: 20
                            }}
                            onValuesChange={(value) => {
                                this.props.SetValueMin(value[0])
                                this.props.SetValueMax(value[1])
                            }}
                        />
                    </View>
                    <View style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "#E7EDF8",
                        marginTop: 20,
                        marginBottom: 20,
                    }}></View>
                    <View style={{marginTop: 20,}}
                          onLayout={(event) => this.setState({salary_hour_width: event.nativeEvent.layout.width})}>
                        <View>
                            <Text style={{
                                fontSize: verticalScale(18),
                                color: '#262626',
                                fontFamily: 'PFBeauSansPro-Bold'
                            }}>Базовая ставка за час работы</Text>
                        </View>
                        <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'space-between',}}>
                            <TextMask type={'money'} options={{
                                precision: 0,
                                separator: ' ',
                                delimiter: ' ',
                                unit: '',
                                suffixUnit: '₽'
                            }} style={{
                                fontSize: verticalScale(24),
                                color: '#10BD55',
                                fontFamily: 'PFBeauSansPro-Bold',
                            }} value={this.props.switchMinBtm}/>
                            <TextMask type={'money'} options={{
                                precision: 0,
                                separator: ' ',
                                delimiter: ' ',
                                unit: '',
                                suffixUnit: '₽'
                            }} style={{
                                fontSize: verticalScale(24),
                                color: '#10BD55',
                                fontFamily: 'PFBeauSansPro-Bold',
                            }} value={this.props.switchMaxBtm}/>
                        </View>
                        <MultiSlider
                            style={{backgroundColor: "red"}}
                            values={[
                                this.props.switchMinBtm,
                                this.props.switchMaxBtm
                            ]}
                            sliderLength={this.state.salary_hour_width}
                            snapped
                            min={100}
                            max={500000}
                            step={100}
                            selectedStyle={{
                                backgroundColor: '#074A5D',
                            }}
                            unselectedStyle={{
                                backgroundColor: '#E7EDF8',
                            }}
                            markerStyle={{
                                backgroundColor: '#FFFFFF',
                                borderColor: '#074A5D',
                                borderWidth: 1,
                                borderRadius: 15,
                                height: 20, width: 20
                            }}
                            pressedMarkerStyle={{
                                backgroundColor: '#074A5D',
                                borderColor: '#074A5D',
                                borderWidth: 0,
                                height: 20, width: 20
                            }}
                            onValuesChange={(value) => {
                                this.props.SetValueMinBtm(value[0])
                                this.props.SetValueMaxBtm(value[1])
                            }}
                        />
                    </View>
                    <View style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "#E7EDF8",
                        marginTop: 20,
                        marginBottom: 20,
                    }}>
                    </View>
                    <View>
                        <View>
                            <Text style={{
                                fontSize: verticalScale(18),
                                color: '#262626',
                                fontFamily: 'PFBeauSansPro-Bold'
                            }}>График работы</Text>
                        </View>
                        <Text style={{
                            fontSize: verticalScale(12),
                            fontFamily: 'PFBeauSansPro-Regular',
                            marginTop: 5
                        }}>Время начала рабочего дня</Text>

                        <View>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                                <Text style={{
                                    fontSize: verticalScale(12),
                                    fontFamily: 'PFBeauSansPro-Regular',
                                    marginTop: 5
                                }}>c 0.7 до 11 : 00</Text>
                                <View style={{
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <Text style={{
                                        fontSize: verticalScale(12),
                                        fontFamily: 'PFBeauSansPro-Regular',
                                        marginTop: 5,
                                        color: "#A1AABA"
                                    }}>В любое время</Text>
                                    <Switch onValueChange={(e) => this.props.SwitchAnyTime(e)}
                                            value={this.props.switch_any_time}/>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: verticalScale(12),
                                fontFamily: 'PFBeauSansPro-Regular',
                                marginTop: 30,
                            }}>Количество часов в смену</Text>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                                <Text style={{
                                    fontSize: verticalScale(12),
                                    fontFamily: 'PFBeauSansPro-Regular',
                                    marginTop: 5
                                }}>не менее 3ч не более 12ч</Text>
                                <View style={{
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <Text style={{
                                        fontSize: verticalScale(12),
                                        fontFamily: 'PFBeauSansPro-Regular',
                                        marginTop: 5,
                                        color: "#A1AABA"
                                    }}>Не важно</Text>
                                    <Switch onValueChange={(e) => this.props.SwitchAnyTime(e)}
                                            value={this.props.switch_any_time}/>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* <View>
                        <Text>Фильтр по компаниям</Text>
                        <View style={{flexDirection: "row"}}>
                            <Text>Образцовый заказчик</Text>
                            <CheckBox checked={this.props.checked_f} onPress={(e)=> {this.props.Checked_F(!this.props.checked_f)}}/>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <Text>Образцовый заказчик</Text>
                            <CheckBox checked={this.props.checked_s} onPress={(e)=> {this.props.Checked_S(!this.props.checked_s)}}/>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <Text>Образцовый заказчик</Text>
                            <CheckBox checked={this.props.checked_t} onPress={(e)=> {this.props.Checked_T(!this.props.checked_t)}}/>
                        </View>
                    </View> */}

                    <Button onPress={() => {
                        this.props.navigation.navigate('SearchIndexScreen')
                    }} full style={[styles.button, {marginTop: 40,}]}>
                        <Text uppercase={false}
                              style={styles.button_text}>Показать {(this.state.count) ? (this.state.count) : null} объявлений</Text>
                    </Button>

                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        view_information_search: state.User.view_information_search,
        switchMin: state.Search.min_value_top,
        switchMax: state.Search.max_value_top,
        switchMinBtm: state.Search.min_value_btm,
        switchMaxBtm: state.Search.max_value_btm,
        switch_reserv: state.Search.switch_reserv,
        switch_any_time: state.Search.switch_any_time,
        switch_no_matter: state.Search.switch_no_matter,
        checked_f: state.Search.checked_f,
        checked_s: state.Search.checked_s,
        checked_t: state.Search.checked_t,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        UserSetViewInformationSearch: (boolean) => {
            dispatch(UserSetViewInformationSearch(boolean))
        },
        SetValueMin: (value) => {
            dispatch(SwitchMin(value))
        },
        SetValueMax: (value) => {
            dispatch(SwitchMax(value))
        },
        SetValueMinBtm: (value) => {
            dispatch(SwitchMinBtm(value))
        },
        SetValueMaxBtm: (value) => {
            dispatch(SwitchMaxBtm(value))
        },
        SwitchReserv: (value) => {
            dispatch(SwitchReserv(value))
        },
        SwitchAnyTime: (value) => {
            dispatch(SwitchAnyTime(value))
        },
        SwitchNoMatter: (value) => {
            dispatch(SwitchNoMatter(value))
        },
        Checked_F: (value) => {
            dispatch(Checked_F(value))
        },
        Checked_S: (value) => {
            dispatch(Checked_S(value))
        },
        Checked_T: (value) => {
            dispatch(Checked_T(value))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigationFocus(SearchFilterScreen));