import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    Dimensions,
    StyleSheet,
    View,
    StatusBar,
    Image,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    Switch
} from 'react-native';
import { Container, Content, Footer, Text, Header, Button, Left, Body, Right, Title, Icon, Item, Label, Input, List, ListItem, Separator, SwipeRow, } from 'native-base';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import styles from "../../../../theme/Style";

import NavigationOptions from "../../../../lib/NavigationOptions";

import {verticalScale} from "../../../../lib/Scaling";
import Svg,{ Path, G, Circle, Rect } from 'react-native-svg';
import Modal from "react-native-translucent-modal";
import axios from "../../../../lib/Axios";

import {SetLatLon} from "../../../../actions/user_summary/View";
import StatusBarComp from "../../../../components/StatusBarComp";

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.045;
//const LONGITUDE_DELTA = 0.045;
// const LATITUDE_DELTA = 0.0522;
 const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class UserSummaryViewMapScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            SelectRegion: {
                latitude: (props.latitude) ? props.latitude: 55.755798,
                longitude: (props.longitude) ? props.longitude : 37.617587,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            radius: 100,
            region: {
                latitude: (props.latitude) ? props.latitude: 55.755798,
                longitude: (props.longitude) ? props.longitude : 37.617587,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            myLatLongs: [
                {latitude: 55.695369, longitude: 37.673963},
                {latitude: 55.692334, longitude: 37.678696},
                {latitude: 55.690273, longitude:  37.669872},
                {latitude: 55.694338, longitude: 37.668738},
            ],
        };
        this._getGEO(false);
    }

    static navigationOptions = ({ navigation }) => NavigationOptions(navigation, {title: 'ВЫБОР МЕСТА', margin_top: false,});

    componentDidMount() {

    }

    calDelta(lat,long,accuracy){
        const oneDegreeOfLatitudeInMeters = 111.32 * 1000;
        const latDelta = accuracy / oneDegreeOfLatitudeInMeters;
        const longDelta = accuracy / (oneDegreeOfLatitudeInMeters * Math.cos(lat * (Math.PI / 180)));

        this.setState({
            region:{
                latitude:lat,
                longitude:long,
                latitudeDelta:latDelta,
                longitudeDelta:longDelta,
                accuracy:accuracy,
            },
        });
    }

    _getGEO = ( param ) => {
        //this.map.fitToCoordinates(this.state.myLatLongs, { edgePadding: { top: 10, right: 10, bottom: 10, left: 10 }, animated: false })

        Geolocation.getCurrentPosition(position => {
            if( (this.props.latitude === null || this.props.longitude === null) || param === true){

                const lat = position.coords.latitude;
                const long = position.coords.longitude;
                const accuracy = position.coords.accuracy;

                this.calDelta(lat,long,this.state.radius)

                // this.setState({
                //     region: {
                //         latitude: position.coords.latitude,
                //         longitude: position.coords.longitude,
                //         latitudeDelta: LATITUDE_DELTA,
                //         longitudeDelta: LONGITUDE_DELTA,
                //     }
                // });
            }
                // this.setState({
                //     SelectRegion: {
                //         latitude: info.coords.latitude,
                //         longitude: info.coords.longitude,
                //         latitudeDelta: LATITUDE_DELTA,
                //         longitudeDelta: LONGITUDE_DELTA,
                //     }
                // });

            console.log(position);
            //console.log(this.map);
        });
    };

    render() {
        return(
            <SafeAreaView style={styles.container_global}>
                <StatusBarComp/>

            <View style={{...StyleSheet.absoluteFillObject, flex:1,}}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    ref={ref => {
                        this.map = ref;
                    }}
                    //initialRegion={this.state.SelectRegion}
                    style={{...StyleSheet.absoluteFillObject}}
                    showsUserLocation={true}
                    followsUserLocation={true}
                    showsMyLocationButton={false}
                    showsPointsOfInterest={true}
                    rotateEnabled={false}
                    region={this.state.region}
                    //minZoomLevel={10}
                    //maxZoomLevel={5}
                    // region={{
                    //     latitude: 55.694860,
                    //     longitude: 37.676836,
                    //     latitudeDelta: 0.0922,
                    //     longitudeDelta: 0.0421,
                    // }}
                    onRegionChangeComplete={(region) => {
                        const oneDegreeOfLatitudeInMeters = 111.32 * 1000;
                        const accuracy = region.latitudeDelta * oneDegreeOfLatitudeInMeters;
                        console.log(accuracy);
                        this.setState({ radius: accuracy });
                       // console.log(region);
                        this.setState({ region: region });
                        //this.setState({ SelectRegion: region });
                    }}
                    onLayout = {() => {} }

                    >
                    {/*<MapView.Polyline coordinates={this.state.myLatLongs} strokeWidth={4} strokeColor="#2962FF" />*/}
                    {/*<MapView.Circle*/}
                    {/*    center = { this.state.region }*/}
                    {/*    radius = { this.state.radius }*/}
                    {/*    strokeWidth = { 1 }*/}
                    {/*    strokeColor = { '#074A5D' }*/}
                    {/*    fillColor = { 'rgba(7, 74, 93, 0.1)' }*/}
                    {/*/>*/}
                    <MapView.Circle
                        center = { this.state.region }
                        radius = { 10 }
                        strokeWidth = { 1 }
                        strokeColor = { '#074A5D' }
                        fillColor = { 'rgba(7, 74, 93, 1)' }
                    />
                </MapView>

                <View style={{position:'absolute', bottom:90, left:20,}}>
                    <TouchableOpacity onPress={() => { this._getGEO(true); }}>
                        <Svg width="50" height="60" viewBox="0 0 50 60" fill="none">
                            <Rect x="0.5" y="10.5" width="49" height="49" rx="4.5" stroke="#074A5D"/>
                            <Path d="M25.5663 45.1667H24.3274C23.5486 45.1667 22.8407 44.5939 22.7699 43.8421L21.7787 36.4316C21.0353 36.2526 20.4336 35.6082 20.3982 34.8564L19.938 29.6655C19.9026 29.0569 20.0796 28.4483 20.5044 27.9829C20.9645 27.4817 21.6371 27.1953 22.3451 27.1953H27.5486C28.2566 27.1953 28.9292 27.4817 29.3893 27.9829C29.8141 28.4483 30.0265 29.0569 29.9557 29.6655L29.5309 34.8564C29.4601 35.6082 28.8938 36.2526 28.1504 36.4316L27.1592 43.8421C27.0176 44.5939 26.3451 45.1667 25.5663 45.1667ZM22.3451 28.6273C22.0265 28.6273 21.7433 28.7347 21.5663 28.9495C21.4247 29.1285 21.3539 29.3075 21.3539 29.5223L21.7787 34.7132C21.7787 34.8922 21.9911 35.0354 22.2389 35.0354H22.3805C22.7345 35.0354 23.0176 35.286 23.0884 35.644L24.1858 43.5915C24.1858 43.6273 24.2566 43.6989 24.3628 43.6989H25.6017C25.7079 43.6989 25.7787 43.6273 25.7787 43.5915L26.8761 35.644C26.9115 35.286 27.23 35.0354 27.584 35.0354H27.7256C27.9734 35.0354 28.1504 34.8922 28.1858 34.7132L28.6106 29.5223C28.6106 29.3075 28.5398 29.0927 28.3982 28.9495C28.2212 28.7347 27.9026 28.6273 27.6194 28.6273H22.3451Z" fill="#074A5D"/>
                            <Path d="M24.9646 26.0167C23.0531 26.0167 21.4956 24.4415 21.4956 22.5084C21.4956 20.5752 23.0531 19 24.9646 19C26.8761 19 28.4337 20.5752 28.4337 22.5084C28.4337 24.4415 26.8407 26.0167 24.9646 26.0167ZM24.9646 20.432C23.8319 20.432 22.9115 21.3628 22.9115 22.5084C22.9115 23.6539 23.8319 24.5847 24.9646 24.5847C26.0974 24.5847 27.0177 23.6539 27.0177 22.5084C27.0177 21.3628 26.062 20.432 24.9646 20.432Z" fill="#074A5D"/>
                            <Path d="M24.9646 50C18.2389 50 13 47.5298 13 44.3795C13 41.6587 16.9292 39.3675 22.5929 38.8664C22.9823 38.8306 23.3363 39.117 23.3717 39.5107C23.4071 39.9045 23.1239 40.2625 22.7345 40.2983C18.6637 40.6563 14.4513 42.3031 14.4513 44.3795C14.4513 46.3485 18.7699 48.568 25 48.568C31.2301 48.568 35.5487 46.3485 35.5487 44.3795C35.5487 42.6969 32.3628 40.6921 26.9823 40.2625C26.5929 40.2267 26.3097 39.8687 26.3451 39.4749C26.3805 39.0812 26.6991 38.7948 27.1239 38.8306C32.9292 39.2959 37 41.5871 37 44.3795C36.9292 47.5298 31.6549 50 24.9646 50Z" fill="#074A5D"/>
                        </Svg>
                    </TouchableOpacity>
                </View>

                <View style={{position:'absolute', bottom:30, left:20, right:20,}}>
                    <Button onPress={() => { this.props.SetLatLon(this.state.region.latitude, this.state.region.longitude); this.props.navigation.goBack(); }} full primary style={[styles.button_transparent,{flex:1,backgroundColor: '#074A5D'}]}>
                        <Text uppercase={false} style={[styles.button_text_transparent, {color: '#ffffff'}]}>
                            Выбрать положение
                        </Text>
                    </Button>
                </View>

            </View>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        latitude: state.UserSummaryView.latitude,
        longitude: state.UserSummaryView.longitude,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        SetLatLon: (latitude, longitude) => {
            dispatch(SetLatLon(latitude, longitude))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSummaryViewMapScreen);