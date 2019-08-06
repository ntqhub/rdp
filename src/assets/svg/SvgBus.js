import React from 'react'
import Svg, {Path} from 'react-native-svg';

const SvgBus = props => (
    <Svg width={14} height={14} viewBox="0 0 14 14" fill="none" {...props}>
        <Path
            d="M3.5 10.5C3.98316 10.5 4.375 10.1082 4.375 9.625C4.375 9.14184 3.98316 8.75 3.5 8.75C3.01684 8.75 2.625 9.14184 2.625 9.625C2.625 10.1082 3.01684 10.5 3.5 10.5ZM10.5 10.5C10.9832 10.5 11.375 10.1082 11.375 9.625C11.375 9.14184 10.9832 8.75 10.5 8.75C10.0168 8.75 9.625 9.14184 9.625 9.625C9.625 10.1082 10.0168 10.5 10.5 10.5ZM13.3438 3.5H13.125V2.1875C13.125 0.9625 10.4125 0 7 0C3.5875 0 0.875 0.9625 0.875 2.1875V3.5H0.65625C0.293945 3.5 0 3.79367 0 4.15625V6.34375C0 6.70605 0.293945 7 0.65625 7H0.875V11.375C0.875 11.8582 1.26684 12.25 1.75 12.25V13.125C1.75 13.6082 2.14184 14 2.625 14H3.9375C4.42066 14 4.8125 13.6082 4.8125 13.125V12.25H9.1875V13.125C9.1875 13.6082 9.57934 14 10.0625 14H11.375C11.8582 14 12.25 13.6082 12.25 13.125V12.25C12.7332 12.25 13.125 11.8582 13.125 11.375V7H13.3438C13.7061 7 14 6.70605 14 6.34375V4.15625C14 3.79367 13.7061 3.5 13.3438 3.5ZM3.9375 13.125H2.625V12.25H3.9375V13.125ZM11.375 13.125H10.0625V12.25H11.375V13.125ZM12.25 11.375H1.75L1.74973 7.875H12.2503L12.25 11.375ZM12.2503 7H1.74973L1.74945 3.5H12.2508L12.2503 7ZM12.2508 2.625H1.74918V2.19598C1.84051 1.83203 3.59324 0.875 7 0.875C10.4068 0.875 12.1595 1.83203 12.2508 2.19598V2.625Z"
            fill="#074A5D"
        />
    </Svg>
);

export default SvgBus