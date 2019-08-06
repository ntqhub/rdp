import React, {Component} from 'react'
import {connect} from 'react-redux';
import {View, Image, ScrollView, SafeAreaView, Text} from 'react-native';
import {Container, Tab, Tabs} from 'native-base';
import Svg, {Path, G, Circle, Rect,} from 'react-native-svg';

import styles from "../../../theme/Style";
import NavigationOptions from "../../../lib/NavigationOptions";
import stylex from "../../../theme/Style";
import {verticalScale} from "../../../lib/Scaling";
import styled from "../../../theme/StyleRequisites";
import Style from "../../../theme/Profile";
import StatusBarComp from "../../../components/StatusBarComp";

class HistoryInnerPay extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static navigationOptions = ({navigation}) => NavigationOptions(navigation, {
        title: 'История платажей',
        margin_top: false
    });

    render() {
        return (
            <SafeAreaView style={stylex.container_global}>
                <StatusBarComp/>

                <ScrollView style={stylex.content_global}>
                    <Container>
                        <Tabs
                            tabContainerStyle={{elevation: 0}}
                            tabBarUnderlineStyle={{

                                backgroundColor: styles.statusBar_bgcolor.backgroundColor,
                                borderBottomWidth: 2,
                                borderBottomColor: '#074A5D',

                            }}
                        >
                            <Tab tabStyle={{backgroundColor: styles.statusBar_bgcolor.backgroundColor,}}
                                 activeTabStyle={{backgroundColor: styles.statusBar_bgcolor.backgroundColor,}}
                                 textStyle={{
                                     color: '#074A5D',
                                     fontSize: verticalScale(16),
                                     fontFamily: 'PFBeauSansPro-Regular',
                                 }}
                                 activeTextStyle={{
                                     color: '#074A5D',
                                     fontSize: verticalScale(16),
                                     fontFamily: 'PFBeauSansPro-Bold',
                                 }} heading="Завершенные">
                                {/*start date*/}
                                <View style={{marginTop: 20, flexDirection: "row", alignItems: "center"}}>
                                    <Svg width="19" height="18" viewBox="0 0 15 14" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <Path
                                            d="M3.92857 0C3.33929 0 2.85714 0.459496 2.85714 1.0211V1.70184H1.07143C0.482143 1.70184 0 2.16133 0 2.72294V12.9789C0 13.5405 0.482143 14 1.07143 14H13.9286C14.5179 14 15 13.5405 15 12.9789V2.72294C15 2.16133 14.5179 1.70184 13.9286 1.70184H12.1429V1.0211C12.1429 0.459496 11.6607 0 11.0714 0C10.4821 0 10 0.459496 10 1.0211V1.70184H5V1.0211C5 0.459496 4.51786 0 3.92857 0ZM3.92857 0.680735C4.125 0.680735 4.28571 0.833901 4.28571 1.0211V3.06331C4.28571 3.25051 4.125 3.40368 3.92857 3.40368C3.73214 3.40368 3.57143 3.25051 3.57143 3.06331V1.0211C3.57143 0.816882 3.73214 0.680735 3.92857 0.680735ZM11.0714 0.680735C11.2679 0.680735 11.4286 0.833901 11.4286 1.0211V3.06331C11.4286 3.25051 11.2679 3.40368 11.0714 3.40368C10.875 3.40368 10.7143 3.25051 10.7143 3.06331V1.0211C10.7143 0.816882 10.875 0.680735 11.0714 0.680735ZM1.07143 2.38257H2.85714V3.06331C2.85714 3.62491 3.33929 4.08441 3.92857 4.08441C4.51786 4.08441 5 3.62491 5 3.06331V2.38257H10V3.06331C10 3.62491 10.4821 4.08441 11.0714 4.08441C11.6607 4.08441 12.1429 3.62491 12.1429 3.06331V2.38257H13.9286C14.125 2.38257 14.2857 2.53574 14.2857 2.72294V4.50553H0.714286V2.72294C0.714286 2.51872 0.875 2.38257 1.07143 2.38257ZM0.714286 5.18627H14.2857V12.9789C14.2857 13.1661 14.125 13.3193 13.9286 13.3193H1.07143C0.875 13.3193 0.714286 13.1661 0.714286 12.9789V5.18627Z"
                                            fill="#074A5D"/>
                                        <Path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M7.5 8.94142C8.40046 8.94142 9.13043 8.22656 9.13043 7.34473C9.13043 6.4629 8.40046 5.74804 7.5 5.74804C6.59954 5.74804 5.86957 6.4629 5.86957 7.34473C5.86957 8.22656 6.59954 8.94142 7.5 8.94142ZM7.5 8.30275C8.04028 8.30275 8.47826 7.87383 8.47826 7.34473C8.47826 6.81563 8.04028 6.38672 7.5 6.38672C6.95972 6.38672 6.52174 6.81563 6.52174 7.34473C6.52174 7.87383 6.95972 8.30275 7.5 8.30275Z"
                                              fill="#074A5D"/>
                                        <Path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M11.413 8.94142C12.3135 8.94142 13.0435 8.22656 13.0435 7.34473C13.0435 6.4629 12.3135 5.74804 11.413 5.74804C10.5126 5.74804 9.78261 6.4629 9.78261 7.34473C9.78261 8.22656 10.5126 8.94142 11.413 8.94142ZM11.413 8.30275C11.9533 8.30275 12.3913 7.87383 12.3913 7.34473C12.3913 6.81563 11.9533 6.38672 11.413 6.38672C10.8728 6.38672 10.4348 6.81563 10.4348 7.34473C10.4348 7.87383 10.8728 8.30275 11.413 8.30275Z"
                                              fill="#074A5D"/>
                                        <Path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M3.58696 8.94142C4.48742 8.94142 5.21739 8.22656 5.21739 7.34473C5.21739 6.4629 4.48742 5.74804 3.58696 5.74804C2.68649 5.74804 1.95652 6.4629 1.95652 7.34473C1.95652 8.22656 2.68649 8.94142 3.58696 8.94142Z"
                                              fill="#074A5D"/>
                                        <Path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M7.5 12.7735C8.40046 12.7735 9.13043 12.0586 9.13043 11.1768C9.13043 10.295 8.40046 9.5801 7.5 9.5801C6.59954 9.5801 5.86957 10.295 5.86957 11.1768C5.86957 12.0586 6.59954 12.7735 7.5 12.7735ZM7.5 12.1348C8.04028 12.1348 8.47826 11.7059 8.47826 11.1768C8.47826 10.6477 8.04028 10.2188 7.5 10.2188C6.95972 10.2188 6.52174 10.6477 6.52174 11.1768C6.52174 11.7059 6.95972 12.1348 7.5 12.1348Z"
                                              fill="#074A5D"/>
                                        <Path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M11.413 12.7735C12.3135 12.7735 13.0435 12.0586 13.0435 11.1768C13.0435 10.295 12.3135 9.5801 11.413 9.5801C10.5126 9.5801 9.78261 10.295 9.78261 11.1768C9.78261 12.0586 10.5126 12.7735 11.413 12.7735ZM11.413 12.1348C11.9533 12.1348 12.3913 11.7059 12.3913 11.1768C12.3913 10.6477 11.9533 10.2188 11.413 10.2188C10.8728 10.2188 10.4348 10.6477 10.4348 11.1768C10.4348 11.7059 10.8728 12.1348 11.413 12.1348Z"
                                              fill="#074A5D"/>
                                        <Path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M3.58696 12.7735C4.48742 12.7735 5.21739 12.0586 5.21739 11.1768C5.21739 10.295 4.48742 9.5801 3.58696 9.5801C2.68649 9.5801 1.95652 10.295 1.95652 11.1768C1.95652 12.0586 2.68649 12.7735 3.58696 12.7735ZM3.58696 12.1348C4.12724 12.1348 4.56522 11.7059 4.56522 11.1768C4.56522 10.6477 4.12724 10.2188 3.58696 10.2188C3.04668 10.2188 2.6087 10.6477 2.6087 11.1768C2.6087 11.7059 3.04668 12.1348 3.58696 12.1348Z"
                                              fill="#074A5D"/>
                                    </Svg>
                                    <Text style={{
                                        marginLeft: 10,
                                        fontSize: 12,
                                        lineHeight: 14,
                                        fontFamily: 'PFBeauSansPro-Regular',
                                    }}>31.06.2019</Text>

                                </View>
                                <View style={{
                                    height: 1,
                                    width: "100%",
                                    backgroundColor: "#E7EDF8",
                                    marginTop: 20,
                                    marginBottom: 20,
                                }}></View>
                                {/*start*/}
                                <View style={{
                                    flexDirection: "row",

                                }}>
                                    <Image style={{
                                        width: 60, height: 60,
                                        borderWidth: 1,
                                        borderColor: "rgba(117,121,130,0.34)",
                                        borderRadius: 5
                                    }}
                                           source={{uri: "https://www.prodesigns.com/backend/img/sliders/3d-logo-design/1511862820-epicinfo.png"}}
                                    ></Image>
                                    <View style={{
                                        width: "50%",
                                        paddingLeft: 20,
                                        justifyContent: "space-between"
                                    }}>
                                        <Text style={{
                                            fontWeight: "bold",
                                            fontFamily: 'PFBeauSansPro-Bold',
                                            fontSize: 14,
                                            color: "#262626",
                                            lineHeight: 17
                                        }}>RDPgroup</Text>
                                        <Text style={{
                                            fontSize: 14,
                                            lineHeight: 25,
                                            fontFamily: 'PFBeauSansPro-Regular',

                                        }}>Грузчик</Text>
                                        <Text style={{
                                            fontSize: 14,
                                            lineHeight: 25,
                                            fontFamily: 'PFBeauSansPro-Regular',

                                        }}>Оплата на:</Text>
                                    </View>
                                    <View style={{
                                        justifyContent: "space-between"
                                    }}>
                                        <Text style={{
                                            textAlign: "right",
                                            fontSize: 16,
                                            color: "#10BD55",
                                            fontWeight: "bold",
                                            fontFamily: 'PFBeauSansPro-Bold',
                                        }}>9 500 ₽</Text>
                                        <View style={{
                                            flexDirection: "row",
                                            alignItems: "flex-end",
                                            position: "relative",
                                            top: -5,
                                        }}>
                                            <Svg width="22" height="17" viewBox="0 0 22 17" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <Path
                                                    d="M20.1667 0H1.83333C0.821181 0 0 0.815848 0 1.82143V15.1786C0 16.1842 0.821181 17 1.83333 17H20.1667C21.1788 17 22 16.1842 22 15.1786V1.82143C22 0.815848 21.1788 0 20.1667 0ZM1.83333 1.21429H20.1667C20.5028 1.21429 20.7778 1.4875 20.7778 1.82143V3.64286H1.22222V1.82143C1.22222 1.4875 1.49722 1.21429 1.83333 1.21429ZM20.1667 15.7857H1.83333C1.49722 15.7857 1.22222 15.5125 1.22222 15.1786V7.28571H20.7778V15.1786C20.7778 15.5125 20.5028 15.7857 20.1667 15.7857ZM7.33333 12.5982V12.9018C7.33333 13.1522 7.12708 13.3571 6.875 13.3571H4.125C3.87292 13.3571 3.66667 13.1522 3.66667 12.9018V12.5982C3.66667 12.3478 3.87292 12.1429 4.125 12.1429H6.875C7.12708 12.1429 7.33333 12.3478 7.33333 12.5982ZM14.6667 12.5982V12.9018C14.6667 13.1522 14.4604 13.3571 14.2083 13.3571H9.01389C8.76181 13.3571 8.55556 13.1522 8.55556 12.9018V12.5982C8.55556 12.3478 8.76181 12.1429 9.01389 12.1429H14.2083C14.4604 12.1429 14.6667 12.3478 14.6667 12.5982Z"
                                                    fill="#074A5D"/>
                                            </Svg>
                                            <Text style={{
                                                marginLeft: 10,
                                                fontFamily: 'PFBeauSansPro-Regular',
                                                textAlign: "right",
                                                color: "#074A5D",
                                                fontSize: 14,
                                                alignItems: "center"
                                            }}>5648...4685</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{
                                    height: 1,
                                    width: "100%",
                                    backgroundColor: "#E7EDF8",
                                    marginTop: 20,
                                    marginBottom: 20,
                                }}></View>
                                {/*end*/}
                                {/*start*/}
                                <View style={{
                                    flexDirection: "row",

                                }}>
                                    <Image style={{
                                        width: 60, height: 60,
                                        borderWidth: 1,
                                        borderColor: "rgba(117,121,130,0.34)",
                                        borderRadius: 5
                                    }}
                                           source={{uri: "https://www.prodesigns.com/backend/img/sliders/3d-logo-design/1511862820-epicinfo.png"}}
                                    ></Image>
                                    <View style={{
                                        width: "50%",
                                        paddingLeft: 20,
                                        justifyContent: "space-between"
                                    }}>
                                        <Text style={{
                                            fontWeight: "bold",
                                            fontFamily: 'PFBeauSansPro-Bold',
                                            fontSize: 14,
                                            color: "#262626",
                                            lineHeight: 17
                                        }}>RDPgroup</Text>
                                        <Text style={{
                                            fontSize: 14,
                                            lineHeight: 25,
                                            fontFamily: 'PFBeauSansPro-Regular',

                                        }}>Грузчик</Text>
                                        <Text style={{
                                            fontSize: 14,
                                            lineHeight: 25,
                                            fontFamily: 'PFBeauSansPro-Regular',

                                        }}>Оплата на:</Text>
                                    </View>
                                    <View style={{
                                        justifyContent: "space-between"
                                    }}>
                                        <Text style={{
                                            textAlign: "right",
                                            fontSize: 16,
                                            color: "#10BD55",
                                            fontWeight: "bold",
                                            fontFamily: 'PFBeauSansPro-Bold',
                                        }}>9 500 ₽</Text>
                                        <View style={{
                                            flexDirection: "row",
                                            alignItems: "flex-end",
                                            position: "relative",
                                            top: -5,
                                        }}>
                                            <Svg width="22" height="17" viewBox="0 0 22 17" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <Path
                                                    d="M20.1667 0H1.83333C0.821181 0 0 0.815848 0 1.82143V15.1786C0 16.1842 0.821181 17 1.83333 17H20.1667C21.1788 17 22 16.1842 22 15.1786V1.82143C22 0.815848 21.1788 0 20.1667 0ZM1.83333 1.21429H20.1667C20.5028 1.21429 20.7778 1.4875 20.7778 1.82143V3.64286H1.22222V1.82143C1.22222 1.4875 1.49722 1.21429 1.83333 1.21429ZM20.1667 15.7857H1.83333C1.49722 15.7857 1.22222 15.5125 1.22222 15.1786V7.28571H20.7778V15.1786C20.7778 15.5125 20.5028 15.7857 20.1667 15.7857ZM7.33333 12.5982V12.9018C7.33333 13.1522 7.12708 13.3571 6.875 13.3571H4.125C3.87292 13.3571 3.66667 13.1522 3.66667 12.9018V12.5982C3.66667 12.3478 3.87292 12.1429 4.125 12.1429H6.875C7.12708 12.1429 7.33333 12.3478 7.33333 12.5982ZM14.6667 12.5982V12.9018C14.6667 13.1522 14.4604 13.3571 14.2083 13.3571H9.01389C8.76181 13.3571 8.55556 13.1522 8.55556 12.9018V12.5982C8.55556 12.3478 8.76181 12.1429 9.01389 12.1429H14.2083C14.4604 12.1429 14.6667 12.3478 14.6667 12.5982Z"
                                                    fill="#074A5D"/>
                                            </Svg>
                                            <Text style={{
                                                marginLeft: 10,
                                                fontFamily: 'PFBeauSansPro-Regular',
                                                textAlign: "right",
                                                color: "#074A5D",
                                                fontSize: 14,
                                                alignItems: "center"
                                            }}>5648...4685</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{
                                    height: 1,
                                    width: "100%",
                                    backgroundColor: "#E7EDF8",
                                    marginTop: 20,
                                    marginBottom: 20,
                                }}></View>
                                {/*end*/}
                                {/*  end date*/}
                                {/*start date*/}
                                <View style={{flexDirection: "row", alignItems: "center"}}>
                                    <Svg width="19" height="18" viewBox="0 0 15 14" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <Path
                                            d="M3.92857 0C3.33929 0 2.85714 0.459496 2.85714 1.0211V1.70184H1.07143C0.482143 1.70184 0 2.16133 0 2.72294V12.9789C0 13.5405 0.482143 14 1.07143 14H13.9286C14.5179 14 15 13.5405 15 12.9789V2.72294C15 2.16133 14.5179 1.70184 13.9286 1.70184H12.1429V1.0211C12.1429 0.459496 11.6607 0 11.0714 0C10.4821 0 10 0.459496 10 1.0211V1.70184H5V1.0211C5 0.459496 4.51786 0 3.92857 0ZM3.92857 0.680735C4.125 0.680735 4.28571 0.833901 4.28571 1.0211V3.06331C4.28571 3.25051 4.125 3.40368 3.92857 3.40368C3.73214 3.40368 3.57143 3.25051 3.57143 3.06331V1.0211C3.57143 0.816882 3.73214 0.680735 3.92857 0.680735ZM11.0714 0.680735C11.2679 0.680735 11.4286 0.833901 11.4286 1.0211V3.06331C11.4286 3.25051 11.2679 3.40368 11.0714 3.40368C10.875 3.40368 10.7143 3.25051 10.7143 3.06331V1.0211C10.7143 0.816882 10.875 0.680735 11.0714 0.680735ZM1.07143 2.38257H2.85714V3.06331C2.85714 3.62491 3.33929 4.08441 3.92857 4.08441C4.51786 4.08441 5 3.62491 5 3.06331V2.38257H10V3.06331C10 3.62491 10.4821 4.08441 11.0714 4.08441C11.6607 4.08441 12.1429 3.62491 12.1429 3.06331V2.38257H13.9286C14.125 2.38257 14.2857 2.53574 14.2857 2.72294V4.50553H0.714286V2.72294C0.714286 2.51872 0.875 2.38257 1.07143 2.38257ZM0.714286 5.18627H14.2857V12.9789C14.2857 13.1661 14.125 13.3193 13.9286 13.3193H1.07143C0.875 13.3193 0.714286 13.1661 0.714286 12.9789V5.18627Z"
                                            fill="#074A5D"/>
                                        <Path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M7.5 8.94142C8.40046 8.94142 9.13043 8.22656 9.13043 7.34473C9.13043 6.4629 8.40046 5.74804 7.5 5.74804C6.59954 5.74804 5.86957 6.4629 5.86957 7.34473C5.86957 8.22656 6.59954 8.94142 7.5 8.94142ZM7.5 8.30275C8.04028 8.30275 8.47826 7.87383 8.47826 7.34473C8.47826 6.81563 8.04028 6.38672 7.5 6.38672C6.95972 6.38672 6.52174 6.81563 6.52174 7.34473C6.52174 7.87383 6.95972 8.30275 7.5 8.30275Z"
                                              fill="#074A5D"/>
                                        <Path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M11.413 8.94142C12.3135 8.94142 13.0435 8.22656 13.0435 7.34473C13.0435 6.4629 12.3135 5.74804 11.413 5.74804C10.5126 5.74804 9.78261 6.4629 9.78261 7.34473C9.78261 8.22656 10.5126 8.94142 11.413 8.94142ZM11.413 8.30275C11.9533 8.30275 12.3913 7.87383 12.3913 7.34473C12.3913 6.81563 11.9533 6.38672 11.413 6.38672C10.8728 6.38672 10.4348 6.81563 10.4348 7.34473C10.4348 7.87383 10.8728 8.30275 11.413 8.30275Z"
                                              fill="#074A5D"/>
                                        <Path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M3.58696 8.94142C4.48742 8.94142 5.21739 8.22656 5.21739 7.34473C5.21739 6.4629 4.48742 5.74804 3.58696 5.74804C2.68649 5.74804 1.95652 6.4629 1.95652 7.34473C1.95652 8.22656 2.68649 8.94142 3.58696 8.94142Z"
                                              fill="#074A5D"/>
                                        <Path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M7.5 12.7735C8.40046 12.7735 9.13043 12.0586 9.13043 11.1768C9.13043 10.295 8.40046 9.5801 7.5 9.5801C6.59954 9.5801 5.86957 10.295 5.86957 11.1768C5.86957 12.0586 6.59954 12.7735 7.5 12.7735ZM7.5 12.1348C8.04028 12.1348 8.47826 11.7059 8.47826 11.1768C8.47826 10.6477 8.04028 10.2188 7.5 10.2188C6.95972 10.2188 6.52174 10.6477 6.52174 11.1768C6.52174 11.7059 6.95972 12.1348 7.5 12.1348Z"
                                              fill="#074A5D"/>
                                        <Path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M11.413 12.7735C12.3135 12.7735 13.0435 12.0586 13.0435 11.1768C13.0435 10.295 12.3135 9.5801 11.413 9.5801C10.5126 9.5801 9.78261 10.295 9.78261 11.1768C9.78261 12.0586 10.5126 12.7735 11.413 12.7735ZM11.413 12.1348C11.9533 12.1348 12.3913 11.7059 12.3913 11.1768C12.3913 10.6477 11.9533 10.2188 11.413 10.2188C10.8728 10.2188 10.4348 10.6477 10.4348 11.1768C10.4348 11.7059 10.8728 12.1348 11.413 12.1348Z"
                                              fill="#074A5D"/>
                                        <Path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M3.58696 12.7735C4.48742 12.7735 5.21739 12.0586 5.21739 11.1768C5.21739 10.295 4.48742 9.5801 3.58696 9.5801C2.68649 9.5801 1.95652 10.295 1.95652 11.1768C1.95652 12.0586 2.68649 12.7735 3.58696 12.7735ZM3.58696 12.1348C4.12724 12.1348 4.56522 11.7059 4.56522 11.1768C4.56522 10.6477 4.12724 10.2188 3.58696 10.2188C3.04668 10.2188 2.6087 10.6477 2.6087 11.1768C2.6087 11.7059 3.04668 12.1348 3.58696 12.1348Z"
                                              fill="#074A5D"/>
                                    </Svg>
                                    <Text style={{
                                        marginLeft: 10,
                                        fontSize: 12,
                                        lineHeight: 14,
                                        fontFamily: 'PFBeauSansPro-Regular',
                                    }}>24.06.2019</Text>

                                </View>
                                <View style={{
                                    height: 1,
                                    width: "100%",
                                    backgroundColor: "#E7EDF8",
                                    marginTop: 20,
                                    marginBottom: 20,
                                }}></View>
                                {/*start*/}
                                <View style={{
                                    flexDirection: "row",

                                }}>
                                    <Image style={{
                                        width: 60, height: 60,
                                        borderWidth: 1,
                                        borderColor: "rgba(117,121,130,0.34)",
                                        borderRadius: 5
                                    }}
                                           source={{uri: "https://www.prodesigns.com/backend/img/sliders/3d-logo-design/1511862820-epicinfo.png"}}
                                    ></Image>
                                    <View style={{
                                        width: "50%",
                                        paddingLeft: 20,
                                        justifyContent: "space-between"
                                    }}>
                                        <Text style={{
                                            fontWeight: "bold",
                                            fontFamily: 'PFBeauSansPro-Bold',
                                            fontSize: 14,
                                            color: "#262626",
                                            lineHeight: 17
                                        }}>RDPgroup</Text>
                                        <Text style={{
                                            fontSize: 14,
                                            lineHeight: 25,
                                            fontFamily: 'PFBeauSansPro-Regular',

                                        }}>Грузчик</Text>
                                        <Text style={{
                                            fontSize: 14,
                                            lineHeight: 25,
                                            fontFamily: 'PFBeauSansPro-Regular',

                                        }}>Оплата на:</Text>
                                    </View>
                                    <View style={{
                                        justifyContent: "space-between"
                                    }}>
                                        <Text style={{
                                            textAlign: "right",
                                            fontSize: 16,
                                            color: "#10BD55",
                                            fontWeight: "bold",
                                            fontFamily: 'PFBeauSansPro-Bold',
                                        }}>9 500 ₽</Text>
                                        <View style={{
                                            flexDirection: "row",
                                            alignItems: "flex-end",
                                            position: "relative",
                                            top: -5,
                                        }}>
                                            <Svg width="22" height="17" viewBox="0 0 22 17" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <Path
                                                    d="M20.1667 0H1.83333C0.821181 0 0 0.815848 0 1.82143V15.1786C0 16.1842 0.821181 17 1.83333 17H20.1667C21.1788 17 22 16.1842 22 15.1786V1.82143C22 0.815848 21.1788 0 20.1667 0ZM1.83333 1.21429H20.1667C20.5028 1.21429 20.7778 1.4875 20.7778 1.82143V3.64286H1.22222V1.82143C1.22222 1.4875 1.49722 1.21429 1.83333 1.21429ZM20.1667 15.7857H1.83333C1.49722 15.7857 1.22222 15.5125 1.22222 15.1786V7.28571H20.7778V15.1786C20.7778 15.5125 20.5028 15.7857 20.1667 15.7857ZM7.33333 12.5982V12.9018C7.33333 13.1522 7.12708 13.3571 6.875 13.3571H4.125C3.87292 13.3571 3.66667 13.1522 3.66667 12.9018V12.5982C3.66667 12.3478 3.87292 12.1429 4.125 12.1429H6.875C7.12708 12.1429 7.33333 12.3478 7.33333 12.5982ZM14.6667 12.5982V12.9018C14.6667 13.1522 14.4604 13.3571 14.2083 13.3571H9.01389C8.76181 13.3571 8.55556 13.1522 8.55556 12.9018V12.5982C8.55556 12.3478 8.76181 12.1429 9.01389 12.1429H14.2083C14.4604 12.1429 14.6667 12.3478 14.6667 12.5982Z"
                                                    fill="#074A5D"/>
                                            </Svg>
                                            <Text style={{
                                                marginLeft: 10,
                                                fontFamily: 'PFBeauSansPro-Regular',
                                                textAlign: "right",
                                                color: "#074A5D",
                                                fontSize: 14,
                                                alignItems: "center"
                                            }}>5648...4685</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{
                                    height: 1,
                                    width: "100%",
                                    backgroundColor: "#E7EDF8",
                                    marginTop: 20,
                                    marginBottom: 20,
                                }}></View>
                                {/*end*/}
                                {/*start*/}
                                <View style={{
                                    flexDirection: "row",

                                }}>
                                    <Image style={{
                                        width: 60, height: 60,
                                        borderWidth: 1,
                                        borderColor: "rgba(117,121,130,0.34)",
                                        borderRadius: 5
                                    }}
                                           source={{uri: "https://www.prodesigns.com/backend/img/sliders/3d-logo-design/1511862820-epicinfo.png"}}
                                    ></Image>
                                    <View style={{
                                        width: "50%",
                                        paddingLeft: 20,
                                        justifyContent: "space-between"
                                    }}>
                                        <Text style={{
                                            fontWeight: "bold",
                                            fontFamily: 'PFBeauSansPro-Bold',
                                            fontSize: 14,
                                            color: "#262626",
                                            lineHeight: 17
                                        }}>RDPgroup</Text>
                                        <Text style={{
                                            fontSize: 14,
                                            lineHeight: 25,
                                            fontFamily: 'PFBeauSansPro-Regular',

                                        }}>Грузчик</Text>
                                        <Text style={{
                                            fontSize: 14,
                                            lineHeight: 25,
                                            fontFamily: 'PFBeauSansPro-Regular',

                                        }}>Оплата на:</Text>
                                    </View>
                                    <View style={{
                                        justifyContent: "space-between"
                                    }}>
                                        <Text style={{
                                            textAlign: "right",
                                            fontSize: 16,
                                            color: "#10BD55",
                                            fontWeight: "bold",
                                            fontFamily: 'PFBeauSansPro-Bold',
                                        }}>9 500 ₽</Text>
                                        <View style={{
                                            flexDirection: "row",
                                            alignItems: "flex-end",
                                            position: "relative",
                                            top: -5,
                                        }}>
                                            <Svg width="22" height="17" viewBox="0 0 22 17" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <Path
                                                    d="M20.1667 0H1.83333C0.821181 0 0 0.815848 0 1.82143V15.1786C0 16.1842 0.821181 17 1.83333 17H20.1667C21.1788 17 22 16.1842 22 15.1786V1.82143C22 0.815848 21.1788 0 20.1667 0ZM1.83333 1.21429H20.1667C20.5028 1.21429 20.7778 1.4875 20.7778 1.82143V3.64286H1.22222V1.82143C1.22222 1.4875 1.49722 1.21429 1.83333 1.21429ZM20.1667 15.7857H1.83333C1.49722 15.7857 1.22222 15.5125 1.22222 15.1786V7.28571H20.7778V15.1786C20.7778 15.5125 20.5028 15.7857 20.1667 15.7857ZM7.33333 12.5982V12.9018C7.33333 13.1522 7.12708 13.3571 6.875 13.3571H4.125C3.87292 13.3571 3.66667 13.1522 3.66667 12.9018V12.5982C3.66667 12.3478 3.87292 12.1429 4.125 12.1429H6.875C7.12708 12.1429 7.33333 12.3478 7.33333 12.5982ZM14.6667 12.5982V12.9018C14.6667 13.1522 14.4604 13.3571 14.2083 13.3571H9.01389C8.76181 13.3571 8.55556 13.1522 8.55556 12.9018V12.5982C8.55556 12.3478 8.76181 12.1429 9.01389 12.1429H14.2083C14.4604 12.1429 14.6667 12.3478 14.6667 12.5982Z"
                                                    fill="#074A5D"/>
                                            </Svg>
                                            <Text style={{
                                                marginLeft: 10,
                                                fontFamily: 'PFBeauSansPro-Regular',
                                                textAlign: "right",
                                                color: "#074A5D",
                                                fontSize: 14,
                                                alignItems: "center"
                                            }}>5648...4685</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{
                                    height: 1,
                                    width: "100%",
                                    backgroundColor: "#E7EDF8",
                                    marginTop: 20,
                                    marginBottom: 20,
                                }}></View>
                                {/*end*/}
                                {/*  end date*/}
                            </Tab>
                            <Tab tabStyle={{backgroundColor: styles.statusBar_bgcolor.backgroundColor,}}
                                 activeTabStyle={{backgroundColor: styles.statusBar_bgcolor.backgroundColor,}}
                                 textStyle={{
                                     color: '#074A5D',
                                     fontSize: verticalScale(16),
                                     fontFamily: 'PFBeauSansPro-Regular',
                                 }}
                                 activeTextStyle={{
                                     color: '#074A5D',
                                     fontSize: verticalScale(16),
                                     fontFamily: 'PFBeauSansPro-Bold',
                                 }} heading="Пока тут история">
                                <View style={styles.content_global}>
                                    <View style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginTop: 20
                                    }}>
                                        <View>
                                            <View style={{flexDirection: "row"}}>
                                                <Svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <Path
                                                        d="M11.3854 3.68484L8.10841 3.22723L6.64374 0.382694C6.38131 -0.124337 5.62094 -0.130782 5.35626 0.382694L3.89159 3.22723L0.614589 3.68484C0.0269265 3.76648 -0.208587 4.46043 0.21758 4.85789L2.58842 7.07078L2.02767 10.1968C1.92674 10.7618 2.54804 11.185 3.06842 10.9208L6 9.4448L8.93159 10.9208C9.45196 11.1829 10.0733 10.7618 9.97233 10.1968L9.41158 7.07078L11.7824 4.85789C12.2086 4.46043 11.9731 3.76648 11.3854 3.68484Z"
                                                        fill="#074A5D"/>
                                                </Svg>
                                                <Svg style={{marginLeft: 5}} width="12" height="12" viewBox="0 0 12 12"
                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <Path
                                                        d="M11.3854 3.68484L8.10841 3.22723L6.64374 0.382694C6.38131 -0.124337 5.62094 -0.130782 5.35626 0.382694L3.89159 3.22723L0.614589 3.68484C0.0269265 3.76648 -0.208587 4.46043 0.21758 4.85789L2.58842 7.07078L2.02767 10.1968C1.92674 10.7618 2.54804 11.185 3.06842 10.9208L6 9.4448L8.93159 10.9208C9.45196 11.1829 10.0733 10.7618 9.97233 10.1968L9.41158 7.07078L11.7824 4.85789C12.2086 4.46043 11.9731 3.76648 11.3854 3.68484ZM8.64224 6.83015L9.26579 10.3106L6 8.66922L2.73645 10.3128L3.36 6.8323L0.717766 4.36375L4.36711 3.85672L6 0.687772L7.63289 3.85672L11.2822 4.36375L8.64224 6.83015Z"
                                                        fill="#074A5D"/>
                                                </Svg>
                                                <Svg style={{marginLeft: 5}} width="12" height="12" viewBox="0 0 12 12"
                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <Path
                                                        d="M11.3854 3.68484L8.10841 3.22723L6.64374 0.382694C6.38131 -0.124337 5.62094 -0.130782 5.35626 0.382694L3.89159 3.22723L0.614589 3.68484C0.0269265 3.76648 -0.208587 4.46043 0.21758 4.85789L2.58842 7.07078L2.02767 10.1968C1.92674 10.7618 2.54804 11.185 3.06842 10.9208L6 9.4448L8.93159 10.9208C9.45196 11.1829 10.0733 10.7618 9.97233 10.1968L9.41158 7.07078L11.7824 4.85789C12.2086 4.46043 11.9731 3.76648 11.3854 3.68484ZM8.64224 6.83015L9.26579 10.3106L6 8.66922L2.73645 10.3128L3.36 6.8323L0.717766 4.36375L4.36711 3.85672L6 0.687772L7.63289 3.85672L11.2822 4.36375L8.64224 6.83015Z"
                                                        fill="#074A5D"/>
                                                </Svg>
                                                <Svg style={{marginLeft: 5}} width="12" height="12" viewBox="0 0 12 12"
                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <Path
                                                        d="M11.3854 3.68484L8.10841 3.22723L6.64374 0.382694C6.38131 -0.124337 5.62094 -0.130782 5.35626 0.382694L3.89159 3.22723L0.614589 3.68484C0.0269265 3.76648 -0.208587 4.46043 0.21758 4.85789L2.58842 7.07078L2.02767 10.1968C1.92674 10.7618 2.54804 11.185 3.06842 10.9208L6 9.4448L8.93159 10.9208C9.45196 11.1829 10.0733 10.7618 9.97233 10.1968L9.41158 7.07078L11.7824 4.85789C12.2086 4.46043 11.9731 3.76648 11.3854 3.68484ZM8.64224 6.83015L9.26579 10.3106L6 8.66922L2.73645 10.3128L3.36 6.8323L0.717766 4.36375L4.36711 3.85672L6 0.687772L7.63289 3.85672L11.2822 4.36375L8.64224 6.83015Z"
                                                        fill="#074A5D"/>
                                                </Svg>
                                                <Svg style={{marginLeft: 5}} width="12" height="12" viewBox="0 0 12 12"
                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <Path
                                                        d="M11.3854 3.68484L8.10841 3.22723L6.64374 0.382694C6.38131 -0.124337 5.62094 -0.130782 5.35626 0.382694L3.89159 3.22723L0.614589 3.68484C0.0269265 3.76648 -0.208587 4.46043 0.21758 4.85789L2.58842 7.07078L2.02767 10.1968C1.92674 10.7618 2.54804 11.185 3.06842 10.9208L6 9.4448L8.93159 10.9208C9.45196 11.1829 10.0733 10.7618 9.97233 10.1968L9.41158 7.07078L11.7824 4.85789C12.2086 4.46043 11.9731 3.76648 11.3854 3.68484ZM8.64224 6.83015L9.26579 10.3106L6 8.66922L2.73645 10.3128L3.36 6.8323L0.717766 4.36375L4.36711 3.85672L6 0.687772L7.63289 3.85672L11.2822 4.36375L8.64224 6.83015Z"
                                                        fill="#074A5D"/>
                                                </Svg>
                                            </View>

                                            <Text style={[Style.textBase, {marginTop: 10}]}>
                                                Общий рейтинг
                                            </Text>
                                        </View>

                                        <View style={{flexDirection: "row"}}>
                                            <View style={[Style.block_view]}>
                                                <View style={{justifyContent: "flex-end"}}>
                                                    <Text style={{
                                                        color: "#45E238",
                                                        fontFamily: 'PFBeauSansPro-Bold',
                                                        lineHeight: 15,
                                                        fontSize: 16
                                                    }}>отлично</Text>
                                                    <Text style={{color: "#ffff", lineHeight: 15, fontSize: 12}}>12
                                                        отзывов</Text>
                                                </View>
                                                <View style={{alignItems: "center", justifyContent: "flex-end"}}>
                                                    <Text style={[Style.title_view_greens, {fontSize: 32}]}>4.8</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{marginTop: 30}}>
                                        <View style={{
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            marginTop: 10
                                        }}>
                                            <Text style={[Style.textBase]}>Кол-во выполненых работ</Text>
                                            <Text style={[Style.textBase]}>1</Text>
                                        </View>
                                        <View style={{
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            marginTop: 10
                                        }}>
                                            <Text style={[Style.textBase, {color: "#A1AABA"}]}>Отмен бронирований</Text>
                                            <Text style={[Style.textBase, {color: "#A1AABA"}]}>0%</Text>
                                        </View>
                                        <View style={{
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            marginTop: 10
                                        }}>
                                            <Text style={[Style.textBase, {color: "#A1AABA"}]}>Опоздания</Text>
                                            <Text style={[Style.textBase, {color: "#A1AABA"}]}>0%</Text>
                                        </View>
                                        <View style={{
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            marginTop: 10
                                        }}>
                                            <Text style={[Style.textBase, {color: "#A1AABA"}]}>Отзыв не оставлен</Text>
                                            <Text style={[Style.textBase, {color: "#A1AABA"}]}>0%</Text>
                                        </View>

                                        <View style={[Style.borderBg, {marginTop: 30, marginBottom: 30}]}/>
                                        <View style={{
                                            flexDirection: "row",
                                            alignItem: "center",
                                            justifyContent: "space-between"
                                        }}>
                                            <Text style={{
                                                fontFamily: 'PFBeauSansPro-Regular',
                                                fontSize: verticalScale(14),
                                                color: "#262626",
                                            }}>Отзывы отсутствуют</Text>
                                            <View style={{flexDirection: "row", alignItems: "center"}}>
                                                <Text style={{
                                                    marginRight: 10,
                                                    color: "#A1AABA",
                                                    fontSize: verticalScale(14),
                                                    fontFamily: 'PFBeauSansPro-Regular',
                                                }}>мои отзывы</Text>
                                                <Svg width="3" height="7" viewBox="0 0 3 7" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <Path
                                                        d="M2.9987 3.46646C2.99205 3.40056 2.96769 3.3384 2.92881 3.28806L0.544091 0.14393C0.520559 0.105794 0.490094 0.0735539 0.454657 0.0492851C0.419219 0.0250163 0.379596 0.00925745 0.33834 0.00302359C0.297083 -0.00321026 0.255108 0.000219142 0.215118 0.0130909C0.175128 0.0259627 0.138009 0.0479914 0.106154 0.077758C0.0742985 0.107525 0.0484123 0.144369 0.0301628 0.185918C0.0119133 0.227467 0.00170516 0.2728 0.000195933 0.318995C-0.0013133 0.365191 0.00590986 0.411225 0.0214001 0.454133C0.0368904 0.49704 0.0603043 0.53587 0.0901336 0.568121L2.31398 3.50006L0.0901336 6.43219C0.0335661 6.49354 0.00126495 6.57731 0.000335914 6.6651C-0.000593121 6.75288 0.0299261 6.83748 0.0851797 6.90028C0.140433 6.96308 0.215895 6.99895 0.294964 6.99998C0.374034 7.00101 0.450234 6.96713 0.506801 6.90578C0.520763 6.89064 0.533372 6.87403 0.544451 6.85618L2.92881 3.71205C2.95464 3.67837 2.97413 3.63929 2.98614 3.59711C2.99814 3.55493 3.00241 3.5105 2.9987 3.46646Z"
                                                        fill="#A1AABA"/>
                                                </Svg>
                                            </View>

                                        </View>
                                    </View>

                                </View>
                            </Tab>

                        </Tabs>
                    </Container>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryInnerPay);