import React, {Component} from 'react'
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

export default class SvgFiveStar extends Component {
    static defaultProps = {
        style: {},
        rating: 0,
    };

    render() {
        const StarSelect = () => (
            <Svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <Path
                    d="M11.3854 3.68484L8.10841 3.22723L6.64374 0.382694C6.38131 -0.124337 5.62094 -0.130782 5.35626 0.382694L3.89159 3.22723L0.614589 3.68484C0.0269265 3.76648 -0.208587 4.46043 0.21758 4.85789L2.58842 7.07078L2.02767 10.1968C1.92674 10.7618 2.54804 11.185 3.06842 10.9208L6 9.4448L8.93159 10.9208C9.45196 11.1829 10.0733 10.7618 9.97233 10.1968L9.41158 7.07078L11.7824 4.85789C12.2086 4.46043 11.9731 3.76648 11.3854 3.68484Z"
                    fill="#074A5D"/>
            </Svg>
        );

        const StarNotSelect = () => (
            <Svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <Path
                    d="M11.3854 3.68484L8.10841 3.22723L6.64374 0.382694C6.38131 -0.124337 5.62094 -0.130782 5.35626 0.382694L3.89159 3.22723L0.614589 3.68484C0.0269265 3.76648 -0.208587 4.46043 0.21758 4.85789L2.58842 7.07078L2.02767 10.1968C1.92674 10.7618 2.54804 11.185 3.06842 10.9208L6 9.4448L8.93159 10.9208C9.45196 11.1829 10.0733 10.7618 9.97233 10.1968L9.41158 7.07078L11.7824 4.85789C12.2086 4.46043 11.9731 3.76648 11.3854 3.68484ZM8.64224 6.83015L9.26579 10.3106L6 8.66922L2.73645 10.3128L3.36 6.8323L0.717766 4.36375L4.36711 3.85672L6 0.687772L7.63289 3.85672L11.2822 4.36375L8.64224 6.83015Z"
                    fill="#074A5D"/>
            </Svg>
        );

        return (
            <View style={[this.props.style, {flexDirection: 'row', alignItems: 'center',}]}>
                <View>
                    {(this.props.rating >= 1) ? (<StarSelect/>) : (<StarNotSelect/>)}
                </View>
                <View style={{marginLeft: 7,}}>
                    {(this.props.rating >= 2) ? (<StarSelect/>) : (<StarNotSelect/>)}
                </View>
                <View style={{marginLeft: 7,}}>
                    {(this.props.rating >= 3) ? (<StarSelect/>) : (<StarNotSelect/>)}
                </View>
                <View style={{marginLeft: 7,}}>
                    {(this.props.rating >= 4) ? (<StarSelect/>) : (<StarNotSelect/>)}
                </View>
                <View style={{marginLeft: 7,}}>
                    {(this.props.rating >= 5) ? (<StarSelect/>) : (<StarNotSelect/>)}
                </View>
            </View>
        )
    }
}