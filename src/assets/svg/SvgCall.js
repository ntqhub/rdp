import React from 'react'
import Svg, {Path} from 'react-native-svg';

const SvgCall = props => (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
        <Path
            d="M19.0584 19.0547L19.9685 15.1172C20.1013 14.543 19.8044 13.9532 19.2615 13.7188L15.0232 11.9024C14.5272 11.6876 13.9412 11.8321 13.5975 12.2501L11.8749 14.3555C9.17176 13.0274 6.96866 10.8282 5.64055 8.12124L7.746 6.39861C8.16396 6.05486 8.30849 5.46893 8.09365 4.97285L6.27727 0.738524C6.04289 0.195562 5.45696 -0.101309 4.88275 0.0315016L0.949207 0.93774C0.390619 1.06664 0 1.55883 0 2.12913C0 11.9806 7.97646 20 17.8709 20C18.4412 20 18.9334 19.6094 19.0584 19.0547ZM1.24998 2.15257L5.14056 1.25414L6.93741 5.4494L4.0937 7.77359C5.99211 11.8204 8.1913 14.0118 12.2225 15.9024L14.5467 13.0587L18.742 14.8555L17.8435 18.7461C8.68348 18.7383 1.2617 11.3126 1.24998 2.15257Z"
            fill="#074A5D"
        />
    </Svg>
);

export default SvgCall