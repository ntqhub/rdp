import React, { Component } from 'react'
import {StyleSheet, View, Image, ScrollView, BackHandler, Dimensions} from 'react-native';
import {Container, Content, Text, Button} from 'native-base';
import Svg,{ Path, G, Circle, Rect } from 'react-native-svg';

import axios from '../../../lib/Axios';
const { width, height } = Dimensions.get('window');

import styles from '../../../theme/Style'

import BackgroundLogo from './../../../components/BackgroundLogo';
import FooterCompany from './../../../components/FooterCompany';
import NavigationOptions from "../../../lib/NavigationOptions";
import * as Progress from "react-native-progress";
import {verticalScale} from "../../../lib/Scaling";
import StatusBarComp from "../../../components/StatusBarComp";

export default class PassportPhotoScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            take_photo: false,
        };
    }

    static navigationOptions = ({ navigation }) => NavigationOptions(navigation, {title: 'ПАСПОРТНЫЕ ДАННЫЕ', disabled_left: true});

    handleBackPress = () => {
        return true;
    };

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    };

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    };

    takePicture = async() => {
        if (this.camera) {
            const options = {
                quality: 0.9,
                base64: true,
                doNotSave: true,
                orientation: 'portrait',
            };
            const data = await this.camera.takePictureAsync(options);
            console.log(data);
            this.setState({image: data.base64});
        }
        this.setState({ take_photo: false });
    };

    upload_photo = () => {
        const data = new FormData();
        data.append('file', new Blob(['test payload'], { type: 'text/csv' }));

        const config = { headers: { 'Content-Type': 'multipart/form-data' } };
        let fd = new FormData();
        fd.append('file', this.state.image);

        axios.post('v1/reg.passport_photo_save', fd, config)
            .then(response => {
                if( response.data.error ){
                    alert(response.data.error);
                }else {
                    //alert(response.data);
                    this.props.navigation.navigate('UserProfileAvatarScreen');
                }
            })
            .catch((error) => {
                alert('Ошибка сервера'+error);
            });
    };

    render() {
        if( this.state.take_photo == true ){
            // return (
            //     <Container style={styles.container_global}>
            //         <StatusBarComp/>
            //         {/*{styles.statusBar_bgcolor.backgroundColor}*/}
            //         <View style={{flex: 1,flexDirection: 'column', position: 'absolute', top: 0-StatusBar.currentHeight-40, height: height, width:width}}>
            //             <RNCamera
            //                 ref={ref => {
            //                     this.camera = ref;
            //                 }}
            //                 style={{ flex: 1,justifyContent: 'flex-end',alignItems: 'center',}}
            //                 captureAudio={false}
            //                 type={RNCamera.Constants.Type.back}
            //                 flashMode={RNCamera.Constants.FlashMode.off}
            //                 autoFocus={RNCamera.Constants.AutoFocus.on}
            //             />
            //         </View>
            //
            //         <Content contentContainerStyle={{ flexGrow: 1 }}>
            //             <ScrollView>
            //
            //                 <View style={{ flex: 1, justifyContent: 'center', position:'absolute', top: 0, alignItems: 'center', }}>
            //                     {/*<Svg width="162" height="231" fill="none" viewBox="0 0 162 231" style={{alignItems: 'center'}}>*/}
            //                     {/*    <Rect width="114.233" height="160" x="1" y="115.233" stroke="#074A5D" stroke-width="2" rx="4" transform="rotate(-90 1 115.233)"/>*/}
            //                     {/*    <Path stroke="#074A5D" stroke-linecap="round" stroke-linejoin="round" d="M14.5 25.023h80m-80 4h133m-133 4h133M14.5 44.523h80m-80 4h133m-133 4h133M14.5 67.523h80m-80 4h133m-133 4h133"/>*/}
            //                     {/*    <Rect width="114.233" height="160" x="1" y="229.756" stroke="#074A5D" stroke-width="2" rx="4" transform="rotate(-90 1 229.756)"/>*/}
            //                     {/*    <Rect width="42" height="38" x="16.5" y="181.023" stroke="#074A5D" rx="1.5" transform="rotate(-90 16.5 181.023)"/>*/}
            //                     {/*    <Path fill="#074A5D" fill-rule="evenodd" d="M36 162.623c-2.556 0-4.629-2.037-4.629-4.55s2.073-4.55 4.629-4.55c2.556 0 4.629 2.037 4.629 4.55s-2.073 4.55-4.629 4.55zm0-1.3c-1.826 0-3.306-1.455-3.306-3.25s1.48-3.25 3.306-3.25 3.306 1.455 3.306 3.25-1.48 3.25-3.306 3.25z" clip-rule="evenodd"/>*/}
            //                     {/*    <Path fill="#074A5D" d="M43 166.523c-.864-3.001-3.67-5.2-7-5.2s-6.137 2.199-7 5.2h1.387c.817-2.272 3.022-3.9 5.613-3.9 2.591 0 4.796 1.628 5.613 3.9H43z"/>*/}
            //                     {/*    <Path stroke="#074A5D" stroke-linecap="round" stroke-linejoin="round" d="M67 144.523h47.44m-47.44 4.5h79m-79 4.5h79M67 163.523h47.44m-47.44 4.5h79m-79 4.5h79"/>*/}
            //                     {/*</Svg>*/}
            //
            //                     <Svg width={width} height="458" viewBox="0 0 320 458" fill="none">
            //                         <Rect x="1" y="457" width="228" height="318" rx="4" transform="rotate(-90 1 457)" stroke="#83EFFF" stroke-width="2"/>
            //                         <Rect x="1" y="229" width="228" height="318" rx="4" transform="rotate(-90 1 229)" stroke="#83EFFF" stroke-width="2"/>
            //                         <Rect x="26" y="374" width="86" height="78" rx="1" transform="rotate(-90 26 374)" stroke="#83EFFF" stroke-width="2"/>
            //                         <Path d="M49.8006 347C49.6882 346.994 49.5781 346.965 49.4769 346.915C49.3757 346.865 49.2852 346.796 49.2109 346.711C49.1366 346.626 49.0799 346.527 49.0441 346.419C49.0083 346.312 48.994 346.198 49.0023 346.085C49.4975 338.807 56.3166 333.129 64.4993 333.129C72.6821 333.129 79.5012 338.807 79.9981 346.048C80.0132 346.275 79.9377 346.5 79.7882 346.672C79.6387 346.843 79.4275 346.948 79.201 346.964C78.9746 346.979 78.7514 346.903 78.5806 346.752C78.4098 346.602 78.3054 346.39 78.2904 346.162C77.8352 339.798 71.7744 334.845 64.5002 334.845C57.1884 334.845 51.1267 339.836 50.71 346.2C50.6943 346.413 50.6003 346.613 50.4464 346.761C50.2924 346.909 50.0894 346.994 49.8766 347H49.8006ZM55.8632 322.689C55.863 320.971 56.3695 319.291 57.3186 317.862C58.2677 316.433 59.6168 315.319 61.1953 314.661C62.7737 314.004 64.5106 313.832 66.1863 314.167C67.862 314.502 69.4012 315.33 70.6092 316.545C71.8173 317.76 72.6399 319.308 72.9731 320.994C73.3062 322.679 73.135 324.426 72.481 326.014C71.827 327.602 70.7196 328.959 69.2988 329.913C67.8781 330.868 66.2079 331.377 64.4993 331.376C63.365 331.377 62.2417 331.153 61.1936 330.716C60.1455 330.28 59.1932 329.64 58.3911 328.833C57.5889 328.026 56.9528 327.068 56.5189 326.014C56.085 324.96 55.8619 323.83 55.8623 322.689H55.8632ZM57.606 322.689C57.6058 324.061 58.01 325.402 58.7676 326.542C59.5251 327.683 60.6019 328.572 61.8618 329.097C63.1217 329.622 64.5081 329.76 65.8457 329.492C67.1833 329.225 68.4119 328.564 69.3763 327.594C70.3407 326.624 70.9975 325.389 71.2636 324.043C71.5297 322.698 71.3932 321.303 70.8714 320.036C70.3495 318.769 69.4657 317.686 68.3318 316.924C67.1979 316.161 65.8648 315.755 64.501 315.755C62.6739 315.76 60.9231 316.492 59.6309 317.791C58.3387 319.091 57.6101 320.851 57.6043 322.689H57.606Z" fill="#83EFFF"/>
            //                     </Svg>
            //
            //                 </View>
            //
            //             </ScrollView>
            //             <View>
            //                 <View style={{ backgroundColor: 'rgba(7,74,93, 0.8)', width: width, flex: 1, flexDirection: 'row', justifyContent: 'center', marginBottom: 0, }}>
            //                     <Grid>
            //                         <Col>
            //                             <Button onPress={this.takePicture} full transparent>
            //                                 <Svg style={{color: '#ffffff',}} width="25" height="20" viewBox="0 0 25 20" fill="none">
            //                                     <Path d="M17.7619 6H17.2121C17.0784 6 16.9709 6.11186 16.974 6.24771L17.0206 8.23496C16.1364 6.88375 14.6228 5.99456 12.9049 6.00003C10.1988 6.00863 7.99578 8.25825 8.00001 11.008C8.00425 13.7657 10.2057 16 12.9206 16C14.189 16 15.3453 15.5124 16.2178 14.7115C16.3193 14.6184 16.324 14.4583 16.2274 14.3601L15.8358 13.9621C15.7465 13.8714 15.6026 13.8656 15.5084 13.951C14.8212 14.5735 13.9148 14.9516 12.9206 14.9516C10.7714 14.9516 9.03175 13.1842 9.03175 11C9.03175 8.81609 10.7711 7.04839 12.9206 7.04839C14.4989 7.04839 15.856 8.00166 16.4658 9.37303L13.9581 9.31236C13.8244 9.30914 13.7143 9.41835 13.7143 9.55424V10.1129C13.7143 10.2465 13.8209 10.3548 13.9524 10.3548H17.7619C17.8934 10.3548 18 10.2465 18 10.1129V6.24194C18 6.10833 17.8934 6 17.7619 6Z" fill="white"/>
            //                                     <Path d="M8.88158 0C8.61842 0 8.38816 0.193541 8.28947 0.354831L7.13816 2.58065H2.63158C1.18421 2.58065 0 3.74194 0 5.16129V17.4194C0 18.8387 1.18421 20 2.63158 20H22.3684C23.8158 20 25 18.8387 25 17.4194V5.16129C25 3.74194 23.8158 2.58065 22.3684 2.58065H17.8618L16.7105 0.354831C16.6118 0.129024 16.3816 0 16.1184 0H8.88158ZM9.27632 1.29032H15.7237L16.8421 3.51612C16.9408 3.74192 17.1711 3.87097 17.4342 3.87097H22.3684C23.125 3.87097 23.6842 4.41935 23.6842 5.16129V17.4194C23.6842 18.1613 23.125 18.7097 22.3684 18.7097H2.63158C1.875 18.7097 1.31579 18.1613 1.31579 17.4194V5.16129C1.31579 4.41935 1.875 3.87097 2.63158 3.87097H7.56579C7.79605 3.87097 8.05921 3.70967 8.15789 3.51612L9.27632 1.29032Z" fill="white"/>
            //                                 </Svg>
            //                                 <Text uppercase={false} style={{color: '#ffffff', fontSize: 13, fontFamily: 'PFBeauSansPro-Regular'}}>Возобновить</Text>
            //                             </Button>
            //                         </Col>
            //                         <Col>
            //                             <Button onPress={this.takePicture} full style={{position:'relative', top: -10,  borderRadius: 5}}>
            //                                 <Text uppercase={false} style={{color: '#ffffff', opacity: 1, fontSize: 10, fontFamily: 'PFBeauSansPro-Regular'}}>X</Text>
            //                             </Button>
            //                         </Col>
            //                         <Col>
            //                             <Button onPress={this.takePicture} full transparent>
            //                                 <Svg style={{color: '#ffffff',}} width="24" height="17" viewBox="0 0 24 17" fill="none">
            //                                     <Path id="check " d="M22.8792 0C22.5963 0.00871618 22.3278 0.123787 22.1301 0.321096L7.65059 14.4344L1.87467 8.81676C1.7754 8.71632 1.65679 8.63591 1.52563 8.58014C1.39447 8.52436 1.25332 8.4943 1.11024 8.49168C0.96716 8.48906 0.824948 8.51392 0.691727 8.56485C0.558507 8.61578 0.436887 8.69178 0.333809 8.78851C0.230732 8.88524 0.148216 9.00081 0.0909747 9.12861C0.0337328 9.25642 0.00288465 9.39395 0.000193013 9.53337C-0.005243 9.81494 0.104336 10.0871 0.304823 10.2899L0.333809 10.3182L6.87254 16.6895C7.07703 16.8884 7.3541 17 7.64297 17C7.93183 17 8.2089 16.8884 8.41339 16.6895L23.6694 1.824C23.827 1.67494 23.9347 1.48293 23.9783 1.27317C24.0219 1.06342 23.9994 0.845712 23.9138 0.648625C23.8282 0.451539 23.6834 0.284278 23.4985 0.168791C23.3136 0.0533034 23.0972 -0.0050152 22.8776 0.00148716L22.8792 0Z" fill="white"/>
            //                                 </Svg>
            //                                 <Text uppercase={false} style={{color: '#ffffff', fontSize: 13, fontFamily: 'PFBeauSansPro-Regular'}}>Готово</Text>
            //                             </Button>
            //                         </Col>
            //                     </Grid>
            //                 </View>
            //             </View>
            //
            //         </Content>
            //     </Container>
            // );
        }else{

            return (
                <Container style={styles.container_global}>
                    <StatusBarComp/>
                    <BackgroundLogo/>
                    <Content contentContainerStyle={styles.content_global}>

                        <ScrollView>
                            <View>

                                <Progress.Bar progress={0.60} animated={false} borderRadius={10} color={"#074A5D"} borderColor={"#E7EDF8"} width={null}/>
                                <Text style={{marginTop:5, marginBottom:15, color: '#A1AABA', fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular'}}>Этап заполнения:
                                    <Text style={{fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular'}}> фотография документа</Text>
                                </Text>

                                {(this.state.image != '') ? (

                                    <View>
                                        <Image style={{width: 400,height: 400,}} source={{ uri: 'data:image/jpeg;base64,'+this.state.image }} />

                                        <Button onPress={() => this.setState({ take_photo: true, image: '' })} full primary bordered style={[styles.button_transparent,{marginTop:30}]}>
                                            <Text uppercase={false} style={styles.button_text_transparent}>Сделать новый снимок</Text>
                                        </Button>

                                        <Button onPress={this.upload_photo} full primary bordered style={[styles.button_transparent,{marginTop:30}]}>
                                            <Text uppercase={false} style={styles.button_text_transparent}>Загрузить</Text>
                                        </Button>
                                    </View>

                                ) : (

                                    <View>
                                        <View style={{justifyContent: 'center',alignItems: 'center'}}>
                                            <Svg width="162" height="231" fill="none" viewBox="0 0 162 231">
                                                <Rect width="114.233" height="160" x="1" y="115.233" stroke="#074A5D" stroke-width="2" rx="4" transform="rotate(-90 1 115.233)"/>
                                                <Path stroke="#074A5D" stroke-linecap="round" stroke-linejoin="round" d="M14.5 25.023h80m-80 4h133m-133 4h133M14.5 44.523h80m-80 4h133m-133 4h133M14.5 67.523h80m-80 4h133m-133 4h133"/>
                                                <Rect width="114.233" height="160" x="1" y="229.756" stroke="#074A5D" stroke-width="2" rx="4" transform="rotate(-90 1 229.756)"/>
                                                <Rect width="42" height="38" x="16.5" y="181.023" stroke="#074A5D" rx="1.5" transform="rotate(-90 16.5 181.023)"/>
                                                <Path fill="#074A5D" fill-rule="evenodd" d="M36 162.623c-2.556 0-4.629-2.037-4.629-4.55s2.073-4.55 4.629-4.55c2.556 0 4.629 2.037 4.629 4.55s-2.073 4.55-4.629 4.55zm0-1.3c-1.826 0-3.306-1.455-3.306-3.25s1.48-3.25 3.306-3.25 3.306 1.455 3.306 3.25-1.48 3.25-3.306 3.25z" clip-rule="evenodd"/>
                                                <Path fill="#074A5D" d="M43 166.523c-.864-3.001-3.67-5.2-7-5.2s-6.137 2.199-7 5.2h1.387c.817-2.272 3.022-3.9 5.613-3.9 2.591 0 4.796 1.628 5.613 3.9H43z"/>
                                                <Path stroke="#074A5D" stroke-linecap="round" stroke-linejoin="round" d="M67 144.523h47.44m-47.44 4.5h79m-79 4.5h79M67 163.523h47.44m-47.44 4.5h79m-79 4.5h79"/>
                                            </Svg>
                                        </View>

                                        <Text style={{marginTop:20, color: '#262626', fontSize: 16, fontFamily: 'PFBeauSansPro-Regular'}}>Сфотографируйте разворот паспорта с вашим фото</Text>

                                        {/*onPress={() => this.setState({ take_photo: true })}*/}
                                        <Button onPress={() => this.props.navigation.navigate('UserPassportPhotoTakeScreen')} full primary bordered style={[styles.button_transparent,{marginTop:30}]}>
                                            <Text uppercase={false} style={styles.button_text_transparent}>Сделать фото паспорта</Text>
                                        </Button>
                                    </View>

                                )}

                            </View>
                        </ScrollView>
                        <View>
                            <FooterCompany/>
                        </View>

                    </Content>
                </Container>
            )

        }
    }
}

const style = StyleSheet.create({
    button_register: {
        marginTop:30,
        borderRadius: 5
    },
    button_register_text: {
        color: '#074a5d',
        fontSize: 18,
        fontFamily: 'PFBeauSansPro-Regular'
    },

    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
});