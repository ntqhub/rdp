import React, { Component } from 'react';
import {connect} from "react-redux";
import {FlatList, RefreshControl, ScrollView, Text, TouchableOpacity, View} from 'react-native';

import styles from "../../../theme/Style";
import axios from "../../../lib/Axios";
import {verticalScale} from "../../../lib/Scaling";
import JobBlock from "../../../components/job/JobBlock";
import SvgArrow from "../../../assets/svg/SvgArrow";
import {JobGetData} from "../../../actions/Job";

class JobAllScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.props.JobGetData();
    }

    _onRefresh = () => {
        this.props.JobGetData();
    };

    _loadMore = () => {
        this.props.JobGetData(true);
    };

    render() {
        return (
            <ScrollView
                style={styles.container_global}
                refreshControl={
                    <RefreshControl
                        refreshing={this.props.loading}
                        onRefresh={this._onRefresh}
                    />
                }
            >

                <View style={[styles.content_global, {paddingTop: 20, flex: 1}]}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: verticalScale(12),
                        color: '#A1AABA',
                        fontFamily: 'PFBeauSansPro-Regular'
                    }}>Статус
                        отобразиться за 2 часа до начала работ
                    </Text>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: verticalScale(12),
                        color: '#A1AABA',
                        fontFamily: 'PFBeauSansPro-Regular'
                    }}>
                        За 15 минут до начала Ваша локация будет доступной
                    </Text>
                </View>

                <FlatList
                    style={[styles.content_global, {paddingBottom: 0, flex: 1,}]}
                    data={this.props.jobs}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item, index}) => {
                        return (
                            <JobBlock item={item} navigation={this.props.navigation}/>
                        )
                    }}
                />

                <TouchableOpacity onPress={() => (this.props.loading === false) && this._loadMore()} style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: 0,
                    paddingBottom: 30,
                }}>
                    <Text style={{
                        fontSize: verticalScale(12),
                        color: '#074A5D',
                        fontFamily: 'PFBeauSansPro-Regular',
                        marginRight: 5,
                    }}>загрузить еще работы</Text>
                    <SvgArrow/>
                </TouchableOpacity>

            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        jobs: state.Job.jobs,
        loading: state.Job.loading,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        JobGetData: (append) => {
            dispatch(JobGetData(append))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(JobAllScreen);