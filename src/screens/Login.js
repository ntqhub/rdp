import React, {Component} from "react";
import {connect} from "react-redux";
import {View, ScrollView, SafeAreaView, TouchableOpacity} from "react-native";
import {Text, Button, Item, Label, Input, Toast} from "native-base";
import {Col, Grid} from "react-native-easy-grid";
import storage from "redux-persist/lib/storage";

import axios from "../lib/Axios";
import styles from "../theme/Style";
import {verticalScale} from "../lib/Scaling";
import StatusBarComp from "../components/StatusBarComp";
import SvgCheck from "../assets/svg/SvgCheck";
import NavigationOptions from "../lib/NavigationOptions";
import SvgEmail from "../assets/svg/SvgEmail";
import SvgPhone from "../assets/svg/SvgPhone";
import {UserGetData} from "../actions/User";

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            phone_code: "+7",
            code: "",
            phone_number: "",
            type: "phone",
            get_code: false,
            phone_check: false,
            email_check: false
        };
    }

    static navigationOptions = ({navigation}) =>
        NavigationOptions(navigation, {title: "ВХОД В АККАУНТ"});

    validate_email = email => {
        let reg = /^[A-Za-z0-9!#$%&\'*+-/=?^_`{|}~]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)+[A-Za-z]$/;
        if (reg.test(email) === false) {
            this.setState({email_check: false});
        } else {
            this.setState({email_check: true});
        }
        this.setState({email: email});
    };

    validate_phone = phone_number => {
        let reg = /^([0-9]){0,20}$/;
        if (reg.test(phone_number)) {
            this.setState({phone_number: phone_number});
            if (phone_number.length >= 10) {
                this.setState({phone_check: true});
            } else {
                this.setState({phone_check: false});
            }
        } else {
            this.setState({phone_check: false});
        }
    };

    get_code = () => {
        storage.setItem("token", "");
        if (this.state.phone_check === true || this.state.email_check === true) {
            let params = {};
            if (this.state.type === "email") {
                params = {
                    email: this.state.email
                };
            } else {
                params = {
                    phone_code: this.state.phone_code.slice(1),
                    phone_number: this.state.phone_number
                };
            }
            axios
                .get("v1/user.singin_get_code?type=" + this.state.type, {
                    params: params
                })
                .then(response => {
                    if (Object.keys(response).length) {
                        this.setState({get_code: true});
                        this.setState({code: response.code});
                    }
                });
        } else {
            Toast.show({
                text: "Все поля должны быть корректны",
                duration: 3000,
                type: "danger"
            });
        }
    };

    auth = () => {
        let params = {};
        if (this.state.type === "email") {
            params = {
                email: this.state.email,
                code: this.state.code
            };
        } else {
            params = {
                phone_code: this.state.phone_code.slice(1),
                phone_number: this.state.phone_number,
                code: this.state.code
            };
        }

        axios.get("v1/user.signin", {params: params})
            .then(response => {
                if (Object.keys(response).length) {
                    storage.setItem("token", response.token);
                    if (response.reg_complete == false) {
                        axios.get("v1/reg.check").then(response => {
                            if (response.phone == false) {
                                this.props.navigation.navigate("UserSmsConfirmScreen");
                            } else if (response.profile == false) {
                                this.props.navigation.navigate("UserProfileScreen");
                            } else if (response.profile_photo == false) {
                                this.props.navigation.navigate("UserProfileAvatarScreen");
                            } else {
                                this.props.navigation.navigate("App");
                            }
                        });
                    }
                    this.props.UserGetData();
                }
            });
    };

    render() {
        return (
            <SafeAreaView style={styles.container_global}>
                <StatusBarComp/>

                <ScrollView>
                    <View style={styles.content_global}>
                        <Text
                            style={{
                                color: "#262626",
                                fontSize: verticalScale(12),
                                fontFamily: "PFBeauSansPro-Regular",
                                textAlign: "center"
                            }}
                        >
                            Вы можете войти в аккаунт через:
                        </Text>

                        <Grid style={{marginTop: 30}}>
                            <Col style={{alignItems: "center"}}>
                                <View>
                                    <Button
                                        disabled={this.state.get_code}
                                        onPress={() => this.setState({type: "email"})}
                                        transparent
                                        style={{borderRadius: 5}}
                                    >
                                        <View style={{width: 34}}>
                                            <SvgEmail/>
                                        </View>
                                        <Text
                                            uppercase={false}
                                            style={{
                                                color: "#262626",
                                                fontSize: verticalScale(15),
                                                fontFamily:
                                                    this.state.type === "email"
                                                        ? "PFBeauSansPro-Bold"
                                                        : "PFBeauSansPro-Regular"
                                            }}
                                        >
                                            Email
                                        </Text>
                                    </Button>
                                </View>
                                {this.state.type === "email" ? (
                                    <View
                                        style={{
                                            marginTop: 5,
                                            width: "100%",
                                            borderBottomColor: "#074A5D",
                                            borderBottomWidth: 1
                                        }}
                                    />
                                ) : null}
                            </Col>
                            <Col style={{alignItems: "center"}}>
                                <View>
                                    <Button
                                        disabled={this.state.get_code}
                                        onPress={() => this.setState({type: "phone"})}
                                        transparent
                                        style={{borderRadius: 5}}
                                    >
                                        <View style={{width: 20}}>
                                            <SvgPhone/>
                                        </View>
                                        <Text
                                            uppercase={false}
                                            style={{
                                                color: "#262626",
                                                fontSize: verticalScale(15),
                                                fontFamily:
                                                    this.state.type === "phone"
                                                        ? "PFBeauSansPro-Bold"
                                                        : "PFBeauSansPro-Regular"
                                            }}
                                        >
                                            Телефон
                                        </Text>
                                    </Button>
                                </View>
                                {this.state.type === "phone" ? (
                                    <View
                                        style={{
                                            marginTop: 5,
                                            width: "100%",
                                            borderBottomColor: "#074A5D",
                                            borderBottomWidth: 1
                                        }}
                                    />
                                ) : null}
                            </Col>
                        </Grid>

                        {this.state.type === "email" ? (
                            <View>
                                <Item stackedLabel style={{marginTop: 20}}>
                                    <Label style={styles.item_float_label}>Email*</Label>
                                    <Input
                                        autoCapitalize="sentences"
                                        autoCorrect={false}
                                        disabled={this.state.get_code}
                                        onChangeText={value => this.validate_email(value)}
                                        value={this.state.email}
                                        maxLength={40}
                                        keyboardType={"email-address"}
                                        style={{color: "#262626", paddingRight: 20}}
                                    />
                                    {this.state.email_check === true &&
                                    this.state.email.length >= 0 ? (
                                        <SvgCheck
                                            style={{position: "absolute", bottom: 20, right: 5}}
                                        />
                                    ) : null}
                                </Item>
                            </View>
                        ) : null}

                        {this.state.type === "phone" ? (
                            <View>
                                <Grid style={{marginTop: 25}}>
                                    <Col style={{width: 80, paddingRight: 10}}>
                                        <Item stackedLabel>
                                            <Label style={styles.item_float_label}>Код*</Label>
                                            <Input
                                                autoCapitalize="sentences"
                                                autoCorrect={false}
                                                disabled={true}
                                                onChangeText={value =>
                                                    this.setState({phone_code: value})
                                                }
                                                value={this.state.phone_code}
                                                maxLength={6}
                                                keyboardType={"phone-pad"}
                                                style={{color: "#262626"}}
                                            />
                                        </Item>
                                    </Col>
                                    <Col style={{paddingLeft: 10}}>
                                        <Item stackedLabel>
                                            <Label style={styles.item_float_label}>Телефон*</Label>
                                            <Input
                                                autoCapitalize="sentences"
                                                autoCorrect={false}
                                                disabled={this.state.get_code}
                                                onChangeText={value => this.validate_phone(value)}
                                                value={this.state.phone_number}
                                                maxLength={10}
                                                keyboardType={"phone-pad"}
                                                style={{color: "#262626", paddingRight: 40}}
                                            />
                                            {this.state.phone_check === true &&
                                            this.state.phone_number.length >= 10 ? (
                                                <SvgCheck
                                                    style={{position: "absolute", bottom: 20, right: 5}}
                                                />
                                            ) : null}
                                        </Item>
                                    </Col>
                                </Grid>
                            </View>
                        ) : null}

                        {this.state.get_code === true && (
                            <View>
                                <View
                                    style={{marginTop: 30, paddingLeft: 30, paddingRight: 30}}
                                >
                                    <Text
                                        style={{
                                            fontSize: verticalScale(14),
                                            color: "#262626",
                                            fontFamily: "PFBeauSansPro-Regular",
                                            textAlign: "center"
                                        }}
                                    >
                                        На{" "}
                                        {this.state.type === "phone" ? "ваш телефон" : "вашу почту"}{" "}
                                        направлен код подтверждения, пожалуйста, введите его в поле
                                        ниже!
                                    </Text>
                                </View>
                                <View
                                    style={{marginTop: 15, paddingLeft: 100, paddingRight: 100}}
                                >
                                    <Item>
                                        <Input
                                            onChangeText={value => this.setState({code: value})}
                                            value={this.state.code}
                                            maxLength={6}
                                            keyboardType={"phone-pad"}
                                            placeholder="******"
                                            style={{textAlign: "center"}}
                                        />
                                    </Item>
                                </View>
                            </View>
                        )}

                        {this.state.get_code === false && this.state.type === "phone" && (
                            <View>
                                <View
                                    style={{marginTop: 30, paddingLeft: 30, paddingRight: 30}}
                                >
                                    <Text
                                        style={{
                                            fontSize: verticalScale(14),
                                            color: "#262626",
                                            fontFamily: "PFBeauSansPro-Regular",
                                            textAlign: "center"
                                        }}
                                    >
                                        На Ваш номер будет направлен код подтверждения, пожалуйста,
                                        введите его для входа в аккаут.
                                    </Text>
                                </View>
                            </View>
                        )}

                        {this.state.get_code === false && this.state.type === "email" && (
                            <View>
                                <View
                                    style={{marginTop: 30, paddingLeft: 30, paddingRight: 30}}
                                >
                                    <Text
                                        style={{
                                            fontSize: verticalScale(14),
                                            color: "#262626",
                                            fontFamily: "PFBeauSansPro-Regular",
                                            textAlign: "center"
                                        }}
                                    >
                                        На Ваш email будет направлен код подтверждения, пожалуйста,
                                        введите его для входа в аккаут.
                                    </Text>
                                </View>
                            </View>
                        )}

                        {this.state.get_code === false ? (
                            <TouchableOpacity
                                onPress={this.get_code}
                                full
                                primary
                                style={[styles.button, {marginTop: 20}]}
                            >
                                <Text uppercase={false} style={styles.button_text}>
                                    Запросить код
                                </Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                onPress={this.auth}
                                full
                                primary
                                style={[styles.button, {marginTop: 20}]}
                            >
                                <Text uppercase={false} style={styles.button_text}>
                                    Войти
                                </Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {
        UserGetData: () => {
            dispatch(UserGetData())
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);