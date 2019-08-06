import React, {Component} from 'react'
import {connect} from 'react-redux';
import {View, ScrollView, SafeAreaView, TouchableOpacity, BackHandler} from 'react-native';
import {Text, Button} from 'native-base';
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
import Svg, {Path} from "react-native-svg";

import styles from "../../../../theme/Style";
import NavigationOptions from "../../../../lib/NavigationOptions";
import {verticalScale} from "../../../../lib/Scaling";
import {DeleteDate, SetDate} from "../../../../actions/user_summary/View";
import StatusBarComp from "../../../../components/StatusBarComp";

LocaleConfig.locales['ru'] = {
    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthNamesShort: ['Янв.','Фев.','Мар.','Апр.','Май','Июн.','Июл.','Авг.','Сен.','Окт.','Ноя.','Дек.'],
    dayNames: ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'],
    dayNamesShort: ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'],
    today: 'Сегодня'
};
LocaleConfig.defaultLocale = 'ru';

class UserSummaryViewDateScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    static navigationOptions = ({ navigation }) => NavigationOptions(navigation, {title: 'ДАТА РАЗМЕЩЕНИЯ', left_func: 'UserSummaryViewIndexScreen', margin_top: false});

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
        let current = new Date();
        let current_date = current.getFullYear()+'-'+((current.getMonth()+1)<10?'0':'')+(current.getMonth()+1)+'-'+(current.getDate()<10?'0':'')+current.getDate();
        let markedDates = {};
        console.log(current_date);


        this.props.dates.map((item) => {
            console.log(item);
            if( item > current_date ){
                markedDates[item] = {selected: true};
            }
        });

        return(
            <SafeAreaView style={styles.container_global}>
                <StatusBarComp/>

                    <View style={[styles.content_global, {paddingBottom: 0,}]}>

                            <Text style={{color: '#262626', fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular',}}>Вы можете в любой момент добавить или изменить даты после создания объявления</Text>

                            <View style={{marginTop:25, flex:1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                                <View style={{flex:1, flexDirection: 'row', alignItems: 'flex-start',}}>
                                    <View style={{width:20, marginRight:10, }}>
                                        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <Path d="M0 3.125C0 1.39911 1.39911 0 3.125 0H16.875C18.6009 0 20 1.39911 20 3.125V16.875C20 18.6009 18.6009 20 16.875 20H3.125C1.39911 20 0 18.6009 0 16.875V3.125Z" fill="#074A5D"/>
                                            <Path d="M10.6699 10.3617L12.1284 12.0951C12.197 12.1768 12.2256 12.241 12.2142 12.2877C12.2027 12.3344 12.1627 12.3869 12.0941 12.4453L11.545 12.8655C11.442 12.9472 11.362 12.9822 11.3048 12.9706C11.259 12.9589 11.2075 12.9064 11.1504 12.813L10.0008 10.8695L8.81685 12.8655C8.72534 13.0172 8.62239 13.0406 8.50801 12.9355L7.89032 12.4628C7.76449 12.3694 7.74733 12.2527 7.83884 12.1126L9.28012 10.3617L7.18683 9.80143C7.02669 9.75474 6.9695 9.64969 7.01525 9.48627L7.22115 8.80342C7.2669 8.61666 7.38129 8.56997 7.56431 8.66335L9.58897 9.52129L9.40023 7.21011C9.38879 7.15174 9.40023 7.10505 9.43454 7.07004C9.46886 7.02335 9.53177 7 9.62328 7H10.3611C10.464 7 10.5269 7.02335 10.5498 7.07004C10.5841 7.11673 10.5956 7.16925 10.5841 7.22762L10.3954 9.52129L12.4372 8.62833C12.5974 8.56997 12.706 8.61082 12.7632 8.7509L12.9863 9.48627C13.0092 9.57965 13.0034 9.64969 12.9691 9.69638C12.9462 9.7314 12.9062 9.75474 12.849 9.76641L10.6699 10.3617Z" fill="white"/>
                                        </Svg>
                                    </View>
                                    <View style={{flex:1,}}>
                                        <Text style={{color: '#A1AABA', fontSize: verticalScale(12), fontFamily: 'PFBeauSansPro-Regular',}}>забронированная дата</Text>
                                    </View>
                                </View>
                                <View style={{flex:1, flexDirection: 'row', alignItems: 'flex-start',}}>
                                    <View style={{width:20, marginRight:10, }}>
                                        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <Path d="M0.5 3.125C0.5 1.67525 1.67525 0.5 3.125 0.5H16.875C18.3247 0.5 19.5 1.67525 19.5 3.125V16.875C19.5 18.3247 18.3247 19.5 16.875 19.5H3.125C1.67525 19.5 0.5 18.3247 0.5 16.875V3.125Z" fill="white" stroke="#074A5D"/>
                                            <Path d="M10.6699 10.3617L12.1284 12.0951C12.197 12.1768 12.2256 12.241 12.2142 12.2877C12.2027 12.3344 12.1627 12.3869 12.0941 12.4453L11.545 12.8655C11.442 12.9472 11.362 12.9822 11.3048 12.9706C11.259 12.9589 11.2075 12.9064 11.1504 12.813L10.0008 10.8695L8.81685 12.8655C8.72534 13.0172 8.62239 13.0406 8.50801 12.9355L7.89032 12.4628C7.76449 12.3694 7.74733 12.2527 7.83884 12.1126L9.28012 10.3617L7.18683 9.80143C7.02669 9.75474 6.9695 9.64969 7.01525 9.48627L7.22115 8.80342C7.2669 8.61666 7.38129 8.56997 7.56431 8.66335L9.58897 9.52129L9.40023 7.21011C9.38879 7.15174 9.40023 7.10505 9.43454 7.07004C9.46886 7.02335 9.53177 7 9.62328 7H10.3611C10.464 7 10.5269 7.02335 10.5498 7.07004C10.5841 7.11673 10.5956 7.16925 10.5841 7.22762L10.3954 9.52129L12.4372 8.62833C12.5974 8.56997 12.706 8.61082 12.7632 8.7509L12.9863 9.48627C13.0092 9.57965 13.0034 9.64969 12.9691 9.69638C12.9462 9.7314 12.9062 9.75474 12.849 9.76641L10.6699 10.3617Z" fill="#074A5D"/>
                                        </Svg>
                                    </View>
                                    <View style={{flex:1,}}>
                                        <Text style={{color: '#A1AABA', fontSize: verticalScale(12), fontFamily: 'PFBeauSansPro-Regular',}}>объявление размещено</Text>
                                    </View>
                                </View>
                            </View>
                        <View style={{marginTop:20, flex:1, borderBottomWidth:1, borderBottomColor:'#E7EDF8'}}>
                        </View>
                    </View>

                    <ScrollView>
                        <View style={{flex:1, }}>

                                <CalendarList
                                    theme={{
                                        backgroundColor: '#F9FBFF',
                                        calendarBackground: '#F9FBFF',
                                        // textSectionTitleColor: '#b6c1cd',
                                        //selectedDayBackgroundColor: '#074A5D',
                                        //selectedDayTextColor: '#FFFFFF',
                                        // todayTextColor: '#00adf5',
                                        dayTextColor: '#262626',
                                        textDisabledColor: '#A1AABA',
                                        // dotColor: '#00adf5',
                                        // selectedDotColor: '#ffffff',
                                        // arrowColor: 'orange',
                                        // monthTextColor: 'blue',
                                        // indicatorColor: 'blue',
                                        textDayFontFamily: 'PFBeauSansPro-Regular',
                                        textMonthFontFamily: 'PFBeauSansPro-Regular',
                                        textDayHeaderFontFamily: 'PFBeauSansPro-Regular',
                                        // textDayFontWeight: '300',
                                        // textMonthFontWeight: 'bold',
                                        // textDayHeaderFontWeight: '300',
                                        textDayFontSize: 14,
                                        textMonthFontSize: 12,
                                        textDayHeaderFontSize: 12,
                                        textDayStyle:{
                                            paddingTop:3,
                                        },
                                        'stylesheet.day.basic': {
                                            base: {
                                                width: 32,
                                                height: 32,
                                                alignItems: 'center',
                                                borderWidth:1,
                                                borderColor:'#E7EDF8',
                                                borderRadius:5,
                                            },
                                            today: {
                                                //backgroundColor: appStyle.todayBackgroundColor,
                                                //borderRadius: 16
                                            },
                                            todayText: {
                                                //color: appStyle.todayTextColor
                                            },
                                            selected: {
                                                borderColor: '#A1AABA',
                                                backgroundColor: "#E7EDF8",
                                                //borderRadius: 16
                                            },
                                            selectedText: {
                                                color: '#A1AABA'
                                            },
                                            // alignedText: {
                                            //     marginTop: 0
                                            // },
                                        }
                                    }}
                                    // style={{
                                    //     flex: 1,
                                    // }}
                                    // markedDates={{
                                    //     '2019-07-16': {selected: true, selectedColor: 'blue'},
                                    //     '2019-07-17': {selected: true },
                                    //     '2019-07-18': {selected: true,},
                                    //     '2019-07-19': {disabled: true, disableTouchEvent: true}
                                    // }}
                                    markedDates={markedDates}
                                    // dayComponent={({date, state}) => {
                                    //     return (<View style={{flex: 1, borderWidth:1, borderColor:'E7EDF8', borderRadius:5, }}>
                                    //         <Text style={{textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black'}}>{date.day}</Text>
                                    //     </View>);
                                    // }}
                                    onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                                    // Max amount of months allowed to scroll to the past. Default = 50
                                    pastScrollRange={0}
                                    // Max amount of months allowed to scroll to the future. Default = 50
                                    futureScrollRange={1}
                                    // Enable or disable scrolling of calendar list
                                    scrollEnabled={true}
                                    // Enable or disable vertical scroll indicator. Default = false
                                    showScrollIndicator={true}

                                    // Initially visible month. Default = Date()
                                    current={current_date}
                                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                                    minDate={current_date}
                                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                                    //maxDate={'2019-10-30'}
                                    // Handler which gets executed on day press. Default = undefined
                                    onDayPress={(day) => {
                                        //console.log(this.props.dates[day.dateString.toString()]);
                                        if( this.props.dates.indexOf(day.dateString) != -1 ) {
                                            console.log('delete');
                                            this.props.DeleteDate(day.dateString)
                                        }else {
                                            this.props.SetDate(day.dateString)
                                        }
                                        console.log('selected day', day);

                                    }}
                                    // // Handler which gets executed on day long press. Default = undefined
                                    onDayLongPress={(day) => {console.log('selected day', day)}}
                                    // // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                                    monthFormat={'MMMM yyyyг'}
                                    // // Handler which gets executed when visible month changes in calendar. Default = undefined
                                    onMonthChange={(month) => {console.log('month changed', month)}}
                                    // // Hide month navigation arrows. Default = false
                                    hideArrows={true}
                                    // // Replace default arrows with custom ones (direction can be 'left' or 'right')
                                    //renderArrow={(direction) => (<Arrow />)}
                                    // // Do not show days of other months in month page. Default = false
                                     hideExtraDays={true}
                                    // // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                                    // // day from another month that is visible in calendar page. Default = false
                                    // disableMonthChange={true}
                                    // // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                                    firstDay={1}
                                    // // Hide day names. Default = false
                                    // hideDayNames={true}
                                    // // Show week numbers to the left. Default = false
                                    // showWeekNumbers={true}
                                    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                                    //onPressArrowLeft={substractMonth => substractMonth()}
                                    // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                                    // onPressArrowRight={addMonth => addMonth()}
                                />
                        </View>
                    </ScrollView>

                <View style={{position:'absolute', bottom:20, right:20,}}>
                    <Button full primary style={[styles.button, {width: 50,}]} onPress={() => this.props.navigation.navigate('UserSummaryViewCommentScreen')}>
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
        dates: state.UserSummaryView.dates,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        SetDate: (date) => {
            dispatch(SetDate(date))
        },
        DeleteDate: (date) => {
            dispatch(DeleteDate(date))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSummaryViewDateScreen);