import React, {Component} from 'react'
import Svg, {Path} from 'react-native-svg';

export default class SvgPhone extends Component {
    static defaultProps = {
        style: {},
    };

    render() {
        return (
            <Svg style={this.props.style} width="19" height="35" fill="none" viewBox="0 0 19 35">
                <Path fill="#074A5D" fill-rule="evenodd"
                      d="M2.04 0A2.08 2.08 0 0 0 .6.58 1.95 1.95 0 0 0 0 1.976v31.048a1.95 1.95 0 0 0 .599 1.396c.382.37.9.579 1.442.58h14.918a2.08 2.08 0 0 0 1.442-.58A1.95 1.95 0 0 0 19 33.024V1.976A1.95 1.95 0 0 0 18.401.58 2.08 2.08 0 0 0 16.96 0H2.041zm14.242 1.094a1.45 1.45 0 0 1 1.081.507c.287.324.449.764.45 1.222v29.354c-.001.459-.163.898-.45 1.222a1.45 1.45 0 0 1-1.08.507H2.717a1.45 1.45 0 0 1-1.081-.507 1.853 1.853 0 0 1-.45-1.222V2.823c.002-.458.163-.898.45-1.222a1.45 1.45 0 0 1 1.081-.507h13.564z"
                      clip-rule="evenodd"/>
                <Path fill="#074A5D"
                      d="M10.556 31.719c0 .604-.473 1.093-1.056 1.093-.583 0-1.056-.49-1.056-1.093 0-.604.473-1.094 1.056-1.094.583 0 1.056.49 1.056 1.094zM7.389 2.188h4.222c1.056 0 1.056 1.093 0 1.093H7.39c-1.056 0-1.056-1.094 0-1.094z"/>
            </Svg>
        )
    }
}