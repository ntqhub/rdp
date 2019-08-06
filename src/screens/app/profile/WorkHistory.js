import React, {Component} from 'react'
import {connect} from 'react-redux';
import {View, ScrollView, SafeAreaView, TouchableOpacity, BackHandler, Text} from 'react-native';

import styles from "../../../theme/Style";
import NavigationOptions from "../../../lib/NavigationOptions";
import {verticalScale} from "../../../lib/Scaling";
import StatusBarComp from "../../../components/StatusBarComp";

class ProfileWorkHistoryScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static navigationOptions = ({navigation}) => NavigationOptions(navigation, {
        title: 'История работ',
        left_func: 'BottomTabStack',
        margin_top: false
    });

    handleBackPress = () => {
        this.props.navigation.navigate('BottomTabStack');
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
                        <Text>В разработке</Text>
                    </View>
                </ScrollView>

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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileWorkHistoryScreen);