import React, {Component} from 'react'
import {Text, TouchableOpacity, View} from 'react-native';
import {SwipeRow} from 'react-native-swipe-list-view';

import SvgArchive from "../../assets/svg/SvgArchive";
import {verticalScale} from "../../lib/Scaling";
import CacheImage from "../CacheImage";
import MessageType from "./MessageType";
import SvgCloud from "../../assets/svg/SvgCloud";

export default class MessageBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <SwipeRow
                disableRightSwipe={true}
                rightOpenValue={-75}
                stopRightSwipe={-75}
            >
                <View style={{
                    backgroundColor: '#F9FBFF',
                    padding: 20,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity style={{alignItems: 'center',}} onPress={() => alert('Trash')}>
                        <SvgArchive/>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor: '#F9FBFF', borderBottomColor: '#E7EDF8', borderBottomWidth: 1,}}>
                    <TouchableOpacity style={{flex: 1, paddingTop: 20, paddingBottom: 20,}} onPress={() => {
                        this.props.navigation.navigate('MessageChat', {title: this.props.item.title})
                    }}>

                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start',}}>
                            <View style={{marginRight: 10, alignItems: 'center',}}>
                                <CacheImage style={{
                                    width: 60,
                                    height: 60,
                                    backgroundColor: '#FFFFFF',
                                    borderWidth: 1,
                                    borderRadius: 5,
                                    borderColor: '#E7EDF8',
                                }} uri={this.props.item.avatar}/>
                                {(this.props.item.count_unread > 0) && (
                                    <View style={{position: 'absolute', top: -10, right: -10,}}>
                                        {/*<SvgCloud border="#074A5D" fill="#FFFFFF"/>*/}
                                        <Text style={{
                                            position: 'absolute',
                                            top: 3,
                                            right: 2,
                                            color: '#262626',
                                            fontSize: verticalScale(12),
                                            fontFamily: 'PFBeauSansPro-Bold',
                                        }}>{this.props.item.count_unread}</Text>
                                    </View>
                                )}
                            </View>
                            <View style={{
                                flex: 1,
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                            }}>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',}}>
                                    <View style={{flex: 1, alignItems: 'flex-start',}}>
                                        <View>
                                            <Text style={{
                                                color: '#262626',
                                                fontSize: verticalScale(12),
                                                fontFamily: 'PFBeauSansPro-Regular',
                                            }}>{this.props.item.date}</Text>
                                        </View>
                                    </View>
                                    <View style={{flex: 1, alignItems: 'flex-end',}}>
                                        <MessageType type={this.props.item.type}/>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{
                                        color: '#262626',
                                        fontSize: verticalScale(14),
                                        fontFamily: 'PFBeauSansPro-Bold',
                                    }}>{this.props.item.title}</Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text style={{
                                        color: '#A1AABA',
                                        fontSize: verticalScale(12),
                                        fontFamily: 'PFBeauSansPro-Regular',
                                    }}>{this.props.item.last_message}</Text>
                                </View>
                            </View>
                        </View>

                    </TouchableOpacity>
                </View>
            </SwipeRow>
        )
    }
}