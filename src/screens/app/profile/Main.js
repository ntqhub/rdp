import React, {Component} from "react";
import {connect} from "react-redux";
import {View, Image, ScrollView, SafeAreaView, ImageBackground, TouchableOpacity, BackHandler} from "react-native";
import {Text, Left, Right, Item,} from "native-base";
import Svg, {Path, G, Circle, Rect} from "react-native-svg";

import styles from "../../../theme/Style";
import NavigationOptions from "../../../lib/NavigationOptions";
import {verticalScale} from "../../../lib/Scaling";
import styled from "../../../theme/StyleRequisites";
import Style from "../../../theme/Profile";
import StatusBarComp from "../../../components/StatusBarComp";

class ProfileMainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static navigationOptions = ({navigation}) =>
        NavigationOptions(navigation, {
            title: "Мой профиль",
            left_func: "BottomTabStack",
            margin_top: false
    });

    handleBackPress = () => {
        this.props.navigation.navigate("BottomTabStack");
        return true;
    };

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
    }

    render() {
        return (
            <SafeAreaView style={styles.container_global}>
                <StatusBarComp/>

                <ScrollView>
                    <View
                        style={[
                            Style.dop_block,
                            {
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start"
                            }
                        ]}
                    >
                        <View>
                            <Image
                                source={{
                                    uri:
                                        "https://dezinfo.net/images5/image/11.2014/magneto_boy/magneto_boy_04.jpg"
                                }}
                                style={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: 100,
                                    marginRight: 20
                                }}
                            />
                        </View>
                        <View style={{justifyContent: "flex-start"}}>
                            <View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "flex-start"
                                    }}
                                >
                                    <Text style={{marginRight: 40, color: "#074A5D"}}>
                                        Заменить фотографию{" "}
                                    </Text>
                                    <Svg
                                        width="16"
                                        height="14"
                                        viewBox="0 0 16 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <Path
                                            d="M10.1344 1C10.2375 1 10.3312 1.06562 10.3687 1.1625L11.0594 3H14.5C14.775 3 15 3.225 15 3.5V12.5C15 12.775 14.775 13 14.5 13H1.5C1.225 13 1 12.775 1 12.5V3.5C1 3.225 1.225 3 1.5 3H4.94375L5.57188 1.325C5.64375 1.13125 5.83125 1 6.04063 1H10.1344V1ZM10.1344 0H6.04063C5.41563 0 4.85625 0.3875 4.6375 0.971875L4.25 2H1.5C0.671875 2 0 2.67188 0 3.5V12.5C0 13.3281 0.671875 14 1.5 14H14.5C15.3281 14 16 13.3281 16 12.5V3.5C16 2.67188 15.3281 2 14.5 2H11.75L11.3031 0.8125C11.1219 0.321875 10.6562 0 10.1344 0V0ZM8 11.75C5.93125 11.75 4.25 10.0687 4.25 8C4.25 5.93125 5.93125 4.25 8 4.25C10.0687 4.25 11.75 5.93125 11.75 8C11.75 10.0687 10.0687 11.75 8 11.75ZM8 5.25C6.48438 5.25 5.25 6.48438 5.25 8C5.25 9.51562 6.48438 10.75 8 10.75C9.51562 10.75 10.75 9.51562 10.75 8C10.75 6.48438 9.51562 5.25 8 5.25Z"
                                            fill="#074A5D"
                                        />
                                    </Svg>
                                </View>
                            </View>
                            <View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        marginTop: 22,
                                        justifyContent: "space-between"
                                    }}
                                >
                                    <Text style={{marginRight: 40, color: "#074A5D"}}>
                                        Удалить фотографию{" "}
                                    </Text>
                                    <Svg
                                        width="11"
                                        height="14"
                                        viewBox="0 0 11 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <Path
                                            d="M7.77134 14H2.96659C1.96752 14 1.15248 13.1981 1.15248 12.2152V4.02211C1.15248 3.80871 1.32995 3.63411 1.54685 3.63411C1.76376 3.63411 1.94122 3.80871 1.94122 4.02211V12.2217C1.94122 12.7778 2.40132 13.2305 2.96659 13.2305H7.77134C8.33661 13.2305 8.79671 12.7778 8.79671 12.2217V4.02211C8.79671 3.80871 8.97418 3.63411 9.19108 3.63411C9.40798 3.63411 9.58545 3.80871 9.58545 4.02211V12.2217C9.57888 13.2046 8.77042 14 7.77134 14Z"
                                            fill="#074A5D"
                                        />
                                        <Path
                                            d="M4.05118 12.0666C3.83428 12.0666 3.65681 11.892 3.65681 11.6786V3.91869C3.65681 3.7053 3.83428 3.5307 4.05118 3.5307C4.26808 3.5307 4.44555 3.7053 4.44555 3.91869V11.6786C4.44555 11.892 4.26808 12.0666 4.05118 12.0666Z"
                                            fill="#074A5D"
                                        />
                                        <Path
                                            d="M6.94323 12.0666C6.72633 12.0666 6.54886 11.892 6.54886 11.6786V3.91869C6.54886 3.7053 6.72633 3.5307 6.94323 3.5307C7.16014 3.5307 7.33761 3.7053 7.33761 3.91869V11.6786C7.33761 11.892 7.16014 12.0666 6.94323 12.0666Z"
                                            fill="#074A5D"
                                        />
                                        <Path
                                            d="M10.7092 2.35383C10.6435 2.33443 9.38152 1.99817 7.40967 1.84297C7.31765 0.80832 6.43689 0 5.36551 0C4.28756 0 3.40023 0.821253 3.32136 1.86237C1.48096 2.02403 0.350426 2.34089 0.284697 2.36029C0.0743661 2.41849 -0.0439452 2.63189 0.0152104 2.83882C0.0743661 3.04575 0.297843 3.16215 0.501601 3.10395C0.52132 3.09748 2.50632 2.54782 5.45096 2.54782C8.3956 2.54782 10.4792 3.09748 10.4989 3.10395C10.5318 3.11688 10.5712 3.11688 10.6041 3.11688C10.775 3.11688 10.9327 3.00048 10.9853 2.83235C11.0445 2.62542 10.9196 2.41203 10.7092 2.35383ZM5.45753 1.76537C4.99086 1.76537 4.54391 1.7783 4.12324 1.7977C4.22841 1.21571 4.74109 0.76952 5.36551 0.76952C5.98336 0.76952 6.50262 1.20925 6.60778 1.79124C6.24627 1.7783 5.85848 1.76537 5.45753 1.76537Z"
                                            fill="#074A5D"
                                        />
                                    </Svg>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[{marginLeft: 20}]}>
                        <View style={[{flexDirection: "row", margin: 3, paddingLeft: 7}]}>
                            <Svg
                                width="9"
                                height="18"
                                viewBox="0 0 9 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <Path
                                    d="M7.15298 4.93151C7.55933 4.41728 7.8 3.78141 7.8 3.09375C7.8 1.38786 6.31961 0 4.5 0C2.68039 0 1.2 1.38786 1.2 3.09375C1.2 3.78141 1.44068 4.41728 1.84703 4.93151C0.771938 5.29024 0 6.25335 0 7.38281V11.0742C0 11.944 0.639038 12.6765 1.5 12.8808V16.1367C1.5 17.1641 2.3916 18 3.4875 18H5.5125C6.6084 18 7.5 17.1641 7.5 16.1367V12.8808C8.36096 12.6765 9 11.944 9 11.0742V7.38281C9 6.25335 8.22806 5.29024 7.15298 4.93151ZM4.5 1.125C5.6598 1.125 6.6 2.00644 6.6 3.09375C6.6 4.18106 5.6598 5.0625 4.5 5.0625C3.3402 5.0625 2.4 4.18106 2.4 3.09375C2.4 2.00644 3.3402 1.125 4.5 1.125ZM7.8 11.0742C7.8 11.482 7.44743 11.8125 7.0125 11.8125H6.3V16.1367C6.3 16.5445 5.94743 16.875 5.5125 16.875H3.4875C3.05258 16.875 2.7 16.5445 2.7 16.1367V11.8125H1.9875C1.55258 11.8125 1.2 11.482 1.2 11.0742V7.38281C1.2 6.56733 1.90515 5.90625 2.775 5.90625H3.126C3.97766 6.27339 4.98563 6.28924 5.874 5.90625H6.225C7.09485 5.90625 7.8 6.56733 7.8 7.38281V11.0742Z"
                                    fill="#074A5D"
                                />
                            </Svg>
                            <Text style={{marginLeft: 15}}>мужчина,</Text>
                            <Text style={{marginLeft: 3}}>33 года</Text>
                        </View>
                        <View style={[{flexDirection: "row", margin: 3}]}>
                            <Svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <Path
                                    d="M9 0C4.02942 0 0 4.02942 0 9C0 13.9706 4.02942 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02942 13.9706 0 9 0ZM9 16.8387C4.69365 16.8387 1.16129 13.3528 1.16129 9C1.16129 4.69368 4.64716 1.16129 9 1.16129C13.3064 1.16129 16.8387 4.64716 16.8387 9C16.8387 13.3063 13.3528 16.8387 9 16.8387Z"
                                    fill="#074A5D"
                                />
                                <Path
                                    d="M12.6881 13C12.3118 13 12.3806 12.6035 12.3806 12.5298V6.10788C12.1974 6.28357 9.6163 7.96012 9.4627 8.14412C9.83985 8.46024 10.2307 8.92225 10.2307 9.55371C10.2307 10.2635 9.79556 11.12 9.00205 11.12V10.6498C9.54371 10.6498 9.76988 9.98908 9.76988 9.55275C9.76988 9.11642 9.48144 8.63952 9.00205 8.29974V7.67282C9.00205 7.67282 11.7777 5.65511 12.227 5.32332C12.6762 4.99153 12.9948 4.81082 12.9948 5.32332V12.5298C12.9951 12.698 13.0644 13 12.6881 13ZM7.77252 9.55199C7.77252 8.91991 8.16366 8.45771 8.54127 8.14144C8.38752 7.95713 5.80313 6.27982 5.62002 6.10398V12.5298C5.62002 12.6033 5.68936 13 5.31252 13C4.93568 13 5.00502 12.6978 5.00502 12.5298V5.32034C5.00502 4.80752 5.32405 4.98839 5.77377 5.32034C6.22349 5.65229 9.00252 7.67125 9.00252 7.67125V8.29817C8.52251 8.63811 8.23377 9.11613 8.23377 9.55199C8.23377 9.98785 8.45962 10.6498 9.00205 10.6498V11.12C8.20747 11.12 7.77252 10.2621 7.77252 9.55199Z"
                                    fill="#074A5D"
                                />
                            </Svg>

                            <Text style={{marginLeft: 15}}>в проекте с 2018</Text>
                        </View>
                        <View style={[{flexDirection: "row", margin: 3}]}>
                            <Svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <Path
                                    d="M9 0C4.02942 0 0 4.02942 0 9C0 13.9706 4.02942 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02942 13.9706 0 9 0ZM9 16.8387C4.69365 16.8387 1.16129 13.3528 1.16129 9C1.16129 4.69368 4.64716 1.16129 9 1.16129C13.3064 1.16129 16.8387 4.64716 16.8387 9C16.8387 13.3063 13.3528 16.8387 9 16.8387ZM14.1398 6.86029L7.59012 13.3574C7.41937 13.5268 7.14364 13.5257 6.97427 13.3549L3.85773 10.2132C3.68837 10.0425 3.68946 9.76674 3.8602 9.59737L4.16939 9.29069C4.34014 9.12132 4.61587 9.12241 4.78524 9.29315L7.2884 11.8165L13.2197 5.93278C13.3905 5.76341 13.6662 5.7645 13.8356 5.93525L14.1423 6.24444C14.3117 6.41519 14.3105 6.69092 14.1398 6.86029Z"
                                    fill="#074A5D"
                                />
                            </Svg>

                            <Text style={{marginLeft: 15}}>профиль подтвержден</Text>
                        </View>
                        <View style={[{flexDirection: "row", margin: 3}]}>
                            <Svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <Path
                                    d="M16.4734 2.94199L9.6523 0.129214C9.44453 0.0439093 9.22179 0 8.99684 0C8.7719 0 8.54916 0.0439093 8.34138 0.129214L1.52033 2.94199C0.884408 3.20217 0.46875 3.81746 0.46875 4.49956C0.46875 11.4788 4.53651 16.3027 8.33783 17.8708C8.75704 18.0431 9.22954 18.0431 9.64875 17.8708C12.6934 16.6156 17.5214 12.2804 17.5214 4.49956C17.5214 3.81746 17.1057 3.20217 16.4734 2.94199ZM9.21533 16.8336C9.07322 16.8898 8.91691 16.8898 8.77836 16.8336C5.30033 15.4694 1.60559 10.6877 1.60559 4.49956C1.60559 4.27102 1.74414 4.0671 1.95375 3.9792L8.7748 1.16642C8.91336 1.11017 9.07322 1.11017 9.21178 1.16642L16.0328 3.9792C16.246 4.0671 16.3845 4.27102 16.381 4.49956C16.3845 10.6877 12.6898 15.4694 9.21533 16.8336ZM14.054 5.40668C13.887 5.24143 13.617 5.24143 13.4501 5.40317L7.64507 11.1026L5.19375 8.65895C5.02678 8.4937 4.75678 8.4937 4.5898 8.65544L4.28783 8.95429C4.12086 9.11954 4.12086 9.38676 4.28428 9.55201L7.33599 12.5968C7.50296 12.7621 7.77296 12.7621 7.93993 12.6004L14.3524 6.30677C14.5194 6.14152 14.5194 5.87431 14.356 5.70906L14.054 5.40668Z"
                                    fill="#074A5D"
                                />
                            </Svg>

                            <Text style={{marginLeft: 15}}>надежный исполнитель</Text>
                        </View>
                        <View
                            style={[Style.borderBg, {marginTop: 15, marginBottom: 15}]}
                        />
                    </View>
                    {/*rating*/}
                    <View style={[{marginLeft: 20, marginRight: 20}]}>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}
                        >
                            <View>
                                <Svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <Path
                                        d="M11.3854 3.68484L8.10841 3.22723L6.64374 0.382694C6.38131 -0.124337 5.62094 -0.130782 5.35626 0.382694L3.89159 3.22723L0.614589 3.68484C0.0269265 3.76648 -0.208587 4.46043 0.21758 4.85789L2.58842 7.07078L2.02767 10.1968C1.92674 10.7618 2.54804 11.185 3.06842 10.9208L6 9.4448L8.93159 10.9208C9.45196 11.1829 10.0733 10.7618 9.97233 10.1968L9.41158 7.07078L11.7824 4.85789C12.2086 4.46043 11.9731 3.76648 11.3854 3.68484Z"
                                        fill="#074A5D"
                                    />
                                </Svg>

                                <Text style={[Style.textBase, {marginTop: 15}]}>
                                    Общий рейтинг
                                </Text>
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <View style={Style.block_view}>
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

                        <View style={{marginTop: 20}}>
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between"
                                }}
                            >
                                <Text style={[Style.textBase]}>Кол-во выполненых работ</Text>
                                <Text style={[Style.textBase]}>2</Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between"
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        width: "70%"
                                    }}
                                >
                                    <Text style={[Style.textBaseGreen]}>Отмена бронирований</Text>
                                    <Text style={[Style.textBaseGreen]}>100%</Text>
                                </View>
                                <Text style={[Style.textBase, {marginTop: 15}]}>Супер</Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between"
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        width: "70%"
                                    }}
                                >
                                    <Text style={[Style.textBaseGreen]}>Опозданий</Text>
                                    <Text style={[Style.textBaseGreen]}>50%</Text>
                                </View>
                                <Text style={[Style.textBase, {marginTop: 15}]}>Хорошо</Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between"
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        width: "70%"
                                    }}
                                >
                                    <Text style={[Style.textBaseGreen]}>Отзыв не оставлен</Text>
                                    <Text style={[Style.textBaseGreen]}>50%</Text>
                                </View>
                                <Text style={[Style.textBase, {marginTop: 15}]}>Плохо</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[Style.dop_block]}>
                        <Text
                            style={{
                                fontSize: 16
                            }}
                        >
                            {" "}
                            Том подтвердил
                        </Text>

                        <View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    marginBottom: 10,
                                    marginTop: 10
                                }}
                            >
                                <Svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <Path
                                        d="M9 0C4.02942 0 0 4.02942 0 9C0 13.9706 4.02942 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02942 13.9706 0 9 0ZM9 16.8387C4.69365 16.8387 1.16129 13.3528 1.16129 9C1.16129 4.69368 4.64716 1.16129 9 1.16129C13.3064 1.16129 16.8387 4.64716 16.8387 9C16.8387 13.3063 13.3528 16.8387 9 16.8387ZM14.1398 6.86029L7.59012 13.3574C7.41937 13.5268 7.14364 13.5257 6.97427 13.3549L3.85773 10.2132C3.68837 10.0425 3.68946 9.76674 3.8602 9.59737L4.16939 9.29069C4.34014 9.12132 4.61587 9.12241 4.78524 9.29315L7.2884 11.8165L13.2197 5.93278C13.3905 5.76341 13.6662 5.7645 13.8356 5.93525L14.1423 6.24444C14.3117 6.41519 14.3105 6.69092 14.1398 6.86029Z"
                                        fill="#074A5D"
                                    />
                                </Svg>
                                <Text style={{marginLeft: 10}}>Паспортные данные</Text>
                            </View>
                            <View style={{flexDirection: "row", marginBottom: 10}}>
                                <Svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <Path
                                        d="M9 0C4.02942 0 0 4.02942 0 9C0 13.9706 4.02942 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02942 13.9706 0 9 0ZM9 16.8387C4.69365 16.8387 1.16129 13.3528 1.16129 9C1.16129 4.69368 4.64716 1.16129 9 1.16129C13.3064 1.16129 16.8387 4.64716 16.8387 9C16.8387 13.3063 13.3528 16.8387 9 16.8387ZM14.1398 6.86029L7.59012 13.3574C7.41937 13.5268 7.14364 13.5257 6.97427 13.3549L3.85773 10.2132C3.68837 10.0425 3.68946 9.76674 3.8602 9.59737L4.16939 9.29069C4.34014 9.12132 4.61587 9.12241 4.78524 9.29315L7.2884 11.8165L13.2197 5.93278C13.3905 5.76341 13.6662 5.7645 13.8356 5.93525L14.1423 6.24444C14.3117 6.41519 14.3105 6.69092 14.1398 6.86029Z"
                                        fill="#074A5D"
                                    />
                                </Svg>
                                <Text style={{marginLeft: 10}}>Номер телефона</Text>
                            </View>
                            <View style={{flexDirection: "row", marginBottom: 10}}>
                                <Svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <Path
                                        d="M9 0C4.02942 0 0 4.02942 0 9C0 13.9706 4.02942 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02942 13.9706 0 9 0ZM9 16.8387C4.69365 16.8387 1.16129 13.3528 1.16129 9C1.16129 4.69368 4.64716 1.16129 9 1.16129C13.3064 1.16129 16.8387 4.64716 16.8387 9C16.8387 13.3063 13.3528 16.8387 9 16.8387ZM14.1398 6.86029L7.59012 13.3574C7.41937 13.5268 7.14364 13.5257 6.97427 13.3549L3.85773 10.2132C3.68837 10.0425 3.68946 9.76674 3.8602 9.59737L4.16939 9.29069C4.34014 9.12132 4.61587 9.12241 4.78524 9.29315L7.2884 11.8165L13.2197 5.93278C13.3905 5.76341 13.6662 5.7645 13.8356 5.93525L14.1423 6.24444C14.3117 6.41519 14.3105 6.69092 14.1398 6.86029Z"
                                        fill="#074A5D"
                                    />
                                </Svg>
                                <Text style={{marginLeft: 10}}>Электронную почту</Text>
                            </View>
                        </View>
                    </View>
                    {/*О себе*/}
                    <View style={{marginLeft: 20, marginRight: 20}}>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center"
                                // marginBottom:20,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: verticalScale(18),
                                    fontWeight: "bold",
                                    color: "#262626",
                                    fontFamily: "PFBeauSansPro-Bold",
                                    lineHeight: 19,
                                    marginBottom: 5
                                }}
                            >
                                Обо мне
                            </Text>
                        </View>
                        <Text
                            style={{
                                fontFamily: "PFBeauSansPro-Regular",
                                fontSize: verticalScale(16),
                                color: "#262626",
                                lineHeight: 19,
                                marginBottom: 5
                            }}
                        >
                            Здравствуйте, меня зовут Том, с 2010 года занимаюсь
                            профессионально продажами ювелирной продукции специализируюсь на
                            разных штуках...
                        </Text>
                        <View
                            style={[
                                {
                                    flexDirection: "row",
                                    margin: 3,
                                    paddingLeft: 7,
                                    justifyContent: "flex-start",
                                    marginTop: 5
                                }
                            ]}
                        >
                            <Svg
                                width="15"
                                height="21"
                                viewBox="0 0 15 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <Path
                                    d="M7.5 3.9375C5.43223 3.9375 3.75 5.70384 3.75 7.875C3.75 10.0462 5.43223 11.8125 7.5 11.8125C9.56777 11.8125 11.25 10.0462 11.25 7.875C11.25 5.70384 9.56777 3.9375 7.5 3.9375ZM7.5 10.5C6.12148 10.5 5 9.32245 5 7.875C5 6.42756 6.12148 5.25 7.5 5.25C8.87852 5.25 10 6.42756 10 7.875C10 9.32245 8.87852 10.5 7.5 10.5ZM7.5 0C3.35785 0 0 3.52575 0 7.875C0 11.0501 1.05352 11.9368 6.72922 20.5763C7.10164 21.1412 7.89832 21.1413 8.27082 20.5763C13.9465 11.9368 15 11.0501 15 7.875C15 3.52575 11.6421 0 7.5 0ZM7.5 19.4386C2.05879 11.1763 1.25 10.5203 1.25 7.875C1.25 6.12208 1.90012 4.47411 3.08059 3.23462C4.26105 1.99512 5.83055 1.3125 7.5 1.3125C9.16945 1.3125 10.7389 1.99512 11.9194 3.23462C13.0999 4.47411 13.75 6.12208 13.75 7.875C13.75 10.5201 12.9417 11.1755 7.5 19.4386Z"
                                    fill="#074A5D"
                                />
                            </Svg>
                            <Text style={{marginLeft: 15}}>Проживаю в г. Москва</Text>
                        </View>
                        <View
                            style={[
                                {
                                    flexDirection: "row",
                                    margin: 3,
                                    paddingLeft: 7,
                                    justifyContent: "flex-start",
                                    marginTop: 5
                                }
                            ]}
                        >
                            <Svg
                                width="9"
                                height="18"
                                viewBox="0 0 9 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <Path
                                    d="M7.15298 4.93151C7.55933 4.41728 7.8 3.78141 7.8 3.09375C7.8 1.38786 6.31961 0 4.5 0C2.68039 0 1.2 1.38786 1.2 3.09375C1.2 3.78141 1.44068 4.41728 1.84703 4.93151C0.771938 5.29024 0 6.25335 0 7.38281V11.0742C0 11.944 0.639038 12.6765 1.5 12.8808V16.1367C1.5 17.1641 2.3916 18 3.4875 18H5.5125C6.6084 18 7.5 17.1641 7.5 16.1367V12.8808C8.36096 12.6765 9 11.944 9 11.0742V7.38281C9 6.25335 8.22806 5.29024 7.15298 4.93151ZM4.5 1.125C5.6598 1.125 6.6 2.00644 6.6 3.09375C6.6 4.18106 5.6598 5.0625 4.5 5.0625C3.3402 5.0625 2.4 4.18106 2.4 3.09375C2.4 2.00644 3.3402 1.125 4.5 1.125ZM7.8 11.0742C7.8 11.482 7.44743 11.8125 7.0125 11.8125H6.3V16.1367C6.3 16.5445 5.94743 16.875 5.5125 16.875H3.4875C3.05258 16.875 2.7 16.5445 2.7 16.1367V11.8125H1.9875C1.55258 11.8125 1.2 11.482 1.2 11.0742V7.38281C1.2 6.56733 1.90515 5.90625 2.775 5.90625H3.126C3.97766 6.27339 4.98563 6.28924 5.874 5.90625H6.225C7.09485 5.90625 7.8 6.56733 7.8 7.38281V11.0742Z"
                                    fill="#074A5D"
                                />
                            </Svg>
                            <Text style={{marginLeft: 15}}>мужчина,</Text>
                            <Text style={{marginLeft: 3}}>33 года</Text>
                        </View>
                        <View
                            style={[Style.borderBg, {marginTop: 15, marginBottom: 15}]}
                        />
                        {/*Опыт в ман*/}
                        <View>
                            <Text>Опыт в Маньяне</Text>

                        </View>
                        <View
                            style={[Style.borderBg, {marginTop: 15, marginBottom: 15}]}
                        />
                        {/*Линк*/}
                        <Item
                            style={{paddingTop: 10, paddingBottom: 13, color: "#074A5D"}}
                            onPress={() => {
                                this.props.navigation.navigate("ProfileRequisitesScreen");
                            }}
                        >
                            <Left>
                                <Text
                                    style={{
                                        color: "#074A5D",
                                        fontSize: verticalScale(16),
                                        fontFamily: "PFBeauSansPro-Regular"
                                    }}
                                >
                                    Реквизиты для оплаты
                                </Text>
                            </Left>
                            <Right>
                                <Svg
                                    width="6"
                                    height="12"
                                    viewBox="0 0 6 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <Path
                                        opacity="0.8"
                                        d="M5.9974 6.0575C5.98409 6.17048 5.93539 6.27703 5.85761 6.36332L1.08818 11.7533C1.04112 11.8186 0.980188 11.8739 0.909313 11.9155C0.838439 11.9571 0.759193 11.9841 0.67668 11.9948C0.594167 12.0055 0.510216 11.9996 0.430236 11.9776C0.350255 11.9555 0.276019 11.9177 0.212308 11.8667C0.148597 11.8157 0.0968247 11.7525 0.0603256 11.6813C0.0238266 11.6101 0.00341029 11.5323 0.000391819 11.4532C-0.00262665 11.374 0.0118197 11.295 0.0428002 11.2215C0.0737807 11.1479 0.120608 11.0814 0.180267 11.0261L4.62797 5.9999L0.180266 0.973386C0.0671313 0.868226 0.00252892 0.724606 0.000670839 0.574119C-0.00118725 0.423632 0.0598512 0.278605 0.170358 0.170945C0.280866 0.0632848 0.431789 0.00180813 0.589928 4.00023e-05C0.748067 -0.00172812 0.900467 0.0563573 1.0136 0.161518C1.04153 0.187481 1.06674 0.215957 1.0889 0.246545L5.85761 5.63648C5.90928 5.69422 5.94827 5.76122 5.97228 5.83353C5.99629 5.90584 6.00483 5.982 5.9974 6.0575Z"
                                        fill="#074A5D"
                                    />
                                </Svg>
                            </Right>
                        </Item>
                        <Item
                            style={{paddingTop: 10, paddingBottom: 13, color: "#074A5D"}}
                            onPress={() => {
                                this.props.navigation.navigate("ProfileRequisitesScreen");
                            }}
                        >
                            <Left>
                                <Text
                                    style={{
                                        color: "#074A5D",
                                        fontSize: verticalScale(16),
                                        fontFamily: "PFBeauSansPro-Regular"
                                    }}
                                >
                                    Реквизиты для оплаты
                                </Text>
                            </Left>
                            <Right>
                                <Svg
                                    width="6"
                                    height="12"
                                    viewBox="0 0 6 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <Path
                                        opacity="0.8"
                                        d="M5.9974 6.0575C5.98409 6.17048 5.93539 6.27703 5.85761 6.36332L1.08818 11.7533C1.04112 11.8186 0.980188 11.8739 0.909313 11.9155C0.838439 11.9571 0.759193 11.9841 0.67668 11.9948C0.594167 12.0055 0.510216 11.9996 0.430236 11.9776C0.350255 11.9555 0.276019 11.9177 0.212308 11.8667C0.148597 11.8157 0.0968247 11.7525 0.0603256 11.6813C0.0238266 11.6101 0.00341029 11.5323 0.000391819 11.4532C-0.00262665 11.374 0.0118197 11.295 0.0428002 11.2215C0.0737807 11.1479 0.120608 11.0814 0.180267 11.0261L4.62797 5.9999L0.180266 0.973386C0.0671313 0.868226 0.00252892 0.724606 0.000670839 0.574119C-0.00118725 0.423632 0.0598512 0.278605 0.170358 0.170945C0.280866 0.0632848 0.431789 0.00180813 0.589928 4.00023e-05C0.748067 -0.00172812 0.900467 0.0563573 1.0136 0.161518C1.04153 0.187481 1.06674 0.215957 1.0889 0.246545L5.85761 5.63648C5.90928 5.69422 5.94827 5.76122 5.97228 5.83353C5.99629 5.90584 6.00483 5.982 5.9974 6.0575Z"
                                        fill="#074A5D"
                                    />
                                </Svg>
                            </Right>
                        </Item>
                        {/*photo*/}
                        <View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "space-between",
                                    marginBottom: 15,
                                    marginTop: 15,
                                    justifyContent: "space-between"
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 16
                                    }}
                                >
                                    Моё портфолио
                                </Text>
                                <Text
                                    style={{
                                        color: "#074A5D"
                                    }}
                                >
                                    27 проектов
                                </Text>
                            </View>
                        </View>
                    </View>
                    <ImageBackground
                        source={{
                            uri:
                                "https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1458730435000/photosp/239dfcd7-da63-44ee-a45d-035941bf6699/stock-photo-technology-office-work-desk-workspace-modern-office-239dfcd7-da63-44ee-a45d-035941bf6699.jpg"
                        }}
                        style={{width: "100%", height: 250}}
                    >
                        <View
                            style={{
                                width: "100%",
                                height: "100%",
                                justifyContent: "flex-end"
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: "#074A5D",
                                    opacity: 0.8,
                                    height: 40,
                                    justifyContent: "center"
                                }}
                            >
                                <Text
                                    style={{
                                        paddingLeft: 20,
                                        color: "#ffff"
                                    }}
                                >
                                    Постройка участка
                                </Text>
                            </View>
                        </View>
                    </ImageBackground>

                    <View style={{marginLeft: 20, marginRight: 20}}>
                        {/*text*/}

                        {/*<View*/}
                        {/*  style={{*/}
                        {/*    flexDirection: "row",*/}
                        {/*    alignItems: "space-between",*/}
                        {/*    marginBottom: 15,*/}
                        {/*    marginTop: 15,*/}
                        {/*    justifyContent: "space-between"*/}
                        {/*  }}*/}
                        {/*>*/}
                        <View>
                            <View style={[{marginTop: 15, marginBottom: 15}]}/>
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between"
                                }}
                            >
                                <View style={{flexDirection: "row"}}>
                                    <Text>Оценка по </Text>
                                    <Text
                                        style={{
                                            fontWeight: "bold",
                                            marginLeft: 1,
                                            marginRight: 2
                                        }}
                                    >
                                        12
                                    </Text>
                                    <Text>отзывам</Text>
                                </View>

                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}
                                >
                                    <Text style={{fontSize: 14, color: "#A1AABA"}}>
                                        мои отзывы
                                    </Text>
                                    <View style={{marginLeft: 5}}>
                                        <Svg
                                            width="3"
                                            height="7"
                                            viewBox="0 0 3 7"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <Path
                                                d="M2.9987 3.46646C2.99205 3.40056 2.96769 3.3384 2.92881 3.28806L0.544091 0.14393C0.520559 0.105794 0.490094 0.0735539 0.454657 0.0492851C0.419219 0.0250163 0.379596 0.00925745 0.33834 0.00302359C0.297083 -0.00321026 0.255108 0.000219142 0.215118 0.0130909C0.175128 0.0259627 0.138009 0.0479914 0.106154 0.077758C0.0742985 0.107525 0.0484123 0.144369 0.0301628 0.185918C0.0119133 0.227467 0.00170516 0.2728 0.000195933 0.318995C-0.0013133 0.365191 0.00590986 0.411225 0.0214001 0.454133C0.0368904 0.49704 0.0603043 0.53587 0.0901336 0.568121L2.31398 3.50006L0.0901336 6.43219C0.0335661 6.49354 0.00126495 6.57731 0.000335914 6.6651C-0.000593121 6.75288 0.0299261 6.83748 0.0851797 6.90028C0.140433 6.96308 0.215895 6.99895 0.294964 6.99998C0.374034 7.00101 0.450234 6.96713 0.506801 6.90578C0.520763 6.89064 0.533372 6.87403 0.544451 6.85618L2.92881 3.71205C2.95464 3.67837 2.97413 3.63929 2.98614 3.59711C2.99814 3.55493 3.00241 3.5105 2.9987 3.46646Z"
                                                fill="#A1AABA"
                                            />
                                        </Svg>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginTop: 20
                                    }}
                                >
                                    <Text>Качество выполнения работы</Text>
                                    <Text
                                        style={{borderBottomWidth: 1, borderStyle: "dashed"}}
                                    ></Text>
                                    <Text
                                        style={{borderBottomWidth: 1, borderColor: "#282828"}}
                                    ></Text>
                                    <Text style={{fontWeight: "bold"}}>4.8</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginTop: 20
                                    }}
                                >
                                    <Text>Вежливость</Text>
                                    <Text style={{fontWeight: "bold"}}>4.1</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginTop: 20
                                    }}
                                >
                                    <Text>Адекватность</Text>
                                    <Text style={{fontWeight: "bold"}}>1.1</Text>
                                </View>
                            </View>
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
                                            fontFamily: "PFBeauSansPro-Regular"
                                        }}
                                    >
                                        Люда
                                    </Text>
                                    {/*<View style={{width:0,flexGrow:1,flex:1}}>*/}
                                    <Text
                                        style={{fontSize: 14, color: "#a1aaba", marginTop: 7}}
                                    >
                                        Людмила Работал в компании 3 раза, ребята очень
                                        вежливые, есть бесплатное питание, и все необходимые
                                        условия труда.
                                    </Text>
                                    {/*</View>*/}
                                </View>
                            </View>
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
                                            fontFamily: "PFBeauSansPro-Regular"
                                        }}
                                    >
                                        Люда
                                    </Text>
                                    {/*<View style={{width:0,flexGrow:1,flex:1}}>*/}
                                    <Text
                                        style={{fontSize: 14, color: "#a1aaba", marginTop: 7}}
                                    >
                                        Людмила Работал в компании 3 раза, ребята очень
                                        вежливые, есть бесплатное питание, и все необходимые
                                        условия труда.
                                    </Text>
                                    {/*</View>*/}
                                </View>
                            </View>
                        </View>
                        {/*</View>*/}

                        {/*Ком*/}
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "flex-end",
                                width: "100%"
                            }}
                        >
                            <Text
                                style={{
                                    color: "#074A5D",
                                    fontSize: 12,
                                    marginTop: 30,
                                    marginBottom: 30
                                }}
                            >
                                показать еще отзывы
                            </Text>
                        </View>
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
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMainScreen);