import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Dimensions, StyleSheet, View, SafeAreaView, TouchableOpacity, Text,} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import Svg, {Path} from 'react-native-svg';
import {TextMask} from 'react-native-masked-text'

import styles from "../../../theme/Style";
import NavigationOptions from "../../../lib/NavigationOptions";
import {verticalScale} from "../../../lib/Scaling";
import SvgFiveStar from "../../../assets/svg/SvgFiveStar";
import StatusBarComp from "../../../components/StatusBarComp";
import destVincenty from "../../../lib/MapDestination";

const {width, height} = Dimensions.get('window');
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);

//https://stackoverflow.com/questions/36685372/how-to-zoom-in-out-in-react-native-map

class SearchMapScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            SelectRegion: {
                latitude: (props.latitude) ? props.latitude : 55.755798,
                longitude: (props.longitude) ? props.longitude : 37.617587,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            mTop: {
                latitude: (props.latitude) ? props.latitude : 55.755798,
                longitude: (props.longitude) ? props.longitude : 37.617587,
            },
            mRight: {
                latitude: (props.latitude) ? props.latitude : 55.755798,
                longitude: (props.longitude) ? props.longitude : 37.617587,
            },
            mBottom: {
                latitude: (props.latitude) ? props.latitude : 55.755798,
                longitude: (props.longitude) ? props.longitude : 37.617587,
            },
            mLeft: {
                latitude: (props.latitude) ? props.latitude : 55.755798,
                longitude: (props.longitude) ? props.longitude : 37.617587,
            },
            radius: 3000,
            slider_width: 0,
            select_marker: null,
            markers: [
                {
                    id: 1,
                    salary: 17500,
                    title: '',
                    image: '',
                    time: '11:00 - 21:00 10 часов',
                    coordinates: {latitude: 55.650319, longitude: 37.539531,},
                    opacity: 1,
                },
                {
                    id: 2,
                    salary: 22500,
                    title: '',
                    image: '',
                    time: '11:00 - 21:00 10 часов',
                    coordinates: {latitude: 55.650419, longitude: 37.539831,},
                    opacity: 1,
                },
                {
                    id: 3,
                    salary: 2500,
                    title: '',
                    image: '',
                    time: '11:00 - 21:00 10 часов',
                    coordinates: {latitude: 55.656003, longitude: 37.541461,},
                    opacity: 1,
                },
                {
                    id: 4,
                    salary: 1500,
                    title: '',
                    image: '',
                    time: '11:00 - 21:00 10 часов',
                    coordinates: {latitude: 55.650366, longitude: 37.534489,},
                    opacity: 1,
                },
                {
                    id: 4,
                    salary: 3500,
                    title: '',
                    image: '',
                    time: '11:00 - 21:00 10 часов',
                    coordinates: {latitude: 55.653588, longitude: 37.541252,},
                    opacity: 1,
                }
            ],
            region: {
                latitude: (props.latitude) ? props.latitude : 55.755798,
                longitude: (props.longitude) ? props.longitude : 37.617587,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
        };
        this._getGEO(false);
        this.mapRef = null;
    }

    static navigationOptions = ({navigation}) => NavigationOptions(navigation, {
        title: 'Просмотр карты',
        left_func: 'SearchIndexScreen',
        margin_top: false,
    });

    componentDidMount() {
    }

    _getGEO = (param) => {
        Geolocation.getCurrentPosition(position => {
            if ((this.props.latitude === null || this.props.longitude === null) || param === true) {
                this.setState(prevState => {
                    return {
                        region: {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                            latitudeDelta: prevState.region.latitudeDelta,
                            longitudeDelta: prevState.region.longitudeDelta,
                        }
                    }
                });
            }
        });
    };

    _calculateMarker = () => {
        this.setState({
            mTop: destVincenty(this.state.region.latitude, this.state.region.longitude, 0, this.state.radius / 2),
            mRight: destVincenty(this.state.region.latitude, this.state.region.longitude, 90, this.state.radius / 2),
            mBottom: destVincenty(this.state.region.latitude, this.state.region.longitude, 180, this.state.radius / 2),
            mLeft: destVincenty(this.state.region.latitude, this.state.region.longitude, 270, this.state.radius / 2),
        }, this._fitAllMarkers());
    };

    _fitAllMarkers() {
        // this.mapRef.fitToCoordinates([this.state.mTop,this.state.mRight,this.state.mBottom,this.state.mLeft], {
        //     edgePadding: { top: 40, right: 40, bottom: 40, left: 40 },
        //     animated: true,
        // });
        this.mapRef.fitToCoordinates([this.state.mRight, this.state.mLeft], {
            edgePadding: {top: 40, right: 40, bottom: 40, left: 40},
            animated: false,
        });
    }

    render() {
        let zoom = Math.round(Math.log(360 / this.state.region.longitudeDelta) / Math.LN2);
        return (
            <SafeAreaView style={styles.container_global}>
                <StatusBarComp/>
                <View style={{...StyleSheet.absoluteFillObject, flex: 1,}}>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        ref={(ref) => {
                            this.mapRef = ref
                        }}
                        style={{...StyleSheet.absoluteFillObject}}
                        showsUserLocation={true}
                        showsCompass={true}
                        zoomEnabled={false}
                        zoomTapEnabled={false}
                        zoomControlEnabled={false}
                        rotateEnabled={false}
                        followsUserLocation={true}
                        showsMyLocationButton={false}
                        showsPointsOfInterest={true}
                        region={this.state.region}
                        onRegionChangeComplete={(region) => {
                            this.setState({region: region}, this._calculateMarker());
                        }}
                        onPress={(region) => {
                            this.setState({select_marker: null});
                        }}
                    >
                        {this.state.markers.map((marker, index) => (
                            <MapView.Marker
                                onPress={e => {
                                    console.log(index);
                                    this.setState({select_marker: index})
                                }}
                                key={index}
                                coordinate={marker.coordinates}
                                opacity={marker.opacity}
                            >
                                <View style={{padding: 4, backgroundColor: '#074A5D', borderRadius: 5,}}>
                                    <TextMask type={'money'} options={{
                                        precision: 0,
                                        separator: ' ',
                                        delimiter: ' ',
                                        unit: '',
                                        suffixUnit: '₽'
                                    }} style={{
                                        fontSize: verticalScale(16),
                                        color: '#FFFFFF',
                                        fontFamily: 'PFBeauSansPro-Regular',
                                    }} value={marker.salary}/>
                                </View>
                            </MapView.Marker>
                        ))}
                        {/*<MapView.Circle*/}
                        {/*    center={this.state.region}*/}
                        {/*    radius={this.state.radius / 2}*/}
                        {/*    strokeWidth={1}*/}
                        {/*    strokeColor={'#074A5D'}*/}
                        {/*    fillColor={'rgba(7, 74, 93, 0.1)'}*/}
                        {/*/>*/}
                        <MapView.Marker coordinate={this.state.mTop}/>
                        <MapView.Marker coordinate={this.state.mRight}/>
                        <MapView.Marker coordinate={this.state.mBottom}/>
                        <MapView.Marker coordinate={this.state.mLeft}/>
                    </MapView>

                    <Text style={{position: 'absolute', top: 100, left: 10,}}>{zoom}</Text>

                    {(this.state.select_marker) && (
                        <View style={{
                            marginLeft: 20,
                            marginRight: 20,
                            position: 'absolute',
                            bottom: 80,
                            flex: 1,
                            padding: 10,
                            backgroundColor: '#F9FBFF',
                            borderColor: '#074A5D',
                            borderWidth: 1,
                            borderRadius: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <View style={{
                                borderRadius: 2,
                                borderWidth: 1,
                                borderColor: '#000000',
                                width: 50,
                                height: 50,
                            }}>
                            </View>
                            <View style={{flex: 1, paddingLeft: 10,}}>
                                <View>
                                    <Text style={{
                                        fontSize: verticalScale(16),
                                        color: '#262626',
                                        fontFamily: 'PFBeauSansPro-Bold'
                                    }}>Упаковщик</Text>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
                                    <TextMask type={'money'} options={{
                                        precision: 0,
                                        separator: ' ',
                                        delimiter: ' ',
                                        unit: '',
                                        suffixUnit: '₽'
                                    }} style={{
                                        fontSize: verticalScale(14),
                                        color: '#10BD55',
                                        fontFamily: 'PFBeauSansPro-Bold',
                                    }} value={17400}/>
                                    <SvgFiveStar rating={4}/>
                                </View>
                                <View>
                                    <Text style={{
                                        fontSize: verticalScale(14),
                                        color: '#10BD55',
                                        fontFamily: 'PFBeauSansPro-Bold',
                                    }}>
                                        11:00 - 21:00 10 часов
                                    </Text>
                                </View>
                            </View>
                        </View>
                    )}

                    <View style={{
                        position: 'absolute',
                        bottom: 10,
                        paddingLeft: 20,
                        paddingRight: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>

                        <View style={{flex: 1, alignItems: 'center'}}
                              onLayout={(event) => this.setState({slider_width: event.nativeEvent.layout.width})}>
                            <Text style={{
                                position: 'absolute',
                                marginTop: -10,
                                fontSize: verticalScale(18),
                                color: '#074A5D',
                                fontFamily: 'PFBeauSansPro-Bold'
                            }}>{this.state.radius / 1000} км</Text>
                            <MultiSlider
                                values={[this.state.radius]}
                                sliderLength={this.state.slider_width}
                                snapped
                                min={1000}
                                max={25000}
                                step={1000}
                                selectedStyle={{
                                    backgroundColor: '#074A5D',
                                    height: 4,
                                }}
                                unselectedStyle={{
                                    backgroundColor: '#A1AABA',
                                }}
                                markerStyle={{
                                    backgroundColor: '#074A5D',
                                    borderColor: '#074A5D',
                                    borderWidth: 1,
                                    borderRadius: 15,
                                    height: 20, width: 20
                                }}
                                pressedMarkerStyle={{
                                    backgroundColor: '#074A5D',
                                    borderColor: '#074A5D',
                                    borderWidth: 0,
                                    height: 20, width: 20
                                }}
                                onValuesChange={(value) => {
                                    this.setState({radius: value[0]}, this._calculateMarker());
                                }}
                            />
                        </View>

                        <TouchableOpacity
                            style={{marginLeft: 20, backgroundColor: '#074A5D', borderRadius: 50, padding: 10,}}
                            onPress={() => {
                                this._getGEO(true);
                            }}>
                            <Svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                                <Path
                                    d="M9.47872 11.809C10.7658 11.809 11.8091 10.7656 11.8091 9.47859C11.8091 8.19155 10.7658 7.1482 9.47872 7.1482C8.19168 7.1482 7.14832 8.19155 7.14832 9.47859C7.14832 10.7656 8.19168 11.809 9.47872 11.809Z"
                                    fill="white"/>
                                <Path
                                    d="M18.0234 8.74503H14.9163C14.4847 8.74503 14.1395 9.09027 14.1395 9.52182C14.1395 9.95338 14.4847 10.2986 14.9163 10.2986H18.0234C18.455 10.2986 18.8002 9.95338 18.8002 9.52182C18.8002 9.09027 18.455 8.74503 18.0234 8.74503Z"
                                    fill="white"/>
                                <Path
                                    d="M9.47857 4.81783C9.91012 4.81783 10.2554 4.47259 10.2554 4.04103V0.976994C10.2554 0.545439 9.91012 0.200195 9.47857 0.200195C9.04701 0.200195 8.70177 0.545439 8.70177 0.976994V4.08419C8.74493 4.51574 9.09017 4.81783 9.47857 4.81783Z"
                                    fill="white"/>
                                <Path
                                    d="M4.81783 9.47857C4.81783 9.04701 4.47259 8.70177 4.04103 8.70177H0.976994C0.545439 8.70177 0.200195 9.04701 0.200195 9.47857C0.200195 9.91012 0.545439 10.2554 0.976994 10.2554H4.08419C4.51574 10.2554 4.81783 9.91012 4.81783 9.47857Z"
                                    fill="white"/>
                                <Path
                                    d="M3.26413 10.9891H2.09894C2.70311 13.9236 5.03351 16.254 7.96808 16.8582V15.693C5.68084 15.132 3.82515 13.3195 3.26413 10.9891Z"
                                    fill="white"/>
                                <Path
                                    d="M7.96808 3.26426V2.09906C5.03351 2.70324 2.70311 5.03363 2.09894 7.9682H3.26413C3.82515 5.68096 5.68084 3.82528 7.96808 3.26426Z"
                                    fill="white"/>
                                <Path
                                    d="M15.693 7.9682H16.8582C16.2972 5.03363 13.9668 2.70324 10.9891 2.09906V3.26426C13.3195 3.82528 15.132 5.68096 15.693 7.9682Z"
                                    fill="white"/>
                                <Path
                                    d="M10.9891 15.693V16.8582C13.9236 16.254 16.254 13.9236 16.8582 10.9891H15.693C15.132 13.3195 13.3195 15.132 10.9891 15.693Z"
                                    fill="white"/>
                                <Path
                                    d="M9.47857 14.1395C9.04701 14.1395 8.70177 14.4847 8.70177 14.9163V18.0234C8.70177 18.455 9.04701 18.8002 9.47857 18.8002C9.91012 18.8002 10.2554 18.455 10.2554 18.0234V14.9163C10.2554 14.4847 9.91012 14.1395 9.47857 14.1395Z"
                                    fill="white"/>
                            </Svg>
                        </TouchableOpacity>

                    </View>

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

export default connect(mapStateToProps, mapDispatchToProps)(SearchMapScreen);