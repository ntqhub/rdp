import React, {Component} from 'react'
import {connect} from "react-redux";
import {TouchableOpacity, View} from "react-native";
import Swiper from "react-native-swiper";
import CacheImage from "../CacheImage";
import SvgHeart from "../../assets/svg/SvgHeart";
import {Text} from "native-base";
import {verticalScale} from "../../lib/Scaling";
import SvgFiveStar from "../../assets/svg/SvgFiveStar";
import {TextMask} from "react-native-masked-text";
import SvgTime from "../../assets/svg/SvgTime";
import SvgArrowLeftRight from "../../assets/svg/SvgArrowLeftRight";
import SvgHourglass from "../../assets/svg/SvgHourglass";
import Block from "../Block";
import SvgHeartSelect from "../../assets/svg/SvgHeartSelect";
import SvgBtTrash from "../../assets/svg/SvgBtTrash";
import {GetIDS} from "../../actions/innerSearchblock/index";
import {withNavigationFocus} from "react-navigation";
// import console = require('console');

class SearchBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            select_image: 0,
        };
    }

    static defaultProps = {
        favoritesList: false,
    };

    render() {
        // console.log(this.props.item.id);
        return (
            <Block style={{marginBottom: 30,}}>
                <View style={{flex: 1, height: 164,}}>
                    <Swiper
                        style={{
                            borderTopLeftRadius: 5,
                            borderTopRightRadius: 5,
                        }}
                        loop={false}
                        showsButtons={false}
                        showsPagination={false}
                        onIndexChanged={(value) => {
                            this.setState(prevState => {
                                prevState.select_image = value + 1;
                                return {select_image: prevState.select_image}
                            })
                        }}
                    >
                        {this.props.item.photo.map((photo, key) =>
                            <CacheImage key={key} style={{
                                overflow: 'hidden',
                                borderTopLeftRadius: 5,
                                borderTopRightRadius: 5,
                                height: 164,
                            }} resizeMode='cover' uri={photo}/>
                        )}
                    </Swiper>
                    <View style={{position: 'absolute', top: 10, right: 15,}}>
                        <TouchableOpacity onPress={() => {
                            alert('SearchLike')
                        }}>
                            {(this.props.favoritesList === true) ?
                                (<SvgHeartSelect/>)
                                :
                                (this.props.item.is_favorites === 1) ? (<SvgHeartSelect/>) : (<SvgHeart/>)
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={{position: 'absolute', bottom: 10, right: 15,}}>
                        <View style={{
                            backgroundColor: 'rgba(7, 74, 93, 0.8)',
                            borderRadius: 3,
                            padding: 5
                        }}>
                            <Text style={{
                                fontSize: verticalScale(12),
                                color: '#FFFFFF',
                                fontFamily: 'PFBeauSansPro-Regular'
                            }}>{(this.state.select_image === 0) ? '01' : (this.state.select_image < 10 ? '0' : '') + this.state.select_image}/{(this.props.item.photo.length < 10 ? '0' : '') + this.props.item.photo.length}</Text>
                        </View>
                    </View>
                </View>
                {/*//press-1*/}
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('CompanyIndex');
                    console.log(this.props.item.id,"prihodint id is SearchBlock");
                    this.props.GetIDS(this.props.item.id);  
                }} >
                    {/* <View >
                        <Text onPress={()=> this.props.GetIDS(this.props.item.id)} value="1">CLICK</Text>
                      <Text>{this.props.ids}</Text> 
                  </View> */}
                    <View style={{padding: 10,}}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                fontSize: verticalScale(16),
                                color: '#262626',
                                fontFamily: 'PFBeauSansPro-Bold',
                            }}>{this.props.item.position}</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center',}}>
                                <SvgFiveStar rating={this.props.item.rating}/>
                            </View>
                        </View>
                        <View style={{
                            paddingTop: 10,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}>
                            <TextMask type={'money'} options={{
                                precision: 0,
                                separator: ' ',
                                delimiter: ' ',
                                unit: '',
                                suffixUnit: '₽/смена'
                            }} style={{
                                fontSize: verticalScale(14),
                                color: '#10BD55',
                                fontFamily: 'PFBeauSansPro-Regular',
                            }} value={parseFloat(this.props.item.salary)}/>
                        </View>
                        <View style={{
                            paddingTop: 10,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}>
                            <SvgTime/>
                            <Text style={{
                                marginLeft: 5,
                                marginRight: 5,
                                fontSize: verticalScale(14),
                                color: '#262626',
                                fontFamily: 'PFBeauSansPro-Regular',
                            }}>{this.props.item.start_time}</Text>
                            <SvgArrowLeftRight/>
                            <Text style={{
                                marginLeft: 5,
                                marginRight: 10,
                                fontSize: verticalScale(14),
                                color: '#262626',
                                fontFamily: 'PFBeauSansPro-Regular',
                            }}>{this.props.item.end_time}</Text>
                            <SvgHourglass/>
                            <Text style={{
                                marginLeft: 5,
                                fontSize: verticalScale(14),
                                color: '#262626',
                                fontFamily: 'PFBeauSansPro-Regular',
                            }}>{Math.ceil(this.props.item.duration / 60)} часов</Text>
                        </View>
                    </View>
                    {/*press-2*/}
                    </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('Vacancy');
                        }}>

                    <View style={{
                        marginLeft: 15,
                        marginRight: 15,
                        borderBottomWidth: 1,
                        borderBottomColor: '#E7EDF8'
                    }}/>
                    <View style={{
                        padding: 15,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}>
                        <View style={{paddingRight: 20,}}>
                            <CacheImage style={{borderRadius: 5, width: 50, height: 50,}} uri={this.props.item.avatar}/>
                        </View>
                        <View style={{flex: 1,}}>
                            <View>
                                <Text style={{
                                    fontSize: verticalScale(14),
                                    color: '#262626',
                                    fontFamily: 'PFBeauSansPro-Bold',
                                }}>{this.props.item.company_title}</Text>
                            </View>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'flex-end',
                            }}>
                                <View style={{flex: 1,}}>
                                    <Text style={{
                                        fontSize: verticalScale(12),
                                        color: '#262626',
                                        fontFamily: 'PFBeauSansPro-Regular',
                                    }}>{this.props.item.company_comment}</Text>
                                </View>
                                {(this.props.favoritesList === true) && (<View><SvgBtTrash/></View>)}
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </Block>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        ids: state.InnerSearchBlock.id
    }
    
};
const mapDispatchToProps = dispatch => {
    
    return {
        
        GetIDS:(val) =>{
            dispatch(GetIDS(val))
        }
       
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(withNavigationFocus(SearchBlock));