import React, {Component} from 'react'
import {connect} from 'react-redux';
import {View, Image, ScrollView, SafeAreaView, BackHandler} from 'react-native';
import {Text, Left, Right, Item, Label, Input} from 'native-base';
import Svg, {Path, G, Circle, Rect,} from 'react-native-svg';

import styles from "../../../theme/Style";
import NavigationOptions from "../../../lib/NavigationOptions";
import {verticalScale} from "../../../lib/Scaling";
import CacheImage from "../../../components/CacheImage";
import Style from "../../../theme/Profile";
import StatusBarComp from "../../../components/StatusBarComp";

class ProfileEditMainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static navigationOptions = ({navigation}) => NavigationOptions(navigation, {
        title: 'Редактирование профиля',
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
        return (
            <SafeAreaView style={styles.container_global}>
                <StatusBarComp/>

                <ScrollView>

                    <View style={[Style.dop_block, {
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start"
                    }]}>
                        {/*<View>*/}
                        {/*    <Image*/}
                        {/*        source={{uri: 'https://dezinfo.net/images5/image/11.2014/magneto_boy/magneto_boy_04.jpg'}}*/}
                        {/*        style={{width: 100, height: 100, borderRadius: 100, marginRight: 20,}}*/}
                        {/*    />*/}
                        {/*</View>*/}
                        <CacheImage style={{width: 100, height: 100, borderRadius: 5, marginRight: 20,}}
                                    uri={this.props.avatar}/>

                        <View style={{justifyContent: "flex-start"}}>
                            <View>
                                <View
                                    style={{flexDirection: "row", alignItems: "center", justifyContent: "flex-start"}}>
                                    <Text style={{marginRight: 40, color: "#074A5D"}}>Заменить фотографию </Text>
                                    <Svg width="16" height="14" viewBox="0 0 16 14" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <Path
                                            d="M10.1344 1C10.2375 1 10.3312 1.06562 10.3687 1.1625L11.0594 3H14.5C14.775 3 15 3.225 15 3.5V12.5C15 12.775 14.775 13 14.5 13H1.5C1.225 13 1 12.775 1 12.5V3.5C1 3.225 1.225 3 1.5 3H4.94375L5.57188 1.325C5.64375 1.13125 5.83125 1 6.04063 1H10.1344V1ZM10.1344 0H6.04063C5.41563 0 4.85625 0.3875 4.6375 0.971875L4.25 2H1.5C0.671875 2 0 2.67188 0 3.5V12.5C0 13.3281 0.671875 14 1.5 14H14.5C15.3281 14 16 13.3281 16 12.5V3.5C16 2.67188 15.3281 2 14.5 2H11.75L11.3031 0.8125C11.1219 0.321875 10.6562 0 10.1344 0V0ZM8 11.75C5.93125 11.75 4.25 10.0687 4.25 8C4.25 5.93125 5.93125 4.25 8 4.25C10.0687 4.25 11.75 5.93125 11.75 8C11.75 10.0687 10.0687 11.75 8 11.75ZM8 5.25C6.48438 5.25 5.25 6.48438 5.25 8C5.25 9.51562 6.48438 10.75 8 10.75C9.51562 10.75 10.75 9.51562 10.75 8C10.75 6.48438 9.51562 5.25 8 5.25Z"
                                            fill="#074A5D"/>
                                    </Svg>
                                </View>
                            </View>
                            <View>
                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginTop: 22,
                                    justifyContent: "space-between"
                                }}>
                                    <Text style={{marginRight: 40, color: "#074A5D"}}>Удалить фотографию </Text>
                                    <Svg width="11" height="14" viewBox="0 0 11 14" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <Path
                                            d="M7.77134 14H2.96659C1.96752 14 1.15248 13.1981 1.15248 12.2152V4.02211C1.15248 3.80871 1.32995 3.63411 1.54685 3.63411C1.76376 3.63411 1.94122 3.80871 1.94122 4.02211V12.2217C1.94122 12.7778 2.40132 13.2305 2.96659 13.2305H7.77134C8.33661 13.2305 8.79671 12.7778 8.79671 12.2217V4.02211C8.79671 3.80871 8.97418 3.63411 9.19108 3.63411C9.40798 3.63411 9.58545 3.80871 9.58545 4.02211V12.2217C9.57888 13.2046 8.77042 14 7.77134 14Z"
                                            fill="#074A5D"/>
                                        <Path
                                            d="M4.05118 12.0666C3.83428 12.0666 3.65681 11.892 3.65681 11.6786V3.91869C3.65681 3.7053 3.83428 3.5307 4.05118 3.5307C4.26808 3.5307 4.44555 3.7053 4.44555 3.91869V11.6786C4.44555 11.892 4.26808 12.0666 4.05118 12.0666Z"
                                            fill="#074A5D"/>
                                        <Path
                                            d="M6.94323 12.0666C6.72633 12.0666 6.54886 11.892 6.54886 11.6786V3.91869C6.54886 3.7053 6.72633 3.5307 6.94323 3.5307C7.16014 3.5307 7.33761 3.7053 7.33761 3.91869V11.6786C7.33761 11.892 7.16014 12.0666 6.94323 12.0666Z"
                                            fill="#074A5D"/>
                                        <Path
                                            d="M10.7092 2.35383C10.6435 2.33443 9.38152 1.99817 7.40967 1.84297C7.31765 0.80832 6.43689 0 5.36551 0C4.28756 0 3.40023 0.821253 3.32136 1.86237C1.48096 2.02403 0.350426 2.34089 0.284697 2.36029C0.0743661 2.41849 -0.0439452 2.63189 0.0152104 2.83882C0.0743661 3.04575 0.297843 3.16215 0.501601 3.10395C0.52132 3.09748 2.50632 2.54782 5.45096 2.54782C8.3956 2.54782 10.4792 3.09748 10.4989 3.10395C10.5318 3.11688 10.5712 3.11688 10.6041 3.11688C10.775 3.11688 10.9327 3.00048 10.9853 2.83235C11.0445 2.62542 10.9196 2.41203 10.7092 2.35383ZM5.45753 1.76537C4.99086 1.76537 4.54391 1.7783 4.12324 1.7977C4.22841 1.21571 4.74109 0.76952 5.36551 0.76952C5.98336 0.76952 6.50262 1.20925 6.60778 1.79124C6.24627 1.7783 5.85848 1.76537 5.45753 1.76537Z"
                                            fill="#074A5D"/>
                                    </Svg>

                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[Style.dop_block,]}>
                        <Item>
                            <Label style={styles.item_float_label}>Имя</Label>
                            <Input autoCapitalize="sentences" autoCorrect={false}
                                   style={{color: '#262626', fontFamily: 'PFBeauSansPro-Regular'}}/>
                        </Item>
                        <Item>
                            <Label style={styles.item_float_label}>Фамилия</Label>
                            <Input autoCapitalize="sentences" autoCorrect={false}
                                   style={{color: '#262626', fontFamily: 'PFBeauSansPro-Regular'}}/>
                        </Item>
                    </View>

                    <View style={[Style.dop_block,]}>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 20,
                        }}>
                            <Text style={{
                                fontSize: verticalScale(18),
                                fontWeight: "bold",
                                color: "#262626",
                                fontFamily: 'PFBeauSansPro-Bold',
                                lineHeight: 19,
                            }}>Обо мне</Text>
                            <Svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <Path
                                    d="M15.309 1.71773L14.2341 0.636912C13.3895 -0.212304 11.9308 -0.212304 11.0862 0.636912L1.56569 10.2099C1.48891 10.2871 1.48891 10.3643 1.41213 10.4415L0.0301205 15.3824C-0.0466578 15.5368 0.0301205 15.7684 0.183677 15.8456C0.260455 15.9228 0.414012 16 0.567568 16C0.644347 16 0.644347 16 0.721125 16L5.63493 14.6104C5.71171 14.6104 5.78849 14.5332 5.86527 14.456L15.309 4.96019C15.7697 4.49698 16 3.95657 16 3.33896C16 2.72135 15.7697 2.18094 15.309 1.71773ZM5.17426 13.684L1.25857 14.842L2.41025 10.8275L10.0881 3.10736L12.9289 5.96381L5.17426 13.684ZM14.618 4.18818L13.5431 5.269L10.7023 2.41255L11.7772 1.33173C12.2379 0.868516 13.0824 0.868516 13.5431 1.33173L14.618 2.41255C14.8483 2.64415 15.0019 2.95296 15.0019 3.26176C15.0019 3.64777 14.8483 3.95657 14.618 4.18818Z"
                                    fill="#074A5D"/>
                            </Svg>

                        </View>
                        <Text style={{
                            fontFamily: 'PFBeauSansPro-Regular',
                            fontSize: verticalScale(16),
                            color: "#262626",
                            lineHeight: 19,
                        }}>
                            Здравствуйте, меня зовут Том, с 2010 года занимаюсь профессионально продажами ювелирной
                            продукции специализируюсь на разных штуках...
                        </Text>
                        <View>
                            <Item>
                                <Label style={styles.item_float_label}>город</Label>
                                <Input autoCapitalize="sentences" autoCorrect={false}
                                       style={{color: '#262626', fontFamily: 'PFBeauSansPro-Regular'}}/>
                            </Item>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: 20,
                                marginTop: 20,
                            }}>
                                <Text style={{
                                    fontSize: verticalScale(18),
                                    fontWeight: "bold",
                                    color: "#262626",
                                    fontFamily: 'PFBeauSansPro-Bold',
                                    lineHeight: 19,
                                }}>Личные сведения</Text>
                            </View>
                            <Item>
                                <Label style={styles.item_float_label}>Пол</Label>
                                <Input autoCapitalize="sentences" autoCorrect={false}
                                       style={{color: '#262626', fontFamily: 'PFBeauSansPro-Regular'}}/>
                            </Item>
                            <Item>
                                <Label style={styles.item_float_label}>Дата рождения</Label>
                                <Input autoCapitalize="sentences" autoCorrect={false}
                                       style={{color: '#262626', fontFamily: 'PFBeauSansPro-Regular'}}/>
                            </Item>
                        </View>
                        <View>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: 20,
                                marginTop: 20,
                            }}>
                                <Text style={{
                                    fontSize: verticalScale(18),
                                    fontWeight: "bold",
                                    color: "#262626",
                                    fontFamily: 'PFBeauSansPro-Bold',
                                    lineHeight: 19,
                                }}>Контактные данные</Text>
                            </View>
                            <Item>
                                <Label style={styles.item_float_label}>Email</Label>
                                <Input autoCapitalize="sentences" autoCorrect={false}
                                       style={{color: '#262626', fontFamily: 'PFBeauSansPro-Regular'}}/>
                            </Item>
                            <Item>
                                <Label style={styles.item_float_label}>Ваш телефон</Label>
                                <Input autoCapitalize="sentences" autoCorrect={false}
                                       style={{color: '#262626', fontFamily: 'PFBeauSansPro-Regular'}}/>
                            </Item>
                            {/*Listx*/}
                            <View>
                                {/*<List>*/}
                                <Item style={{paddingTop: 10, paddingBottom: 13, color: "#074A5D"}} onPress={() => {
                                    this.props.navigation.navigate('ProfileMyRatingScreen')
                                }}>
                                    <Left>
                                        <Text style={{
                                            color: "#074A5D",
                                            fontSize: verticalScale(16),
                                            fontFamily: 'PFBeauSansPro-Regular',
                                        }}>История работ</Text>
                                    </Left>
                                    <Right>
                                        <Svg width="6" height="12" viewBox="0 0 6 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <Path opacity="0.8"
                                                  d="M5.9974 6.0575C5.98409 6.17048 5.93539 6.27703 5.85761 6.36332L1.08818 11.7533C1.04112 11.8186 0.980188 11.8739 0.909313 11.9155C0.838439 11.9571 0.759193 11.9841 0.67668 11.9948C0.594167 12.0055 0.510216 11.9996 0.430236 11.9776C0.350255 11.9555 0.276019 11.9177 0.212308 11.8667C0.148597 11.8157 0.0968247 11.7525 0.0603256 11.6813C0.0238266 11.6101 0.00341029 11.5323 0.000391819 11.4532C-0.00262665 11.374 0.0118197 11.295 0.0428002 11.2215C0.0737807 11.1479 0.120608 11.0814 0.180267 11.0261L4.62797 5.9999L0.180266 0.973386C0.0671313 0.868226 0.00252892 0.724606 0.000670839 0.574119C-0.00118725 0.423632 0.0598512 0.278605 0.170358 0.170945C0.280866 0.0632848 0.431789 0.00180813 0.589928 4.00023e-05C0.748067 -0.00172812 0.900467 0.0563573 1.0136 0.161518C1.04153 0.187481 1.06674 0.215957 1.0889 0.246545L5.85761 5.63648C5.90928 5.69422 5.94827 5.76122 5.97228 5.83353C5.99629 5.90584 6.00483 5.982 5.9974 6.0575Z"
                                                  fill="#074A5D"/>
                                        </Svg>
                                    </Right>
                                </Item>
                                <Item style={{paddingTop: 10, paddingBottom: 13, color: "#074A5D"}} onPress={() => {
                                    this.props.navigation.navigate('ProfilePaymentHistoryScreen')
                                }}>
                                    <Left>
                                        <Text style={{
                                            color: "#074A5D",
                                            fontSize: verticalScale(16),
                                            fontFamily: 'PFBeauSansPro-Regular',
                                        }}>Мой рейтинг</Text>
                                    </Left>
                                    <Right>
                                        <Svg width="6" height="12" viewBox="0 0 6 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <Path opacity="0.8"
                                                  d="M5.9974 6.0575C5.98409 6.17048 5.93539 6.27703 5.85761 6.36332L1.08818 11.7533C1.04112 11.8186 0.980188 11.8739 0.909313 11.9155C0.838439 11.9571 0.759193 11.9841 0.67668 11.9948C0.594167 12.0055 0.510216 11.9996 0.430236 11.9776C0.350255 11.9555 0.276019 11.9177 0.212308 11.8667C0.148597 11.8157 0.0968247 11.7525 0.0603256 11.6813C0.0238266 11.6101 0.00341029 11.5323 0.000391819 11.4532C-0.00262665 11.374 0.0118197 11.295 0.0428002 11.2215C0.0737807 11.1479 0.120608 11.0814 0.180267 11.0261L4.62797 5.9999L0.180266 0.973386C0.0671313 0.868226 0.00252892 0.724606 0.000670839 0.574119C-0.00118725 0.423632 0.0598512 0.278605 0.170358 0.170945C0.280866 0.0632848 0.431789 0.00180813 0.589928 4.00023e-05C0.748067 -0.00172812 0.900467 0.0563573 1.0136 0.161518C1.04153 0.187481 1.06674 0.215957 1.0889 0.246545L5.85761 5.63648C5.90928 5.69422 5.94827 5.76122 5.97228 5.83353C5.99629 5.90584 6.00483 5.982 5.9974 6.0575Z"
                                                  fill="#074A5D"/>
                                        </Svg>
                                    </Right>
                                </Item>
                                <Item style={{paddingTop: 10, paddingBottom: 13, color: "#074A5D"}} onPress={() => {
                                    this.props.navigation.navigate('ProfileRequisitesScreen')
                                }}>
                                    <Left>
                                        <Text style={{
                                            color: "#074A5D",
                                            fontSize: verticalScale(16),
                                            fontFamily: 'PFBeauSansPro-Regular',
                                        }}>Реквизиты для оплаты</Text>
                                    </Left>
                                    <Right>
                                        <Svg width="6" height="12" viewBox="0 0 6 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <Path opacity="0.8"
                                                  d="M5.9974 6.0575C5.98409 6.17048 5.93539 6.27703 5.85761 6.36332L1.08818 11.7533C1.04112 11.8186 0.980188 11.8739 0.909313 11.9155C0.838439 11.9571 0.759193 11.9841 0.67668 11.9948C0.594167 12.0055 0.510216 11.9996 0.430236 11.9776C0.350255 11.9555 0.276019 11.9177 0.212308 11.8667C0.148597 11.8157 0.0968247 11.7525 0.0603256 11.6813C0.0238266 11.6101 0.00341029 11.5323 0.000391819 11.4532C-0.00262665 11.374 0.0118197 11.295 0.0428002 11.2215C0.0737807 11.1479 0.120608 11.0814 0.180267 11.0261L4.62797 5.9999L0.180266 0.973386C0.0671313 0.868226 0.00252892 0.724606 0.000670839 0.574119C-0.00118725 0.423632 0.0598512 0.278605 0.170358 0.170945C0.280866 0.0632848 0.431789 0.00180813 0.589928 4.00023e-05C0.748067 -0.00172812 0.900467 0.0563573 1.0136 0.161518C1.04153 0.187481 1.06674 0.215957 1.0889 0.246545L5.85761 5.63648C5.90928 5.69422 5.94827 5.76122 5.97228 5.83353C5.99629 5.90584 6.00483 5.982 5.9974 6.0575Z"
                                                  fill="#074A5D"/>
                                        </Svg>
                                    </Right>
                                </Item>
                                {/*</List>*/}
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
        avatar: state.User.avatar,
    }
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditMainScreen);