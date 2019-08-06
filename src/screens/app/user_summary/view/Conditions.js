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
    BackHandler,
} from 'react-native';
import { Container, Content, Footer, Text, Header, Button, Left, Body, Right, Title, Icon, Item, Label, Input, List, ListItem, Separator, SwipeRow, } from 'native-base';

import styles from "../../../../theme/Style";

import NavigationOptions from "../../../../lib/NavigationOptions";

import {verticalScale} from "../../../../lib/Scaling";
import Svg, {Path} from "react-native-svg";
import StatusBarComp from "../../../../components/StatusBarComp";

class UserSummaryViewConditionsScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    static navigationOptions = ({ navigation }) => NavigationOptions(navigation, {title: 'УСЛОВИЯ ТРУДА И УДОБСТВА', left_func: 'UserSummaryViewIndexScreen', margin_top: false});

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
    render() {
        return(
            <SafeAreaView style={styles.container_global}>
                <StatusBarComp/>

                    <ScrollView>
                       <View style={styles.content_global}>

                           <Text style={{color: '#262626', fontSize: verticalScale(14), fontFamily: 'PFBeauSansPro-Regular',}}>В разработке</Text>

                       </View>
                    </ScrollView>

                <View style={{position:'absolute', bottom:20, right:20,}}>
                    <Button full primary style={[styles.button, {width: 50,}]} onPress={() => this.props.navigation.navigate('UserSummaryViewDateScreen')}>
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
    }
};

const mapDispatchToProps = dispatch => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSummaryViewConditionsScreen);