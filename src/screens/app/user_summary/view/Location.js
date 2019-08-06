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
    Switch, BackHandler
} from 'react-native';
import { Container, Content, Footer, Text, Header, Button, Left, Body, Right, Title, Icon, Item, Label, Input, List, ListItem, Separator, SwipeRow, } from 'native-base';

import styles from "../../../../theme/Style";

import NavigationOptions from "../../../../lib/NavigationOptions";

import {verticalScale} from "../../../../lib/Scaling";
import Svg, {Path} from "react-native-svg";
import Modal from "react-native-translucent-modal";
import axios from "../../../../lib/Axios";

import {SetCity, SetCountry, SetFullSearch} from "../../../../actions/user_summary/View";
import SvgCheck from "../../../../assets/svg/SvgCheck";
import StatusBarComp from "../../../../components/StatusBarComp";

class UserSummaryViewLocationScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal_country: false,
            modal_city: false,
            search_city: '',
            citys: [],
        };
    }

    static navigationOptions = ({ navigation }) => NavigationOptions(navigation, {title: 'ЛОКАЦИЯ', left_func: 'UserSummaryViewIndexScreen', margin_top: false});

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

    get_city = async () => {
        this.setState({citys: []});
        axios.get('v1/city.get_by_name', {
            params: {
                city: this.state.search_city
            }
        })
            .then(response => {
                this.setState({citys: response});
            });
    };

    render() {
        return(
            <SafeAreaView style={styles.container_global}>
                <StatusBarComp/>

                    <ScrollView>
                       <View style={styles.content_global}>

                           <Text style={{color: '#262626', fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Bold',}}>Локация</Text>
                           <Text style={{marginTop:5, color: '#A1AABA', fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular',}}>Введите адрес или критерии поиска</Text>

                           <Modal animationType="slide" transparent={true} visible={this.state.modal_country} onRequestClose={() => {}}>
                               <View style={{backgroundColor:'#074A5D', height: Dimensions.get('window').height}}>
                                   <Header searchBar style={{marginTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight, backgroundColor:'transparent', borderBottomWidth: 0, shadowOffset: {height: 0, width: 0},
                                       shadowOpacity: 0, elevation: 0,}}>
                                       <Left>
                                           <Button transparent onPress={() => {
                                               this.setState({modal_country: false});
                                           }}>
                                               <Svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                                                   <Path d="M7.48983 6.32541L13.6079 0.240204C13.8762 -1.62263e-06 13.9836 0 14.2519 0C14.6812 0.053379 14.7081 0.160139 14.8154 0.293586C15.0569 0.61386 15.0837 0.987512 14.7617 1.36117L8.64367 7.47305L14.7886 13.5849C15.3521 14.1988 14.4934 15.5066 13.6616 14.7059L7.48983 8.59401L1.34493 14.7059C0.888757 15.1329 0.781429 14.9995 0.513093 14.8927C0.00325457 14.7059 -0.184574 14.012 0.21793 13.5849L6.36282 7.47305L0.244757 1.38785C0.110589 1.22772 0.0837521 1.17434 0.0569185 1.06758C-0.104083 0.587169 0.191083 0.0533806 0.808256 0.0266911C0.83509 0.0266911 0.861927 0.0266911 0.861927 0.0266911C1.18393 0.0533806 1.2376 0.133447 1.37177 0.266895L7.48983 6.32541Z" fill="white"/>
                                               </Svg>
                                           </Button>
                                       </Left>
                                       <Body>
                                           <Title style={{fontSize: verticalScale(16),
                                               color: '#ffffff',
                                               fontFamily: 'PFBeauSansPro-Bold',}}>ВЫБЕРИТЕ СТРАНУ</Title>
                                       </Body>
                                   </Header>
                                   <Content>
                                       <ScrollView style={styles.content_global}>

                                           <View style={{ flex: 1, flexDirection:'column', justifyContent: 'space-between', }}>
                                               <Button onPress={() => {this.props.SetCountry(1, 'Россия'); this.setState({modal_country: false});}} transparent full><Text style={{color: "#FFFFFF", fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular'}}>Россия</Text></Button>
                                               <Button onPress={() => {this.props.SetCountry(2, 'Украина'); this.setState({modal_country: false});}} transparent full><Text style={{color: "#FFFFFF", fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular'}}>Украина</Text></Button>
                                               <Button onPress={() => {this.props.SetCountry(5, 'Беларусь'); this.setState({modal_country: false});}} transparent full><Text style={{color: "#FFFFFF", fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular'}}>Беларусь</Text></Button>
                                           </View>

                                       </ScrollView>
                                   </Content>
                               </View>
                           </Modal>

                           <Modal animationType="slide" transparent={true} visible={this.state.modal_city} onRequestClose={() => {}}>
                               <View style={{backgroundColor:'#074A5D', height: Dimensions.get('window').height}}>
                                   <Header searchBar style={{marginTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight, backgroundColor:'transparent', borderBottomWidth: 0, shadowOffset: {height: 0, width: 0},
                                       shadowOpacity: 0, elevation: 0,}}>
                                       <Left>
                                           <Button transparent onPress={() => {
                                               this.setState({modal_city: false});
                                           }}>
                                               <Svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                                                   <Path d="M7.48983 6.32541L13.6079 0.240204C13.8762 -1.62263e-06 13.9836 0 14.2519 0C14.6812 0.053379 14.7081 0.160139 14.8154 0.293586C15.0569 0.61386 15.0837 0.987512 14.7617 1.36117L8.64367 7.47305L14.7886 13.5849C15.3521 14.1988 14.4934 15.5066 13.6616 14.7059L7.48983 8.59401L1.34493 14.7059C0.888757 15.1329 0.781429 14.9995 0.513093 14.8927C0.00325457 14.7059 -0.184574 14.012 0.21793 13.5849L6.36282 7.47305L0.244757 1.38785C0.110589 1.22772 0.0837521 1.17434 0.0569185 1.06758C-0.104083 0.587169 0.191083 0.0533806 0.808256 0.0266911C0.83509 0.0266911 0.861927 0.0266911 0.861927 0.0266911C1.18393 0.0533806 1.2376 0.133447 1.37177 0.266895L7.48983 6.32541Z" fill="white"/>
                                               </Svg>
                                           </Button>
                                       </Left>
                                       <Body>
                                           <Title style={{fontSize: verticalScale(16),
                                               color: '#ffffff',
                                               fontFamily: 'PFBeauSansPro-Bold',}}>ВЫБЕРИТЕ ГОРОД</Title>
                                       </Body>
                                   </Header>
                                   <View style={{paddingLeft: 20, paddingRight: 20,}}>
                                       <Item floatingLabel style={{marginTop:0,}}>
                                           <Label style={styles.item_float_label}>Город проживания</Label>
                                           <Input autoCapitalize="sentences" style={{color: '#FFFFFF'}} autoCorrect={false} onChangeText={(value) => { this.setState({search_city: value}); this.delay(function(){ this.get_city(); }.bind(this), 100 ); }} value={this.state.search_city} maxLength={20}/>
                                       </Item>
                                   </View>
                                   <Content>

                                       <ScrollView style={styles.content_global}>

                                           <View style={{ flex: 1, flexDirection:'column', justifyContent: 'space-between', }}>
                                               {Object.keys(this.state.citys).map((key) =>
                                                   <Button key={key} onPress={() => { this.props.SetCity(this.state.citys[key].id, this.state.citys[key].name); this.setState({modal_city: false});}} transparent full><Text style={{color: "#FFFFFF", fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular'}}>{this.state.citys[key].name}</Text></Button>
                                               )}
                                               {(Object.keys(this.state.citys).length === 0) ? (
                                                   <Text style={{textAlign: 'center', color: '#FFFFFF', marginTop: 5,}}>Загрузка данных...</Text>
                                               ) : null}
                                           </View>

                                       </ScrollView>
                                   </Content>
                               </View>
                           </Modal>

                           <Item onPress={() => {
                               this.setState({modal_country: true})
                           }} stackedLabel style={{marginTop: 15}}>
                               <Label style={styles.item_float_label}>Страна</Label>
                               <Input
                                   autoCapitalize="sentences" autoCorrect={false}
                                   onTouchStart={() => {this.setState({modal_country: true})}}
                                   editable={false}
                                   value={this.props.country} style={{paddingRight: 40,}}/>
                               { (this.props.country && this.props.country.length) ? (
                                   <SvgCheck style={{position: 'absolute', bottom: 20, right: 5}}/>
                               ) : null}
                           </Item>

                           <Item onPress={() => {
                               this.setState({modal_city: true});
                               this.get_city();
                           }} stackedLabel style={{marginTop: 15,}}>
                               <Label style={styles.item_float_label}>Город</Label>
                               <Input
                                   autoCapitalize="sentences" autoCorrect={false}
                                   onTouchStart={() => { this.setState({modal_city: true}); this.get_city(); }}
                                   editable={false}
                                   value={this.props.city} style={{paddingRight: 40,}}/>
                               {(this.props.city && this.props.city.length) ? (
                                   <SvgCheck style={{position: 'absolute', bottom: 20, right: 5}}/>
                               ) : null}
                           </Item>

                           <View style={{marginTop:15, flex:1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                               <View>
                                   <Text style={{fontSize: verticalScale(12), color: '#262626', fontFamily: 'PFBeauSansPro-Regular'}}>Автоматический поиск по всему городу</Text>
                               </View>
                               <View>
                                   <Switch thumbColor={(this.props.full_search)? '#074A5D':'#F9FBFF'} onValueChange={()=>{ this.props.SetFullSearch(!this.props.full_search); }} value={this.props.full_search}/>
                               </View>
                           </View>

                           {(!this.props.full_search) && (
                               <View style={{flex:1,marginTop:15,}}>
                                   <Button full primary style={[styles.button]} onPress={() => { this.props.navigation.navigate('UserSummaryViewMapScreen') }}>
                                       <Text uppercase={false} style={{color: '#ffffff', fontSize: verticalScale(16), fontFamily: 'PFBeauSansPro-Regular'}}>
                                           {(this.props.latitude)? 'Изменить место на карте' : 'Выбрать место на карте'}
                                       </Text>
                                   </Button>
                               </View>
                           )}

                       </View>
                    </ScrollView>

                <View style={{position:'absolute', bottom:20, right:20,}}>
                    <Button full primary style={[styles.button, {width: 50,}]} onPress={() => this.props.navigation.navigate('UserSummaryViewBookingScreen')}>
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
        city: state.UserSummaryView.city,
        city_id: state.UserSummaryView.city_id,
        country: state.UserSummaryView.country,
        country_id: state.UserSummaryView.country_id,
        full_search: state.UserSummaryView.full_search,
        latitude: state.UserSummaryView.latitude,
        longitude: state.UserSummaryView.longitude,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        SetCity: (id, title) => {
            dispatch(SetCity(id, title))
        },
        SetCountry: (id, title) => {
            dispatch(SetCountry(id, title))
        },
        SetFullSearch: (type) => {
            dispatch(SetFullSearch(type))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSummaryViewLocationScreen);