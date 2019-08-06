import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    ScrollView,
    BackHandler,
    TouchableOpacity,
    SafeAreaView,
    PermissionsAndroid
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import axios from '../../../lib/Axios';
import styles from '../../../theme/Style'
import NavigationOptions from "../../../lib/NavigationOptions";
import {verticalScale} from "../../../lib/Scaling";
import StatusBarComp from "../../../components/StatusBarComp";
import SvgLogoUploadAvatar from '../../../assets/svg/SvgLogoUploadAvatar';
import SvgCubeLink from '../../../assets/svg/SvgCubeLink';
import Button from "../../../components/Button";

export default class PassportPhotoScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            take_avatar: false,
        };
    }

    static navigationOptions = ({ navigation }) => NavigationOptions(navigation, {title: 'ДОБАВЬТЕ ФОТО ПРОФИЛЯ', disabled_left: true});


    handleBackPress = () => {
        //this.props.navigation.goBack();
        return true;
    };

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    };

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    };

    select_avatar = () => {
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
        ImagePicker.openPicker({
            width: 500,
            height: 500,
            cropping: true,
            cropperCircleOverlay: false,
            freeStyleCropEnabled: false,
            compressImageMaxWidth: 2000,
            compressImageMaxHeight: 2000,
            //compressImageQuality: 0.9,
            mediaType: 'photo',
            cropperToolbarTitle: 'Обрезка фото',
            cropperActiveWidgetColor: '#074A5D',
            cropperStatusBarColor : '#074A5D',
            cropperToolbarColor : '#074A5D',
            showCropGuidelines: false,
            //showCropFrame: false,
            hideBottomControls: true,
            //disableCropperColorSetters: true,
        }).then(image => {
            console.log('received image', image);
            this.setState({
                image: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
            });
        }).catch(e => {
            console.log(e);
        });
    };

    upload_photo = () => {
        const config = { headers: { 'Content-Type': 'multipart/form-data' } };
        let fd = new FormData();
        fd.append('file', {
            uri: this.state.image.uri,
            type: this.state.image.mime,
            name: 'avatar'
        });

        axios.post('v1/reg.userphoto', fd, config)
            .then(response => {
                if( Object.keys(response).length ){
                    this.props.navigation.navigate('App');
                }
            });
    };

    render() {
        return (
            <SafeAreaView style={styles.container_global}>
                <StatusBarComp/>
                    <ScrollView>
                        <View style={styles.content_global}>

                            <View style={{marginTop: 20,}}>
                                <View style={{justifyContent: 'center',alignItems: 'center'}}>
                                    {(this.state.image === null ) ? (
                                        <SvgLogoUploadAvatar/>
                                    ) : (
                                        <Image style={{width: 100, height: 100, borderRadius: 5}}
                                               source={this.state.image}/>
                                    )}
                                </View>

                                <Text style={{marginTop:30, color: '#262626', fontSize: verticalScale(16), fontFamily: 'PFBeauSansPro-Regular', textAlign: 'justify'}}>Многие работадатели не рассматривают кандидатов без фото, особенно для работы связанным с личным общением.</Text>

                                <Text style={{marginTop:15, color: '#262626', fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular'}}>Начните с одного фото и добавьте остальные после создания резюме</Text>

                                <TouchableOpacity style={{marginTop: 25,}} onPress={() => {
                                    alert('Окно какие фото лучше прикреплять')
                                }}>
                                    <View style={{flex: 1, flexDirection: 'row', justifyContent:'center', padding: 20, }}>
                                        <SvgCubeLink style={{marginRight: 15,}}/>
                                        <Text style={{color:'#074A5D', fontSize: verticalScale(12), fontFamily: 'PFBeauSansPro-Regular'}}>Хорошие фото привлекают работадателей, узнайте какие фото лучше прикреплять.</Text>
                                    </View>
                                </TouchableOpacity>

                                <Button
                                    title={(this.state.image === null) ? 'Добавить фото из галереи' : 'Выбрать другое фото из галереи'}
                                    transparent={false} onPress={() => this.select_avatar()} style={{marginTop: 35,}}/>

                                {this.state.image !== null && (
                                    <Button title="Готово" transparent={false} onPress={() => this.upload_photo()}
                                            style={{marginTop: 20,}}/>
                                )}

                            </View>

                        </View>
                    </ScrollView>

            </SafeAreaView>
        )
    }
}