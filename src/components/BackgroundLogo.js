import React, {Component} from 'react'
import {Dimensions, StyleSheet} from 'react-native';
import Svg, {Path, G} from 'react-native-svg';

export default class BackgroundLogo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static defaultProps = {
        opacity: 0.10,
    };

    render() {
        return(
            <Svg style={style.svg} width={133} height={Dimensions.get('window').height} viewBox="0 0 133 639"
                 fill="none">
                <G opacity={this.props.opacity}>
                    <Path d="M0 639L133 639L133 614.137L19.427 614.138L19.427 613.764L133 595.818L133 568.525L19.427 550.579L19.427 550.205L133 550.205L133 522.165L-5.10702e-06 522.165L-3.1541e-06 566.843L94.5197 579.928L94.5197 580.302L-1.99378e-06 593.388L0 639Z" fill="#074A5D"/>
                    <Path d="M80.1362 481.423L20.9213 476.002L20.9213 475.628L80.1362 470.207L80.1362 481.423ZM-6.36494e-06 493.387L133 516.006L133 489.835L100.31 484.788L100.31 467.964L133 464.412L133 433.567L-8.22799e-06 450.766L-6.36494e-06 493.387Z" fill="#074A5D"/>
                    <Path d="M-1.06129e-05 396.205L-9.25648e-06 427.236L133 427.236L133 396.205L69.4888 396.205L69.4888 379.755L133 379.755L133 348.723L-1.26884e-05 348.723L-1.1332e-05 379.755L49.3146 379.755L49.3146 396.205L-1.06129e-05 396.205Z" fill="#074A5D"/>
                    <Path d="M71.3567 309.492L71.3567 304.631C71.3567 293.789 77.3343 293.041 93.0253 293.041C108.716 293.041 113.947 293.789 113.947 304.631L113.947 309.492L71.3567 309.492ZM-1.44033e-05 309.492L-1.30468e-05 340.523L133 340.523L133 294.911C133 276.591 125.528 262.01 93.0253 262.01C58.2809 262.01 52.3034 276.965 52.3034 295.284L52.3034 309.492L-1.44033e-05 309.492Z" fill="#074A5D"/>
                    <Path d="M60.3357 206.328L60.3357 211.188C60.3357 222.03 54.3581 222.778 38.6671 222.778C22.9761 222.778 19.0534 222.03 19.0534 211.188L19.0534 206.328L60.3357 206.328ZM-2.02691e-05 175.296L-1.84715e-05 216.422C-1.74991e-05 238.668 8.77948 253.809 38.8539 253.809C64.8188 253.809 72.4775 244.276 76.5871 235.49L133 256.987L133 223.713L79.389 208.571L79.389 206.328L133 206.328L133 175.296L-2.02691e-05 175.296Z" fill="#074A5D"/>
                    <Path d="M-2.1984e-05 136.065L-2.06276e-05 167.096L133 167.096L133 136.065L69.4888 136.065L69.4888 119.614L133 119.614L133 88.5828L-2.40595e-05 88.5828L-2.27031e-05 119.614L49.3146 119.614L49.3146 136.065L-2.1984e-05 136.065Z" fill="#074A5D"/>
                    <Path d="M80.1362 47.8556L20.9213 42.4345L20.9213 42.0606L80.1362 36.6395L80.1362 47.8556ZM-2.53168e-05 59.8195L133 82.4388L133 56.2678L100.31 51.2205L100.31 34.3962L133 30.8444L133 -5.81362e-06L-2.71798e-05 17.1981L-2.53168e-05 59.8195Z" fill="#074A5D"/>
                </G>
            </Svg>
        )
    }
}

const style = StyleSheet.create({
    svg: {
        position: 'absolute',
        bottom: 0,
        left: 0
    }
});