import React, {Component} from 'react'
import {connect} from "react-redux";
import {View, ScrollView,} from 'react-native';
import {Text} from 'native-base';
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';

import axios from '../../../lib/Axios';
import styles from "../../../theme/Style";
import {verticalScale} from "../../../lib/Scaling";
import SvgCalendarDayPlaced from '../../../assets/svg/SvgCalendarDayPlaced';
import SvgCalendarDayReserved from '../../../assets/svg/SvgCalendarDayReserved';

LocaleConfig.locales['ru'] = {
    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthNamesShort: ['Янв.','Фев.','Мар.','Апр.','Май','Июн.','Июл.','Авг.','Сен.','Окт.','Ноя.','Дек.'],
    dayNames: ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'],
    dayNamesShort: ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'],
    today: 'Сегодня'
};
LocaleConfig.defaultLocale = 'ru';

class CalendarMonthsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let current = new Date();
        let current_date = current.getFullYear()+'-'+((current.getMonth()+1)<10?'0':'')+(current.getMonth()+1)+'-'+(current.getDate()<10?'0':'')+current.getDate();
        let markedDates = {};
        return(
            <View style={styles.container_global}>

                <View style={[styles.content_global, {paddingBottom: 0, paddingTop:10,}]}>

                    <Text style={{color: '#262626', fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular',}}>Вы можете в любой момент добавить или изменить даты после создания объявления</Text>

                    <View style={{marginTop:25, flex:1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                        <View style={{flex:1, flexDirection: 'row', alignItems: 'flex-start',}}>
                            <View style={{width:20, marginRight:10, }}>
                                <SvgCalendarDayReserved/>
                            </View>
                            <View style={{flex:1,}}>
                                <Text style={{color: '#A1AABA', fontSize: verticalScale(12), fontFamily: 'PFBeauSansPro-Regular',}}>забронированная дата</Text>
                            </View>
                        </View>
                        <View style={{flex:1, flexDirection: 'row', alignItems: 'flex-start',}}>
                            <View style={{width:20, marginRight:10, }}>
                                <SvgCalendarDayPlaced/>
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
                            markedDates={markedDates}
                            //onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                            pastScrollRange={0}
                            futureScrollRange={4}
                            scrollEnabled={true}
                            showScrollIndicator={true}
                            current={current_date}
                            minDate={current_date}
                            onDayPress={(day) => {

                                console.log('selected day', day);
                            }}
                            //onDayLongPress={(day) => {console.log('selected day', day)}}
                            monthFormat={'MMMM yyyyг'}
                            //onMonthChange={(month) => {console.log('month changed', month)}}
                            hideArrows={true}
                            hideExtraDays={true}
                            firstDay={1}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarMonthsScreen);