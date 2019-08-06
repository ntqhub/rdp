import React, {Component} from 'react'
import {connect} from "react-redux";
import {
    StatusBar,
    SafeAreaView,
    RefreshControl,
    ScrollView,
    View,
    TouchableOpacity,
    FlatList,
    StyleSheet, Dimensions

} from "react-native";
import {Button,Icon, Input, Item, Label, Tab, Tabs, Text} from 'native-base';
import {withNavigationFocus} from "react-navigation";
import Svg, {Path} from "react-native-svg";

import NavigationOptions from "../../../services/NavigationOptions";
import axios from './../../../services/Axios';

import styles from "../../../theme/Style";
import {verticalScale} from "../../../theme/Scaling";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";




class ExchangeIndexScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: false,
            city: '',
            city_id: null,
            date: '',
            office: '',
            office_id: null,
            count: 0,
            items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            region:{
                latitude: 55.75222,
                longitude: 37.61556,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0121,
            },

            mishaKrug:2000,
            helt:'',
        };
    }

    static navigationOptions = ({navigation}) => NavigationOptions(navigation, {
        title: 'map',
        left_func: 'ExchangeStack',
        margin_top: false
    });

    componentDidMount() {
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isFocused !== this.props.isFocused && this.props.isFocused === true) {

        }
    }

    zoomPlus = ()=>{
        this.setState({

            //        region:{latitudeDelta: this.state.region.latitudeDelta - 1},
                    // mishaKrug: (this.state.mishaKrug * 3 > 30000)? 30000 :this.state.mishaKrug * 3 ,
                });

    }
    zoomMinus = ()=>{
        this.setState({

            // region: {longitudeDelta: this.state.region.longitudeDelta - 0.2},
            // mishaKrug: (this.state.mishaKrug / 3 < 0)? 2000 :this.state.mishaKrug / 3 ,

        });

    }
    render() {

        return (
            <SafeAreaView style={styles.container_global}>
                <StatusBar backgroundColor={styles.statusBar_bgcolor.backgroundColor} barStyle="dark-content"/>

                    <View style={{flex:1, ...StyleSheet.absoluteFillObject}}>
                        <MapView
                            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                            zoomEnabled={true}
                            showsUserLocation={true}
                            style={{...StyleSheet.absoluteFillObject}}
                            onRegionChangeComplete={(region) => {
                                this.setState({region:region});
                            }}
                        >
                            <MapView.Circle
                                // center ={{region:{latitudeDelta: this.state.region.latitudeDelta, longitudeDelta: this.state.region.longitudeDelta }}}
                              center = { this.state.region }
                              radius = { this.state.mishaKrug }
                                strokeWidth = { 1 }
                                strokeColor = { '#074A5D' }
                                fillColor = { 'rgba(7, 74, 93, 0.3)' }
                            />

                        </MapView>



                        <Button onPress={()=>this.zoomMinus()}>
                            <Text>+</Text>
                        </Button>
                        <Button onPress={()=>this.zoomPlus()}>
                            <Text>-</Text>
                        </Button>
                        <Text>{this.state.region.latitude} latitude</Text>
                        <Text>{this.state.region.longitude} longitude</Text>
                        <Text>{this.state.region.latitudeDelta} latitudeDelta</Text>
                        <Text>{this.state.region.longitudeDelta} longitudeDelta</Text>
                        <Text>{this.state.mishaKrug} km</Text>

                    </View>


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

export default connect(mapStateToProps, mapDispatchToProps)(withNavigationFocus(ExchangeIndexScreen));