import {StyleSheet} from 'react-native';
import {verticalScale} from '../lib/Scaling';

export default StyleSheet.create({

    container_global: {
        flex: 1,
        backgroundColor: "#F9FBFF",
    },

    content_global: {
        flexGrow: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
    },

    statusBar_bgcolor: {
        backgroundColor: "#F9FBFF",
    },

    header_title: {
        fontSize: verticalScale(16),
        color: '#262626',
        fontFamily: 'PFBeauSansPro-Bold',
        flex: 1,
    },

    item_float_label: {
        color: '#A1AABA',
        fontSize: verticalScale(12),
        fontFamily: 'PFBeauSansPro-Regular',
    },

    button_transparent: {
        borderWidth: 1,
        borderColor: '#074A5D',
        shadowOpacity: 0,
        elevation:0,
        borderRadius: 5,
        backgroundColor: 'transparent',
        height: 40,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button_text_transparent: {
        color: '#074a5d',
        fontSize:  verticalScale(16),
        fontFamily: 'PFBeauSansPro-Regular'
    },

    button: {
        borderWidth: 1,
        borderColor: '#074A5D',
        shadowOpacity: 0,
        elevation:0,
        borderRadius: 5,
        backgroundColor: '#074A5D',
        height: 40,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button_text: {
        color: '#ffffff',
        fontSize: verticalScale(16),
        fontFamily: 'PFBeauSansPro-Regular'
    }
});