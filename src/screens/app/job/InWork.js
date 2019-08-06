import React, { Component } from 'react';
import {connect} from "react-redux";
import {RefreshControl, ScrollView, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import {TextMask} from 'react-native-masked-text'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import moment from 'moment';

import styles from "../../../theme/Style";
import {verticalScale} from "../../../lib/Scaling";
import SvgCard from "../../../assets/svg/SvgCard";
import SvgVector from "../../../assets/svg/SvgVector";
import SvgBus from "../../../assets/svg/SvgBus";
import SvgPeople from "../../../assets/svg/SvgPeople";
import SvgTime from "../../../assets/svg/SvgTime";
import SvgHourglass from "../../../assets/svg/SvgHourglass";
import SvgArrowLeftRight from "../../../assets/svg/SvgArrowLeftRight";
import SvgArrow from "../../../assets/svg/SvgArrow";
import SvgCall from "../../../assets/svg/SvgCall";
import {JobActiveGetData} from "../../../actions/JobActive";

const {width, height} = Dimensions.get('window');
const LATITUDE_DELTA = 0.0040;
const LONGITUDE_DELTA = LATITUDE_DELTA * (width / 200);//height

class JobInWorkScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coordinate: {
                latitude: 55.650082,
                longitude: 37.539872,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            time_start: '2 часа 55 минут',
            salary: 4500,
            company_title: 'РДПгрупп',
            date: 'Пн. 11 июля 19г.',
            position: 'Упаковщик',
            address: 'Москва, Щелковское шоссе 100к1',
            foot_time: 15,
            bus_time: 5,
            refreshing: false,
        };
    }

    componentDidMount() {
        this.props.JobActiveGetData();
        //this.getData();
    }

    getData = () => {
        this.setState({refreshing: true});
        setTimeout(() => {
            this.setState({refreshing: false});
        }, 500);
    };

    _onRefresh = () => {
        this.props.JobActiveGetData();
        //this.getData();
    };

    render() {
        return (
            <ScrollView
                style={styles.container_global}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                }
            >
                <View style={styles.content_global}>

                    <View style={{paddingTop: 20, flex: 1}}>
                        <Text style={{
                            textAlign: 'center',
                            fontSize: verticalScale(12),
                            color: '#262626',
                            fontFamily: 'PFBeauSansPro-Regular'
                        }}>
                            Работа активируется за
                            <Text style={{color: '#48C8DB',}}> 1 часа </Text>
                            до начала работ
                        </Text>
                        <Text style={{
                            textAlign: 'center',
                            fontSize: verticalScale(12),
                            color: '#262626',
                            fontFamily: 'PFBeauSansPro-Regular'
                        }}>
                            За
                            <Text style={{color: '#48C8DB',}}> 15 минут </Text>
                            до начала Ваша локация будет доступной
                        </Text>
                    </View>

                    <View style={{
                        marginTop: 20,
                        marginBottom: 20,
                        borderBottomColor: '#E7EDF8',
                        borderBottomWidth: 1,
                        flex: 1,
                    }}></View>

                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                        <Text style={{
                            fontSize: verticalScale(14),
                            color: '#262626',
                            fontFamily: 'PFBeauSansPro-Regular'
                        }}>Ближайшая рабоа через:</Text>
                        <Text style={{
                            marginLeft: 5,
                            fontSize: verticalScale(18),
                            color: '#48C8DB',
                            fontFamily: 'PFBeauSansPro-Bold'
                        }}>{moment(this.props.time_start).format("DD.MM.YYYY hh:mm")}</Text>
                    </View>

                    <View style={{
                        marginTop: 20,
                        marginBottom: 20,
                        borderBottomColor: '#E7EDF8',
                        borderBottomWidth: 1,
                        flex: 1,
                    }}></View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-end'}}>
                            <TextMask type={'money'} options={{
                                precision: 0,
                                separator: ' ',
                                delimiter: ' ',
                                unit: '',
                                suffixUnit: ''
                            }} style={{
                                fontSize: verticalScale(24),
                                color: '#10BD55',
                                fontFamily: 'PFBeauSansPro-Regular'
                            }} value={this.state.salary}></TextMask>
                            <Text style={{
                                marginLeft: 5,
                                fontSize: verticalScale(16),
                                color: '#10BD55',
                                fontFamily: 'PFBeauSansPro-Regular'
                            }}>₽/смена</Text>
                        </View>
                        <Text style={{
                            fontSize: verticalScale(16),
                            color: '#262626',
                            fontFamily: 'PFBeauSansPro-Bold'
                        }}>{this.state.company_title}</Text>
                    </View>

                    <View style={{
                        marginTop: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: verticalScale(14),
                            color: '#262626',
                            fontFamily: 'PFBeauSansPro-Regular'
                        }}>{this.state.date}</Text>
                        <TouchableOpacity onPress={() => {
                            alert('В разработке');
                        }}>
                            <Text style={{
                                fontSize: verticalScale(12),
                                color: '#262626',
                                fontFamily: 'PFBeauSansPro-Regular'
                            }}>Подробнее</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        marginTop: 25,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: verticalScale(18),
                            color: '#262626',
                            fontFamily: 'PFBeauSansPro-Bold'
                        }}>{this.state.position}</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                            <SvgCard/>
                            <Text style={{
                                marginLeft: 10,
                                fontSize: verticalScale(14),
                                color: '#10BD55',
                                fontFamily: 'PFBeauSansPro-Regular'
                            }}>оплата на карту</Text>
                        </View>
                    </View>

                    <View style={{
                        marginTop: 20,
                        marginBottom: 20,
                        borderBottomColor: '#E7EDF8',
                        borderBottomWidth: 1,
                        flex: 1,
                    }}></View>

                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-end'}}>
                        <View style={{width: 25, paddingBottom: 5, alignItems: 'flex-start'}}>
                            <SvgTime/>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: verticalScale(16),
                                color: '#262626',
                                fontFamily: 'PFBeauSansPro-Bold'
                            }}>Начало</Text>
                            <Text style={{
                                fontSize: verticalScale(16),
                                color: '#262626',
                                fontFamily: 'PFBeauSansPro-Regular'
                            }}>11 : 00</Text>
                        </View>
                        <View style={{width: 45, paddingBottom: 5, alignItems: 'center'}}>
                            <SvgArrowLeftRight/>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: verticalScale(16),
                                color: '#262626',
                                fontFamily: 'PFBeauSansPro-Bold'
                            }}>Конец</Text>
                            <Text style={{
                                fontSize: verticalScale(16),
                                color: '#262626',
                                fontFamily: 'PFBeauSansPro-Regular'
                            }}>21 : 00</Text>
                        </View>
                        <View style={{width: 45, paddingBottom: 5, alignItems: 'center'}}>
                            <SvgHourglass/>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: verticalScale(16),
                                color: '#262626',
                                fontFamily: 'PFBeauSansPro-Bold'
                            }}>Итого</Text>
                            <Text style={{
                                fontSize: verticalScale(16),
                                color: '#262626',
                                fontFamily: 'PFBeauSansPro-Regular'
                            }}>10 часов</Text>
                        </View>
                    </View>

                    <View style={{
                        marginTop: 20,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}>
                        <SvgVector/>
                        <Text style={{
                            marginLeft: 10,
                            fontSize: verticalScale(14),
                            color: '#D43A3A',
                            fontFamily: 'PFBeauSansPro-Regular'
                        }}>{this.state.address}</Text>
                    </View>

                    <View style={{
                        marginTop: 10,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <SvgPeople/>
                            <Text style={{
                                marginLeft: 10,
                                fontSize: verticalScale(12),
                                color: '#262626',
                                fontFamily: 'PFBeauSansPro-Regular'
                            }}>{this.state.foot_time} мин.</Text>
                        </View>
                        <View style={{
                            marginLeft: 10,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}>
                            <SvgBus/>
                            <Text style={{
                                marginLeft: 10,
                                fontSize: verticalScale(12),
                                color: '#262626',
                                fontFamily: 'PFBeauSansPro-Regular'
                            }}>{this.state.bus_time} мин.</Text>
                        </View>
                    </View>
                </View>

                <View>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={{height: 200}}
                        initialRegion={this.state.coordinate}
                        showsUserLocation={true}
                        showsCompass={true}
                        zoomEnabled={false}
                        zoomTapEnabled={false}
                        zoomControlEnabled={false}
                        rotateEnabled={false}
                        followsUserLocation={true}
                        showsMyLocationButton={false}
                        showsPointsOfInterest={false}
                    >
                        <MapView.Marker
                            coordinate={this.state.coordinate}
                        />
                    </MapView>
                </View>

                <View style={styles.content_global}>
                    <TouchableOpacity onPress={() => {
                        alert('Клик');
                    }} style={{
                        paddingTop: 20,
                        paddingBottom: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottomColor: '#E7EDF8',
                        borderBottomWidth: 1,
                    }}>
                        <View style={{width: 20, alignItems: 'flex-start'}}>
                            <SvgVector/>
                        </View>
                        <View style={{flex: 1, alignItems: 'flex-start'}}>
                            <Text style={{
                                fontSize: verticalScale(16),
                                color: '#074A5D',
                                fontFamily: 'PFBeauSansPro-Regular'
                            }}>Проложить маршрут</Text>
                        </View>
                        <View style={{width: 20, alignItems: 'flex-end',}}>
                            <SvgArrow/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        alert('Клик');
                    }} style={{
                        paddingTop: 20,
                        paddingBottom: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottomColor: '#E7EDF8',
                        borderBottomWidth: 1,
                    }}>
                        <View style={{width: 20, alignItems: 'flex-start'}}>
                            <SvgCall width={14}/>
                        </View>
                        <View style={{flex: 1, alignItems: 'flex-start'}}>
                            <Text style={{
                                fontSize: verticalScale(16),
                                color: '#074A5D',
                                fontFamily: 'PFBeauSansPro-Regular'
                            }}>Сзяваться</Text>
                        </View>
                        <View style={{width: 20, alignItems: 'flex-end',}}>
                            <SvgArrow/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        alert('Клик');
                    }} style={{
                        paddingTop: 20,
                        paddingBottom: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottomColor: '#E7EDF8',
                        borderBottomWidth: 1,
                    }}>
                        <View style={{width: 20, alignItems: 'flex-start'}}>
                            <SvgVector/>
                        </View>
                        <View style={{flex: 1, alignItems: 'flex-start'}}>
                            <Text style={{
                                fontSize: verticalScale(16),
                                color: '#074A5D',
                                fontFamily: 'PFBeauSansPro-Regular'
                            }}>Схема проезда</Text>
                        </View>
                        <View style={{width: 20, alignItems: 'flex-end',}}>
                            <SvgArrow/>
                        </View>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        time_start: state.JobActive.time_start,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        JobActiveGetData: () => {
            dispatch(JobActiveGetData())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(JobInWorkScreen);