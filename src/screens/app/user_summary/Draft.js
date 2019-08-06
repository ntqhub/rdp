import React, { Component } from 'react'
import {connect} from "react-redux";
import {View, ScrollView, TouchableOpacity, RefreshControl} from 'react-native';
import {Text, List, SwipeRow,} from 'native-base';

import axios from '../../../lib/Axios';
import styles from "../../../theme/Style";

import Svg, {Path, Rect} from "react-native-svg";
import {verticalScale} from "../../../lib/Scaling";

class UserSummaryDraftScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            refreshing: false,
        };
    }

    componentWillMount() {
        this.getData();
    }

    getData = () => {
        this.setState({refreshing: true});
        axios.get('v1/user_summary.list_draft',{
            params :{
            }
        })
            .then(response => {
                if( Object.keys(response).length ){
                    if( Object.keys(response.data).length ){
                        this.setState({items: response.data});
                    }
                }
                this.setState({refreshing: false});
            });
    };

    _onRefresh = () => {
        this.getData();
    };

    render_item = (index,item) => {
        return (<SwipeRow key={index} style={{marginLeft: 0, paddingLeft: 0, paddingRight: 0, paddingTop:0, paddingBottom:0, backgroundColor: '#F9FBFF', borderColor: '#E7EDF8', borderWidth: 0.5, borderRadius: 5}}
                          disableRightSwipe
                          rightOpenValue={-75}
                          stopRightSwipe={-75}
                          body={
                              <TouchableOpacity style={{flex: 1, paddingTop:20, paddingBottom:20, paddingLeft:15, paddingRight:15,}} onPress={() => {alert('В разработке')}}>
                                  <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-between',}}>
                                      <Text>{item.title}</Text>
                                      <View style={{flexDirection: 'row',}}>
                                          <Text>02</Text>
                                          <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                              <Path d="M13.25 1.25H11.75V0.25C11.75 0.1 11.65 0 11.5 0C11.35 0 11.25 0.1 11.25 0.25V1.25H9.5V0.25C9.5 0.1 9.4 0 9.25 0C9.1 0 9 0.1 9 0.25V1.25H7.25V0.25C7.25 0.1 7.15 0 7 0C6.85 0 6.75 0.1 6.75 0.25V1.25H5V0.25C5 0.1 4.9 0 4.75 0C4.6 0 4.5 0.1 4.5 0.25V1.25H2.75V0.25C2.75 0.1 2.65 0 2.5 0C2.35 0 2.25 0.1 2.25 0.25V1.25H0.75C0.325 1.25 0 1.575 0 2V5.5V8.25V11V13.25C0 13.675 0.325 14 0.75 14H2.75H5.5H8.5H11.25H13.25C13.675 14 14 13.675 14 13.25V11V8.25V5.5V2C14 1.575 13.675 1.25 13.25 1.25ZM8.75 10.75V8.5H11V10.75H8.75ZM11 11.25V13.5H8.75V11.25H11ZM3 10.75V8.5H5.25V10.75H3ZM5.25 11.25V13.5H3V11.25H5.25ZM0.5 5.75H2.5V8H0.5V5.75ZM5.25 5.75V8H3V5.75H5.25ZM11 5.75V8H8.75V5.75H11ZM13.5 8H11.5V5.75H13.5V8ZM8.25 8H5.75V5.75H8.25V8ZM0.5 8.5H2.5V10.75H0.5V8.5ZM5.75 8.5H8.25V10.75H5.75V8.5ZM11.5 8.5H13.5V10.75H11.5V8.5ZM0.75 1.75H2.25V3C2.25 3.15 2.35 3.25 2.5 3.25C2.65 3.25 2.75 3.15 2.75 3V1.75H4.5V3C4.5 3.15 4.6 3.25 4.75 3.25C4.9 3.25 5 3.15 5 3V1.75H6.75V3C6.75 3.15 6.85 3.25 7 3.25C7.15 3.25 7.25 3.15 7.25 3V1.75H9V3C9 3.15 9.1 3.25 9.25 3.25C9.4 3.25 9.5 3.15 9.5 3V1.75H11.25V3C11.25 3.15 11.35 3.25 11.5 3.25C11.65 3.25 11.75 3.15 11.75 3V1.75H13.25C13.4 1.75 13.5 1.85 13.5 2V5.25H11.25H8.5H5.5H2.75H0.5V2C0.5 1.85 0.6 1.75 0.75 1.75ZM0.75 13.5C0.6 13.5 0.5 13.4 0.5 13.25V11.25H2.5V13.5H0.75ZM5.75 13.5V11.25H8.25V13.5H5.75ZM13.5 13.25C13.5 13.4 13.4 13.5 13.25 13.5H11.5V11.25H13.5V13.25Z" fill="#074A5D"/>
                                          </Svg>
                                      </View>
                                  </View>
                                  <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-between',}}>
                                      <View>
                                          <Text>1</Text>
                                          <Text>1</Text>
                                      </View>
                                      <View>
                                          <Text>{item.date}</Text>
                                          <Text>{item.salary}</Text>
                                      </View>
                                      <View>
                                          <Text>3</Text>
                                          <Text>3</Text>
                                      </View>
                                  </View>
                              </TouchableOpacity>
                          }
                          right={
                              <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center',}} onPress={() => alert('Trash')}>
                                  <Svg width="20" height="25" viewBox="0 0 20 25" fill="none">
                                      <Path d="M14.1259 24.6287H5.39235C3.57634 24.6287 2.09486 23.2181 2.09486 21.4889V7.07566C2.09486 6.70025 2.41744 6.3931 2.8117 6.3931C3.20597 6.3931 3.52855 6.70025 3.52855 7.07566V21.5003C3.52855 22.4786 4.36487 23.275 5.39235 23.275H14.1259C15.1534 23.275 15.9897 22.4786 15.9897 21.5003V7.07566C15.9897 6.70025 16.3123 6.3931 16.7066 6.3931C17.1008 6.3931 17.4234 6.70025 17.4234 7.07566V21.5003C17.4115 23.2295 15.9419 24.6287 14.1259 24.6287Z" fill="#D43A3A"/>
                                      <Path d="M7.3638 21.2274C6.96954 21.2274 6.64696 20.9202 6.64696 20.5448V6.89373C6.64696 6.51833 6.96954 6.21118 7.3638 6.21118C7.75807 6.21118 8.08065 6.51833 8.08065 6.89373V20.5448C8.08065 20.9202 7.75807 21.2274 7.3638 21.2274Z" fill="#D43A3A"/>
                                      <Path d="M12.6207 21.2274C12.2264 21.2274 11.9038 20.9202 11.9038 20.5448V6.89373C11.9038 6.51833 12.2264 6.21118 12.6207 6.21118C13.0149 6.21118 13.3375 6.51833 13.3375 6.89373V20.5448C13.3375 20.9202 13.0149 21.2274 12.6207 21.2274Z" fill="#D43A3A"/>
                                      <Path d="M19.4661 4.14084C19.3466 4.10671 17.0527 3.51516 13.4685 3.24214C13.3012 1.42199 11.7003 0 9.75286 0C7.79348 0 6.18057 1.44474 6.03721 3.27627C2.69193 3.56066 0.636967 4.11808 0.517493 4.15221C0.135175 4.25459 -0.079879 4.63 0.0276479 4.99403C0.135175 5.35806 0.541387 5.56283 0.911758 5.46044C0.9476 5.44907 4.55572 4.48211 9.90817 4.48211C15.2606 4.48211 19.048 5.44907 19.0838 5.46044C19.1435 5.48319 19.2152 5.48319 19.275 5.48319C19.5856 5.48319 19.8723 5.27843 19.9679 4.98265C20.0754 4.61862 19.8484 4.24322 19.4661 4.14084ZM9.92012 3.10563C9.07185 3.10563 8.25943 3.12838 7.49479 3.16251C7.68595 2.13867 8.61785 1.35373 9.75286 1.35373C10.8759 1.35373 11.8198 2.1273 12.0109 3.15113C11.3538 3.12838 10.6489 3.10563 9.92012 3.10563Z" fill="#D43A3A"/>
                                  </Svg>

                              </TouchableOpacity>
                          }
        />);
    };

    render() {
        return(
            <ScrollView
                style={styles.container_global}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                }
            >
                <List>
                    {this.state.items.map((item, index) => this.render_item(index, item))}
                </List>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSummaryDraftScreen);