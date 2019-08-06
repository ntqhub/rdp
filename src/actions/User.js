import axios from "../lib/Axios";

export const UserGetData = () => {
    return (dispatch, getState) => {
        const {loading} = getState().User;
        if (loading === true) return;
        dispatch({type: 'USER_GET_DATA_LOAD'});
        axios.get('v1/user.getProfile', {params: {}})
            .then(response => {
                dispatch({type: 'USER_GET_DATA_SUCCESS'});

                dispatch({type: 'USER_SET_AVATAR', payload: response.avatar});
                dispatch({type: 'USER_SET_ID', payload: response.user_id});
                dispatch({type: 'USER_SET_FIRST_NAME', payload: response.first_name});
                dispatch({type: 'USER_SET_LAST_NAME', payload: response.last_name});
                dispatch({type: 'USER_SET_SECOND_NAME', payload: response.second_name});
            })
            .catch(error => {
                dispatch({type: 'USER_GET_DATA_ERROR', payload: {error}});
            });
    }
};

export const UserSetGEO = (latitude, longitude) => ({
    type: 'USER_SET_GEO',
    payload: {latitude: latitude, longitude: longitude},
});

export const UserSetId = (id) => ({
    type: 'USER_SET_ID',
    payload: id,
});

export const UserSetEmail = (email) => ({
    type: 'USER_SET_EMAIL',
    payload: email,
});

export const UserSetPhoneCode = (code) => ({
    type: 'USER_SET_PHONE_CODE',
    payload: code,
});

export const UserSetPhoneNumber = (number) => ({
    type: 'USER_SET_PHONE_NUMBER',
    payload: number,
});

export const UserSetBalance = (balance) => ({
    type: 'USER_SET_BALANCE',
    payload: balance,
});

export const UserSetRating = (rating) => ({
    type: 'USER_SET_RATING',
    payload: rating,
});

export const UserSetFirstName = (first_name) => ({
    type: 'USER_SET_FIRST_NAME',
    payload: first_name,
});

export const UserSetLastName = (last_name) => ({
    type: 'USER_SET_LAST_NAME',
    payload: last_name,
});

export const UserSetSecondName = (second_name) => ({
    type: 'USER_SET_SECOND_NAME',
    payload: second_name,
});

export const UserSetBirthday = (date) => ({
    type: 'USER_SET_BIRTHDAY',
    payload: date,
});

export const UserSetAbout = (about) => ({
    type: 'USER_SET_ABOUT',
    payload: about,
});

export const UserSetCity = (id, title) => ({
    type: 'USER_SET_CITY',
    payload: {id: id, title: title},
});

export const UserSetGender = (id, title) => ({
    type: 'USER_SET_GENDER',
    payload: {id: id, title: title},
});

export const UserSetRegistrationAt = (date) => ({
    type: 'USER_SET_REGISRATION_AT',
    payload: date,
});

export const UserSetEmailConfirmed = (boolean) => ({
    type: 'USER_SET_EMAIL_CONFIRMED',
    payload: boolean,
});

export const UserSetPhoneConfirmed = (boolean) => ({
    type: 'USER_SET_PHONE_CONFIRMED',
    payload: (boolean) ? true : false,
});

export const UserSetPassportConfirmed = (boolean) => ({
    type: 'USER_SET_PASSPORT_CONFIRMED',
    payload: (boolean) ? true : false,
});

export const UserSetAvatar = (uri) => ({
    type: 'USER_SET_AVATAR',
    payload: uri,
});

export const UserSetViewInformationMessage = (boolean) => ({
    type: 'USER_SET_VIEW_INFORMATION_MESSAGE',
    payload: (boolean) ? true : false,
});

export const UserSetViewInformationJobAll = (boolean) => ({
    type: 'USER_SET_VIEW_INFORMATION_JOB_ALL',
    payload: (boolean) ? true : false,
});

export const UserSetViewInformationJobInWork = (boolean) => ({
    type: 'USER_SET_VIEW_INFORMATION_JOB_IN_WORK',
    payload: (boolean) ? true : false,
});

export const UserSetViewInformationCalendar = (boolean) => ({
    type: 'USER_SET_VIEW_INFORMATION_CALENDAR',
    payload: (boolean) ? true : false,
});

export const UserSetViewInformationSearch = (boolean) => ({
    type: 'USER_SET_VIEW_INFORMATION_SEARCH',
    payload: (boolean) ? true : false,
});