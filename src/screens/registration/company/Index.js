import React, {Component} from 'react'
import {View, ScrollView, SafeAreaView, TouchableOpacity, Text} from 'react-native';
import {Body, Content, Header, Item, Label, Left, Title} from 'native-base';

import styles from "../../../theme/Style";
import NavigationOptions from "../../../lib/NavigationOptions";
import StatusBarComp from "../../../components/StatusBarComp";
import SvgUserPlus from "../../../assets/svg/SvgUserPlus";
import {verticalScale} from "../../../lib/Scaling";
import SvgCheckBox from "../../../assets/svg/SvgCheckBox";
import SvgCheckBoxChecked from "../../../assets/svg/SvgCheckBoxChecked";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import ModalView from "../../../components/ModalView";
import axios from "../../../lib/Axios";

export default class IndexScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirm_term: false,
            bt_register_click: false,
            first_name: '',
            last_name: '',
            email: '',
            correct_email: false,
            phone_number: '',
            correct_phone: false,
            visible_modal_city: false,
            search_city: '',
            citys: [],
            city: '',
            city_id: null,
            company_title: '',
            url: '',
        };
    }

    static navigationOptions = ({navigation}) => NavigationOptions(navigation, {
        title: 'Регистрация компании',
        left_func: 'IndexScreen'
    });

    confirm_term = () => {
        if (this.state.confirm_term === true) {
            this.setState({confirm_term: false})
        } else {
            this.setState({confirm_term: true})
        }
    };

    validate_last_name = (last_name) => {
        let reg = /^([а-яА-ЯЁ]{0,20})$/;
        if (reg.test(last_name)) {
            this.setState({last_name: last_name})
        }
    };

    validate_first_name = (first_name) => {
        let reg = /^([а-яА-ЯЁ]{0,20})$/;
        if (reg.test(first_name)) {
            this.setState({first_name: first_name})
        }
    };

    validate_email = (email) => {
        let reg = /^[A-Za-z0-9!#$%&\'*+-/=?^_`{|}~]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)+[A-Za-z]$/;
        if (reg.test(email) === false) {
            this.setState({correct_email: false})
        } else {
            this.setState({correct_email: true});
        }
        this.setState({email: email});
    };

    validate_phone = (phone_number) => {
        let reg = /^([0-9]){0,20}$/;
        if (reg.test(phone_number)) {
            this.setState({phone_number: phone_number});
            if (phone_number.length === 10) {
                this.setState({correct_phone: true});
            } else {
                this.setState({correct_phone: false});
            }
        }
    };

    delay = (function () {
        var timer = 0;
        return function (callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    })();

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

    register = () => {
        alert('В разработке');
    };

    render() {
        return(
            <SafeAreaView style={styles.container_global}>
                <StatusBarComp/>

                <ModalView title="Выберите город" filter={true} filterLabel="Город"
                           visible={this.state.visible_modal_city}
                           onClose={() => this.setState({visible_modal_city: false})}
                           filterChangeText={(value) => {
                               this.setState({search_city: value});
                               this.delay(function () {
                                   this.get_city();
                               }.bind(this), 100);
                           }}
                           filterValue={this.state.search_city}
                >
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between',}}>
                        {Object.keys(this.state.citys).map((key) =>
                            <Button key={key} title={this.state.citys[key].name} styleTitle={{color: "#FFFFFF"}}
                                    onPress={() => {
                                        this.setState({
                                            visible_modal_city: false,
                                            city: this.state.citys[key].name,
                                            city_id: this.state.citys[key].id
                                        });
                                    }}/>
                        )}
                        {(Object.keys(this.state.citys).length === 0) ? (
                            <Text style={{textAlign: 'center', color: '#FFFFFF', marginTop: 5,}}>Загрузка
                                данных...</Text>
                        ) : null}
                    </View>
                </ModalView>

                    <ScrollView>
                        <View style={styles.content_global}>

                            <Input style={{marginTop: 0,}} label="Юридический статус*" check={false} maxLength={20}/>

                            <Input style={{marginTop: 20,}} label="Название компании*" check={false}
                                   onChangeText={(value) => this.setState({company_title: value})}
                                   value={this.state.company_title}
                                   maxLength={20}/>

                            <Input style={{marginTop: 20,}} label="Сайт компании" check={false}
                                   onChangeText={(value) => this.setState({url: value})} value={this.state.url}
                                   maxLength={20}/>

                            <Input style={{marginTop: 20,}} editable={false} onPress={() => {
                                this.setState({visible_modal_city: true}, () => this.get_city());
                            }} label="Город*" check={false} maxLength={20} value={this.state.city}/>

                            <View style={{
                                marginTop: 20,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    fontSize: verticalScale(18),
                                    color: '#262626',
                                    fontFamily: 'PFBeauSansPro-Bold'
                                }}>
                                    Контактное лицо
                                </Text>
                                <Text style={{
                                    marginLeft: 10,
                                    fontSize: verticalScale(12),
                                    color: '#A1AABA',
                                    fontFamily: 'PFBeauSansPro-Regular'
                                }}>
                                    (конфиденциально)
                                </Text>
                            </View>

                            <Input style={{marginTop: 20,}} label="Имя*" check={(this.state.first_name.length > 2)}
                                   onChangeText={(value) => this.validate_first_name(value)}
                                   value={this.state.first_name} maxLength={20}/>

                            <Input style={{marginTop: 20,}} label="Фамилия*" check={(this.state.last_name.length > 2)}
                                   onChangeText={(value) => this.validate_last_name(value)} value={this.state.last_name}
                                   maxLength={20}/>

                            <Input style={{marginTop: 20,}} label="Email*" check={this.state.correct_email}
                                   onChangeText={(value) => this.validate_email(value)} value={this.state.email}
                                   maxLength={40} keyboardType={'email-address'}/>

                            <Input style={{marginTop: 20,}} label="Ваш телефон*" check={this.state.correct_phone}
                                   onChangeText={(value) => this.validate_phone(value)} value={this.state.phone_number}
                                   maxLength={10} keyboardType={'phone-pad'}/>


                            <View style={{
                                marginTop: 30,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start'
                            }}>
                                <TouchableOpacity onPress={() => this.confirm_term()}>
                                    {(this.state.confirm_term == false) ? (<SvgCheckBox/>) : (<SvgCheckBoxChecked/>)}
                                </TouchableOpacity>
                                <View style={{paddingLeft: 15}}>
                                    <Text style={{
                                        marginTop: 0,
                                        fontSize: verticalScale(12),
                                        color: '#262626',
                                        fontFamily: 'PFBeauSansPro-Regular'
                                    }}>
                                        Я подтверждаю
                                    </Text>
                                    <Text onPress={() => {
                                        this.props.navigation.navigate('UserTermsServiceScreen')
                                    }} style={{
                                        marginTop: 5,
                                        fontSize: verticalScale(12),
                                        color: '#074a5d',
                                        fontFamily: 'PFBeauSansPro-Regular',
                                        textDecorationLine: 'underline'
                                    }}>
                                        Соглашение об использовании сервиса (оферта)
                                    </Text>
                                </View>
                            </View>

                            <Button title="Зарегистрироваться" onPress={() => {
                                this.props.navigation.navigate('CompanySmsConfirmScreen')
                            }} style={{marginTop: 30,}}>
                                <SvgUserPlus/>
                            </Button>

                        </View>
                    </ScrollView>
            </SafeAreaView>
        )
    }
}