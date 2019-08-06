import React, {Component} from 'react'
import {connect} from "react-redux";
import {SafeAreaView, View, Text, ScrollView, ImageBackground, TouchableOpacity,Image,Button} from 'react-native';
import {withNavigationFocus} from "react-navigation";

import NavigationOptions from "../../../lib/NavigationOptions";
import axios from '../../../lib/Axios';
import styles from "../../../theme/Style";
import {verticalScale} from "../../../lib/Scaling";
import StatusBarComp from "../../../components/StatusBarComp";
import SearchBlock from "../../../components/search/SearchBlock";
import Swiper from "react-native-swiper";
import CacheImage from "../../../components/CacheImage";
import SvgHeartSelect from "../../../assets/svg/SvgHeartSelect";
import SvgHeart from "../../../assets/svg/SvgHeart";
import Style from "../../../theme/Profile";
import Svg, {Path, G} from 'react-native-svg';
// import console = require('console');
// import {InnerSearchBlock} from '../../../reducers/innerSearchBlock/index';


class CompanyIndexScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        select_image: 0,
            item:{
                photo:["https://www.vladmuz.ru/travel_photos/crimea/11-big.jpg","https://tuhub.ru/sites/default/files/2018-02/1-B6I9Z__mLkkiSShRLR4iQ.png"]
            },
            favoritesList:true, 
            is_favorites: 1,
            positionC: "",
            commentC:"",
        };
    }
    static defaultProps = {
        favoritesList: false,
    };

    static navigationOptions = ({navigation}) => NavigationOptions(navigation, {
        title: 'О компании',
        margin_top: false,
    });

    componentWillMount() {
        this.getData();

    }
    getData = () => {
        axios.get('/v1/company_vacancy.c_vacancy', {
            params: {
                id: this.props.ids
            }
            
        })
            .then(response => {
              
                console.log(response.content[0]);
                const {position,comment} = response.content[0];
                this.setState({
                    positionC: position,
                    commentC:comment,
                })
            })
            .catch(
                console.log("errr")
            )
    };

    render() {
       
        return (
            <SafeAreaView style={styles.container_global}>
                <StatusBarComp/>

                <ScrollView>
                    <View style={{flex: 1, height: 164,}}>
                        <Swiper
                            style={{
                                borderTopLeftRadius: 5,
                                borderTopRightRadius: 5,
                            }}
                            loop={false}
                            showsButtons={false}
                            showsPagination={false}
                            onIndexChanged={(value) => {
                                this.setState(prevState => {
                                    prevState.select_image = value + 1;
                                    return {select_image: prevState.select_image}
                                })
                            }}
                        >
                            {this.state.item.photo.map((photo, key) =>
                                <CacheImage key={key} style={{
                                    overflow: 'hidden',
                                    borderTopLeftRadius: 5,
                                    borderTopRightRadius: 5,
                                    height: 164,
                                }} resizeMode='cover' uri={photo}/>

                            )}
                        </Swiper>



                        <View style={{position: 'absolute', bottom: 10, right: 15,}}>
                            <View style={{
                                backgroundColor: 'rgba(7, 74, 93, 0.8)',
                                borderRadius: 3,
                                padding: 5
                            }}>
                                <Text style={{
                                    fontSize: verticalScale(12),
                                    color: '#FFFFFF',
                                    fontFamily: 'PFBeauSansPro-Regular'
                                }}>{(this.state.select_image === 0) ? '01' : (this.state.select_image < 10 ? '0' : '') + this.state.select_image}/{(this.state.item.photo.length < 10 ? '0' : '') + this.state.item.photo.length}</Text>
                            </View>
                        </View>

                        {/*</ImageBackground>*/}
                    </View>
                    {/*content*/}
                    <View style={styles.content_global} >
                        <View style={{flexDirection:"row", justifyContent:"space-between",marginTop: 105}}>
                            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                                <View style={{alignItems: "flex-start", justifyContent: "flex-start"}}>
                                    <Text style={Style.text_green_title}> 9 500 ₽</Text>
                                    <Text style={[Style.text_pre_title,{color:"#262626"}]}> Пн. 11 июля </Text>
                                </View>
                            </View>
                            {/*4.8*/}
                            <View style={{flexDirection: "row"}}>
                                <View style={{
                                    display:"flex",
                                    flexDirection:"row",
                                    alignItems:"center",
                                    backgroundColor:"#074A5D",
                                    paddingBottom: 7,
                                    paddingTop: 7,
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    borderRadius:4,
                                }}>
                                    <View style={{justifyContent: "flex-end"}}>
                                        <Text
                                            style={{
                                                color: "#45E238",
                                                fontFamily: "PFBeauSansPro-Bold",
                                                lineHeight: 15,
                                                fontSize: 16
                                            }}
                                        >
                                            отлично
                                        </Text>
                                        <Text
                                            style={{color: "#ffff", lineHeight: 15, fontSize: 12}}
                                        >
                                            12 отзывов
                                        </Text>
                                    </View>
                                    <View
                                        style={{alignItems: "center", justifyContent: "flex-end"}}
                                    >
                                        <Text style={[Style.title_view_greens, {fontSize: 32}]}>
                                            4.8
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.content_global} >
                        <Text style={{
                            fontFamily: 'PFBeauSansPro-Bold',
                            fontSize: verticalScale(18),
                            color:"#262626"
                        }}>{this.state.positionC}</Text>
                        <View>
                        <Text style={{
                            fontFamily: 'PFBeauSansPro-Regular',
                            fontSize: verticalScale(16),
                            lineHeight:22,
                            color:"#262626"
                        }}>
                            {this.state.commentC}
                        </Text>
                        <View style={{
                            color:"#074A5D",
                            flex:1,
                            flexDirection:"row",
                            alignItems:"center",
                            justifyContent:"flex-end"
                        }}>
                            <Text style={{marginRight:5,color:"#074A5D",}}>подробнее</Text>
                            <View style={{marginTop:1,color:"#074A5D"}}>
                                <Svg width="3" height="7" viewBox="0 0 3 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M2.9987 3.46743C2.99205 3.40153 2.96769 3.33937 2.92881 3.28904L0.544091 0.144907C0.520559 0.106771 0.490094 0.0745305 0.454657 0.0502617C0.419219 0.0259929 0.379596 0.010234 0.33834 0.00400015C0.297083 -0.0022337 0.255108 0.0011957 0.215118 0.0140675C0.175128 0.0269392 0.138009 0.0489679 0.106154 0.0787346C0.0742985 0.108501 0.0484123 0.145346 0.0301628 0.186895C0.0119133 0.228444 0.00170516 0.273776 0.000195933 0.319972C-0.0013133 0.366167 0.00590986 0.412201 0.0214001 0.455109C0.0368904 0.498017 0.0603043 0.536847 0.0901336 0.569097L2.31398 3.50103L0.0901336 6.43317C0.0335661 6.49451 0.00126495 6.57829 0.000335914 6.66607C-0.000593121 6.75386 0.0299261 6.83846 0.0851797 6.90126C0.140433 6.96406 0.215895 6.99992 0.294964 7.00095C0.374034 7.00199 0.450234 6.9681 0.506801 6.90676C0.520763 6.89161 0.533372 6.875 0.544451 6.85716L2.92881 3.71303C2.95464 3.67935 2.97413 3.64026 2.98614 3.59808C2.99814 3.5559 3.00241 3.51148 2.9987 3.46743Z" fill="#074A5D"/>
                                </Svg>
                            </View>
                        </View>
                        </View>
                    </View>
                    <View style={styles.content_global} >
                    <View style={{flexDirection:"row",justifyContent:"flex-start"}}>
                        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                            <View style={{alignItems:"flex-end"}}>
                                <Text style={{
                                    fontFamily: 'PFBeauSansPro-Bold',
                                    fontSize: verticalScale(16),
                                    marginBottom:7,
                                    color:"#262626"
                                }}>Начало</Text>
                                <View style={{flexDirection:"row",justifyContent:"flex-end"}}>
                                    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M6.99202 0.000976562C3.14481 0.000976562 0 3.14579 0 6.99299C0 10.8562 3.14481 14.001 6.99202 14.001C10.8392 14.001 14 10.8562 14 6.99299C14 3.14579 10.8552 0.000976563 6.99202 0.000976562ZM6.99202 13.2028C3.57583 13.2028 0.798176 10.4092 0.798176 6.99299C0.798176 3.5768 3.57583 0.799152 6.99202 0.799152C10.4082 0.799152 13.1859 3.5768 13.1859 6.99299C13.2018 10.4092 10.4082 13.2028 6.99202 13.2028Z" fill="#074A5D"/>
                                        <Path d="M7.39116 2.20381C7.39116 2.02821 7.24749 1.88454 7.07189 1.88454H6.91226C6.73666 1.88454 6.59299 2.02821 6.59299 2.20381V6.59378H3.4801C3.3045 6.59378 3.16083 6.73745 3.16083 6.91305V7.07268C3.16083 7.24828 3.3045 7.39195 3.4801 7.39195H6.60895C6.70473 7.48773 6.8484 7.55159 6.99208 7.55159C7.29538 7.55159 7.5508 7.29617 7.5508 6.99286C7.5508 6.84919 7.48695 6.70552 7.39116 6.60974V2.20381Z" fill="#074A5D"/>
                                    </Svg>
                                    <Text style={{
                                        fontFamily: 'PFBeauSansPro-Regular',
                                        fontSize: verticalScale(16),
                                        marginLeft:10,
                                        color:"#262626"
                                    }}>11 : 00</Text>
                                </View>
                            </View>
{/*block2*/}
                            <View style={{
                                marginLeft:16,
                                marginRight:16,
                                alignItems:"center",
                                justifyContent:"center"
                            }}>
                                <Svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M10.9364 0.290425C10.8083 0.418558 10.8083 0.626317 10.9364 0.754478L12.3563 2.16116H1.64371L3.06361 0.754478C3.19175 0.626344 3.19175 0.418586 3.06361 0.290425L2.87027 0.0971037C2.74213 -0.0310297 2.53438 -0.0310297 2.40624 0.0971037L0.0960998 2.39399C-0.0320333 2.52212 -0.0320333 2.72988 0.0960998 2.85804L2.40624 5.15493C2.53438 5.28306 2.74213 5.28306 2.87027 5.15493L3.06361 4.9616C3.19175 4.83347 3.19175 4.62571 3.06361 4.49755L1.64371 3.09085H12.3563L10.9364 4.49752C10.8082 4.62566 10.8082 4.83342 10.9364 4.96158L11.1297 5.1549C11.2578 5.28303 11.4656 5.28303 11.5937 5.1549L13.9039 2.85801C14.032 2.72988 14.032 2.52212 13.9039 2.39396L11.5937 0.0970766C11.4656 -0.0310568 11.2578 -0.0310568 11.1297 0.0970766L10.9364 0.290425Z" fill="#074A5D"/>
                                </Svg>
                            </View>

                                <View style={{alignItems:"flex-end"}}>
                                    <Text style={{
                                        fontFamily: 'PFBeauSansPro-Bold',
                                        fontSize: verticalScale(16),
                                        marginBottom:7,
                                        color:"#262626"
                                    }}>Конец</Text>
                                    <View style={{flexDirection:"row",justifyContent:"flex-end"}}>
                                        <Svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M6.99202 0.000976562C3.14481 0.000976562 0 3.14579 0 6.99299C0 10.8562 3.14481 14.001 6.99202 14.001C10.8392 14.001 14 10.8562 14 6.99299C14 3.14579 10.8552 0.000976563 6.99202 0.000976562ZM6.99202 13.2028C3.57583 13.2028 0.798176 10.4092 0.798176 6.99299C0.798176 3.5768 3.57583 0.799152 6.99202 0.799152C10.4082 0.799152 13.1859 3.5768 13.1859 6.99299C13.2018 10.4092 10.4082 13.2028 6.99202 13.2028Z" fill="#074A5D"/>
                                            <Path d="M7.39116 2.20381C7.39116 2.02821 7.24749 1.88454 7.07189 1.88454H6.91226C6.73666 1.88454 6.59299 2.02821 6.59299 2.20381V6.59378H3.4801C3.3045 6.59378 3.16083 6.73745 3.16083 6.91305V7.07268C3.16083 7.24828 3.3045 7.39195 3.4801 7.39195H6.60895C6.70473 7.48773 6.8484 7.55159 6.99208 7.55159C7.29538 7.55159 7.5508 7.29617 7.5508 6.99286C7.5508 6.84919 7.48695 6.70552 7.39116 6.60974V2.20381Z" fill="#074A5D"/>
                                        </Svg>
                                        <Text style={{
                                            fontFamily: 'PFBeauSansPro-Regular',
                                            fontSize: verticalScale(16),
                                            marginLeft:10,
                                            color:"#262626"
                                        }}>21 : 00</Text>
                                    </View>
                                </View>


                        </View>
                        <View style={{alignItems:"flex-end",marginLeft:50,}}>
                            <Text style={{
                                fontFamily: 'PFBeauSansPro-Bold',
                                fontSize: verticalScale(16),
                                marginBottom:7,
                                color:"#262626"
                            }}>Итого</Text>
                            <View style={{flexDirection:"row",justifyContent:"flex-end"}}>
                                <Svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M10.5417 0.875977H10.6562C10.8461 0.875977 11 0.729059 11 0.547852V0.329102C11 0.147895 10.8461 0.000976562 10.6562 0.000976562H0.34375C0.153914 0.000976562 0 0.147895 0 0.329102V0.547852C0 0.729059 0.153914 0.875977 0.34375 0.875977H0.458333C0.458333 3.38671 1.72184 6.17129 4.17215 7.00098C1.71394 7.83335 0.458333 10.6234 0.458333 13.126H0.34375C0.153914 13.126 0 13.2729 0 13.4541V13.6729C0 13.8541 0.153914 14.001 0.34375 14.001H10.6562C10.8461 14.001 11 13.8541 11 13.6729V13.4541C11 13.2729 10.8461 13.126 10.6562 13.126H10.5417C10.5417 10.6152 9.27816 7.83067 6.82785 7.00098C9.28606 6.16861 10.5417 3.37856 10.5417 0.875977ZM1.375 0.875977H9.625C9.625 3.89629 7.77817 6.34473 5.5 6.34473C3.22183 6.34473 1.375 3.89629 1.375 0.875977ZM9.625 13.126H1.375C1.375 10.1057 3.22183 7.65723 5.5 7.65723C7.77817 7.65723 9.625 10.1057 9.625 13.126ZM8.18185 2.62598H2.81815C2.7424 2.62598 2.66877 2.60213 2.60868 2.55811C2.54859 2.51409 2.50539 2.45238 2.4858 2.38254C2.46439 2.30612 2.44472 2.22926 2.42682 2.15203C2.37915 1.94635 2.5414 1.75098 2.76209 1.75098H8.23794C8.45863 1.75098 8.62088 1.94635 8.57321 2.15203C8.5553 2.22926 8.53564 2.30612 8.51423 2.38254C8.49462 2.45237 8.45142 2.51409 8.39132 2.5581C8.33123 2.60212 8.2576 2.62597 8.18185 2.62598ZM7.72464 4.0181C7.66324 4.10013 7.5985 4.17985 7.53059 4.25706C7.46467 4.33193 7.36814 4.37595 7.26567 4.37595H3.73433C3.63189 4.37595 3.53533 4.33193 3.46941 4.25706C3.40151 4.17984 3.33678 4.10012 3.27536 4.0181C3.11332 3.80181 3.27789 3.50098 3.55647 3.50098H7.44353C7.72211 3.50098 7.88666 3.80184 7.72464 4.0181Z" fill="#074A5D"/>
                                </Svg>

                                <Text style={{
                                    fontFamily: 'PFBeauSansPro-Regular',
                                    fontSize: verticalScale(16),
                                    marginLeft:10,
                                    color:"#262626"
                                }}>11 : 00</Text>
                            </View>
                        </View>
                    </View>
                    </View>
                {/*    Metro*/}
                    <View style={styles.content_global} >
                        <View style={{
                            flexDirection:"row",alignItems:"center"
                        }}>
                        <Svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M5.25 2.62598C3.80256 2.62598 2.625 3.80354 2.625 5.25098C2.625 6.69842 3.80256 7.87598 5.25 7.87598C6.69744 7.87598 7.875 6.69842 7.875 5.25098C7.875 3.80354 6.69744 2.62598 5.25 2.62598ZM5.25 7.00098C4.28504 7.00098 3.5 6.21594 3.5 5.25098C3.5 4.28602 4.28504 3.50098 5.25 3.50098C6.21496 3.50098 7 4.28602 7 5.25098C7 6.21594 6.21496 7.00098 5.25 7.00098ZM5.25 0.000976562C2.3505 0.000976562 0 2.35147 0 5.25098C0 7.36774 0.737461 7.95886 4.71046 13.7185C4.97115 14.0951 5.52883 14.0952 5.78958 13.7185C9.76254 7.95886 10.5 7.36774 10.5 5.25098C10.5 2.35147 8.14951 0.000976562 5.25 0.000976562ZM5.25 12.96C1.44115 7.45182 0.875 7.01449 0.875 5.25098C0.875 4.08236 1.33008 2.98372 2.15641 2.15739C2.98274 1.33106 4.08138 0.875977 5.25 0.875977C6.41862 0.875977 7.51727 1.33106 8.34359 2.15739C9.16992 2.98372 9.625 4.08236 9.625 5.25098C9.625 7.01438 9.05921 7.45133 5.25 12.96Z" fill="#074A5D"/>
                        </Svg>
                        <Text style={{
                            fontSize: verticalScale(14),
                            lineHeight:17,
                            color:"#262626",
                            marginLeft:10,
                        }}>Москва, от метро Щелковская, 500м</Text>
                        </View>
                    </View>
                    {/*transp*/}
                    <View style={styles.content_global} >
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                        <View style={{
                            flexDirection:"row",alignItems:"center"
                        }}>
                        <Svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M2.59355 9.51113C2.59355 9.51113 2.59082 9.5084 2.59082 9.50566L2.03301 10.9002C1.97832 11.0369 1.89629 11.1627 1.78965 11.2666L0.192773 12.8662C-0.0642578 13.1232 -0.0642578 13.5389 0.192773 13.7932C0.321289 13.9217 0.488086 13.9846 0.654883 13.9846C0.82168 13.9846 0.991211 13.9217 1.11699 13.7932L2.71387 12.1936C2.94629 11.9611 3.12402 11.6877 3.24434 11.3869L3.61348 10.4654L2.62363 9.54941L2.59355 9.51113ZM5.6834 2.62598C6.40801 2.62598 6.99316 2.03809 6.99316 1.31348C6.99316 0.588867 6.40527 0.000976562 5.6834 0.000976562C4.95879 0.000976562 4.37363 0.588867 4.37363 1.31348C4.37363 2.03809 4.95879 2.62598 5.6834 2.62598ZM8.54629 7.4084L7.74512 6.61816C7.72051 6.59355 7.70137 6.56348 7.69043 6.53066L7.33769 5.46973C6.94394 4.29121 5.85019 3.50098 4.60879 3.50098C3.65723 3.50098 3.15957 3.7416 1.99199 4.21191C1.42051 4.4416 0.955664 4.8709 0.674023 5.43691L0.280273 6.2873C-0.0833984 7.07207 1.10332 7.62988 1.46973 6.83965L1.85254 6.0084C1.98379 5.7459 2.20527 5.54355 2.47598 5.43418C3.06934 5.19629 3.38105 5.06504 3.6873 4.9666L3.1459 7.13223C3.01738 7.64902 3.1541 8.19316 3.55332 8.6252L5.71348 10.6213C5.8748 10.7717 5.98691 10.9631 6.03613 11.1791L6.56934 13.4979C6.64043 13.8123 6.96309 14.0775 7.3541 13.99C7.70683 13.908 7.92558 13.5553 7.84355 13.2025L7.31035 10.8865C7.20098 10.4135 6.95488 9.98965 6.59941 9.65879L5.12832 8.30254L5.84473 5.43691C6.04707 5.70215 6.0498 5.78145 6.44082 6.95176C6.51738 7.17871 6.6459 7.38652 6.81816 7.55879L7.61934 8.35176C8.2291 8.93965 9.16973 8.02637 8.54629 7.4084Z" fill="#074A5D"/>
                        </Svg>
                        <Text style={{
                            fontSize: verticalScale(14),
                            lineHeight:17,
                            color:"#262626",
                            marginLeft:10,
                        }}>15 мин.</Text>
                        </View>
                        <View style={{
                            flexDirection:"row",alignItems:"center",marginLeft:10,
                        }}>
                            <Svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M3.5 10.501C3.98316 10.501 4.375 10.1091 4.375 9.62598C4.375 9.14281 3.98316 8.75098 3.5 8.75098C3.01684 8.75098 2.625 9.14281 2.625 9.62598C2.625 10.1091 3.01684 10.501 3.5 10.501ZM10.5 10.501C10.9832 10.501 11.375 10.1091 11.375 9.62598C11.375 9.14281 10.9832 8.75098 10.5 8.75098C10.0168 8.75098 9.625 9.14281 9.625 9.62598C9.625 10.1091 10.0168 10.501 10.5 10.501ZM13.3438 3.50098H13.125V2.18848C13.125 0.963477 10.4125 0.000976562 7 0.000976562C3.5875 0.000976562 0.875 0.963477 0.875 2.18848V3.50098H0.65625C0.293945 3.50098 0 3.79465 0 4.15723V6.34473C0 6.70703 0.293945 7.00098 0.65625 7.00098H0.875V11.376C0.875 11.8591 1.26684 12.251 1.75 12.251V13.126C1.75 13.6091 2.14184 14.001 2.625 14.001H3.9375C4.42066 14.001 4.8125 13.6091 4.8125 13.126V12.251H9.1875V13.126C9.1875 13.6091 9.57934 14.001 10.0625 14.001H11.375C11.8582 14.001 12.25 13.6091 12.25 13.126V12.251C12.7332 12.251 13.125 11.8591 13.125 11.376V7.00098H13.3438C13.7061 7.00098 14 6.70703 14 6.34473V4.15723C14 3.79465 13.7061 3.50098 13.3438 3.50098ZM3.9375 13.126H2.625V12.251H3.9375V13.126ZM11.375 13.126H10.0625V12.251H11.375V13.126ZM12.25 11.376H1.75L1.74973 7.87598H12.2503L12.25 11.376ZM12.2503 7.00098H1.74973L1.74945 3.50098H12.2508L12.2503 7.00098ZM12.2508 2.62598H1.74918V2.19695C1.84051 1.83301 3.59324 0.875977 7 0.875977C10.4068 0.875977 12.1595 1.83301 12.2508 2.19695V2.62598Z" fill="#074A5D"/>
                            </Svg>

                            <Text style={{
                                fontSize: verticalScale(14),
                                lineHeight:17,
                                color:"#262626",
                                marginLeft:10,
                            }}>5 мин.</Text>
                        </View>
                        </View>
                    </View>
                    <View>
                        <Text style={{
                            textAlign:"center",
                            marginBottom:50,
                            marginTop:50,
                        }}>KARTA!</Text>
                        <Text style={{
                            textAlign:"center",
                            lineHeight:14,
                            color:"#A1AABA",
                            fontSize: verticalScale(12),
                        }}>
                            Точное расположение ВЫ узнаете после подтверждения
                        </Text>
                    </View>
                  
                    <View style={styles.content_global} >  
                    <View
                                style={[
                                    Style.borderBg,
                                    {marginTop: 15, marginBottom: 15}
                                ]}
                            />
                    <View style={[Style.flexRow]}>
                                <Image
                                    source={{
                                        uri:
                                            "https://www.jerryacuff.com/wp-content/uploads/2018/01/woman-on-phone-256x256.jpg"
                                    }}
                                    style={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: 5,
                                        marginLeft: 10,
                                        justifyContent: "flex-start",
                                        alignItems: "flex-start"
                                    }}
                                />
                                <View
                                    style={{
                                        paddingRight: 15,
                                        paddingLeft: 15,
                                        width: 0,
                                        flexGrow: 1,
                                        flex: 1
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontFamily: "PFBeauSansPro-Regular",
                                            fontSize: 12
                                        }}
                                    >
                                        10.06.19г
                                    </Text>
                                    <Text
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: 16,
                                            marginTop: 5,
                                            fontFamily: "PFBeauSansPro-Regular",
                                            color:"#262626",
                                        }}
                                    >
                                        РДПгроуп
                                    </Text>
                                    <Text
                                        style={{fontSize: 14, color: "#a1aaba", marginTop: 7}}
                                    >
                                        Рекламно-производственная компания сайт rdpgroup.ru
                                    </Text>
                                </View>
                            </View>
                   
                    <View   style={[
                                    Style.borderBg,
                                    {marginTop: 15, marginBottom: 15}
                                ]}
                            />
                        {/* luda */}
                    <View style={[Style.flexRow]}>
                                <Image
                                    source={{
                                        uri:
                                            "https://www.jerryacuff.com/wp-content/uploads/2018/01/woman-on-phone-256x256.jpg"
                                    }}
                                    style={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: 5,
                                        marginLeft: 10,
                                        justifyContent: "flex-start",
                                        alignItems: "flex-start"
                                    }}
                                />
                                <View
                                    style={{
                                        paddingRight: 15,
                                        paddingLeft: 15,
                                        width: 0,
                                        flexGrow: 1,
                                        flex: 1
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontFamily: "PFBeauSansPro-Regular",
                                            fontSize: 12
                                        }}
                                    >
                                        10.06.19г
                                    </Text>
                                    <Text
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: 16,
                                            marginTop: 5,
                                            fontFamily: "PFBeauSansPro-Regular",
                                            color:"#262626",
                                        }}
                                    >
                                        Люда
                                    </Text>
                                    <Text
                                        style={{fontSize: 14, color: "#a1aaba", marginTop: 7}}
                                    >
                                        Людмила Работал в компании 3 раза, ребята очень
                                        вежливые, есть бесплатное питание, и все необходимые
                                        условия труда.
                                    </Text>
                                    <View style={{
                                        marginTop:20,
                                        flexDirection:"row",
                                        alignItems:"center"
                                    }}>
                                        <Text>Посмотреть все </Text>
                                        <Text 
                                            style={{
                                                color:"#074A5D",
                                                fontSize: verticalScale(12),
                                            }}
                                        >12 отзывов</Text>
                                    </View>
                                </View>
                            </View>
                    </View>
                    <View   style={[
                                    Style.borderBg,
                                    {marginTop: 15, marginBottom: 15}
                                ]}
                            />
                    {/* uslovye truda */}
                    
                    <View style={styles.content_global} >
                                <Text style={{
                                    color:"#262626",
                                    fontSize: verticalScale(18),
                                    fontFamily: "PFBeauSansPro-Bold",
                                    textAlign:"center"
                                }}>Условия труда</Text>
                        <View style={{
                            flexDirection:"row",
                            alignItems:"center",
                            textAlign:"left",
                            marginTop:15,
                            marginBottom:15,
                                }}>
                            <Svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M21.8688 8.4713L11.8635 0.307233C11.6178 0.109055 11.3116 0.000976563 10.996 0.000976562C10.6803 0.000976562 10.3741 0.109055 10.1284 0.307233L0.12659 8.4713C0.0560328 8.5288 0.0111612 8.61193 0.00181721 8.70247C-0.00752677 8.79301 0.0194198 8.88356 0.0767465 8.95426L0.510731 9.48751C0.568005 9.55775 0.650704 9.60254 0.740833 9.61211C0.830961 9.62169 0.921225 9.59528 0.991981 9.53864L2.74768 8.10434V18.5457C2.74768 18.7281 2.82012 18.903 2.94905 19.0319C3.07798 19.1608 3.25285 19.2332 3.43518 19.2332H8.93518C9.11752 19.2332 9.29239 19.1608 9.42132 19.0319C9.55025 18.903 9.62268 18.7281 9.62268 18.5457V13.0457L12.3727 13.0586V18.5621C12.3727 18.7444 12.4451 18.9193 12.574 19.0482C12.703 19.1771 12.8778 19.2496 13.0602 19.2496L18.5602 19.2354C18.7425 19.2354 18.9174 19.163 19.0463 19.034C19.1753 18.9051 19.2477 18.7302 19.2477 18.5479V8.10434L21.0034 9.53864C21.0741 9.5961 21.1648 9.62313 21.2554 9.61378C21.346 9.60443 21.4293 9.55948 21.4868 9.4888L21.9208 8.95555C21.9492 8.92038 21.9705 8.87993 21.9833 8.83652C21.9961 8.79312 22.0002 8.74762 21.9953 8.70263C21.9905 8.65764 21.9768 8.61404 21.9551 8.57434C21.9334 8.53465 21.9041 8.49963 21.8688 8.4713ZM17.868 17.8638H17.8723L13.7473 17.8767V12.3694C13.7467 12.1876 13.6744 12.0134 13.546 11.8847C13.4177 11.7559 13.2437 11.6831 13.0619 11.6819L8.9369 11.6703C8.84644 11.67 8.75681 11.6876 8.67315 11.722C8.58949 11.7565 8.51345 11.8071 8.44938 11.8709C8.38531 11.9348 8.33448 12.0107 8.29979 12.0942C8.26511 12.1778 8.24725 12.2674 8.24725 12.3578V17.8638H4.12268V6.98243L10.9977 1.372L17.8727 6.98243L17.868 17.8638Z" fill="#074A5D"/>
                            </Svg>
                            <Text style={{
                                marginLeft:40,
                                textAlign:"left",
                                 color:"#262626",
                                 fontSize: verticalScale(12),
                                 fontFamily: "PFBeauSansPro-Regular",
                            }}> Работа внутри помещения </Text>
                        </View>
                        <View style={{
                            flexDirection:"row",
                            alignItems:"center",
                            textAlign:"left",
                            marginTop:15,
                            marginBottom:15,
                                }}>
                            <Svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M21.8688 8.4713L11.8635 0.307233C11.6178 0.109055 11.3116 0.000976563 10.996 0.000976562C10.6803 0.000976562 10.3741 0.109055 10.1284 0.307233L0.12659 8.4713C0.0560328 8.5288 0.0111612 8.61193 0.00181721 8.70247C-0.00752677 8.79301 0.0194198 8.88356 0.0767465 8.95426L0.510731 9.48751C0.568005 9.55775 0.650704 9.60254 0.740833 9.61211C0.830961 9.62169 0.921225 9.59528 0.991981 9.53864L2.74768 8.10434V18.5457C2.74768 18.7281 2.82012 18.903 2.94905 19.0319C3.07798 19.1608 3.25285 19.2332 3.43518 19.2332H8.93518C9.11752 19.2332 9.29239 19.1608 9.42132 19.0319C9.55025 18.903 9.62268 18.7281 9.62268 18.5457V13.0457L12.3727 13.0586V18.5621C12.3727 18.7444 12.4451 18.9193 12.574 19.0482C12.703 19.1771 12.8778 19.2496 13.0602 19.2496L18.5602 19.2354C18.7425 19.2354 18.9174 19.163 19.0463 19.034C19.1753 18.9051 19.2477 18.7302 19.2477 18.5479V8.10434L21.0034 9.53864C21.0741 9.5961 21.1648 9.62313 21.2554 9.61378C21.346 9.60443 21.4293 9.55948 21.4868 9.4888L21.9208 8.95555C21.9492 8.92038 21.9705 8.87993 21.9833 8.83652C21.9961 8.79312 22.0002 8.74762 21.9953 8.70263C21.9905 8.65764 21.9768 8.61404 21.9551 8.57434C21.9334 8.53465 21.9041 8.49963 21.8688 8.4713ZM17.868 17.8638H17.8723L13.7473 17.8767V12.3694C13.7467 12.1876 13.6744 12.0134 13.546 11.8847C13.4177 11.7559 13.2437 11.6831 13.0619 11.6819L8.9369 11.6703C8.84644 11.67 8.75681 11.6876 8.67315 11.722C8.58949 11.7565 8.51345 11.8071 8.44938 11.8709C8.38531 11.9348 8.33448 12.0107 8.29979 12.0942C8.26511 12.1778 8.24725 12.2674 8.24725 12.3578V17.8638H4.12268V6.98243L10.9977 1.372L17.8727 6.98243L17.868 17.8638Z" fill="#074A5D"/>
                            </Svg>
                            <Text style={{
                                marginLeft:40,
                                textAlign:"left",
                                 color:"#262626",
                                 fontSize: verticalScale(12),
                                 fontFamily: "PFBeauSansPro-Regular",
                            }}> Работа внутри помещения </Text>
                        </View>
                        <View style={{
                            flexDirection:"row",
                            alignItems:"center",
                            textAlign:"left",
                            marginTop:15,
                            marginBottom:15,
                                }}>
                            <Svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M21.8688 8.4713L11.8635 0.307233C11.6178 0.109055 11.3116 0.000976563 10.996 0.000976562C10.6803 0.000976562 10.3741 0.109055 10.1284 0.307233L0.12659 8.4713C0.0560328 8.5288 0.0111612 8.61193 0.00181721 8.70247C-0.00752677 8.79301 0.0194198 8.88356 0.0767465 8.95426L0.510731 9.48751C0.568005 9.55775 0.650704 9.60254 0.740833 9.61211C0.830961 9.62169 0.921225 9.59528 0.991981 9.53864L2.74768 8.10434V18.5457C2.74768 18.7281 2.82012 18.903 2.94905 19.0319C3.07798 19.1608 3.25285 19.2332 3.43518 19.2332H8.93518C9.11752 19.2332 9.29239 19.1608 9.42132 19.0319C9.55025 18.903 9.62268 18.7281 9.62268 18.5457V13.0457L12.3727 13.0586V18.5621C12.3727 18.7444 12.4451 18.9193 12.574 19.0482C12.703 19.1771 12.8778 19.2496 13.0602 19.2496L18.5602 19.2354C18.7425 19.2354 18.9174 19.163 19.0463 19.034C19.1753 18.9051 19.2477 18.7302 19.2477 18.5479V8.10434L21.0034 9.53864C21.0741 9.5961 21.1648 9.62313 21.2554 9.61378C21.346 9.60443 21.4293 9.55948 21.4868 9.4888L21.9208 8.95555C21.9492 8.92038 21.9705 8.87993 21.9833 8.83652C21.9961 8.79312 22.0002 8.74762 21.9953 8.70263C21.9905 8.65764 21.9768 8.61404 21.9551 8.57434C21.9334 8.53465 21.9041 8.49963 21.8688 8.4713ZM17.868 17.8638H17.8723L13.7473 17.8767V12.3694C13.7467 12.1876 13.6744 12.0134 13.546 11.8847C13.4177 11.7559 13.2437 11.6831 13.0619 11.6819L8.9369 11.6703C8.84644 11.67 8.75681 11.6876 8.67315 11.722C8.58949 11.7565 8.51345 11.8071 8.44938 11.8709C8.38531 11.9348 8.33448 12.0107 8.29979 12.0942C8.26511 12.1778 8.24725 12.2674 8.24725 12.3578V17.8638H4.12268V6.98243L10.9977 1.372L17.8727 6.98243L17.868 17.8638Z" fill="#074A5D"/>
                            </Svg>
                            <Text style={{
                                marginLeft:40,
                                textAlign:"left",
                                 color:"#262626",
                                 fontSize: verticalScale(12),
                                 fontFamily: "PFBeauSansPro-Regular",
                            }}> Работа внутри помещения </Text>
                        </View>
                    </View>
                      {/*Udobstva  */}
                      <View style={styles.content_global} >
                                <Text style={{
                                    color:"#262626",
                                    fontSize: verticalScale(18),
                                    fontFamily: "PFBeauSansPro-Bold",
                                    textAlign:"center"
                                }}>Удобства</Text>
                        <View style={{
                            flexDirection:"row",
                            alignItems:"center",
                            textAlign:"left",
                            marginTop:15,
                            marginBottom:15,
                                }}>
                            <Svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M21.8688 8.4713L11.8635 0.307233C11.6178 0.109055 11.3116 0.000976563 10.996 0.000976562C10.6803 0.000976562 10.3741 0.109055 10.1284 0.307233L0.12659 8.4713C0.0560328 8.5288 0.0111612 8.61193 0.00181721 8.70247C-0.00752677 8.79301 0.0194198 8.88356 0.0767465 8.95426L0.510731 9.48751C0.568005 9.55775 0.650704 9.60254 0.740833 9.61211C0.830961 9.62169 0.921225 9.59528 0.991981 9.53864L2.74768 8.10434V18.5457C2.74768 18.7281 2.82012 18.903 2.94905 19.0319C3.07798 19.1608 3.25285 19.2332 3.43518 19.2332H8.93518C9.11752 19.2332 9.29239 19.1608 9.42132 19.0319C9.55025 18.903 9.62268 18.7281 9.62268 18.5457V13.0457L12.3727 13.0586V18.5621C12.3727 18.7444 12.4451 18.9193 12.574 19.0482C12.703 19.1771 12.8778 19.2496 13.0602 19.2496L18.5602 19.2354C18.7425 19.2354 18.9174 19.163 19.0463 19.034C19.1753 18.9051 19.2477 18.7302 19.2477 18.5479V8.10434L21.0034 9.53864C21.0741 9.5961 21.1648 9.62313 21.2554 9.61378C21.346 9.60443 21.4293 9.55948 21.4868 9.4888L21.9208 8.95555C21.9492 8.92038 21.9705 8.87993 21.9833 8.83652C21.9961 8.79312 22.0002 8.74762 21.9953 8.70263C21.9905 8.65764 21.9768 8.61404 21.9551 8.57434C21.9334 8.53465 21.9041 8.49963 21.8688 8.4713ZM17.868 17.8638H17.8723L13.7473 17.8767V12.3694C13.7467 12.1876 13.6744 12.0134 13.546 11.8847C13.4177 11.7559 13.2437 11.6831 13.0619 11.6819L8.9369 11.6703C8.84644 11.67 8.75681 11.6876 8.67315 11.722C8.58949 11.7565 8.51345 11.8071 8.44938 11.8709C8.38531 11.9348 8.33448 12.0107 8.29979 12.0942C8.26511 12.1778 8.24725 12.2674 8.24725 12.3578V17.8638H4.12268V6.98243L10.9977 1.372L17.8727 6.98243L17.868 17.8638Z" fill="#074A5D"/>
                            </Svg>
                            <Text style={{
                                marginLeft:40,
                                textAlign:"left",
                                 color:"#262626",
                                 fontSize: verticalScale(12),
                                 fontFamily: "PFBeauSansPro-Regular",
                            }}> Работа внутри помещения </Text>
                        </View>
                        <View style={{
                            flexDirection:"row",
                            alignItems:"center",
                            textAlign:"left",
                            marginTop:15,
                            marginBottom:15,
                                }}>
                            <Svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M21.8688 8.4713L11.8635 0.307233C11.6178 0.109055 11.3116 0.000976563 10.996 0.000976562C10.6803 0.000976562 10.3741 0.109055 10.1284 0.307233L0.12659 8.4713C0.0560328 8.5288 0.0111612 8.61193 0.00181721 8.70247C-0.00752677 8.79301 0.0194198 8.88356 0.0767465 8.95426L0.510731 9.48751C0.568005 9.55775 0.650704 9.60254 0.740833 9.61211C0.830961 9.62169 0.921225 9.59528 0.991981 9.53864L2.74768 8.10434V18.5457C2.74768 18.7281 2.82012 18.903 2.94905 19.0319C3.07798 19.1608 3.25285 19.2332 3.43518 19.2332H8.93518C9.11752 19.2332 9.29239 19.1608 9.42132 19.0319C9.55025 18.903 9.62268 18.7281 9.62268 18.5457V13.0457L12.3727 13.0586V18.5621C12.3727 18.7444 12.4451 18.9193 12.574 19.0482C12.703 19.1771 12.8778 19.2496 13.0602 19.2496L18.5602 19.2354C18.7425 19.2354 18.9174 19.163 19.0463 19.034C19.1753 18.9051 19.2477 18.7302 19.2477 18.5479V8.10434L21.0034 9.53864C21.0741 9.5961 21.1648 9.62313 21.2554 9.61378C21.346 9.60443 21.4293 9.55948 21.4868 9.4888L21.9208 8.95555C21.9492 8.92038 21.9705 8.87993 21.9833 8.83652C21.9961 8.79312 22.0002 8.74762 21.9953 8.70263C21.9905 8.65764 21.9768 8.61404 21.9551 8.57434C21.9334 8.53465 21.9041 8.49963 21.8688 8.4713ZM17.868 17.8638H17.8723L13.7473 17.8767V12.3694C13.7467 12.1876 13.6744 12.0134 13.546 11.8847C13.4177 11.7559 13.2437 11.6831 13.0619 11.6819L8.9369 11.6703C8.84644 11.67 8.75681 11.6876 8.67315 11.722C8.58949 11.7565 8.51345 11.8071 8.44938 11.8709C8.38531 11.9348 8.33448 12.0107 8.29979 12.0942C8.26511 12.1778 8.24725 12.2674 8.24725 12.3578V17.8638H4.12268V6.98243L10.9977 1.372L17.8727 6.98243L17.868 17.8638Z" fill="#074A5D"/>
                            </Svg>
                            <Text style={{
                                marginLeft:40,
                                textAlign:"left",
                                 color:"#262626",
                                 fontSize: verticalScale(12),
                                 fontFamily: "PFBeauSansPro-Regular",
                            }}> Работа внутри помещения </Text>
                        </View>
                        <View style={{
                            flexDirection:"row",
                            alignItems:"center",
                            textAlign:"left",
                            marginTop:15,
                            marginBottom:15,
                                }}>
                            <Svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M21.8688 8.4713L11.8635 0.307233C11.6178 0.109055 11.3116 0.000976563 10.996 0.000976562C10.6803 0.000976562 10.3741 0.109055 10.1284 0.307233L0.12659 8.4713C0.0560328 8.5288 0.0111612 8.61193 0.00181721 8.70247C-0.00752677 8.79301 0.0194198 8.88356 0.0767465 8.95426L0.510731 9.48751C0.568005 9.55775 0.650704 9.60254 0.740833 9.61211C0.830961 9.62169 0.921225 9.59528 0.991981 9.53864L2.74768 8.10434V18.5457C2.74768 18.7281 2.82012 18.903 2.94905 19.0319C3.07798 19.1608 3.25285 19.2332 3.43518 19.2332H8.93518C9.11752 19.2332 9.29239 19.1608 9.42132 19.0319C9.55025 18.903 9.62268 18.7281 9.62268 18.5457V13.0457L12.3727 13.0586V18.5621C12.3727 18.7444 12.4451 18.9193 12.574 19.0482C12.703 19.1771 12.8778 19.2496 13.0602 19.2496L18.5602 19.2354C18.7425 19.2354 18.9174 19.163 19.0463 19.034C19.1753 18.9051 19.2477 18.7302 19.2477 18.5479V8.10434L21.0034 9.53864C21.0741 9.5961 21.1648 9.62313 21.2554 9.61378C21.346 9.60443 21.4293 9.55948 21.4868 9.4888L21.9208 8.95555C21.9492 8.92038 21.9705 8.87993 21.9833 8.83652C21.9961 8.79312 22.0002 8.74762 21.9953 8.70263C21.9905 8.65764 21.9768 8.61404 21.9551 8.57434C21.9334 8.53465 21.9041 8.49963 21.8688 8.4713ZM17.868 17.8638H17.8723L13.7473 17.8767V12.3694C13.7467 12.1876 13.6744 12.0134 13.546 11.8847C13.4177 11.7559 13.2437 11.6831 13.0619 11.6819L8.9369 11.6703C8.84644 11.67 8.75681 11.6876 8.67315 11.722C8.58949 11.7565 8.51345 11.8071 8.44938 11.8709C8.38531 11.9348 8.33448 12.0107 8.29979 12.0942C8.26511 12.1778 8.24725 12.2674 8.24725 12.3578V17.8638H4.12268V6.98243L10.9977 1.372L17.8727 6.98243L17.868 17.8638Z" fill="#074A5D"/>
                            </Svg>
                            <Text style={{
                                marginLeft:40,
                                textAlign:"left",
                                 color:"#262626",
                                 fontSize: verticalScale(12),
                                 fontFamily: "PFBeauSansPro-Regular",
                            }}> Работа внутри помещения </Text>
                        </View>
                        <View   style={[
                                    Style.borderBg,
                                    {marginTop: 15, marginBottom: 15}
                                ]}
                            />
                    </View>
                    <View style={styles.content_global} >
                        <View style={{
                            flexDirection:"row",
                            alignItems:"center",
                            justifyContent:"space-between"
                        }}>
                            <Text style={{
                                   fontSize: verticalScale(14),
                                   fontFamily: "PFBeauSansPro-Bold",
                                   color:"#074A5D",
                            }}>Связаться с работодателем</Text>
                            <Svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M6.99697 6.93389C6.98144 6.80209 6.92462 6.67777 6.83388 6.5771L1.26954 0.288837C1.21464 0.212566 1.14355 0.148084 1.06087 0.0995468C0.978179 0.0510092 0.885725 0.0194915 0.78946 0.00702375C0.693194 -0.00544396 0.595252 0.00141485 0.501942 0.0271584C0.408631 0.0529019 0.322022 0.0969593 0.247693 0.156493C0.173363 0.216026 0.112962 0.289715 0.0703799 0.372813C0.0277977 0.455911 0.00397871 0.546576 0.000457177 0.638967C-0.00306436 0.731358 0.0137897 0.823426 0.0499336 0.909242C0.0860776 0.995057 0.14071 1.07272 0.210312 1.13722L5.39929 7.00109L0.210312 12.8654C0.078321 12.988 0.00295155 13.1556 0.0007838 13.3312C-0.00138395 13.5067 0.0698275 13.6759 0.198753 13.8015C0.327678 13.9271 0.503755 13.9989 0.68825 14.0009C0.872746 14.003 1.05055 13.9352 1.18254 13.8125C1.21511 13.7823 1.24453 13.749 1.27039 13.7133L6.83388 7.42508C6.89416 7.35772 6.93965 7.27955 6.96766 7.19519C6.99567 7.11083 7.00564 7.02198 6.99697 6.93389Z" fill="#074A5D"/>
                            </Svg>
                        </View>
                        <View style={{
                            flexDirection:"row",
                            alignItems:"flex-start",
                            justifyContent:"center",
                        }}>
                            <Svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M19.3574 3.59639L11.1074 0.158889C10.8561 0.0546382 10.5867 0.000976563 10.3146 0.000976562C10.0426 0.000976563 9.77318 0.0546382 9.52188 0.158889L1.27187 3.59639C0.502734 3.91436 0 4.66631 0 5.4999C0 14.0292 4.91992 19.9245 9.51758 21.8409C10.0246 22.0515 10.5961 22.0515 11.1031 21.8409C14.7855 20.3069 20.625 15.0089 20.625 5.4999C20.625 4.66631 20.1223 3.91436 19.3574 3.59639ZM10.5789 20.5733C10.407 20.6421 10.218 20.6421 10.0504 20.5733C5.84375 18.9062 1.375 13.0624 1.375 5.4999C1.375 5.22061 1.54258 4.97139 1.79609 4.86397L10.0461 1.42647C10.2137 1.35772 10.407 1.35772 10.5746 1.42647L18.8246 4.86397C19.0824 4.97139 19.25 5.22061 19.2457 5.4999C19.25 13.0624 14.7813 18.9062 10.5789 20.5733ZM16.4312 6.6085C16.2293 6.40655 15.9027 6.40655 15.7008 6.6042L8.67969 13.5694L5.71484 10.5831C5.51289 10.3812 5.18633 10.3812 4.98438 10.5788L4.61914 10.944C4.41719 11.146 4.41719 11.4726 4.61484 11.6745L8.30586 15.3956C8.50781 15.5976 8.83438 15.5976 9.03633 15.3999L16.7922 7.7085C16.9941 7.50655 16.9941 7.17998 16.7965 6.97803L16.4312 6.6085Z" fill="#074A5D"/>
                            </Svg>

                            <Text>В целях безопасности и гарантии выплаты вознаграждения общайтесь только в пределах приложения Маньяна</Text>
                            </View>
                    <View   style={[
                                    Style.borderBg,
                                    {marginTop: 15, marginBottom: 15}
                                ]}
                            />
                    </View>
                    {/* Otema bron */}
                    <View style={styles.content_global} >
                        <View style={{
                            flexDirection:"row",
                            alignItems:"center",
                            justifyContent:"center"
                        }}>
                            <Text style={{
                                   fontSize: verticalScale(18),
                                   fontFamily: "PFBeauSansPro-Bold",
                                   color:"#262626",
                            }}>Отмена бронирования</Text>
                        </View>
                        <View style={{
                            flexDirection:"row",
                            alignItems:"flex-start",
                            justifyContent:"center",
                        }}>
                        <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M11 14.6104C10.3355 14.6104 9.79688 15.149 9.79688 15.8135C9.79688 16.4779 10.3355 17.0166 11 17.0166C11.6645 17.0166 12.2031 16.4779 12.2031 15.8135C12.2031 15.149 11.6645 14.6104 11 14.6104ZM11.3296 13.5791H10.6421C10.3573 13.5791 10.1264 13.3482 10.1264 13.0635V13.0471C10.1264 10.0246 13.4539 10.3135 13.4539 8.43192C13.4539 7.57186 12.6908 6.7041 10.9858 6.7041C9.73354 6.7041 9.08381 7.11871 8.4416 7.93696C8.27368 8.15095 7.96662 8.19456 7.74344 8.03905L7.17909 7.64589C6.93739 7.4775 6.88432 7.14011 7.06544 6.90782C7.97749 5.73791 9.05962 4.98535 10.9858 4.98535C13.2339 4.98535 15.1727 6.26371 15.1727 8.43192C15.1727 11.3286 11.8452 11.1754 11.8452 13.0471V13.0635C11.8452 13.3482 11.6143 13.5791 11.3296 13.5791ZM11 1.71973C16.097 1.71973 20.2812 5.84795 20.2812 11.001C20.2812 16.1268 16.13 20.2822 11 20.2822C5.87623 20.2822 1.71875 16.1331 1.71875 11.001C1.71875 5.87897 5.86962 1.71973 11 1.71973ZM11 0.344727C5.11513 0.344727 0.34375 5.11782 0.34375 11.001C0.34375 16.8876 5.11513 21.6572 11 21.6572C16.8849 21.6572 21.6562 16.8876 21.6562 11.001C21.6562 5.11782 16.8849 0.344727 11 0.344727Z" fill="#074A5D"/>
                        </Svg>
                            <Text>Бесплатная отмена брони до 23:59 09 апреля 2019</Text>
                            </View>
                    <View   style={[
                                    Style.borderBg,
                                    {marginTop: 15, marginBottom: 15}
                                ]}
                            />
                    </View>
                    <View style={styles.content_global} >
                        <View style={{
                            flexDirection:"row",
                            alignItems:"center",
                            justifyContent:"space-between",
                        }}>
                        <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M11.988 12.357C11.988 12.469 11.96 12.5436 11.904 12.581C11.8573 12.609 11.778 12.623 11.666 12.623H10.826C10.6953 12.623 10.6067 12.609 10.56 12.581C10.5227 12.5436 10.4993 12.4736 10.49 12.371L10.182 6.29498C10.1727 6.20164 10.1913 6.13164 10.238 6.08498C10.2847 6.02898 10.3733 6.00098 10.504 6.00098H11.988C12.1373 6.00098 12.2307 6.03364 12.268 6.09898C12.3053 6.15498 12.3193 6.22031 12.31 6.29498L11.988 12.357ZM12.52 14.723C12.52 15.059 12.3987 15.3483 12.156 15.591C11.9133 15.8243 11.6147 15.941 11.26 15.941C10.9053 15.941 10.6067 15.8243 10.364 15.591C10.1213 15.3576 10 15.0683 10 14.723C10 14.555 10.0327 14.3963 10.098 14.247C10.1633 14.0976 10.252 13.9716 10.364 13.869C10.4853 13.757 10.6207 13.6683 10.77 13.603C10.9287 13.5376 11.092 13.505 11.26 13.505C11.6147 13.505 11.9133 13.6216 12.156 13.855C12.3987 14.0883 12.52 14.3776 12.52 14.723Z" fill="#074A5D"/>
                            <Path d="M1.33237 21.8392C1.25667 21.7808 1.19849 21.7008 1.16479 21.6087C1.13108 21.5167 1.12324 21.4165 1.14217 21.3199L1.86519 16.8485C0.657558 15.0932 0.00522141 12.9847 0 10.82C0 4.87138 4.91035 0.000976562 11 0.000976562C17.052 0.000976562 21.9612 4.87367 22 10.82C22 16.7687 17.052 21.6397 11 21.6397C9.42765 21.648 7.8713 21.3079 6.43288 20.6417L1.86573 21.9602C1.82109 21.9917 1.76732 22.0056 1.71382 21.9996C1.57386 21.989 1.44052 21.933 1.33237 21.8392ZM1.14217 10.82C1.14079 12.8257 1.76947 14.776 2.93091 16.3693C2.9854 16.4253 3.02465 16.4956 3.04472 16.5729C3.06479 16.6501 3.06495 16.7315 3.04512 16.8088L2.39802 20.6015L6.16617 19.4837C6.24325 19.4441 6.32793 19.4236 6.41373 19.4236C6.49954 19.4236 6.58422 19.4441 6.6613 19.4837C8.0196 20.1487 9.50161 20.4895 11.0006 20.4817C16.4432 20.4817 20.8584 16.1702 20.8584 10.82C20.8584 5.50998 16.4437 1.19857 11.0006 1.19857C5.5574 1.19857 1.14217 5.50774 1.14217 10.8178V10.82Z" fill="#074A5D"/>
                        </Svg>
                        <Text style={{
                            color:"#074A5D",
                            fontSize: verticalScale(14),
                            fontFamily: "PFBeauSansPro-Bold",
                        }}>Пожаловаться на объявление</Text>
                        <Svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M6.99697 6.93389C6.98144 6.80209 6.92462 6.67777 6.83388 6.5771L1.26954 0.288837C1.21464 0.212566 1.14355 0.148084 1.06087 0.0995468C0.978179 0.0510092 0.885725 0.0194915 0.78946 0.00702375C0.693194 -0.00544396 0.595252 0.00141485 0.501942 0.0271584C0.408631 0.0529019 0.322022 0.0969593 0.247693 0.156493C0.173363 0.216026 0.112962 0.289715 0.0703799 0.372813C0.0277977 0.455911 0.00397871 0.546576 0.000457177 0.638967C-0.00306436 0.731358 0.0137897 0.823426 0.0499336 0.909242C0.0860776 0.995057 0.14071 1.07272 0.210312 1.13722L5.39929 7.00109L0.210312 12.8654C0.078321 12.988 0.00295155 13.1556 0.0007838 13.3312C-0.00138395 13.5067 0.0698275 13.6759 0.198753 13.8015C0.327678 13.9271 0.503755 13.9989 0.68825 14.0009C0.872746 14.003 1.05055 13.9352 1.18254 13.8125C1.21511 13.7823 1.24453 13.749 1.27039 13.7133L6.83388 7.42508C6.89416 7.35772 6.93965 7.27955 6.96766 7.19519C6.99567 7.11083 7.00564 7.02198 6.99697 6.93389Z" fill="#074A5D"/>
                        </Svg>
                        </View>
                        
                    <View   style={[
                                    Style.borderBg,
                                    {marginTop: 15, marginBottom: 15}
                                ]}
                            />
                   
                    </View>
                    <View style={styles.content_global} >
                        <View style={{
                            flexDirection:"row",
                            alignItems:"center",
                            justifyContent:"space-between",
                        }}>
                        <Svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M4.38095 3.16561H4.88095V2.66561V1.59976C4.88095 1.0093 5.38348 0.500977 6.02381 0.500977C6.66414 0.500977 7.16667 1.0093 7.16667 1.59976V2.66561V3.16561H7.66667H15.3333H15.8333V2.66561V1.59976C15.8333 1.0093 16.3359 0.500977 16.9762 0.500977C17.6165 0.500977 18.119 1.0093 18.119 1.59976V2.66561V3.16561H18.619H21.3571C21.9975 3.16561 22.5 3.67394 22.5 4.26439V20.3225C22.5 20.913 21.9975 21.4213 21.3571 21.4213H1.64286C1.00252 21.4213 0.5 20.913 0.5 20.3225V4.26439C0.5 3.67394 1.00252 3.16561 1.64286 3.16561H4.38095ZM4.88095 3.73146V3.23146H4.38095H1.64286C1.09532 3.23146 0.595238 3.63961 0.595238 4.26439V7.05546V7.55546H1.09524H21.9048H22.4048V7.05546V4.26439C22.4048 3.68241 21.9216 3.23146 21.3571 3.23146H18.619H18.119V3.73146V4.79732C18.119 5.38777 17.6165 5.8961 16.9762 5.8961C16.3359 5.8961 15.8333 5.38777 15.8333 4.79732V3.73146V3.23146H15.3333H7.66667H7.16667V3.73146V4.79732C7.16667 5.38777 6.66414 5.8961 6.02381 5.8961C5.38348 5.8961 4.88095 5.38777 4.88095 4.79732V3.73146ZM1.09524 7.62132H0.595238V8.12132V20.3225C0.595238 20.9045 1.07843 21.3555 1.64286 21.3555H21.3571C21.9216 21.3555 22.4048 20.9045 22.4048 20.3225V8.12132V7.62132H21.9048H1.09524ZM7.07143 1.59976C7.07143 1.01777 6.58824 0.56683 6.02381 0.56683C5.47627 0.56683 4.97619 0.974976 4.97619 1.59976V4.79732C4.97619 5.3793 5.45938 5.83024 6.02381 5.83024C6.58824 5.83024 7.07143 5.3793 7.07143 4.79732V1.59976ZM18.0238 1.59976C18.0238 1.01777 17.5406 0.56683 16.9762 0.56683C16.4287 0.56683 15.9286 0.974977 15.9286 1.59976V4.79732C15.9286 5.3793 16.4118 5.83024 16.9762 5.83024C17.5406 5.83024 18.0238 5.3793 18.0238 4.79732V1.59976ZM7.5 11.5009C7.5 12.6055 6.60457 13.5009 5.5 13.5009C4.39543 13.5009 3.5 12.6055 3.5 11.5009C3.5 10.3963 4.39543 9.50091 5.5 9.50091C6.60457 9.50091 7.5 10.3963 7.5 11.5009Z" fill="#074A5D" stroke="#074A5D"/>
                        </Svg>

                        <Text style={{
                            color:"#074A5D",
                            fontSize: verticalScale(14),
                            fontFamily: "PFBeauSansPro-Bold",
                        }}>Доступные даты</Text>
                        <Svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M6.99697 6.93389C6.98144 6.80209 6.92462 6.67777 6.83388 6.5771L1.26954 0.288837C1.21464 0.212566 1.14355 0.148084 1.06087 0.0995468C0.978179 0.0510092 0.885725 0.0194915 0.78946 0.00702375C0.693194 -0.00544396 0.595252 0.00141485 0.501942 0.0271584C0.408631 0.0529019 0.322022 0.0969593 0.247693 0.156493C0.173363 0.216026 0.112962 0.289715 0.0703799 0.372813C0.0277977 0.455911 0.00397871 0.546576 0.000457177 0.638967C-0.00306436 0.731358 0.0137897 0.823426 0.0499336 0.909242C0.0860776 0.995057 0.14071 1.07272 0.210312 1.13722L5.39929 7.00109L0.210312 12.8654C0.078321 12.988 0.00295155 13.1556 0.0007838 13.3312C-0.00138395 13.5067 0.0698275 13.6759 0.198753 13.8015C0.327678 13.9271 0.503755 13.9989 0.68825 14.0009C0.872746 14.003 1.05055 13.9352 1.18254 13.8125C1.21511 13.7823 1.24453 13.749 1.27039 13.7133L6.83388 7.42508C6.89416 7.35772 6.93965 7.27955 6.96766 7.19519C6.99567 7.11083 7.00564 7.02198 6.99697 6.93389Z" fill="#074A5D"/>
                        </Svg>
                        </View>
                        
                        <View   style={[
                                    Style.borderBg,
                                    {marginTop: 15, marginBottom: 15}
                                ]}
                            />
                   
                    </View>
                    <View style={styles.content_global} >
                        <View style={{
                            flexDirection:"row",
                            alignItems:"center",
                            justifyContent:"space-around"
                        }}>
                            <Button title="Отказать" ></Button>
                            <Button title="Принять" ></Button>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ids: state.InnerSearchBlock.id
    }
    
};
const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigationFocus(CompanyIndexScreen));