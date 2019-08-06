import React, {Component} from 'react'
import Svg, {Path} from 'react-native-svg';

export default class SvgIconFilter extends Component {
    static defaultProps = {
        style: {},
    };

    render() {
        return (
            <Svg style={this.props.style} width="15" height="13" viewBox="0 0 15 13" fill="none">
                <Path
                    d="M4.40529 0C3.52423 0 2.77533 0.586955 2.53304 1.3913H0.528634C0.220264 1.3913 0 1.63043 0 1.93478C0 2.23913 0.242291 2.47826 0.550661 2.47826H2.55507C2.77533 3.2826 3.54626 3.86956 4.42731 3.86956C5.3304 3.86956 6.0793 3.2826 6.32159 2.47826H14.4493C14.7577 2.47826 15 2.23913 15 1.93478C15 1.63043 14.7577 1.3913 14.4493 1.3913H6.32159C6.05727 0.586955 5.30837 0 4.40529 0ZM4.42731 1.08695C4.88987 1.08695 5.28634 1.45652 5.28634 1.93478C5.28634 2.41304 4.88987 2.7826 4.42731 2.7826C3.96476 2.7826 3.56828 2.41304 3.56828 1.93478C3.56828 1.45652 3.96476 1.08695 4.42731 1.08695Z"
                    fill="#074A5D"/>
                <Path
                    d="M11.0352 4.34781C10.1542 4.34781 9.40529 4.93476 9.163 5.73911H0.550661C0.220264 5.73911 0 5.97824 0 6.28259C0 6.58693 0.242291 6.82606 0.550661 6.82606H9.163C9.38326 7.63041 10.1542 8.21736 11.0352 8.21736C11.9383 8.21736 12.6872 7.63041 12.9295 6.82606H14.4493C14.7577 6.82606 15 6.58693 15 6.28259C15 5.97824 14.7577 5.73911 14.4493 5.73911H12.9295C12.6872 4.93476 11.9383 4.34781 11.0352 4.34781ZM11.0573 5.43476C11.5198 5.43476 11.9163 5.80433 11.9163 6.28259C11.9163 6.76085 11.5198 7.13041 11.0573 7.13041C10.5947 7.13041 10.1982 6.76085 10.1982 6.28259C10.1982 5.80433 10.5727 5.43476 11.0573 5.43476Z"
                    fill="#074A5D"/>
                <Path
                    d="M7.04846 9.13044C6.1674 9.13044 5.4185 9.7174 5.17621 10.5217H0.550661C0.220264 10.5217 0 10.7609 0 11.0652C0 11.3696 0.242291 11.6087 0.550661 11.6087H5.19824C5.4185 12.413 6.18943 13 7.07048 13C7.97357 13 8.72247 12.413 8.96476 11.6087H14.4493C14.7577 11.6087 15 11.3696 15 11.0652C15 10.7609 14.7577 10.5217 14.4493 10.5217H8.94273C8.70044 9.7174 7.95154 9.13044 7.04846 9.13044ZM7.07048 10.2174C7.53304 10.2174 7.92952 10.587 7.92952 11.0652C7.92952 11.5435 7.53304 11.913 7.07048 11.913C6.60793 11.913 6.21145 11.5435 6.21145 11.0652C6.23348 10.587 6.60793 10.2174 7.07048 10.2174Z"
                    fill="#074A5D"/>
            </Svg>
        )
    }
}