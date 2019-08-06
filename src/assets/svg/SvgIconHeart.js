import React, {Component} from 'react'
import Svg, {Path} from 'react-native-svg';

export default class SvgIconHeart extends Component {
    static defaultProps = {
        style: {},
    };

    render() {
        return (
            <Svg style={this.props.style} width="14" height="13" viewBox="0 0 14 13" fill="none">
                <Path
                    d="M7.04434 13C6.70503 13 6.39524 12.8582 6.14444 12.6061L1.12864 7.24848C0.110724 6.16121 -0.258085 4.5697 0.184486 3.13576C0.774581 1.22909 2.30883 0 4.10862 0C5.20029 0 6.21821 0.45697 6.97058 1.26061L7.02959 1.32364L7.0886 1.26061C7.85572 0.441212 8.87363 0 9.95056 0C11.0422 0 12.0601 0.45697 12.8125 1.26061C14.391 2.94667 14.391 5.70424 12.8125 7.3903L7.91473 12.6218C7.7082 12.8582 7.38364 13 7.04434 13ZM4.12337 1.49697C3.17922 1.49697 2.01378 2.04848 1.52695 3.60848C1.24666 4.50667 1.48269 5.51515 2.11705 6.19273L7.02959 11.44L11.8241 6.31879C12.3257 5.78303 12.5912 5.07394 12.5912 4.31758C12.5912 3.56121 12.3109 2.85212 11.8241 2.31636C11.3225 1.78061 10.6587 1.49697 9.95056 1.49697C9.24244 1.49697 8.57859 1.79636 8.07701 2.31636L7.51642 2.89939C7.23612 3.19879 6.79355 3.19879 6.51325 2.89939L5.96742 2.31636C5.49534 1.78061 4.83148 1.49697 4.12337 1.49697Z"
                    fill="#074A5D"/>
            </Svg>
        )
    }
}