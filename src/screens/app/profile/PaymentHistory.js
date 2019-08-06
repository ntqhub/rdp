import React, {Component} from 'react'
import {connect} from 'react-redux';
import {View, Image, ScrollView, SafeAreaView, TouchableOpacity, BackHandler, Text} from 'react-native';
import Svg, {Path, G, Circle, Rect,} from 'react-native-svg';

import styles from "../../../theme/Style";
import Style from "../../../theme/Profile";
import NavigationOptions from "../../../lib/NavigationOptions";
import {verticalScale} from "../../../lib/Scaling";
import StatusBarComp from "../../../components/StatusBarComp";

class ProfilePaymentHistoryScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    static navigationOptions = ({navigation}) => NavigationOptions(navigation, {
        title: 'История платежей',
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

                <ScrollView>
                    <View style={styles.content_global}>
                        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                            <View>
                                <Svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <Path
                                        d="M11.3854 3.68484L8.10841 3.22723L6.64374 0.382694C6.38131 -0.124337 5.62094 -0.130782 5.35626 0.382694L3.89159 3.22723L0.614589 3.68484C0.0269265 3.76648 -0.208587 4.46043 0.21758 4.85789L2.58842 7.07078L2.02767 10.1968C1.92674 10.7618 2.54804 11.185 3.06842 10.9208L6 9.4448L8.93159 10.9208C9.45196 11.1829 10.0733 10.7618 9.97233 10.1968L9.41158 7.07078L11.7824 4.85789C12.2086 4.46043 11.9731 3.76648 11.3854 3.68484Z"
                                        fill="#074A5D"/>
                                </Svg>

                                <Text style={[Style.textBase, {marginTop: 10}]}>
                                    Общий рейтинг
                                </Text>
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <View style={Style.block_view}>
                                    <View style={{justifyContent: "flex-end"}}>
                                        <Text style={{
                                            color: "#45E238",
                                            fontFamily: 'PFBeauSansPro-Bold',
                                            lineHeight: 15,
                                            fontSize: 16
                                        }}> отлично</Text>
                                        <Text style={{color: "#ffff", lineHeight: 15, fontSize: 12}}>12 отзывов</Text>
                                    </View>
                                    <View style={{alignItems: "center", justifyContent: "flex-end"}}>
                                        <Text style={[Style.title_view_greens, {fontSize: 32}]}>4.8</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{marginTop: 30}}>
                            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                <Text style={[Style.textBase]}>Кол-во выполненых работ</Text>
                                <Text style={[Style.textBase]}>2</Text>
                            </View>
                            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                <View style={{flexDirection: "row", justifyContent: "space-between", width: "70%"}}>
                                    <Text style={[Style.textBaseGreen]}>Отмена бронирований</Text>
                                    <Text style={[Style.textBaseGreen]}>100%</Text>
                                </View>
                                <Text style={[Style.textBase, {marginTop: 15}]}>Супер</Text>
                            </View>
                            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                <View style={{flexDirection: "row", justifyContent: "space-between", width: "70%"}}>
                                    <Text style={[Style.textBaseGreen]}>Опозданий</Text>
                                    <Text style={[Style.textBaseGreen]}>50%</Text>
                                </View>
                                <Text style={[Style.textBase, {marginTop: 15}]}>Хорошо</Text>
                            </View>
                            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                <View style={{flexDirection: "row", justifyContent: "space-between", width: "70%"}}>
                                    <Text style={[Style.textBaseGreen]}>Отзыв не оставлен</Text>
                                    <Text style={[Style.textBaseGreen]}>50%</Text>
                                </View>
                                <Text style={[Style.textBase, {marginTop: 15}]}>Плохо</Text>
                            </View>
                            <View style={[Style.borderBg, {marginTop: 30, marginBottom: 30}]}/>
                            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                <View style={{flexDirection: "row"}}>
                                    <Text>Оценка по </Text>
                                    <Text style={{fontWeight: "bold", marginLeft: 1, marginRight: 2}}>12</Text>
                                    <Text>отзывам</Text>
                                </View>

                                <View style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                }}>
                                    <Text style={{fontSize: 14, color: "#A1AABA"}}>мои отзывы</Text>
                                    <View style={{marginLeft: 5}}>
                                        <Svg width="3" height="7" viewBox="0 0 3 7" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <Path
                                                d="M2.9987 3.46646C2.99205 3.40056 2.96769 3.3384 2.92881 3.28806L0.544091 0.14393C0.520559 0.105794 0.490094 0.0735539 0.454657 0.0492851C0.419219 0.0250163 0.379596 0.00925745 0.33834 0.00302359C0.297083 -0.00321026 0.255108 0.000219142 0.215118 0.0130909C0.175128 0.0259627 0.138009 0.0479914 0.106154 0.077758C0.0742985 0.107525 0.0484123 0.144369 0.0301628 0.185918C0.0119133 0.227467 0.00170516 0.2728 0.000195933 0.318995C-0.0013133 0.365191 0.00590986 0.411225 0.0214001 0.454133C0.0368904 0.49704 0.0603043 0.53587 0.0901336 0.568121L2.31398 3.50006L0.0901336 6.43219C0.0335661 6.49354 0.00126495 6.57731 0.000335914 6.6651C-0.000593121 6.75288 0.0299261 6.83748 0.0851797 6.90028C0.140433 6.96308 0.215895 6.99895 0.294964 6.99998C0.374034 7.00101 0.450234 6.96713 0.506801 6.90578C0.520763 6.89064 0.533372 6.87403 0.544451 6.85618L2.92881 3.71205C2.95464 3.67837 2.97413 3.63929 2.98614 3.59711C2.99814 3.55493 3.00241 3.5105 2.9987 3.46646Z"
                                                fill="#A1AABA"/>
                                        </Svg>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    marginTop: 20
                                }}>
                                    <Text>Качество выполнения работы</Text>
                                    <Text style={{borderBottomWidth: 1, borderStyle: 'dashed'}}></Text>
                                    <Text style={{borderBottomWidth: 1, borderColor: "#282828"}}></Text>
                                    <Text style={{fontWeight: "bold"}}>4.8</Text>
                                </View>
                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    marginTop: 20
                                }}>
                                    <Text>Вежливость</Text>
                                    <Text style={{fontWeight: "bold"}}>4.1</Text>
                                </View>
                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    marginTop: 20
                                }}>
                                    <Text>Адекватность</Text>
                                    <Text style={{fontWeight: "bold"}}>1.1</Text>
                                </View>
                            </View>
                            <View style={[Style.borderBg, {marginTop: 15, marginBottom: 15}]}/>
                            <View style={[Style.flexRow,]}>
                                <Image
                                    source={{uri: 'https://www.jerryacuff.com/wp-content/uploads/2018/01/woman-on-phone-256x256.jpg'}}
                                    style={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: 5,
                                        marginLeft: 10,
                                        justifyContent: "flex-start",
                                        alignItems: "flex-start"
                                    }}
                                />
                                <View style={{paddingRight: 15, paddingLeft: 15, width: 0, flexGrow: 1, flex: 1}}>
                                    <Text style={{fontFamily: 'PFBeauSansPro-Regular', fontSize: 12,}}>10.06.19г</Text>
                                    <Text style={{
                                        fontWeight: "bold",
                                        fontSize: 16,
                                        marginTop: 5,
                                        fontFamily: 'PFBeauSansPro-Regular',
                                    }}>Люда</Text>
                                    {/*<View style={{width:0,flexGrow:1,flex:1}}>*/}
                                    <Text style={{fontSize: 14, color: "#a1aaba", marginTop: 7}}>
                                        Людмила Работал в компании 3 раза, ребята очень вежливые, есть бесплатное
                                        питание, и все необходимые условия труда.
                                    </Text>
                                    {/*</View>*/}
                                </View>
                            </View>
                            <View style={[Style.borderBg, {marginTop: 15, marginBottom: 15}]}/>
                            <View style={[Style.flexRow,]}>
                                <Image
                                    source={{uri: 'https://www.jerryacuff.com/wp-content/uploads/2018/01/woman-on-phone-256x256.jpg'}}
                                    style={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: 5,
                                        marginLeft: 10,
                                        justifyContent: "flex-start",
                                        alignItems: "flex-start"
                                    }}
                                />
                                <View style={{paddingRight: 15, paddingLeft: 15, width: 0, flexGrow: 1, flex: 1}}>
                                    <Text style={{fontFamily: 'PFBeauSansPro-Regular', fontSize: 12,}}>10.06.19г</Text>
                                    <Text style={{
                                        fontWeight: "bold",
                                        fontSize: 16,
                                        marginTop: 5,
                                        fontFamily: 'PFBeauSansPro-Regular',
                                    }}>Люда</Text>
                                    {/*<View style={{width:0,flexGrow:1,flex:1}}>*/}
                                    <Text style={{fontSize: 14, color: "#a1aaba", marginTop: 7}}>
                                        Людмила Работал в компании 3 раза, ребята очень вежливые, есть бесплатное
                                        питание, и все необходимые условия труда.
                                    </Text>
                                    {/*</View>*/}
                                </View>
                            </View>
                        </View>
                    </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePaymentHistoryScreen);