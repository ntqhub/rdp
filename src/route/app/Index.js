import {createStackNavigator} from "react-navigation";
import BottomTabStack from './bottom_tab/Index';
import MessageChatStack from './MessageChatStack';
import UserSummaryViewStack from './UserSummaryViewStack';
import ProfileStack from './ProfileStack';
import CompanyIndexStack from './CompanyIndexStack';
import CompanyRatingStack from './CompanyRatingStack';
import VacancyStack from './VacancyStack';
import ReservationConfirmedStack from './ReservationConfirmedStack';

import transitionConfig from '../../lib/TransitionConfig';

export default createStackNavigator({
    BottomTabStack,
    MessageChat: MessageChatStack,
    UserSummaryView: UserSummaryViewStack,
    Profile: ProfileStack,
    CompanyIndex: CompanyIndexStack,
    CompanyRating: CompanyRatingStack,
    Vacancy: VacancyStack,
    ReservationConfirmed: ReservationConfirmedStack,
}, {
    initialRouteName: 'BottomTabStack',
    headerMode: 'none',
    transitionConfig,
});