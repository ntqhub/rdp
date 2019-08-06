import {createStackNavigator} from "react-navigation";

import CompanyRatingScreen from "../../screens/app/company/Rating";
import transitionConfig from "../../lib/TransitionConfig";

export default createStackNavigator({
        CompanyRatingScreen,
    },
    {
        //initialRouteName: '',
        transitionConfig,
    });