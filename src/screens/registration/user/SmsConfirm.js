import React, {Component} from 'react'
import {connect} from "react-redux";
import {Text, View, ScrollView, BackHandler, SafeAreaView} from 'react-native';
// import {Item, Input} from 'native-base';

import NavigationOptions from "../../../lib/NavigationOptions";
import axios from '../../../lib/Axios';
import styles from '../../../theme/Style'
import {verticalScale} from '../../../lib/Scaling';
import StatusBarComp from "../../../components/StatusBarComp";
import SvgHandPhone from "../../../assets/svg/SvgHandPhone";
import Notification from "../../../lib/Notification";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

class SmsConfirmScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            timer: 60,
        };
    };

    static navigationOptions = ({ navigation }) => NavigationOptions(navigation, { title: 'СМС ПОДТВЕРЖДЕНИЕ', left_func: 'UserIndexScreen' });

    get_code = () => {
        axios.get('v1/reg.registration_get_confirm',{
            params :{
                phone_code: this.props.phone_code.slice(1),
                phone_number: this.props.phone_number
            }
        })
            .then(response => {
                if( Object.keys(response).length ){
                    this.setState({timer: 60});
                    this.setState({code: response.code});
                    this.startTimer();
                }
            });
    };

    startTimer = () => {
        clearInterval(this.clockCall);
        this.clockCall = setInterval(() => {
            if(this.state.timer === 0){
                clearInterval(this.clockCall)
            }else{
                this.setState((prevstate) => ({ timer: prevstate.timer-1 }));
            }

        }, 1000);
    };

    handleBackPress = () => {
        this.props.navigation.navigate('UserIndexScreen');
        return true;
    };

    componentDidMount() {
        this.get_code();
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    };

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
        clearInterval(this.clockCall);
    };

    ResendCode = () => {
        if( this.state.timer === 0 ){
            this.get_code();
        }
    };

    CheckCode = () => {
        if( this.state.code.length !== 6 ){
            Notification('Введите код');
        }else{
            axios.post('v1/reg.registration_confirm_save',{
                code: this.state.code,
            })
                .then(response => {
                    if( Object.keys(response).length ){
                        this.props.navigation.navigate('UserProfileScreen');
                    }
                });
        }
    };

    render() {
        return (
            <SafeAreaView style={styles.container_global}>
                <StatusBarComp/>

                    <ScrollView>
                        <View style={styles.content_global}>

                            <View style={{justifyContent: 'center',alignItems: 'center'}}>
                                <SvgHandPhone/>
                            </View>

                            <View style={{marginTop:30, justifyContent: 'center', alignItems: 'center', paddingLeft:10, paddingRight:10,}}>
                                <Text style={{
                                    fontSize: verticalScale(16),
                                    color: '#262626',
                                    fontFamily: 'PFBeauSansPro-Regular',
                                    textAlign: 'center'
                                }}>На ваш номер {this.props.phone_code} {this.props.phone_number} направлен код
                                    подтверждения,
                                    пожалуйста, введите его в выделеное поле!</Text>
                            </View>

                            <View style={{marginTop: 15, justifyContent: 'center', alignItems: 'center',}}>
                                {/*<Item style={{width: 100,}}>*/}
                                {/*    <Input autoCapitalize="sentences" autoCorrect={false} textContentType="oneTimeCode" onChangeText={(value) => this.setState({code: value})} value={this.state.code} maxLength={6} keyboardType={'number-pad'} placeholder="******" style={{textAlign: 'center', letterSpacing:3,}}/>*/}
                                {/*</Item>*/}

                                <Input style={{}}
                                       onChangeText={(value) => this.setState({code: value})}
                                       textContentType="oneTimeCode"
                                       value={this.state.code} keyboardType={'number-pad'}
                                       placeholder="******"
                                       maxLength={6}/>
                            </View>



                            <Button disabled={!(this.state.timer === 0)}
                                    title={(this.state.timer === 0) ? 'Получить новый код' : 'Получить новый код через ' + this.state.timer}
                                    onPress={() => this.ResendCode()} style={{marginTop: 30,}}/>

                            <Button transparent={false} title="Подтвердить" onPress={() => this.CheckCode()}
                                    style={{marginTop: 20,}}/>

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
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(SmsConfirmScreen);