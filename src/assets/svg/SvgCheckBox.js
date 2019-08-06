import React, {Component} from 'react'
import Svg, {Path} from 'react-native-svg';

export default class SvgCheckBox extends Component {
    static defaultProps = {
        style: {},
    };

    render() {
        return (
            <Svg style={this.props.style} width="20" height="20" viewBox="0 0 20 20" fill="none">
                <Path
                    d="M19 13.5C19 13.5 19 13 19.5 13C20 13 20 13.5 20 13.5V19.0977C20 19.609 19.609 20 19.0977 20H0.902256C0.390977 20 0 19.609 0 19.0977V0.902256C0 0.390977 0.390977 0 0.902256 0H14C14 0 14.5 0.063384 14.5 0.5C14.5 0.936623 14 1 14 1H1.5C1 1 1 1.5 1 1.5V18.5C1 19 1.5 19 1.5 19H18.5C18.5 19 19 19 19 18.5V13.5Z"
                    fill="#074A5D"/>
            </Svg>
        )
    }
}