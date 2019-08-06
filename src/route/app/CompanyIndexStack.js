import {createStackNavigator} from "react-navigation";

import CompanyIndexScreen from "../../screens/app/company/Index";
import transitionConfig from "../../lib/TransitionConfig";

export default createStackNavigator({
        CompanyIndexScreen,
    },
    {
        //initialRouteName: '',
        transitionConfig,
    });