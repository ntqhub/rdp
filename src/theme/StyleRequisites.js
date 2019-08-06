import {StyleSheet} from 'react-native';
import {verticalScale} from './../lib/Scaling';

export default StyleSheet.create({
    sign: {
        color: "#074A5D",
        fontWeight: "bold"
    },
    border_requ: {
        borderBottomWidth: 1,
        borderBottomColor: "#E7EDF8",
        opacity: 0.8,
        paddingBottom: 25,
    },
    acc_numb: {
        backgroundColor: "#074A5D",
        minHeight: 120,
        borderRadius: 4,
        marginTop: 25,
        justifyContent: "center",
    },
    acc_numb_second: {
        borderWidth: 1,
        borderColor: "#E7EDF8",
        minHeight: 120,
        borderRadius: 4,
        marginTop: 25,
        justifyContent: "center",
    },
    fontF: {
        fontFamily: 'Roboto',
        fontSize: verticalScale(14),
        color: "#fff",
        lineHeight: 16,
        marginTop: 5
    },
    fontMinF: {
        fontFamily: 'Roboto',
        fontSize: verticalScale(12),
        color: "#48C8DB",
        lineHeight: 14
    },
    fontF_sec: {
        fontFamily: 'Roboto',
        fontSize: verticalScale(14),
        color: "#4F4F4F",
        lineHeight: 16,
        marginTop: 5
    },
    fontMinF_sec: {
        fontFamily: 'Roboto',
        fontSize: verticalScale(12),
        color: "#A1AABA",
        lineHeight: 14
    },
    bottomAccNumb: {
        borderTopWidth: 1,
        borderTopColor: "#1F5E70",
        height: 40,
        flexDirection: "row",
        paddingTop: 20,
    },
    bottomAccNumbBord: {
        borderTopWidth: 1,
        borderTopColor: "#E7EDF8",
        height: 40,
        flexDirection: "row",
        paddingTop: 20,
    },
    alignText: {
        marginLeft: 15,
        justifyContent: "center",
        alignItems: "flex-start",
        color: "#48C8DB",
        fontSize: verticalScale(14),
        lineHeight: 17,
        fontFamily: 'PFBeauSansPro-Regular',
    }
})