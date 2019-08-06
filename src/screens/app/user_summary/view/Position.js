import React, {Component} from 'react'
import {connect} from 'react-redux';
import {View, Image, ScrollView, SafeAreaView, TouchableOpacity, BackHandler} from 'react-native';
import {Text, Button, Item, Input,} from 'native-base';
import Autocomplete from 'react-native-autocomplete-input';
import Svg,{ Path } from 'react-native-svg';

import axios from '../../../../lib/Axios';
import styles from "../../../../theme/Style";
import NavigationOptions from "../../../../lib/NavigationOptions";
import { SetPosition, DeletePostiton } from '../../../../actions/user_summary/View';
import {verticalScale} from "../../../../lib/Scaling";
import StatusBarComp from "../../../../components/StatusBarComp";

class UserSummaryViewPositionScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            query: '',
            q: [
                // {id: 1, title: 'тест'},
                // {id: 2, title: 'проверка'},
                // {id: 3, title: 'трили'},
                // {id: 4, title: 'вопе'},
            ],
            items: [

            ],
        };
    }

    static navigationOptions = ({ navigation }) => NavigationOptions(navigation, {title: 'НАЗВАНИЕ ДОЛЖНОСТИ', left_func: 'UserSummaryViewIndexScreen', margin_top: false});

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

    get_position = async () => {
        if( this.state.query === '' ){
            this.setState({q: []});
            return true;
        }
        axios.get('v1/position.get', {
            params: {
                q: this.state.query
            }
        })
            .then(response => {
                this.setState({q: response.items});
            });
    };

    delay = (function(){
        var timer = 0;
        return function(callback, ms){
            clearTimeout (timer);
            timer = setTimeout(callback, ms);
        };
    })();

    render() {

        return(
            <SafeAreaView style={styles.container_global}>
                <StatusBarComp/>

                    <ScrollView keyboardShouldPersistTaps='always'>
                       <View style={styles.content_global}>
                           <Text style={{color: '#262626', fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular',}}>Название должности или услуги</Text>
                           <Text style={{color: '#A1AABA', fontSize: verticalScale(12), fontFamily: 'PFBeauSansPro-Regular',}}>Введите в поле название должностей или услуг, которые Вы хотите оказывать</Text>
                           {/*<Item>*/}
                           {/*    <Input onChangeText={(value) => {this.setState({value: value}); this.props.addx(1,value); }} value={this.state.value} maxLength={100} placeholder="Введите название"/>*/}
                           {/*</Item>*/}
                            <View style={{flex: 1,}}>
                                   <Autocomplete
                                       autoCapitalize="none"
                                       autoCorrect={false}
                                       containerStyle={{flex: 1, left: 0, position: 'absolute', right: 0, top: 0, zIndex: 1}}
                                       inputContainerStyle={{borderWidth: 0,}}
                                       listContainerStyle={{flex: 1, borderColor: '#074A5D', borderWidth:1, borderTopWidth:0.5, borderBottomWidth: 0.5, backgroundColor: '#F9FBFF',}}
                                       listStyle={{borderWidth: 0, margin: 0, backgroundColor:'#F9FBFF'}}
                                       //data={this.state.q.length === 1 && comp(this.state.query, this.state.q[0].title) ? [] : this.state.q}
                                       data={this.state.q.length === 0 ? [] : this.state.q}
                                       //defaultValue={this.state.query}
                                       //onChangeText={text => this.setState({ query: text })}
                                       //placeholder="Введите название"
                                       renderTextInput={(props) =>
                                           <Item>
                                               <Input style={{color: '#074A5D', fontSize: verticalScale(16), fontFamily: 'PFBeauSansPro-Regular',}} onChangeText={(value) => {this.setState({query: value}); this.delay(() => this.get_position(), 300) }} value={this.state.query} placeholder="Введите название" maxLength={100}/>
                                           </Item>
                                       }
                                       keyExtractor={(item) => item.id}
                                       renderItem={({item, index}) => (
                                           <TouchableOpacity style={{padding: 10, borderTopWidth:0.5, borderBottomWidth:0.5, borderBottomColor: '#074A5D',}} onPress={() => {
                                               this.props.SetPosition(item.id,item.title);
                                               this.setState({ query: '', q: []});
                                           }}>
                                               <Text style={{color: '#074A5D', fontSize: verticalScale(16), fontFamily: 'PFBeauSansPro-Regular',}}>
                                                   {item.title}
                                               </Text>
                                           </TouchableOpacity>
                                       )}
                                   />
                            </View>

                               <View style={{flex: 1, flexDirection: 'row', marginTop: 70, height:180,}}>
                                   {
                                       Object.keys(this.props.positions).length>0 ?
                                           this.props.positions.map((item,key)=>
                                               <View key={key} style={{marginRight:5,}}>
                                                   <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center',  padding:5, borderWidth:1, borderColor:'#A1AABA', borderRadius:2,}} onPress={() => {this.props.DeletePostiton(key); }}>
                                                       <Text style={{color: '#262626', fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular', marginRight: 5,}}>{item.title}</Text>
                                                       <Svg width="7" height="7" viewBox="0 0 7 7" fill="none" >
                                                           <Path d="M6.88068 6.30398L4.05682 3.5L6.88068 0.696023C7.03977 0.536932 7.03977 0.278409 6.88068 0.139205C6.72159 0 6.46307 -0.0198864 6.32386 0.139205L3.5 2.94318L0.696023 0.119318C0.536932 -0.0397727 0.278409 -0.0397727 0.139205 0.119318C0 0.278409 -0.0198864 0.536932 0.139205 0.676136L2.94318 3.5L0.119318 6.30398C-0.0397727 6.46307 -0.0397727 6.72159 0.119318 6.8608C0.278409 7 0.536932 7.01989 0.676136 6.8608L3.5 4.05682L6.30398 6.88068C6.46307 7.03977 6.72159 7.03977 6.8608 6.88068C7 6.72159 7.01989 6.46307 6.88068 6.30398Z" fill="#074A5D"/>
                                                       </Svg>
                                                   </TouchableOpacity>
                                               </View>
                                           ) : null
                                   }
                               </View>



                       </View>
                    </ScrollView>

                {/*style={{flex:1, flexDirection: 'row', justifyContent: 'flex-end',}}*/}
                <View style={{position:'absolute', bottom:20, right:20,}}>
                    <Button full primary style={[styles.button, {width: 50,}]} onPress={() => this.props.navigation.navigate('UserSummaryViewSheduleScreen')}>
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
        positions: state.UserSummaryView.positions
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        SetPosition: (id, title) => {
            dispatch(SetPosition(id,title))
        },
        DeletePostiton: (id) => {
            dispatch(DeletePostiton(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSummaryViewPositionScreen);