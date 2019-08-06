import {createStackNavigator} from "react-navigation";
import IndexScreen from "../../screens/Index";
import LoginScreen from "../../screens/Login";
import ForgotScreen from "../../screens/Forgot";

import UserIndexScreen from "../../screens/registration/user/Index";
import UserTermsServiceScreen from "../../screens/registration/user/TermsService";
import UserSmsConfirmScreen from "../../screens/registration/user/SmsConfirm";
import UserProfileScreen from "../../screens/registration/user/Profile";
import UserPassportScreen from "../../screens/registration/user/Passport";
import UserPassportPhotoScreen from "../../screens/registration/user/PassportPhoto";
import UserPassportPhotoTakeScreen from "../../screens/registration/user/PassportPhotoTake";
import UserProfileAvatarScreen from "../../screens/registration/user/ProfileAvatar";
import UserPaymentScreen from "../../screens/registration/user/Payment";
import UserVerificationScreen from "../../screens/registration/user/Verification";
import UserCompleteScreen from "../../screens/registration/user/Complete";

import CompanyIndexScreen from "../../screens/registration/company/Index";
import CompanySmsConfirmScreen from "../../screens/registration/company/SmsConfirm";
import CompanyCompleteScreen from "../../screens/registration/company/Complete";
import CompanyBrandScreen from "../../screens/registration/company/Brand";
import CompanyCommentScreen from "../../screens/registration/company/Comment";
import CompanyCountScreen from "../../screens/registration/company/Count";
import CompanyIndustryScreen from "../../screens/registration/company/Industry";
import CompanyLogoScreen from "../../screens/registration/company/Logo";
import CompanyYearScreen from "../../screens/registration/company/Year";
import CompanyInnScreen from "../../screens/registration/company/Inn";

import transitionConfig from "../../lib/TransitionConfig";

export default createStackNavigator(
    {
        IndexScreen,

        LoginScreen,
        ForgotScreen,

        UserIndexScreen: UserIndexScreen,
        UserTermsServiceScreen: UserTermsServiceScreen,
        UserSmsConfirmScreen: UserSmsConfirmScreen,
        UserProfileScreen: UserProfileScreen,
        UserPassportScreen: UserPassportScreen,
        UserPassportPhotoScreen: UserPassportPhotoScreen,
        UserPassportPhotoTakeScreen: UserPassportPhotoTakeScreen,
        UserProfileAvatarScreen: UserProfileAvatarScreen,
        UserPaymentScreen: UserPaymentScreen,
        UserVerificationScreen: UserVerificationScreen,
        UserCompleteScreen: UserCompleteScreen,

        CompanyIndexScreen,
        CompanySmsConfirmScreen,
        CompanyCompleteScreen,
        CompanyBrandScreen,
        CompanyCommentScreen,
        CompanyCountScreen,
        CompanyIndustryScreen,
        CompanyLogoScreen,
        CompanyYearScreen,
        CompanyInnScreen,
    },
    {
        initialRouteName: "IndexScreen",
        transitionConfig
    }
);
