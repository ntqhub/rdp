import {createStackNavigator} from "react-navigation";
import ProfileMyRatingScreen from "../../screens/app/profile/MyRating";
import ProfilePaymentHistoryScreen from "../../screens/app/profile/PaymentHistory";
import ProfileRequisitesScreen from "../../screens/app/profile/Requisites";
import ProfileWorkHistoryScreen from "../../screens/app/profile/WorkHistory";
import ProfileMainScreen from "../../screens/app/profile/Main";
import HistoryInnerPay from "../../screens/app/profile/HistoryInnerPay";
import ProfileEditMainScreen from "../../screens/app/profile/EditMain";

import transitionConfig from "../../lib/TransitionConfig";

export default createStackNavigator({
        ProfileMyRatingScreen,
        ProfilePaymentHistoryScreen,
        ProfileRequisitesScreen,
        ProfileWorkHistoryScreen,
        ProfileMainScreen,
        HistoryInnerPay,
        ProfileEditMainScreen,
    },
    {
        //initialRouteName: '',
        transitionConfig,
    });