import React, {Component} from 'react'
import {connect} from 'react-redux';
import {View, Image, ScrollView, SafeAreaView, TouchableOpacity, BackHandler,} from 'react-native';
import {Text, Button} from 'native-base';
import Svg, {Path} from "react-native-svg";

import styles from "../../../../theme/Style";
import NavigationOptions from "../../../../lib/NavigationOptions";
import {verticalScale} from "../../../../lib/Scaling";
import {SetBooking} from "../../../../actions/user_summary/View";
import StatusBarComp from "../../../../components/StatusBarComp";

class UserSummaryViewBookingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    static navigationOptions = ({ navigation }) => NavigationOptions(navigation, {title: 'НАСТРОЙКИ БРОНИРОВАНИЯ', left_func: 'UserSummaryViewIndexScreen', margin_top: false});

    handleBackPress = () => {
        this.props.navigation.navigate('UserSummaryViewIndexScreen');
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

                           <View style={{marginTop: 5, flex:1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                               <View style={{width:40,alignItems: 'flex-start',}}>

                               </View>
                               <View style={{ flex:1, justifyContent: 'flex-start', alignItems: 'flex-start',}}>

                                   <Text style={{color: '#262626', fontSize: verticalScale(12), fontFamily: 'PFBeauSansPro-Regular',}}>Подробнее > о мгновенном бронировании</Text>

                               </View>
                           </View>

                           <View style={{marginTop: 10, flex:1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                               <View style={{width:40,alignItems: 'flex-start',}}>

                                   <Text style={{color: '#48C8DB', fontSize: verticalScale(16), fontFamily: 'PFBeauSansPro-Regular',}}>*</Text>

                               </View>
                               <View style={{flex:1, justifyContent: 'flex-start', alignItems: 'flex-start',}}>

                                   <Text style={{color: '#262626', fontSize: verticalScale(16), fontFamily: 'PFBeauSansPro-Bold',}}>Выберите тип бронирования:</Text>

                               </View>
                           </View>

                           <View style={{marginTop: 20, flex:1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                               <View style={{width:40,alignItems: 'flex-start',}}>

                                   <TouchableOpacity onPress={() => { this.props.SetBooking(1, 'Мгновенная бронь'); }}>
                                       {(this.props.booking_id === 1)?(
                                           <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                               <Path d="M19 13.5C19 13.5 19 13 19.5 13C20 13 20 13.5 20 13.5V19.0977C20 19.609 19.609 20 19.0977 20H0.902256C0.390977 20 0 19.609 0 19.0977V0.902256C0 0.390977 0.390977 0 0.902256 0H14C14 0 14.5 0.063384 14.5 0.5C14.5 0.936623 14 1 14 1H1.5C1 1 1 1.5 1 1.5V18.5C1 19 1.5 19 1.5 19H18.5C18.5 19 19 19 19 18.5V13.5Z" fill="#074A5D"/>
                                               <Path d="M19.835 4.08703L10.6725 13.8069C10.5525 13.9356 10.4124 14 10.2524 14C10.0923 14 9.9323 13.9356 9.83228 13.8069L6.15129 9.81595C5.93123 9.55847 5.95124 9.1508 6.21131 8.91478C6.43137 8.70021 6.77146 8.70021 7.01152 8.91478L10.2524 12.4337L18.9947 3.16439C19.2348 2.92837 19.6149 2.94983 19.835 3.20731C20.055 3.44333 20.055 3.82955 19.835 4.08703Z" fill="#074A5D"/>
                                           </Svg>
                                       ):(
                                           <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                               <Path d="M19 13.5C19 13.5 19 13 19.5 13C20 13 20 13.5 20 13.5V19.0977C20 19.609 19.609 20 19.0977 20H0.902256C0.390977 20 0 19.609 0 19.0977V0.902256C0 0.390977 0.390977 0 0.902256 0H14C14 0 14.5 0.063384 14.5 0.5C14.5 0.936623 14 1 14 1H1.5C1 1 1 1.5 1 1.5V18.5C1 19 1.5 19 1.5 19H18.5C18.5 19 19 19 19 18.5V13.5Z" fill="#074A5D"/>
                                           </Svg>

                                       )}
                                   </TouchableOpacity>

                               </View>
                               <View style={{flex:1, justifyContent: 'flex-start', alignItems: 'flex-start',}}>

                                   <Text style={{color: '#262626', fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular',}}>
                                       <Text style={{color: '#48C8DB', fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Bold',}}>Мгновенная бронь</Text>
                                        - заказчики, отвечающие Вашим требованиям, могут бронировать услуги в календаре, не запрашивая подтверждение</Text>

                               </View>
                           </View>

                           <View style={{marginTop: 20, flex:1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                               <View style={{width:40,alignItems: 'flex-start',}}>

                                   <TouchableOpacity onPress={() => { this.props.SetBooking(2, 'Бронь по запросу'); }}>
                                       {(this.props.booking_id === 2)?(
                                           <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                               <Path d="M19 13.5C19 13.5 19 13 19.5 13C20 13 20 13.5 20 13.5V19.0977C20 19.609 19.609 20 19.0977 20H0.902256C0.390977 20 0 19.609 0 19.0977V0.902256C0 0.390977 0.390977 0 0.902256 0H14C14 0 14.5 0.063384 14.5 0.5C14.5 0.936623 14 1 14 1H1.5C1 1 1 1.5 1 1.5V18.5C1 19 1.5 19 1.5 19H18.5C18.5 19 19 19 19 18.5V13.5Z" fill="#074A5D"/>
                                               <Path d="M19.835 4.08703L10.6725 13.8069C10.5525 13.9356 10.4124 14 10.2524 14C10.0923 14 9.9323 13.9356 9.83228 13.8069L6.15129 9.81595C5.93123 9.55847 5.95124 9.1508 6.21131 8.91478C6.43137 8.70021 6.77146 8.70021 7.01152 8.91478L10.2524 12.4337L18.9947 3.16439C19.2348 2.92837 19.6149 2.94983 19.835 3.20731C20.055 3.44333 20.055 3.82955 19.835 4.08703Z" fill="#074A5D"/>
                                           </Svg>
                                       ):(
                                           <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                               <Path d="M19 13.5C19 13.5 19 13 19.5 13C20 13 20 13.5 20 13.5V19.0977C20 19.609 19.609 20 19.0977 20H0.902256C0.390977 20 0 19.609 0 19.0977V0.902256C0 0.390977 0.390977 0 0.902256 0H14C14 0 14.5 0.063384 14.5 0.5C14.5 0.936623 14 1 14 1H1.5C1 1 1 1.5 1 1.5V18.5C1 19 1.5 19 1.5 19H18.5C18.5 19 19 19 19 18.5V13.5Z" fill="#074A5D"/>
                                           </Svg>
                                       )}
                                   </TouchableOpacity>

                               </View>
                               <View style={{flex:1, justifyContent: 'flex-start', alignItems: 'flex-start',}}>

                                   <Text style={{color: '#262626', fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular',}}>
                                       <Text style={{color: '#48C8DB', fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Bold',}}>Бронь по запросу</Text>
                                    - любые заказчики должны направлять запросы на бронирование услуги</Text>

                               </View>
                           </View>

                           <Text style={{marginTop: 20, color: '#262626', fontSize: verticalScale(16), fontFamily: 'PFBeauSansPro-Regular',}}>Окно бронирования</Text>

                           <Text style={{marginTop: 15, color: '#262626', fontSize: verticalScale(12), fontFamily: 'PFBeauSansPro-Regular',}}>Мы не будем отображать Ваше объявление заказчикам если до начала рабочей смены осталось менее</Text>

                           <View style={{marginTop: 15, flex:1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                               <View style={{justifyContent: 'flex-start', alignItems: 'flex-start',}}>
                                   <Text style={{color: '#074A5D', fontSize: verticalScale(16), fontFamily: 'PFBeauSansPro-Regular',}}>24 часа</Text>
                               </View>
                               <View style={{justifyContent: 'flex-end', alignItems: 'flex-end',}}>
                                   <Text style={{color: '#262626', fontSize: verticalScale(16), fontFamily: 'PFBeauSansPro-Regular',}}>рекомендованно</Text>
                               </View>
                           </View>

                           <Text style={{marginTop: 15, color: '#262626', fontSize: verticalScale(12), fontFamily: 'PFBeauSansPro-Regular',}}>Менее указанного срока, заказчик не сможет отправить запросы и бронировать рабочий день</Text>

                       </View>
                    </ScrollView>

                <View style={{position:'absolute', bottom:20, right:20,}}>
                    <Button full primary style={[styles.button, {width: 50,}]} onPress={() => this.props.navigation.navigate('UserSummaryViewConditionsScreen')}>
                        <Svg width="9" height="18" viewBox="0 0 9 18" fill="none">
                            <Path d="M8.9961 8.91375C8.97614 8.74428 8.90308 8.58445 8.78642 8.45501L1.63227 0.370106C1.56168 0.272043 1.47028 0.189139 1.36397 0.126733C1.25766 0.0643277 1.13879 0.0238049 1.01502 0.00777495C0.89125 -0.00825496 0.765324 0.000563507 0.645353 0.0336623C0.525383 0.0667611 0.414028 0.123406 0.318462 0.199949C0.222896 0.276492 0.145237 0.371235 0.0904885 0.478076C0.0357399 0.584916 0.00511549 0.701485 0.000587799 0.820273C-0.00393989 0.939062 0.0177296 1.05744 0.0642004 1.16777C0.110671 1.2781 0.180913 1.37795 0.270401 1.46088L6.94195 9.00014L0.270401 16.5399C0.100698 16.6977 0.00379485 16.9131 0.00100774 17.1388C-0.00177936 17.3646 0.0897783 17.5821 0.255539 17.7436C0.4213 17.9051 0.647685 17.9973 0.884893 17.9999C1.1221 18.0026 1.3507 17.9155 1.5204 17.7577C1.56229 17.7188 1.60012 17.6761 1.63335 17.6302L8.78642 9.54528C8.86392 9.45867 8.9224 9.35817 8.95842 9.2497C8.99443 9.14124 9.00725 9.027 8.9961 8.91375Z" fill="white"/>
                        </Svg>
                    </Button>
                </View>

            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        booking_id: state.UserSummaryView.booking_id
    }
};

const mapDispatchToProps = dispatch => {
    return {
        SetBooking: (id, title) => {
            dispatch(SetBooking(id, title))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSummaryViewBookingScreen);