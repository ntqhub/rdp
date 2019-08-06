import React, {Component} from 'react'
import Svg, {Path} from 'react-native-svg';

export default class SvgArrowBack extends Component {
    static defaultProps = {
        style: {},
        fill: '#074A5D'
    };

    render() {
        return (
            <Svg style={this.props.style} width="8" height="17" fill={this.props.fill} viewBox="0 0 8 17">
                <Path fill="#074A5D"
                      d="M.003 8.419a.807.807 0 0 1 .187-.434L6.55.35a.799.799 0 0 1 .548-.343.787.787 0 0 1 .619.182.803.803 0 0 1 .282.586.812.812 0 0 1-.24.605L1.83 8.5l5.93 7.121a.808.808 0 0 1 .014 1.137.79.79 0 0 1-1.225-.107L.19 9.015a.807.807 0 0 1-.187-.596z"/>
            </Svg>
        )
    }
}