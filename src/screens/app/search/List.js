import React, {Component} from 'react'
import {connect} from "react-redux";
import {FlatList, RefreshControl, ScrollView, TouchableOpacity, View, Text} from "react-native";
import {withNavigationFocus} from "react-navigation";

import {UserSetViewInformationSearch} from "../../../actions/User";
import axios from "../../../lib/Axios";
import {verticalScale} from "../../../lib/Scaling";
import styles from "../../../theme/Style";
import SearchBlock from "../../../components/search/SearchBlock";
import SvgArrow from "../../../assets/svg/SvgArrow";

// import InnerWork from "../../../src/c"


class SearchListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            page: 1,
            refreshing: false,
        };
    }

    componentWillMount() {
        this.getData();

    }

    getData = () => {
        this.setState({refreshing: true});
        axios.get('v1/search.get', {
            params: {
                page: this.state.page,
            }
        })
            .then(response => {
                if (Object.keys(response).length) {

                    this.setState({count: response.count});
                    if (this.state.page === 1) {
                        this.setState({items: response.items});

                    } else {
                        this.setState(prevState => ({
                            items: prevState.items.concat(response.items)
                        }));
                    }
                }
                this.setState({refreshing: false});

            });
    };

    _loadMore = () => {
        this.setState({
            page: this.state.page + 1
        }, () => this.getData());
    };

    _onRefresh = () => {
        this.setState({page: 1}, () => this.getData());
    };

    render() {
        return (
            <ScrollView
                style={styles.container_global}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                }
            >

                <View style={{marginTop: 20, marginBottom: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{
                        fontSize: verticalScale(14),
                        color: '#A1AABA',
                        fontFamily: 'PFBeauSansPro-Regular'
                    }}>у вас {this.state.count} объявления</Text>
                </View>

                <FlatList
                    style={[styles.content_global, {paddingBottom: 0, flex: 1,}]}
                    data={this.state.items}
                    keyExtractor={(item) => item.id}
                    renderItem={({item, index}) => {
                        return (

                                <SearchBlock item={item} navigation={this.props.navigation}/>


                        );
                    }}
                />

                <TouchableOpacity onPress={() => {
                    if (this.state.refreshing === false)
                        this._loadMore();
                }} style={{
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
                    }}>показать ещё объявления</Text>
                    <SvgArrow/>
                </TouchableOpacity>

            </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(withNavigationFocus(SearchListScreen));