import React, {Component} from 'react'
import Svg, {Path} from 'react-native-svg';

export default class SvgMen extends Component {
    static defaultProps = {
        style: {},
        fill: '#074a5d'
    };

    render() {
        return (
            <Svg style={this.props.style} width="14" height="13" viewBox="0 0 14 13" fillRule="evenodd"
                 fill={this.props.fill}>
                <Path d="M6.5 10.5h1l1 2.5h-3l1-2.5z"/>
                <Path d="M7 8l1 3H6l1-3z"/>
                <Path
                    d="M7 9.1c-2.556 0-4.629-2.037-4.629-4.55S4.444 0 7 0c2.556 0 4.629 2.037 4.629 4.55S9.556 9.1 7 9.1zm0-1.3c-1.826 0-3.306-1.455-3.306-3.25S5.174 1.3 7 1.3s3.306 1.455 3.306 3.25S8.826 7.8 7 7.8z"
                    clipRule="evenodd"/>
                <Path
                    d="M14 13c-.864-3.001-3.67-5.2-7-5.2S.864 9.999 0 13h1.387C2.204 10.728 4.41 9.1 7 9.1c2.591 0 4.796 1.628 5.613 3.9H14z"/>
            </Svg>
        )
    }
}