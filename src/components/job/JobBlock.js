import React, {Component} from 'react'
import {Text, TouchableOpacity, View, Linking} from 'react-native';
import SvgTime from "../../assets/svg/SvgTime";
import {verticalScale} from "../../lib/Scaling";
import SvgVector from "../../assets/svg/SvgVector";
import SvgCall from "../../assets/svg/SvgCall";
import SvgMessage from "../../assets/svg/SvgMessage";
import Block from "../../components/Block";

export default class JobBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('Vacancy');
            }}>
                <Block style={{padding: 15, marginBottom: 20,}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <SvgTime/>
                            <Text style={{
                                marginLeft: 5,
                                fontSize: verticalScale(12),
                                color: '#262626',
                                fontFamily: 'PFBeauSansPro-Bold'
                            }}>15 июня к 11:00</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                            <Text style={{
                                fontSize: verticalScale(12),
                                color: '#262626',
                                fontFamily: 'PFBeauSansPro-Regular'
                            }}>до начала:</Text>
                            <Text style={{
                                marginLeft: 5,
                                fontSize: verticalScale(12),
                                color: '#48C8DB',
                                fontFamily: 'PFBeauSansPro-Bold'
                            }}>1 час 33 мин</Text>
                        </View>
                    </View>

                    <View style={{
                        borderBottomWidth: 1,
                        borderBottomColor: '#E7EDF8',
                        marginTop: 15,
                        marginBottom: 15,
                    }}/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Text style={{
                                fontSize: verticalScale(12),
                                color: '#48C8DB',
                                fontFamily: 'PFBeauSansPro-Bold'
                            }}>{this.props.item.position}</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                            <Text style={{
                                marginRight: 5,
                                fontSize: verticalScale(12),
                                color: '#262626',
                                fontFamily: 'PFBeauSansPro-Regular'
                            }}>начало в</Text>
                            <SvgTime width={8} height={8}/>
                            <Text style={{
                                marginLeft: 5,
                                fontSize: verticalScale(12),
                                color: '#262626',
                                fontFamily: 'PFBeauSansPro-Regular'
                            }}>10:00</Text>
                        </View>
                    </View>
                    <View style={{marginTop: 5, flexDirection: 'row', justifyContent: 'flex-start'}}>
                        <SvgVector/>
                        <Text style={{
                            marginLeft: 5,
                            fontSize: verticalScale(12),
                            color: '#262626',
                            fontFamily: 'PFBeauSansPro-Regular'
                        }}>{this.props.item.address}</Text>
                    </View>
                    <View style={{
                        borderBottomWidth: 1,
                        borderBottomColor: '#E7EDF8',
                        marginTop: 15,
                        marginBottom: 15,
                    }}/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Text style={{
                                fontSize: verticalScale(16),
                                color: '#262626',
                                fontFamily: 'PFBeauSansPro-Bold'
                            }}>{this.props.item.company_title}</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                            <TouchableOpacity onPress={() => {
                                Linking.openURL(`tel:${this.props.item.phone}`)
                            }}>
                                <SvgCall/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginLeft: 20,}} onPress={() => {
                                this.props.navigation.navigate('MessageChat', {title: this.props.item.company_title})
                            }}>
                                <SvgMessage/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Block>
            </TouchableOpacity>
        )
    }
}