import React, { Component } from 'react'
import {connect} from "react-redux";
import {View, ScrollView} from 'react-native';
import {Text} from 'native-base';
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';

import axios from '../../../lib/Axios';
import styles from "../../../theme/Style";

LocaleConfig.locales['ru'] = {
    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthNamesShort: ['Янв.','Фев.','Мар.','Апр.','Май','Июн.','Июл.','Авг.','Сен.','Окт.','Ноя.','Дек.'],
    dayNames: ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'],
    dayNamesShort: ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'],
    today: 'Сегодня'
};
LocaleConfig.defaultLocale = 'ru';

class CalendarDaysScreen extends Component {
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
            <ScrollView style={styles.container_global}>
                <View>
                    <Text>Список дней</Text>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarDaysScreen);