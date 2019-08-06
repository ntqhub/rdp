import React, {Component} from 'react';
import {createBottomTabNavigator} from "react-navigation";
import MessageStack from './MessageStack';
import CalendarStack from './CalendarStack';
import SearchStack from './SearchStack';
import UserSummaryStack from './UserSummaryStack';
import AdvertStack from './AdvertStack';
import JobStack from './JobStack';
import ProfileStack from './ProfileStack';
import Svg, {Path} from "react-native-svg";

export default createBottomTabNavigator({
        Message: MessageStack,
        Calendar: CalendarStack,
        //Advert: AdvertStack,
    //UserSummary: UserSummaryStack,
    Search: SearchStack,
        Job: JobStack,
        Profile:ProfileStack,
    }, {
        initialRouteName: 'Message',
        headerMode: 'none',
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) =>
                getTabBarIcon(navigation, focused, tintColor),
        }),
        tabBarOptions: {
            activeTintColor: '#83EFFF',
            inactiveTintColor: '#FFFFFF',
            tintColor: '#FFFFFF',
            showLabel: false,
            style: {
                backgroundColor: '#074A5D',
            },
        },
    }
);

const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;

    if (routeName === 'Message') {
        return <Svg width="19" height="19" viewBox="0 0 19 19" fill={tintColor}>
            <Path d="M1.15093 18.8603C1.08555 18.8099 1.03531 18.7408 1.0062 18.6613C0.977088 18.5818 0.970319 18.4952 0.986666 18.4118L1.61109 14.5501C0.568135 13.0342 0.00475354 11.2132 0.000244141 9.34375C0.000244141 4.20626 4.24101 0 9.50027 0C14.727 0 18.9667 4.20824 19.0002 9.34375C19.0002 14.4812 14.727 18.688 9.50027 18.688C8.14231 18.6951 6.79818 18.4014 5.55591 17.8261L1.61155 18.9648C1.573 18.992 1.52657 19.004 1.48037 18.9989C1.35948 18.9897 1.24433 18.9413 1.15093 18.8603ZM0.986666 9.34375C0.985474 11.0759 1.52843 12.7603 2.53149 14.1362C2.57854 14.1847 2.61245 14.2454 2.62978 14.3121C2.64711 14.3788 2.64724 14.4491 2.63013 14.5159L2.07126 17.7914L5.32557 16.826C5.39214 16.7918 5.46527 16.7741 5.53938 16.7741C5.61349 16.7741 5.68662 16.7918 5.75319 16.826C6.92627 17.4003 8.20618 17.6947 9.50074 17.6879C14.2012 17.6879 18.0143 13.9644 18.0143 9.34375C18.0143 4.75778 14.2017 1.03429 9.50074 1.03429C4.79982 1.03429 0.986666 4.75585 0.986666 9.34181V9.34375Z"/>
        </Svg>;
    }

    if (routeName === 'Calendar') {
        return <Svg width="20" height="19" viewBox="0 0 20 19" fill={tintColor}>
            <Path d="M5.23809 0C4.45238 0 3.80952 0.623603 3.80952 1.38578V2.30964H1.42857C0.642857 2.30964 0 2.93324 0 3.69542V17.6142C0 18.3764 0.642857 19 1.42857 19H18.5714C19.3571 19 20 18.3764 20 17.6142V3.69542C20 2.93324 19.3571 2.30964 18.5714 2.30964H16.1905V1.38578C16.1905 0.623603 15.5476 0 14.7619 0C13.9762 0 13.3333 0.623603 13.3333 1.38578V2.30964H6.66667V1.38578C6.66667 0.623603 6.02381 0 5.23809 0ZM5.23809 0.923856C5.5 0.923856 5.71429 1.13172 5.71429 1.38578V4.15735C5.71429 4.41141 5.5 4.61928 5.23809 4.61928C4.97619 4.61928 4.7619 4.41141 4.7619 4.15735V1.38578C4.7619 1.10863 4.97619 0.923856 5.23809 0.923856ZM14.7619 0.923856C15.0238 0.923856 15.2381 1.13172 15.2381 1.38578V4.15735C15.2381 4.41141 15.0238 4.61928 14.7619 4.61928C14.5 4.61928 14.2857 4.41141 14.2857 4.15735V1.38578C14.2857 1.10863 14.5 0.923856 14.7619 0.923856ZM1.42857 3.2335H3.80952V4.15735C3.80952 4.91953 4.45238 5.54313 5.23809 5.54313C6.02381 5.54313 6.66667 4.91953 6.66667 4.15735V3.2335H13.3333V4.15735C13.3333 4.91953 13.9762 5.54313 14.7619 5.54313C15.5476 5.54313 16.1905 4.91953 16.1905 4.15735V3.2335H18.5714C18.8333 3.2335 19.0476 3.44136 19.0476 3.69542V6.11466H0.952381V3.69542C0.952381 3.41827 1.16667 3.2335 1.42857 3.2335ZM0.952381 7.03851H19.0476V17.6142C19.0476 17.8683 18.8333 18.0762 18.5714 18.0762H1.42857C1.16667 18.0762 0.952381 17.8683 0.952381 17.6142V7.03851Z"/>
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M10 12.1348C11.2006 12.1348 12.1739 11.1646 12.1739 9.96786C12.1739 8.77109 11.2006 7.80092 10 7.80092C8.79938 7.80092 7.82609 8.77109 7.82609 9.96786C7.82609 11.1646 8.79938 12.1348 10 12.1348ZM10 11.268C10.7204 11.268 11.3043 10.6859 11.3043 9.96786C11.3043 9.2498 10.7204 8.6677 10 8.6677C9.27963 8.6677 8.69565 9.2498 8.69565 9.96786C8.69565 10.6859 9.27963 11.268 10 11.268Z"/>
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M15.2174 12.1348C16.418 12.1348 17.3913 11.1646 17.3913 9.96786C17.3913 8.77109 16.418 7.80092 15.2174 7.80092C14.0168 7.80092 13.0435 8.77109 13.0435 9.96786C13.0435 11.1646 14.0168 12.1348 15.2174 12.1348ZM15.2174 11.268C15.9378 11.268 16.5217 10.6859 16.5217 9.96786C16.5217 9.2498 15.9378 8.6677 15.2174 8.6677C14.497 8.6677 13.913 9.2498 13.913 9.96786C13.913 10.6859 14.497 11.268 15.2174 11.268Z"/>
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M4.78261 12.1348C5.98323 12.1348 6.95652 11.1646 6.95652 9.96786C6.95652 8.77109 5.98323 7.80092 4.78261 7.80092C3.58199 7.80092 2.6087 8.77109 2.6087 9.96786C2.6087 11.1646 3.58199 12.1348 4.78261 12.1348Z"/>
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M10 17.3354C11.2006 17.3354 12.1739 16.3653 12.1739 15.1685C12.1739 13.9717 11.2006 13.0016 10 13.0016C8.79938 13.0016 7.82609 13.9717 7.82609 15.1685C7.82609 16.3653 8.79938 17.3354 10 17.3354ZM10 16.4687C10.7204 16.4687 11.3043 15.8866 11.3043 15.1685C11.3043 14.4505 10.7204 13.8683 10 13.8683C9.27963 13.8683 8.69565 14.4505 8.69565 15.1685C8.69565 15.8866 9.27963 16.4687 10 16.4687Z"/>
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M15.2174 17.3354C16.418 17.3354 17.3913 16.3653 17.3913 15.1685C17.3913 13.9717 16.418 13.0016 15.2174 13.0016C14.0168 13.0016 13.0435 13.9717 13.0435 15.1685C13.0435 16.3653 14.0168 17.3354 15.2174 17.3354ZM15.2174 16.4687C15.9378 16.4687 16.5217 15.8866 16.5217 15.1685C16.5217 14.4505 15.9378 13.8683 15.2174 13.8683C14.497 13.8683 13.913 14.4505 13.913 15.1685C13.913 15.8866 14.497 16.4687 15.2174 16.4687Z"/>
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M4.78261 17.3354C5.98323 17.3354 6.95652 16.3653 6.95652 15.1685C6.95652 13.9717 5.98323 13.0016 4.78261 13.0016C3.58199 13.0016 2.6087 13.9717 2.6087 15.1685C2.6087 16.3653 3.58199 17.3354 4.78261 17.3354ZM4.78261 16.4687C5.50298 16.4687 6.08696 15.8866 6.08696 15.1685C6.08696 14.4505 5.50298 13.8683 4.78261 13.8683C4.06224 13.8683 3.47826 14.4505 3.47826 15.1685C3.47826 15.8866 4.06224 16.4687 4.78261 16.4687Z"/>
        </Svg>
    }

    if (routeName === 'UserSummary' || routeName === 'Search') {
        return <Svg width="19" height="19" viewBox="0 0 19 19" fill={tintColor}>
            <Path
                d="M18.8182 17.9255L14.533 13.6277C17.4948 10.1515 17.1167 4.96887 13.6507 1.99831C10.1847 -0.972245 4.95427 -0.593026 1.99244 2.88316C-0.96939 6.35934 -0.591284 11.542 2.87469 14.5126C5.96256 17.1671 10.4998 17.1671 13.5877 14.5126L17.8729 18.8104C18.125 19.0632 18.5031 19.0632 18.7551 18.8104C19.0702 18.5576 19.0702 18.1784 18.8182 17.9255ZM8.29421 15.2078C4.45013 15.2078 1.36226 12.1108 1.36226 8.25544C1.36226 4.40004 4.45013 1.30307 8.29421 1.30307C12.1383 1.30307 15.2262 4.40004 15.2262 8.25544C15.2262 12.0476 12.0753 15.2078 8.29421 15.2078Z"/>
        </Svg>
    }

    if (routeName === 'Job') {
        return <Svg width="19" height="19" viewBox="0 0 19 19" fill={tintColor}>
            <Path d="M18.4997 19C18.0219 19.0044 17.9997 18.5 17.9997 18C18.0003 11.7516 17.9997 2 17.9997 2C17.5648 2.41727 10.9635 7.03028 10.5987 7.46728C11.4944 8.21807 12.4226 9.31536 12.4226 10.8151C12.4226 12.5009 11.3892 14.5351 9.50464 14.5351V13.4184C10.7911 13.4184 11.3282 11.8491 11.3282 10.8128C11.3282 9.77651 10.6432 8.64387 9.50464 7.83687V6.34796C9.50464 6.34796 16.0968 1.5559 17.1638 0.76789C18.2308 -0.0201183 18.9874 -0.449298 18.9874 0.76789C18.9874 0.76789 18.9997 11.2704 18.9997 18C18.9997 18.5 18.9755 18.9956 18.4997 19ZM6.58451 10.811C6.58451 9.30978 7.51347 8.21208 8.41029 7.46092C8.04513 7.02318 1.4347 2.41764 0.999798 2V18C0.999753 18.5 0.999753 19 0.499745 19C-0.000263125 19 -0.000244141 18.5 -0.000244141 18C-0.000244141 17.5 0.0117187 0.760801 0.0117187 0.760801C0.0117187 -0.457131 0.769416 -0.0275793 1.83749 0.760801C2.90557 1.54918 9.50575 6.34423 9.50575 6.34423V7.83315C8.36574 8.64051 7.67998 9.77581 7.67998 10.811C7.67998 11.8461 8.21637 13.4184 9.50464 13.4184V14.5351C7.61752 14.5351 6.58451 12.4975 6.58451 10.811Z"/>
        </Svg>
    }

    if (routeName === 'Profile') {
        return <Svg width="18" height="19" viewBox="0 0 18 19" fill={tintColor}>
            <Path d="M0.465135 19C0.399841 18.9963 0.335939 18.9797 0.277151 18.9511C0.218364 18.9225 0.165867 18.8826 0.12272 18.8336C0.0795732 18.7845 0.0466395 18.7275 0.0258382 18.6656C0.00503682 18.6038 -0.00321609 18.5384 0.00156038 18.4734C0.289125 14.283 4.24859 11.0139 8.99986 11.0139C13.7511 11.0139 17.7106 14.283 17.9991 18.4516C18.0079 18.5828 17.964 18.712 17.8772 18.8109C17.7904 18.9098 17.6678 18.9703 17.5363 18.979C17.4048 18.9877 17.2752 18.944 17.1761 18.8574C17.0769 18.7708 17.0163 18.6485 17.0075 18.5174C16.7433 14.8537 13.2241 12.0014 9.00035 12.0014C4.75481 12.0014 1.23511 14.8754 0.993163 18.5391C0.984006 18.6621 0.929457 18.7773 0.840069 18.8624C0.750681 18.9475 0.632809 18.9966 0.509261 19H0.465135ZM3.98532 5.00282C3.98523 4.01339 4.27932 3.04615 4.83042 2.22344C5.38152 1.40073 6.16486 0.759489 7.08138 0.380828C7.99789 0.00216795 9.00642 -0.0969074 9.97939 0.0961325C10.9524 0.289172 11.8461 0.765657 12.5475 1.46532C13.249 2.16499 13.7266 3.05641 13.9201 4.02684C14.1135 4.99728 14.0141 6.00313 13.6344 6.9172C13.2546 7.83126 12.6116 8.61248 11.7867 9.16205C10.9617 9.71161 9.9919 10.0048 8.99986 10.0046C8.3412 10.0049 7.68895 9.8757 7.08038 9.62443C6.47181 9.37316 5.91886 9.00474 5.45312 8.54022C4.98738 8.07571 4.61798 7.52421 4.36604 6.91724C4.11411 6.31027 3.98457 5.65974 3.98483 5.00282H3.98532ZM4.99726 5.00282C4.99716 5.79259 5.23188 6.56465 5.67174 7.22137C6.1116 7.87809 6.73685 8.38997 7.4684 8.69227C8.19995 8.99457 9.00496 9.07372 9.78161 8.9197C10.5583 8.76568 11.2717 8.38542 11.8316 7.827C12.3916 7.26858 12.773 6.55709 12.9275 5.7825C13.082 5.00791 13.0027 4.20501 12.6997 3.47535C12.3967 2.74569 11.8836 2.12203 11.2252 1.68324C10.5668 1.24446 9.79271 1.01026 9.00085 1.01026C7.93995 1.01326 6.92334 1.43482 6.17303 2.18287C5.42271 2.93093 4.99966 3.94471 4.99626 5.00282H4.99726Z"/>
        </Svg>
    }
};