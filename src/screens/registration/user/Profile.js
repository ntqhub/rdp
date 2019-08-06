import React, {Component} from 'react'
import {
    View,
    ScrollView,
    Text,
    BackHandler,
    Platform,
    TouchableOpacity,
    Dimensions,
    SafeAreaView,
    StatusBar
} from 'react-native';
import Modal from 'react-native-translucent-modal';
import {Content, Header, Button, Left, Body, Title, Item, Label, Input, Toast} from 'native-base';
import {Col, Grid} from 'react-native-easy-grid';

import NavigationOptions from "../../../lib/NavigationOptions";
import axios from '../../../lib/Axios';
import styles from '../../../theme/Style'
import {verticalScale} from '../../../lib/Scaling';
import StatusBarComp from "../../../components/StatusBarComp";
import SvgCheck from "../../../assets/svg/SvgCheck";
import SvgMen from "../../../assets/svg/SvgMen";
import SvgWomen from "../../../assets/svg/SvgWomen";
import SvgTimes from "../../../assets/svg/SvgTimes";
import SvgCalendar from "../../../assets/svg/SvgCalendar";

export default class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            second_name: '',
            gender: 0,
            date_d: '',
            date_m: '',
            date_m_num: null,
            date_y: '',
            residence: 'Москва',
            residence_id: 1,
            citizenship: 'Россия',
            citizenship_id: 1,
            inn: '',
            modal_date_d: false,
            modal_date_m: false,
            modal_date_y: false,
            modal_residence: false,
            modal_citizenship: false,
            citys: [],
            search_city: '',
        };
    }

    handleBackPress = () => {
        return true;
    };

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    static navigationOptions = ({ navigation }) => NavigationOptions(navigation, {title: 'ЛИЧНЫЕ ДАННЫЕ', disabled_left: true});

    delay = (function(){
        var timer = 0;
        return function(callback, ms){
            clearTimeout (timer);
            timer = setTimeout(callback, ms);
        };
    })();

    validate_last_name = (last_name) => {
        let reg = /^([а-яА-ЯЁ]{0,20})$/;
        if(reg.test(last_name)){
            this.setState({last_name:last_name})
        }
    };

    validate_first_name= (first_name) => {
        let reg = /^([а-яА-ЯЁ]{0,20})$/;
        if(reg.test(first_name)){
            this.setState({first_name:first_name})
        }
    };

    validate_second_name = (second_name) => {
        let reg = /^([а-яА-ЯЁ]{0,20})$/;
        if(reg.test(second_name)){
            this.setState({second_name:second_name})
        }
    };

    Save = () => {
        if(
            this.state.first_name.length >= 2 &&
            this.state.last_name.length >= 2 &&
            //this.state.second_name.length > 0 &&
            this.state.gender !== 0 &&
            this.state.date_y !== '' &&
            this.state.date_m_num !== null &&
            this.state.date_d !== '' &&
            this.state.residence_id !== null &&
            this.state.citizenship_id !== null
        ){
            axios.post('v1/reg.profile_save', {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                second_name: this.state.second_name,
                gender: this.state.gender,
                birthday_date: this.state.date_y+'-'+this.state.date_m_num.toString().padStart(2,"0")+'-'+this.state.date_d,
                city_residence: this.state.residence_id,
                citizenship: this.state.citizenship_id,
                inn: this.state.inn
            })
                .then(response => {
                    if( Object.keys(response).length ){
                        this.props.navigation.navigate('UserProfileAvatarScreen');
                    }
                });
        }else{
            Toast.show({
                text: 'Заполните необходимые данные',
                duration: 3000,
                type: "danger"
            });
        }
    };

    date_d_item = (
        <View>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'space-between', }}>
                <TouchableOpacity onPress={() => {
                    this.setState({modal_date_d: false, date_d: '1'});
                }} style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#0F6780'
                }}><Text style={{
                    color: "#FFFFFF",
                    fontSize: verticalScale(14),
                    fontFamily: 'PFBeauSansPro-Regular'
                }}>1</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({modal_date_d: false, date_d: '2'});
                }} style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#0F6780'
                }}><Text style={{
                    color: "#FFFFFF",
                    fontSize: verticalScale(14),
                    fontFamily: 'PFBeauSansPro-Regular'
                }}>2</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({modal_date_d: false, date_d: '3'});
                }} style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#0F6780'
                }}><Text style={{
                    color: "#FFFFFF",
                    fontSize: verticalScale(14),
                    fontFamily: 'PFBeauSansPro-Regular'
                }}>3</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({modal_date_d: false, date_d: '4'});
                }} style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#0F6780'
                }}><Text style={{
                    color: "#FFFFFF",
                    fontSize: verticalScale(14),
                    fontFamily: 'PFBeauSansPro-Regular'
                }}>4</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({modal_date_d: false, date_d: '5'});
                }} style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#0F6780'
                }}><Text style={{
                    color: "#FFFFFF",
                    fontSize: verticalScale(14),
                    fontFamily: 'PFBeauSansPro-Regular'
                }}>5</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({modal_date_d: false, date_d: '6'});
                }} style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#0F6780'
                }}><Text style={{
                    color: "#FFFFFF",
                    fontSize: verticalScale(14),
                    fontFamily: 'PFBeauSansPro-Regular'
                }}>6</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({modal_date_d: false, date_d: '7'});
                }} style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#0F6780'
                }}><Text style={{
                    color: "#FFFFFF",
                    fontSize: verticalScale(14),
                    fontFamily: 'PFBeauSansPro-Regular'
                }}>7</Text></TouchableOpacity>
            </View>
            <View style={{ marginTop:10, flex: 1, flexDirection:'row', justifyContent: 'space-between', }}>
                <TouchableOpacity onPress={() => {
                    this.setState({modal_date_d: false, date_d: '8'});
                }} style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#0F6780'
                }}><Text style={{
                    color: "#FFFFFF",
                    fontSize: verticalScale(14),
                    fontFamily: 'PFBeauSansPro-Regular'
                }}>8</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({modal_date_d: false, date_d: '9'});
                }} style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#0F6780'
                }}><Text style={{
                    color: "#FFFFFF",
                    fontSize: verticalScale(14),
                    fontFamily: 'PFBeauSansPro-Regular'
                }}>9</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({modal_date_d: false, date_d: '10'});
                }} style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#0F6780'
                }}><Text style={{
                    color: "#FFFFFF",
                    fontSize: verticalScale(14),
                    fontFamily: 'PFBeauSansPro-Regular'
                }}>10</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({modal_date_d: false, date_d: '11'});
                }} style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#0F6780'
                }}><Text style={{
                    color: "#FFFFFF",
                    fontSize: verticalScale(14),
                    fontFamily: 'PFBeauSansPro-Regular'
                }}>11</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({modal_date_d: false, date_d: '12'});
                }} style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#0F6780'
                }}><Text style={{
                    color: "#FFFFFF",
                    fontSize: verticalScale(14),
                    fontFamily: 'PFBeauSansPro-Regular'
                }}>12</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({modal_date_d: false, date_d: '13'});
                }} style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#0F6780'
                }}><Text style={{
                    color: "#FFFFFF",
                    fontSize: verticalScale(14),
                    fontFamily: 'PFBeauSansPro-Regular'
                }}>13</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({modal_date_d: false, date_d: '14'});
                }} style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#0F6780'
                }}><Text style={{
                    color: "#FFFFFF",
                    fontSize: verticalScale(14),
                    fontFamily: 'PFBeauSansPro-Regular'
                }}>14</Text></TouchableOpacity>
            </View>
            <View style={{ marginTop:10, flex: 1, flexDirection:'row', justifyContent: 'space-between', }}>
                <TouchableOpacity onPress={() => {
                    this.setState({modal_date_d: false, date_d: '15'});
                }} style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#0F6780'
                }}><Text style={{
                    color: "#FFFFFF",
                    fontSize: verticalScale(14),
                    fontFamily: 'PFBeauSansPro-Regular'
                }}>15</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({modal_date_d: false, date_d: '16'});
                }} style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#0F6780'
                }}><Text style={{
                    color: "#FFFFFF",
                    fontSize: verticalScale(14),
                    fontFamily: 'PFBeauSansPro-Regular'
                }}>16</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({modal_date_d: false, date_d: '17'});
                }} style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#0F6780'
                }}><Text style={{
                    color: "#FFFFFF",
                    fontSize: verticalScale(14),
                    fontFamily: 'PFBeauSansPro-Regular'
                }}>17</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({modal_date_d: false, date_d: '18'});
                }} style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#0F6780'
                }}><Text style={{
                    color: "#FFFFFF",
                    fontSize: verticalScale(14),
                    fontFamily: 'PFBeauSansPro-Regular'
                }}>18</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({modal_date_d: false, date_d: '19'});
                }} style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#0F6780'
                }}><Text style={{
                    color: "#FFFFFF",
                    fontSize: verticalScale(14),
                    fontFamily: 'PFBeauSansPro-Regular'
                }}>19</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({modal_date_d: false, date_d: '20'});
                }} style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#0F6780'
                }}><Text style={{
                    color: "#FFFFFF",
                    fontSize: verticalScale(14),
                    fontFamily: 'PFBeauSansPro-Regular'
                }}>20</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({modal_date_d: false, date_d: '21'});
                }} style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#0F6780'
                }}><Text style={{
                    color: "#FFFFFF",
                    fontSize: verticalScale(14),
                    fontFamily: 'PFBeauSansPro-Regular'
                }}>21</Text></TouchableOpacity>
            </View>
            <View style={{ marginTop:10, flex: 1, flexDirection:'row', justifyContent: 'space-between', }}>
                <TouchableOpacity onPress={() => {
                    this.setState({modal_date_d: false, date_d: '22'});
                }} style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#0F6780'
                }}><Text style={{
                    color: "#FFFFFF",
                    fontSize: verticalScale(14),
                    fontFamily: 'PFBeauSansPro-Regular'
                }}>22</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({modal_date_d: false, date_d: '23'});
                }} style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#0F6780'
                }}><Text style={{
                    color: "#FFFFFF",
                    fontSize: verticalScale(14),
                    fontFamily: 'PFBeauSansPro-Regular'
                }}>23</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({modal_date_d: false, date_d: '24'});
                }} style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#0F6780'
                }}><Text style={{
                    color: "#FFFFFF",
                    fontSize: verticalScale(14),
                    fontFamily: 'PFBeauSansPro-Regular'
                }}>24</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({modal_date_d: false, date_d: '25'});
                }} style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#0F6780'
                }}><Text style={{
                    color: "#FFFFFF",
                    fontSize: verticalScale(14),
                    fontFamily: 'PFBeauSansPro-Regular'
                }}>25</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({modal_date_d: false, date_d: '26'});
                }} style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#0F6780'
                }}><Text style={{
                    color: "#FFFFFF",
                    fontSize: verticalScale(14),
                    fontFamily: 'PFBeauSansPro-Regular'
                }}>26</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({modal_date_d: false, date_d: '27'});
                }} style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#0F6780'
                }}><Text style={{
                    color: "#FFFFFF",
                    fontSize: verticalScale(14),
                    fontFamily: 'PFBeauSansPro-Regular'
                }}>27</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({modal_date_d: false, date_d: '28'});
                }} style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#0F6780'
                }}><Text style={{
                    color: "#FFFFFF",
                    fontSize: verticalScale(14),
                    fontFamily: 'PFBeauSansPro-Regular'
                }}>28</Text></TouchableOpacity>
            </View>
            <View style={{ marginTop:10, flex: 1, flexDirection:'row', justifyContent: 'space-between', }}>
                <TouchableOpacity onPress={() => {
                    this.setState({modal_date_d: false, date_d: '29'});
                }} style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#0F6780'
                }}><Text style={{
                    color: "#FFFFFF",
                    fontSize: verticalScale(14),
                    fontFamily: 'PFBeauSansPro-Regular'
                }}>29</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({modal_date_d: false, date_d: '30'});
                }} style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#0F6780'
                }}><Text style={{
                    color: "#FFFFFF",
                    fontSize: verticalScale(14),
                    fontFamily: 'PFBeauSansPro-Regular'
                }}>30</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({modal_date_d: false, date_d: '31'});
                }} style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#0F6780'
                }}><Text style={{
                    color: "#FFFFFF",
                    fontSize: verticalScale(14),
                    fontFamily: 'PFBeauSansPro-Regular'
                }}>31</Text></TouchableOpacity>
                <TouchableOpacity style={{width: 40, height: 40, borderColor: 'transparent'}}><Text
                    style={{color: "#FFFFFF", fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular'}}></Text></TouchableOpacity>
                <TouchableOpacity style={{width: 40, height: 40, borderColor: 'transparent'}}><Text
                    style={{color: "#FFFFFF", fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular'}}></Text></TouchableOpacity>
                <TouchableOpacity style={{width: 40, height: 40, borderColor: 'transparent'}}><Text
                    style={{color: "#FFFFFF", fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular'}}></Text></TouchableOpacity>
                <TouchableOpacity style={{width: 40, height: 40, borderColor: 'transparent'}}><Text
                    style={{color: "#FFFFFF", fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular'}}></Text></TouchableOpacity>
            </View>
        </View>
    );

    get_city = async () => {
        this.setState({citys: []});
        axios.get('v1/city.get_by_name', {
            params: {
                city: this.state.search_city
            }
        })
            .then(response => {
                this.setState({citys: response});
            });
    };

    render() {

        let months = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
        let date_m_item_x = [];
        months.map((month, index) => {
            date_m_item_x.push(
                <Button key={index} onPress={() => {this.setState({modal_date_m: false, date_m: month, date_m_num: index});}} transparent full><Text style={{color: "#FFFFFF", fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular'}}>{month}</Text></Button>
            );
        });
        let date_m_item = (
            <View style={{ flex: 1, flexDirection:'column', justifyContent: 'space-between', }}>{date_m_item_x}</View>
        );

        let date_y_item_x = [];
        for( var year=(new Date().getFullYear()-14); year >= 1960; year-- ){
            let y = year;
            date_y_item_x.push(
                <Button key={year} onPress={() => {this.setState({modal_date_y: false, date_y: y.toString()});}} transparent full><Text style={{color: "#FFFFFF", fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular'}}>{year}</Text></Button>
            );
        }
        let date_y_item = (
            <View style={{ flex: 1, flexDirection:'column', justifyContent: 'space-between', }}>{date_y_item_x}</View>
        );

        return (
            <SafeAreaView style={styles.container_global}>
                <StatusBarComp/>

                    <ScrollView>
                        <View style={styles.content_global}>

                            <Text style={{marginTop:0, color: '#262626', fontSize: verticalScale(12), fontFamily: 'PFBeauSansPro-Regular'}}>Укажите Ваши данные (как в паспорте)</Text>

                            <Item stackedLabel style={{marginTop: 15,}}>
                                <Label style={styles.item_float_label}>Имя*</Label>
                                <Input autoCapitalize="sentences" autoCorrect={false} textContentType="middleName"
                                       onChangeText={(value) => {
                                           this.validate_first_name(value)
                                       }} value={this.state.first_name} maxLength={20} style={{
                                    paddingRight: 40,
                                    color: '#262626',
                                    fontFamily: 'PFBeauSansPro-Regular',
                                }}/>
                                {this.state.first_name.length > 2 ? (
                                    <SvgCheck style={{position: 'absolute', bottom: 20, right: 5}}/>
                                ) : null}
                            </Item>

                            <Item stackedLabel style={{marginTop: 15,}}>
                                <Label style={styles.item_float_label}>Фамилия*</Label>
                                <Input autoCapitalize="sentences" autoCorrect={false} textContentType="middleName"
                                       onChangeText={(value) => {
                                           this.validate_last_name(value)
                                       }} value={this.state.last_name} maxLength={20} style={{
                                    paddingRight: 40,
                                    color: '#262626',
                                    fontFamily: 'PFBeauSansPro-Regular',
                                }}/>
                                {this.state.last_name.length > 2 ? (
                                    <SvgCheck style={{position: 'absolute', bottom: 20, right: 5}}/>
                                ) : null}
                            </Item>

                            <Item stackedLabel style={{marginTop: 15,}}>
                                <Label style={styles.item_float_label}>Отчество</Label>
                                <Input autoCapitalize="sentences" autoCorrect={false} textContentType="middleName"
                                       onChangeText={(value) => {
                                           this.validate_second_name(value)
                                       }} value={this.state.second_name} maxLength={20} style={{
                                    paddingRight: 40,
                                    color: '#262626',
                                    fontFamily: 'PFBeauSansPro-Regular',
                                }}/>
                                {this.state.second_name.length > 2 ? (
                                    <SvgCheck style={{position: 'absolute', bottom: 20, right: 5}}/>
                                ) : null}
                            </Item>

                            <Text style={{marginTop:10, marginBottom:15, color: '#b7becb', fontSize: verticalScale(12), fontFamily: 'PFBeauSansPro-Regular', textAlign: 'center'}}>...</Text>

                            <Text style={styles.item_float_label}>Пол*</Text>
                            <Grid style={{marginTop:5}}>
                                <Col style={{paddingRight:10}}>

                                    <TouchableOpacity onPress={() => this.setState({gender: 1})}
                                                      style={[styles.button, (this.state.gender === 1) ? {backgroundColor: '#074A5D'} : {backgroundColor: '#F9FBFF'}]}>
                                        <SvgMen fill={(this.state.gender === 1) ? '#ffffff' : '#074a5d'}/>
                                        <Text style={{
                                            marginLeft: 10,
                                            color: [(this.state.gender === 1) ? '#ffffff' : '#074a5d'],
                                            fontSize: verticalScale(16),
                                            fontFamily: 'PFBeauSansPro-Regular'
                                        }}>Мужской</Text>
                                    </TouchableOpacity>

                                </Col>
                                <Col style={{paddingLeft:10}}>

                                    <TouchableOpacity onPress={() => this.setState({gender: 2})}
                                                      style={[styles.button, (this.state.gender === 2) ? {backgroundColor: '#074A5D'} : {backgroundColor: '#F9FBFF'}]}>
                                        <SvgWomen fill={(this.state.gender === 2) ? '#ffffff' : '#074a5d'}/>
                                        <Text style={{
                                            marginLeft: 10,
                                            color: [(this.state.gender === 2) ? '#ffffff' : '#074a5d'],
                                            fontSize: verticalScale(16),
                                            fontFamily: 'PFBeauSansPro-Regular'
                                        }}>Женский</Text>
                                    </TouchableOpacity>

                                </Col>
                            </Grid>

                            <Text style={{marginTop:15, marginBottom: 15, color: '#b7becb', fontSize: verticalScale(12), fontFamily: 'PFBeauSansPro-Regular', textAlign: 'center'}}>...</Text>

                            <Modal animationType="slide" transparent={false} visible={this.state.modal_date_d} onRequestClose={() => {}}>
                                <View style={{backgroundColor:'#074A5D', height: Dimensions.get('window').height}}>
                                    <Header style={{marginTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight, backgroundColor:'transparent', borderBottomWidth: 0, shadowOffset: {height: 0, width: 0},
                                        shadowOpacity: 0, elevation: 0}}>
                                        <Left>
                                            <Button transparent onPress={() => {
                                                this.setState({modal_date_d: false});
                                            }}>
                                                <SvgTimes/>
                                            </Button>
                                        </Left>
                                        <Body>
                                            <Title style={{fontSize: verticalScale(16),
                                                color: '#ffffff',
                                                fontFamily: 'PFBeauSansPro-Bold',}}>ВЫБЕРИТЕ ДАТУ</Title>
                                        </Body>
                                    </Header>
                                    <Content>
                                        <View style={styles.content_global}>
                                            { this.date_d_item }
                                        </View>
                                    </Content>
                                </View>
                            </Modal>

                            <Modal animationType="slide" transparent={true} visible={this.state.modal_date_m} onRequestClose={() => {}}>
                                <View style={{backgroundColor:'#074A5D', height: Dimensions.get('window').height}}>
                                    <Header style={{marginTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight, backgroundColor:'transparent', borderBottomWidth: 0, shadowOffset: {height: 0, width: 0},
                                        shadowOpacity: 0, elevation: 0}}>
                                        <Left>
                                            <Button transparent onPress={() => {
                                                this.setState({modal_date_m: false});
                                            }}>
                                                <SvgTimes/>
                                            </Button>
                                        </Left>
                                        <Body>
                                            <Title style={{fontSize: verticalScale(16),
                                                color: '#ffffff',
                                                fontFamily: 'PFBeauSansPro-Bold',}}>ВЫБЕРИТЕ МЕСЯЦ</Title>
                                        </Body>
                                    </Header>
                                    <Content>
                                        <ScrollView style={styles.content_global}>
                                            { date_m_item }
                                        </ScrollView>
                                    </Content>
                                </View>
                            </Modal>

                            <Modal animationType="slide" transparent={true} visible={this.state.modal_date_y} onRequestClose={() => {}}>
                                <View style={{backgroundColor:'#074A5D', height: Dimensions.get('window').height}}>
                                    <Header style={{marginTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight, backgroundColor:'transparent', borderBottomWidth: 0, shadowOffset: {height: 0, width: 0},
                                        shadowOpacity: 0, elevation: 0,}}>
                                        <Left>
                                            <Button transparent onPress={() => {
                                                this.setState({modal_date_y: false});
                                            }}>
                                                <SvgTimes/>
                                            </Button>
                                        </Left>
                                        <Body>
                                            <Title style={{fontSize: verticalScale(16),
                                                color: '#ffffff',
                                                fontFamily: 'PFBeauSansPro-Bold',}}>ВЫБЕРИТЕ ГОД</Title>
                                        </Body>
                                    </Header>
                                    <Content>
                                        <ScrollView style={styles.content_global}>
                                            { date_y_item }
                                        </ScrollView>
                                    </Content>
                                </View>
                            </Modal>

                            <Text style={styles.item_float_label}>Дата рождения*</Text>
                            <Grid>
                                <Col style={{paddingRight: 5, width: 80}}>

                                    <Item onPress={() => {this.setState({modal_date_d: true})}}>
                                        <Input autoCapitalize="sentences" autoCorrect={false} placeholder="Дата" placeholderTextColor="#b7becb" onTouchStart={() => {this.setState({modal_date_d: true})}} editable={false} value={this.state.date_d} />
                                        <SvgCalendar style={{position: 'absolute', bottom: 20, right: 5}}/>
                                    </Item>

                                </Col>
                                <Col style={{paddingLeft:5,paddingRight:5,}}>

                                    <Item onPress={() => {this.setState({modal_date_m: true})}}>
                                        <Input autoCapitalize="sentences" autoCorrect={false} placeholder="Месяц" placeholderTextColor="#b7becb" onTouchStart={() => {this.setState({modal_date_m: true})}} editable={false} value={this.state.date_m} />
                                        <SvgCalendar style={{position: 'absolute', bottom: 20, right: 5}}/>
                                    </Item>

                                </Col>
                                <Col style={{paddingLeft: 5, width: 100}}>

                                    <Item onPress={() => {this.setState({modal_date_y: true})}}>
                                        <Input autoCapitalize="sentences" autoCorrect={false} placeholder="Год" placeholderTextColor="#b7becb" onTouchStart={() => {this.setState({modal_date_y: true})}} editable={false} value={this.state.date_y} />
                                        <SvgCalendar style={{position: 'absolute', bottom: 20, right: 5}}/>
                                    </Item>

                                </Col>
                            </Grid>

                            <Modal animationType="slide" transparent={true} visible={this.state.modal_residence} onRequestClose={() => {}}>
                                <View style={{backgroundColor:'#074A5D', height: Dimensions.get('window').height}}>
                                    <Header searchBar style={{marginTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight, backgroundColor:'transparent', borderBottomWidth: 0, shadowOffset: {height: 0, width: 0},
                                        shadowOpacity: 0, elevation: 0,}}>
                                        <Left>
                                            <Button transparent onPress={() => {
                                                this.setState({modal_residence: false});
                                            }}>
                                                <SvgTimes/>
                                            </Button>
                                        </Left>
                                        <Body>
                                            <Title style={{fontSize: verticalScale(16),
                                                color: '#ffffff',
                                                fontFamily: 'PFBeauSansPro-Bold',}}>ВЫБЕРИТЕ ГОРОД</Title>
                                        </Body>
                                    </Header>
                                    <View style={{paddingLeft: 20, paddingRight: 20,}}>
                                        <Item floatingLabel style={{marginTop:0,}}>
                                            <Label style={styles.item_float_label}>Город проживания</Label>
                                            <Input autoCapitalize="sentences" style={{color: '#FFFFFF'}} autoCorrect={false} onChangeText={(value) => { this.setState({search_city: value}); this.delay(function(){ this.get_city(); }.bind(this), 100 ); }} value={this.state.search_city} maxLength={20}/>
                                        </Item>
                                    </View>
                                    <Content>

                                        <ScrollView style={styles.content_global}>

                                            <View style={{ flex: 1, flexDirection:'column', justifyContent: 'space-between', }}>
                                                {Object.keys(this.state.citys).map((key) =>
                                                    <Button key={key} onPress={() => {this.setState({modal_residence: false, residence: this.state.citys[key].name, residence_id: this.state.citys[key].id});}} transparent full><Text style={{color: "#FFFFFF", fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular'}}>{this.state.citys[key].name}</Text></Button>
                                                )}
                                                {(Object.keys(this.state.citys).length === 0) ? (
                                                    <Text style={{textAlign: 'center', color: '#FFFFFF', marginTop: 5,}}>Загрузка данных...</Text>
                                                ) : null}
                                            </View>

                                        </ScrollView>
                                    </Content>
                                </View>
                            </Modal>

                            <Modal animationType="slide" transparent={true} visible={this.state.modal_citizenship} onRequestClose={() => {}}>
                                <View style={{backgroundColor:'#074A5D', height: Dimensions.get('window').height}}>
                                    <Header searchBar style={{marginTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight, backgroundColor:'transparent', borderBottomWidth: 0, shadowOffset: {height: 0, width: 0},
                                        shadowOpacity: 0, elevation: 0,}}>
                                        <Left>
                                            <Button transparent onPress={() => {
                                                this.setState({modal_citizenship: false});
                                            }}>
                                                <SvgTimes/>
                                            </Button>
                                        </Left>
                                        <Body>
                                            <Title style={{fontSize: verticalScale(16),
                                                color: '#ffffff',
                                                fontFamily: 'PFBeauSansPro-Bold',}}>ВЫБЕРИТЕ ГРАЖДАНСТВО</Title>
                                        </Body>
                                    </Header>
                                    <Content>
                                        <ScrollView style={styles.content_global}>

                                            <View style={{ flex: 1, flexDirection:'column', justifyContent: 'space-between', }}>
                                                <Button onPress={() => {this.setState({modal_citizenship: false, citizenship: 'Россия', citizenship_id: 1});}} transparent full><Text style={{color: "#FFFFFF", fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular'}}>Россия</Text></Button>
                                                <Button onPress={() => {this.setState({modal_citizenship: false, citizenship: 'Украина', citizenship_id: 2});}} transparent full><Text style={{color: "#FFFFFF", fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular'}}>Украина</Text></Button>
                                                <Button onPress={() => {this.setState({modal_citizenship: false, citizenship: 'Беларусь', citizenship_id: 5});}} transparent full><Text style={{color: "#FFFFFF", fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular'}}>Беларусь</Text></Button>
                                            </View>

                                        </ScrollView>
                                    </Content>
                                </View>
                            </Modal>

                            <Item onPress={() => {
                                this.setState({modal_residence: true});
                                this.get_city();
                            }} stackedLabel style={{marginTop: 10,}}>
                                <Label style={styles.item_float_label}>Город проживания*</Label>
                                <Input
                                    autoCapitalize="sentences" autoCorrect={false}
                                    onTouchStart={() => { this.setState({modal_residence: true}); this.get_city(); }}
                                    editable={false}
                                    value={this.state.residence} maxLength={20}
                                    style={{paddingRight: 40, color: '#262626', fontFamily: 'PFBeauSansPro-Regular',}}/>
                                {this.state.residence.length ? (
                                    <SvgCheck style={{position: 'absolute', bottom: 20, right: 5}}/>
                                ) : null}
                            </Item>

                            <Item disabled={true} onPress={() => {
                                this.setState({modal_citizenship: true})
                            }} stackedLabel style={{marginTop: 15,}}>
                                <Label style={styles.item_float_label}>Гражданство*</Label>
                                <Input
                                    autoCapitalize="sentences" autoCorrect={false}
                                    onTouchStart={() => {this.setState({modal_citizenship: true})}}
                                    editable={false}
                                    value={this.state.citizenship} maxLength={20}
                                    style={{paddingRight: 40, color: '#262626', fontFamily: 'PFBeauSansPro-Regular',}}/>
                                {this.state.citizenship.length ? (
                                    <SvgCheck style={{position: 'absolute', bottom: 20, right: 5}}/>
                                ) : null}
                            </Item>

                            <TouchableOpacity onPress={this.Save}
                                              style={[styles.button, {marginTop: 30, backgroundColor: '#F9FBFF'}]}>
                                <Text style={{
                                    color: '#074A5D',
                                    fontSize: verticalScale(16),
                                    fontFamily: 'PFBeauSansPro-Regular'
                                }}>Далее</Text>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>

            </SafeAreaView>
        )
    }
}