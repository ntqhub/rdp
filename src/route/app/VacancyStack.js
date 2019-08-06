import {createStackNavigator} from "react-navigation";

import VacancyScreen from "../../screens/app/Vacancy";
import transitionConfig from "../../lib/TransitionConfig";

export default createStackNavigator({
        VacancyScreen,
    },
    {
        //initialRouteName: '',
        transitionConfig,
    });