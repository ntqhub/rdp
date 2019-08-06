import {createStackNavigator} from "react-navigation";

import ReservationConfirmedScreen from "../../screens/app/ReservationConfirmed";
import transitionConfig from "../../lib/TransitionConfig";

export default createStackNavigator({
        ReservationConfirmedScreen,
    },
    {
        //initialRouteName: '',
        transitionConfig,
    });