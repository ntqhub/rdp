import {createStackNavigator} from "react-navigation";
import UserSummaryViewIndexScreen from "../../screens/app/user_summary/view/Index";
import UserSummaryViewPositionScreen from "../../screens/app/user_summary/view/Position";
import UserSummaryViewSheduleScreen from "../../screens/app/user_summary/view/Shedule";
import UserSummaryViewSalaryScreen from "../../screens/app/user_summary/view/Salary";
import UserSummaryViewLocationScreen from "../../screens/app/user_summary/view/Location";
import UserSummaryViewMapScreen from "../../screens/app/user_summary/view/Map";
import UserSummaryViewBookingScreen from "../../screens/app/user_summary/view/Booking";
import UserSummaryViewConditionsScreen from "../../screens/app/user_summary/view/Conditions";
import UserSummaryViewDateScreen from "../../screens/app/user_summary/view/Date";
import UserSummaryViewCommentScreen from "../../screens/app/user_summary/view/Comment";
import UserSummaryViewNameScreen from "../../screens/app/user_summary/view/Name";
import transitionConfig from "../../lib/TransitionConfig";

export default createStackNavigator({
        UserSummaryViewIndexScreen,
        UserSummaryViewPositionScreen,
        UserSummaryViewSheduleScreen,
        UserSummaryViewSalaryScreen,
        UserSummaryViewLocationScreen,
        UserSummaryViewMapScreen,
        UserSummaryViewBookingScreen,
        UserSummaryViewConditionsScreen,
        UserSummaryViewDateScreen,
        UserSummaryViewCommentScreen,
        UserSummaryViewNameScreen,
    },
    {
        initialRouteName: 'UserSummaryViewIndexScreen',
        transitionConfig,
    });