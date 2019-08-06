import React, {Component} from 'react'
import {connect} from "react-redux";
import {SafeAreaView, ScrollView, View, Text} from "react-native";
import {withNavigationFocus} from "react-navigation";

import Button from "../../../components/Button";
import axios from "../../../lib/Axios";
import Delay from "../../../lib/Delay";
import {verticalScale} from "../../../lib/Scaling";
import styles from "../../../theme/Style";
import NavigationOptions from "../../../lib/NavigationOptions";
import ModalView from "../../../components/ModalView";
import Input from "../../../components/Input";
import StatusBarComp from "../../../components/StatusBarComp";

class SearchFilterGlobalScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible_modal_city: false,
            citys: [],
            city: '',
            city_id: null,
            search_city: '',
            visible_modal_position: false,
            positions: [],
            position: '',
            position_id: null,
            search_position: '',
            visible_modal_date: false,
            dates: [],
        };
    }

    static navigationOptions = ({navigation}) => NavigationOptions(navigation, {
        title: 'Заполните фильтры',
        left_func: 'SearchIndexScreen',
        margin_top: false,
    });

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

    get_position = async () => {
        this.setState({positions: []});
        axios.get('v1/position.get', {
            params: {
                q: this.state.search_position
            }
        })
            .then(response => {
                this.setState({positions: response.items});
            });
    };

    render() {
        return (
            <SafeAreaView style={styles.container_global}>
                <StatusBarComp/>

                <ScrollView>
                <View style={styles.content_global}>

                    <ModalView title="Выберите город" filter={true} filterLabel="Город"
                               visible={this.state.visible_modal_city}
                               onClose={() => this.setState({visible_modal_city: false})}
                               filterChangeText={(value) => {
                                   this.setState({search_city: value});
                                   Delay(function () {
                                       this.get_city();
                                   }.bind(this), 100);
                               }}
                               filterValue={this.state.search_city}
                    >
                        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between',}}>
                            {Object.keys(this.state.citys).map((key) =>
                                <Button key={key} title={this.state.citys[key].name} styleTitle={{color: "#FFFFFF"}}
                                        onPress={() => {
                                            this.setState({
                                                visible_modal_city: false,
                                                city: this.state.citys[key].name,
                                                city_id: this.state.citys[key].id
                                            });
                                        }}/>
                            )}
                            {(Object.keys(this.state.citys).length === 0) ? (
                                <Text style={{textAlign: 'center', color: '#FFFFFF', marginTop: 5,}}>Загрузка
                                    данных...</Text>
                            ) : null}
                        </View>
                    </ModalView>

                    <ModalView title="Выберите должность" filter={true} filterLabel="Должность"
                               visible={this.state.visible_modal_position}
                               onClose={() => this.setState({visible_modal_position: false})}
                               filterChangeText={(value) => {
                                   this.setState({search_position: value});
                                   Delay(function () {
                                       this.get_position();
                                   }.bind(this), 100);
                               }}
                               filterValue={this.state.search_position}
                    >
                        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between',}}>
                            {Object.keys(this.state.positions).map((key) =>
                                <Button key={key} title={this.state.positions[key].title}
                                        styleTitle={{color: "#FFFFFF"}}
                                        onPress={() => {
                                            this.setState({
                                                visible_modal_position: false,
                                                position: this.state.positions[key].title,
                                                position_id: this.state.positions[key].id
                                            });
                                        }}/>
                            )}
                            {(Object.keys(this.state.positions).length === 0) ? (
                                <Text style={{textAlign: 'center', color: '#FFFFFF', marginTop: 5,}}>Загрузка
                                    данных...</Text>
                            ) : null}
                        </View>
                    </ModalView>

                    <ModalView title="Выбор дат" visible={this.state.visible_modal_date}
                               onClose={() => this.setState({visible_modal_date: false})}>
                        <View>
                            <Text>Выборка дат</Text>
                        </View>
                    </ModalView>

                    <Text style={{
                        fontSize: verticalScale(14),
                        color: '#A1AABA',
                        fontFamily: 'PFBeauSansPro-Regular'
                    }}>
                        Заполните фильтр для того, что увидеть объявления
                    </Text>

                    <Input style={{marginTop: 20,}} editable={false} onPress={() => {
                        this.setState({visible_modal_city: true}, () => this.get_city());
                    }} label="Город" check={false} maxLength={20} value={this.state.city}/>

                    <Input style={{marginTop: 20,}} editable={false} onPress={() => {
                        this.setState({visible_modal_date: true});
                    }} label="Дата" check={false} maxLength={20}
                           value={(this.state.dates.length > 0) && 'Выбрано ' + this.state.dates.length + ' дата(ы)'}/>

                    <Input style={{marginTop: 20,}} editable={false} onPress={() => {
                        this.setState({visible_modal_position: true}, () => this.get_position());
                    }} label="Должность" check={false} maxLength={20} value={this.state.position}/>

                    <Button transparent={false}
                            title={(this.state.count) ? 'Показать ' + (this.state.count) + ' объявлений' : 'Показать объявления'}
                            onPress={() => {
                        this.props.navigation.navigate('SearchIndexScreen')
                            }} style={{marginTop: 40,}}/>

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

export default connect(mapStateToProps, mapDispatchToProps)(withNavigationFocus(SearchFilterGlobalScreen));