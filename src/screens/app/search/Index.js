import React, {Component} from 'react'
import {connect} from "react-redux";
import {SafeAreaView, View, TouchableOpacity, Text} from 'react-native';
import {withNavigationFocus} from "react-navigation";

import styles from "../../../theme/Style";
import {verticalScale} from "../../../lib/Scaling";
import SvgIconFilter from "../../../assets/svg/SvgIconFilter";
import SvgIconHeart from "../../../assets/svg/SvgIconHeart";
import SvgIconMap from "../../../assets/svg/SvgIconMap";
import SvgLens from "../../../assets/svg/SvgLens";
import ModalView from "../../../components/ModalView";
import StatusBarComp from "../../../components/StatusBarComp";
import SvgInformationSearch from "../../../assets/svg/SvgInformationSearch";
import {UserSetViewInformationSearch} from "../../../actions/User";
// import {GetID} from "../../../actions/innerSearchblock/index";
import SearchListScreen from "./List";
// import console = require('console');

class SearchIndexScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    static navigationOptions = ({navigation}) => ({header: null, headerTransparent: true,});

    render() {
        return (
            <SafeAreaView style={styles.container_global}>
                <StatusBarComp/>

                <ModalView title="Поиск работы"
                           visible={!this.props.view_information_search}
                           onClose={() => this.props.UserSetViewInformationSearch(true)}
                           information={true}
                           informationTitle={'Начать Поиск Работы'}
                >
                    <View style={{marginTop: 60, alignItems: 'center'}}>
                        <SvgInformationSearch/>
                    </View>
                    <Text style={{
                        marginTop: 40,
                        textAlign: 'center',
                        color: '#FFFFFF',
                        fontSize: verticalScale(16),
                        fontFamily: 'PFBeauSansPro-Regular'
                    }}>
                        Приветсвуем в Маньяне!
                    </Text>
                    <Text style={{
                        textAlign: 'center',
                        color: '#FFFFFF',
                        fontSize: verticalScale(16),
                        fontFamily: 'PFBeauSansPro-Regular'
                    }}>
                        Организуйте работу за день!
                    </Text>
                </ModalView>

                <View style={{marginTop: 20, paddingLeft: 20, paddingRight: 20,}}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('SearchFilterGlobalScreen')
                    }}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
                            <View>
                                <Text style={{
                                    fontSize: verticalScale(16),
                                    color: '#A1AABA',
                                    fontFamily: 'PFBeauSansPro-Regular'
                                }}>Город, дата, должность</Text>
                            </View>
                            <View>
                                <SvgLens/>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'space-around',}}>
                        <TouchableOpacity  onPress={() => {
                            this.props.navigation.navigate('SearchFilterScreen');
                            
                           
                        }}
                        
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}>
                            <SvgIconFilter/>
                            <Text style={{
                                marginLeft: 10,
                                fontSize: verticalScale(14),
                                color: '#262626',
                                fontFamily: 'PFBeauSansPro-Regular'
                            }}>Фильтры</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('SearchFavoritesScreen')
                        }} style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <SvgIconHeart/>
                            <Text style={{
                                marginLeft: 10,
                                fontSize: verticalScale(14),
                                color: '#262626',
                                fontFamily: 'PFBeauSansPro-Regular'
                            }}>Избранные</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('SearchMapScreen')
                        }} style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <SvgIconMap/>
                            <Text style={{
                                marginLeft: 10,
                                fontSize: verticalScale(14),
                                color: '#262626',
                                fontFamily: 'PFBeauSansPro-Regular'
                            }}>Карта</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{height: 1, marginTop: 20, borderBottomColor: '#E7EDF8', borderBottomWidth: 1,}}/>
                </View>

                <SearchListScreen/>

            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        view_information_search: state.User.view_information_search,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        UserSetViewInformationSearch: (boolean) => {
            dispatch(UserSetViewInformationSearch(boolean))
            
        },
  
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigationFocus(SearchIndexScreen));