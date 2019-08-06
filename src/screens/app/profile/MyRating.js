import React, {Component} from 'react'
import {connect} from 'react-redux';
import {View, Image, ScrollView, SafeAreaView, TouchableOpacity, BackHandler, Text} from 'react-native';
import Svg, {Path, G, Circle, Rect,} from 'react-native-svg';

import styles from "../../../theme/Style";
import NavigationOptions from "../../../lib/NavigationOptions";
import {verticalScale} from "../../../lib/Scaling";
import styled from "../../../theme/StyleRequisites";
import Style from "../../../theme/Profile";
import StatusBarComp from "../../../components/StatusBarComp";

class ProfileMyRatingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    static navigationOptions = ({navigation}) => NavigationOptions(navigation, {
        title: 'Мой рейтинг',
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
                        <View style={Style.dop_header_history}>

                            <View style={{flexDirection: "row"}}>
                                <Text style={{fontFamily: 'PFBeauSansPro-Regular', fontSize: 16}}>Валюта платежа:</Text>
                                <Text style={{
                                    fontFamily: 'PFBeauSansPro-Regular',
                                    fontWeight: "bold",
                                    color: "#074A5D",
                                    marginLeft: 10,
                                    lineHeight: 20
                                }}>RUB(<Text style={styled.sign}>₽</Text>)</Text>
                            </View>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginTop: 20,
                                marginBottom: 20
                            }}>
                                <Text style={{fontFamily: 'PFBeauSansPro-Bold', fontSize: 16, fontWeight: "bold"}}>Кол-во
                                    выполненных работ:</Text>
                                <Text style={{
                                    fontFamily: 'PFBeauSansPro-Bold',
                                    fontSize: 16,
                                    fontWeight: "bold"
                                }}>2</Text>
                            </View>

                        </View>
                        <View style={[Style.dop_header_history,{marginTop:20,marginBottom:20}]}>
                            <View>
                                <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                                    <View style={{alignItems: "flex-start", justifyContent: "flex-start"}}>
                                        <Text style={Style.text_green_title}> 9 500 ₽</Text>
                                        <Text style={Style.text_pre_title}>Заработок за <Text style={{textDecorationLine: "underline",color:"#074A5D",fontStyle:"italic"}}>июнь</Text></Text>
                                    </View>
                                    <View style={[Style.block_view,]}>

                                        <View style={{position: "relative"}}>
                                            <Text style={{
                                                color: "#45E238",
                                                fontFamily: 'PFBeauSansPro-Bold',
                                            }}>просмотров</Text>
                                            <Text style={{color: "#ffff", position: "relative", textAlign: "right"}}>за
                                                30 дней</Text>
                                        </View>
                                        <View style={{alignItems:"flex-end"}}>
                                            <Text style={[Style.title_view_greens, {position: "relative"}]}>335</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:30,marginBottom:30,}}>
                                    <Text style={{fontSize:12}}>Посмотреть историю платежей</Text>
                                    <Text style={{color: "#074A5D", fontSize: 12}} onPress={() => {
                                        this.props.navigation.navigate('HistoryInnerPay')
                                    }}>подробнее </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{marginTop: 25}}>
                            <Image
                                style={{flex: 1, minHeight: 250}}
                                source={{uri: 'https://cs6.pikabu.ru/post_img/big/2017/07/18/11/1500402856197851899.jpg'}}
                            />
                            {/*<View style={Style.dop_header_history}/>*/}
                            <View>
                                <Text style={Style.name_emplay}>Золотая корона</Text>
                                <View style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginTop: 15
                                }}>
                                    {/*<View style={{flexDirection:"row"}}>*/}
                                    <Text style={Style.fontPriceText}>20.06.19г.</Text>
                                    <View style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}>
                                        <Svg width="14" height="11" viewBox="0 0 14 11" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <Path
                                                d="M13.835 1.08703L4.6725 10.8069C4.55247 10.9356 4.41243 11 4.25239 11C4.09235 11 3.9323 10.9356 3.83228 10.8069L0.151291 6.81595C-0.0687684 6.55847 -0.0487631 6.1508 0.211307 5.91478C0.431366 5.70021 0.771457 5.70021 1.01152 5.91478L4.25239 9.43367L12.9947 0.164393C13.2348 -0.0716298 13.6149 -0.0501731 13.835 0.207307C14.055 0.44333 14.055 0.829549 13.835 1.08703Z"
                                                fill="#074A5D"/>
                                        </Svg>
                                        <Text style={[Style.fontPriceText, {marginLeft: 5}]}>оплата наличными</Text>
                                    </View>
                                    <Text style={Style.price_prof}>4 500 ₽</Text>
                                </View>
                                <View style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginTop: 15,
                                    marginBottom: 15,
                                }}>
                                    <Text style={[Style.fontPriceText]}>Продавец</Text>
                                    <View style={{
                                        flexDirection: "row",
                                        justifyContent: "flex-start",
                                        alignItems: "center"
                                    }}>
                                        <Svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <Path
                                                d="M3.99544 0C1.79704 0 0 1.79704 0 3.99544C0 6.20297 1.79704 8 3.99544 8C6.19384 8 8 6.20297 8 3.99544C8 1.79704 6.20297 0 3.99544 0ZM3.99544 7.5439C2.04333 7.5439 0.4561 5.94755 0.4561 3.99544C0.4561 2.04333 2.04333 0.4561 3.99544 0.4561C5.94755 0.4561 7.53478 2.04333 7.53478 3.99544C7.5439 5.94755 5.94755 7.5439 3.99544 7.5439Z"
                                                fill="#074A5D"/>
                                            <Path
                                                d="M4.22352 1.25876C4.22352 1.15842 4.14142 1.07632 4.04108 1.07632H3.94986C3.84952 1.07632 3.76742 1.15842 3.76742 1.25876V3.76731H1.98863C1.88829 3.76731 1.80619 3.84941 1.80619 3.94975V4.04097C1.80619 4.14132 1.88829 4.22341 1.98863 4.22341H3.77654C3.83128 4.27815 3.91337 4.31463 3.99547 4.31463C4.16879 4.31463 4.31474 4.16868 4.31474 3.99536C4.31474 3.91327 4.27825 3.83117 4.22352 3.77644V1.25876Z"
                                                fill="#074A5D"/>
                                        </Svg>
                                        <View style={{
                                            flexDirection: "row",
                                            justifyContent: "flex-start",
                                            alignItems: "center"
                                        }}>
                                            <Text style={[Style.fontPriceText, {marginLeft: 5}]}>7</Text>
                                            <View>
                                                <Svg width="11" height="5" viewBox="0 0 11 5" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <Path
                                                        d="M8.59286 0.227423C8.49218 0.328099 8.49218 0.491338 8.59286 0.592035L9.7085 1.69728H1.29148L2.40712 0.592035C2.5078 0.491359 2.5078 0.328121 2.40712 0.227423L2.2552 0.0755283C2.15453 -0.0251477 1.99129 -0.0251477 1.89061 0.0755283L0.0755068 1.88022C-0.0251689 1.98089 -0.0251689 2.14413 0.0755068 2.24483L1.89061 4.04952C1.99129 4.1502 2.15453 4.1502 2.2552 4.04952L2.40712 3.89763C2.5078 3.79695 2.5078 3.63371 2.40712 3.53301L1.29148 2.42775H9.70848L8.59284 3.53299C8.49216 3.63367 8.49216 3.79691 8.59284 3.89761L8.74475 4.0495C8.84543 4.15018 9.00867 4.15018 9.10934 4.0495L10.9245 2.24481C11.0251 2.14413 11.0251 1.9809 10.9245 1.8802L9.10934 0.075507C9.00867 -0.025169 8.84543 -0.025169 8.74475 0.075507L8.59286 0.227423Z"
                                                        fill="#074A5D"/>
                                                </Svg>

                                            </View>
                                            <Text style={[Style.fontPriceText, {marginRight: 10}]}>11</Text>
                                        </View>

                                        <Svg width="6" height="8" viewBox="0 0 6 8" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <Path
                                                d="M5.75 0.5H5.8125C5.91605 0.5 6 0.416047 6 0.3125V0.1875C6 0.0839531 5.91605 0 5.8125 0H0.1875C0.0839531 0 0 0.0839531 0 0.1875V0.3125C0 0.416047 0.0839531 0.5 0.1875 0.5H0.25C0.25 1.9347 0.939187 3.52589 2.27572 4C0.934875 4.47564 0.25 6.06995 0.25 7.5H0.1875C0.0839531 7.5 0 7.58395 0 7.6875V7.8125C0 7.91605 0.0839531 8 0.1875 8H5.8125C5.91605 8 6 7.91605 6 7.8125V7.6875C6 7.58395 5.91605 7.5 5.8125 7.5H5.75C5.75 6.0653 5.06081 4.47411 3.72428 4C5.06512 3.52436 5.75 1.93005 5.75 0.5ZM0.75 0.5H5.25C5.25 2.22589 4.24264 3.625 3 3.625C1.75736 3.625 0.75 2.22589 0.75 0.5ZM5.25 7.5H0.75C0.75 5.77411 1.75736 4.375 3 4.375C4.24264 4.375 5.25 5.77411 5.25 7.5ZM4.46283 1.5H1.53717C1.49586 1.5 1.45569 1.48637 1.42292 1.46122C1.39014 1.43607 1.36658 1.4008 1.35589 1.36089C1.34421 1.31722 1.33349 1.27331 1.32372 1.22917C1.29772 1.11164 1.38622 1 1.50659 1H4.49342C4.6138 1 4.7023 1.11164 4.6763 1.22917C4.66653 1.27331 4.6558 1.31722 4.64412 1.36089C4.63343 1.4008 4.60986 1.43606 4.57709 1.46121C4.54431 1.48636 4.50414 1.5 4.46283 1.5ZM4.21344 2.2955C4.17995 2.34238 4.14464 2.38793 4.10759 2.43205C4.07164 2.47483 4.01898 2.49998 3.96309 2.49998H2.03691C1.98103 2.49998 1.92836 2.47483 1.89241 2.43205C1.85537 2.38792 1.82006 2.34237 1.78656 2.2955C1.69817 2.17191 1.78794 2 1.93989 2H4.06011C4.21206 2 4.30181 2.17192 4.21344 2.2955Z"
                                                fill="#074A5D"/>
                                        </Svg>
                                        <Text style={[Style.fontPriceText, {marginLeft: 5}]}>04</Text>
                                    </View>
                                    <View/>
                                    <View>

                                    </View>

                                </View>
                                <View style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                }}>
                                    <View style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}>
                                        <Svg width="11" height="14" viewBox="0 0 11 14" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <Path
                                                d="M5.25 2.625C3.80256 2.625 2.625 3.80256 2.625 5.25C2.625 6.69744 3.80256 7.875 5.25 7.875C6.69744 7.875 7.875 6.69744 7.875 5.25C7.875 3.80256 6.69744 2.625 5.25 2.625ZM5.25 7C4.28504 7 3.5 6.21496 3.5 5.25C3.5 4.28504 4.28504 3.5 5.25 3.5C6.21496 3.5 7 4.28504 7 5.25C7 6.21496 6.21496 7 5.25 7ZM5.25 0C2.3505 0 0 2.3505 0 5.25C0 7.36677 0.737461 7.95788 4.71046 13.7175C4.97115 14.0941 5.52883 14.0942 5.78958 13.7175C9.76254 7.95788 10.5 7.36677 10.5 5.25C10.5 2.3505 8.14951 0 5.25 0ZM5.25 12.9591C1.44115 7.45085 0.875 7.01351 0.875 5.25C0.875 4.08138 1.33008 2.98274 2.15641 2.15641C2.98274 1.33008 4.08138 0.875 5.25 0.875C6.41862 0.875 7.51727 1.33008 8.34359 2.15641C9.16992 2.98274 9.625 4.08138 9.625 5.25C9.625 7.0134 9.05921 7.45036 5.25 12.9591Z"
                                                fill="#074A5D"/>
                                        </Svg>
                                        <Text style={[Style.fontPriceText, {marginLeft: 5}]}>Москва, Щелковское шоссе
                                            100 А</Text>
                                    </View>
                                    <View></View>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMyRatingScreen);