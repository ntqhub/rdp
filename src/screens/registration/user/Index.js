import React, {Component} from 'react'
import {connect} from "react-redux";
import {Text, View, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import storage from 'redux-persist/lib/storage';

import axios from '../../../lib/Axios';
import NavigationOptions from '../../../lib/NavigationOptions';
import styles from '../../../theme/Style'
import {verticalScale} from '../../../lib/Scaling';
import {UserSetEmail, UserSetPhoneCode, UserSetPhoneNumber} from "../../../actions/User";
import StatusBarComp from "../../../components/StatusBarComp";
import SvgUserPlus from "../../../assets/svg/SvgUserPlus";
import SvgCheckBox from "../../../assets/svg/SvgCheckBox";
import SvgCheckBoxChecked from "../../../assets/svg/SvgCheckBoxChecked";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Notification from "../../../lib/Notification";

class SignUpUserIndexScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone_check: true,
            confirm_term: false,
            bt_register_click: false,
        };
    }

    static navigationOptions = ({ navigation }) => NavigationOptions(navigation, {title: 'РЕГИСТРАЦИЯ СОИСКАТЕЛЯ', left_func: 'IndexScreen'});

    componentDidMount() {
        this.validate_email(this.props.email);
        this.validate_phone(this.props.phone_number);
        if (!this.props.phone_code) {
            this.props.UserSetPhoneCode('+7');
        }
    }

    validate_email = (email) => {
        let reg = /^[A-Za-z0-9!#$%&\'*+-/=?^_`{|}~]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)+[A-Za-z]$/;
        if(reg.test(email) === false){
            this.setState({correct_email:false})
        }else {
            this.setState({correct_email:true});
        }
        this.props.UserSetEmail(email);
    };

    validate_phone = (phone_number) => {
        let reg = /^([0-9]){0,20}$/;
        if(reg.test(phone_number)){
            this.props.UserSetPhoneNumber(phone_number);
            if(phone_number.length >= 10 ){
                this.setState({phone_check: true});
            }else{
                this.setState({phone_check: false});
            }
        }else{
            this.setState({phone_check: false});
        }
    };

    func_confirm_term = () => {
        if( this.state.confirm_term === true ){
            this.setState({confirm_term:false})
        }else{
            this.setState({confirm_term:true})
        }
    };

    register = () => {
        this.setState({'bt_register_click': true});
        if(
            this.state.confirm_term === true &&
            this.state.phone_check === true &&
            ((this.state.correct_email === true) || this.props.email === '')
        ){
            axios.post('v1/reg.registration_save',{
                email: this.props.email,
                phone_code: this.props.phone_code.slice(1),
                phone_number: this.props.phone_number,
            })
                .then(response => {
                    if( Object.keys(response).length ){
                        storage.setItem('token', response.token);
                        this.props.navigation.navigate('UserSmsConfirmScreen');
                    }
                });
        }else{
            if( this.state.confirm_term === true ){
                Notification('Все поля должны быть корректны');
            }else{
                Notification('Подтвердите пожалуйста соглашение');
            }
        }
    };

    render() {
        return(
            <SafeAreaView style={styles.container_global}>
                <StatusBarComp/>

                    <ScrollView>
                        <View style={styles.content_global}>

                            <Input style={{marginTop: 5,}} label="Email" check={(this.state.correct_email)}
                                   onChangeText={(value) => this.validate_email(value)} textContentType="emailAddress"
                                   value={this.props.email} keyboardType={'email-address'}
                                   maxLength={40}/>

                            <View style={{
                                flex: 1,
                                marginTop: 15,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start'
                            }}>
                                <View style={{width: 70, paddingRight: 10}}>
                                    <Input style={{}} disabled={true} label="Код*" check={false}
                                           onChangeText={(value) => this.props.UserSetPhoneCode(value)}
                                           value={this.props.phone_code} keyboardType={'phone-pad'}
                                           maxLength={6}/>
                                </View>
                                <View style={{flex: 1, paddingLeft: 10}}>
                                    <Input style={{}} disabled={true} label="Телефон*"
                                           check={(this.state.phone_check === true && this.props.phone_number && this.props.phone_number.length >= 10)}
                                           onChangeText={(value) => this.validate_phone(value)}
                                           textContentType="telephoneNumber"
                                           value={this.props.phone_number} keyboardType={'phone-pad'}
                                           maxLength={10}/>
                                </View>
                            </View>

                            <View style={{
                                marginTop: 30,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start'
                            }}>
                                <TouchableOpacity onPress={() => this.func_confirm_term()}>
                                    {(this.state.confirm_term === false) ? (<SvgCheckBox/>) : (<SvgCheckBoxChecked/>)}
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

                            <Button title="Зарегистрироваться" onPress={() => this.register()} style={{marginTop: 30,}}>
                                <SvgUserPlus/>
                            </Button>

                        </View>
                    </ScrollView>

            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.User.email,
        phone_code: state.User.phone_code,
        phone_number: state.User.phone_number,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        UserSetEmail: (email) => {
            dispatch(UserSetEmail(email))
        },
        UserSetPhoneNumber: (number) => {
            dispatch(UserSetPhoneNumber(number))
        },
        UserSetPhoneCode: (code) => {
            dispatch(UserSetPhoneCode(code))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpUserIndexScreen);