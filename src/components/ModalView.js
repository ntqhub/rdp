import React, {Component} from 'react'
import {Dimensions, Platform, ScrollView, StatusBar, View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Body, Header, Left, Right} from 'native-base';
import Modal from "react-native-translucent-modal";

import {verticalScale} from '../lib/Scaling';
import SvgTimes from "../assets/svg/SvgTimes";
import Input from "./Input";
import Button from "./Button";

export default class ModalView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static defaultProps = {
        visible: false,
        filter: false,
        information: false,
        informationTitle: '',
        onClose: () => {
        },
        filterChangeText: () => {
        },
        filterValue: '',
        filterLabel: '',
    };

    render() {
        return(
            <Modal animationType="slide" transparent={true} visible={this.props.visible} onRequestClose={() => {
            }}>
                <View style={style.view}>
                    {(this.props.information === false) ? (
                        <Header searchBar style={style.header}>
                            <Left style={{flex: 0}}>
                                <Button onPress={this.props.onClose} border={false}>
                                    <SvgTimes/>
                                </Button>
                            </Left>
                            <Body style={{flex: 3, flexDirection: 'row', justifyContent: 'center'}}>
                                <Text style={style.title}>{this.props.title.toUpperCase()}</Text>
                            </Body>
                            <Right style={{flex: 0}}>

                            </Right>
                        </Header>
                    ) : (
                        <Header searchBar style={style.header}>
                            <Body style={{alignItems: 'center',}}>
                                <Text style={[{}, style.title]}>{this.props.title.toUpperCase()}</Text>
                            </Body>
                        </Header>
                    )}
                    {(this.props.filter) && (
                        <View style={{paddingLeft: 20, paddingRight: 20, height: 60}}>
                            <Input label={this.props.filterLabel} styleLabel={{color: "#FFFFFF"}}
                                   styleInput={{color: "#83EFFF"}} onChangeText={this.props.filterChangeText}
                                   value={this.props.filterValue} check={false} maxLength={20}/>
                        </View>
                    )}
                    <ScrollView>
                        <View style={style.content}>
                            {this.props.children}

                            {(this.props.information === true) && (
                                <View style={{marginTop: 50, alignItems: 'center',}}>
                                    <TouchableOpacity style={{
                                        width: 200,
                                        borderWidth: 1,
                                        borderColor: '#83EFFF',
                                        borderRadius: 5,
                                        height: 40,
                                        flex: 1,
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }} onPress={this.props.onClose}>
                                        <Text style={{
                                            color: '#83EFFF',
                                            fontSize: verticalScale(16),
                                            fontFamily: 'PFBeauSansPro-Regular'
                                        }}>{this.props.informationTitle}</Text>
                                    </TouchableOpacity>
                                </View>

                            )}

                        </View>
                    </ScrollView>

                </View>
            </Modal>
        )
    }
}

const style = StyleSheet.create({
    view: {
        backgroundColor: '#074A5D',
        height: Dimensions.get('window').height
    },
    header: {
        marginTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
        backgroundColor: 'transparent',
        borderBottomWidth: 0,
        shadowOffset: {height: 0, width: 0},
        shadowOpacity: 0,
        elevation: 0,
    },
    title_header: {
        fontSize: verticalScale(22),
        color: '#FFFFFF',
        fontFamily: 'PFBeauSansPro-Bold',
    },
    title: {
        fontSize: verticalScale(16),
        color: '#FFFFFF',
        fontFamily: 'PFBeauSansPro-Bold',
    },
    content: {
        paddingLeft: 20,
        paddingRight: 20,
    }
});
