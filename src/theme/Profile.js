import { StyleSheet } from 'react-native';
import {verticalScale} from '../lib/Scaling';

export default StyleSheet.create({
    wrap_bg:{
        backgroundColor: "#074A5D",
        opacity: 0.8,
        height: 60,
        justifyContent: "center",
    },
    bg_wrap_title_name:{
        marginLeft: 20
    },
    container_padding:{
        color: "#FFFFFF",
        fontSize: verticalScale(22),
        fontFamily: 'PFBeauSansPro-Regular',
    },
    dop_block:{
        marginTop: 0,
        marginBottom: 30,
        marginRight: 20,
        marginLeft: 20
    },
    dop_block_title: {
    },
    list_item_text:{
        fontSize: verticalScale(16),
        lineHeight: 19,
        fontFamily: 'PFBeauSansPro-Regular',
    },
    border_dop: {
        borderWidth: 1,
        borderColor: "#E7EDF8",
        minHeight: 179,
        width: "100%",
        paddingBottom: 5,
    },
    dop_header: {
        minHeight: 46,
        justifyContent: "center",
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 0,
        // borderBottomWidth: 1,
        // borderColor: "#074A5D"
    },
    dop_header_history: {
        borderBottomWidth: 1,
        borderColor: "#E7EDF8",
        marginBottom:20,
        width: "100%",
        marginTop:20,
    },
    dop_header__title: {
        fontFamily: 'PFBeauSansPro-Regular',
        fontSize: verticalScale(14),
    },
    text_dop_zapoln: {
        marginLeft: 15,
        textDecorationLine: "underline",
        fontSize: verticalScale(14),
        color: "#074A5D",
    },
    text_dop_solar: {
        marginLeft: 15,
        color: "#48C8DB",
        fontSize: verticalScale(14),
    },
    // MyRating
    text_green_title:{
        color:"#10BD55",
        fontSize: verticalScale(24),
        fontFamily: 'PFBeauSansPro-Regular',
        lineHeight: 24,
        fontWeight: "bold",
        alignItems: "flex-start",
        justifyContent: "flex-start"
    },
    text_pre_title:{
        fontSize: verticalScale(16),
    },
    block_view:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#074A5D",
        paddingBottom: 7,
        paddingTop: 7,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius:4,

    },
    title_view_greens:{
        color:"#ffff",
        fontFamily: 'PFBeauSansPro-Bold',
        fontSize: verticalScale(32),
        lineHeight: 38,
        fontWeight: "bold",
        marginLeft: 9,
        justifyContent:"flex-end",
        alignItems: "flex-end",

    },
    name_emplay:{
        fontFamily: 'PFBeauSansPro-Bold',
        fontSize: verticalScale(18),
        lineHeight:22,
        color:"#262626",
        fontWeight:"bold",
        marginTop:30,
        marginBottom:15,

    },
    price_prof:{
        color:"#10BD55",
        fontSize: verticalScale(16),
        lineHeight:19,
        fontWeight:"bold"
    },
    fontPriceText:{
        fontSize: verticalScale(14),
        lineHeight: 14,
        color:"#282828",
        fontFamily: 'PFBeauSansPro-Regular',
    },
    textBase: {
        fontFamily: 'PFBeauSansPro-Regular',
        fontSize: 16,
        lineHeight: 17,
    },
    textBaseGreen: {
        marginTop: 15,
        fontFamily: 'PFBeauSansPro-Regular',
        fontSize: 16,
        lineHeight: 17,
        color: "#10BD55",
    },
    borderBg: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#E7EDF8",
    },
    flexRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

    }
});


