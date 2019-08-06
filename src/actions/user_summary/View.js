//Redux-Thunk example
// export const addx = (id, title) => {
//     return dispatch => {
//         dispatch({
//             type: 'POSITION_ADD',
//             payload: {id:id, title:title},
//         });
//
//         // setTimeout(() => {
//         //     dispatch({
//         //         type: 'ADD',
//         //         payload: [1, 2, 3, 4, 5],
//         //     })
//         // }, 1000)
//
//     }
// };

export const Set = (value) => ({
    type: 'USER_SUMMARY_SET',
    payload: value,
});

export const SetPosition = (id, title) => ({
    type: 'USER_SUMMARY_SET_POSITION',
    payload: {id:id, title:title},
});

export const DeletePostiton = (id) => ({
    type: 'USER_SUMMARY_DELETE_POSITION',
    payload: id,
});

export const Clear = () => ({
    type: 'USER_SUMMARY_CLEAR',
    payload: true,
});

export const SetStartFrom = (time) => ({
    type: 'USER_SUMMARY_SET_START_FROM',
    payload: time,
});

export const SetStartTo = (time) => ({
    type: 'USER_SUMMARY_SET_START_TO',
    payload: time,
});

export const SetStartAll = (value) => ({
    type: 'USER_SUMMARY_SET_START_ALL',
    payload: value,
});

export const SetDurationFrom = (time) => ({
    type: 'USER_SUMMARY_SET_DURATION_FROM',
    payload: time,
});

export const SetDurationTo = (time) => ({
    type: 'USER_SUMMARY_SET_DURATION_TO',
    payload: time,
});

export const SetDurationAll = (value) => ({
    type: 'USER_SUMMARY_SET_DURATION_ALL',
    payload: value,
});

export const SetSalary = (salary) => ({
    type: 'USER_SUMMARY_SET_SALARY',
    payload: salary,
});

export const SetCity = (id, title) => ({
    type: 'USER_SUMMARY_SET_CITY',
    payload: {id: id, title: title},
});

export const SetCountry = (id, title) => ({
    type: 'USER_SUMMARY_SET_COUNTRY',
    payload: {id: id, title: title},
});

export const SetFullSearch = (type) => ({
    type: 'USER_SUMMARY_SET_FULL_SEARCH',
    payload: type,
});

export const SetLatLon = (latitude, longitude) => ({
    type: 'USER_SUMMARY_SET_LAT_LON',
    payload: {latitude: latitude,longitude: longitude},
});

export const SetBooking = (id, title) => ({
    type: 'USER_SUMMARY_SET_BOOKING',
    payload: {id: id, title: title},
});

export const SetCondition = (id, title) => ({
    type: 'USER_SUMMARY_SET_CONDITION',
    payload: {id:id, title:title},
});

export const DeleteCondition = (id) => ({
    type: 'USER_SUMMARY_DELETE_CONDITION',
    payload: id,
});

export const SetDate = (date) => ({
    type: 'USER_SUMMARY_SET_DATE',
    payload: date,
});

export const DeleteDate = (id) => ({
    type: 'USER_SUMMARY_DELETE_DATE',
    payload: id,
});

export const SetComment = (comment) => ({
    type: 'USER_SUMMARY_SET_COMMENT',
    payload: comment,
});

export const SetName = (name) => ({
    type: 'USER_SUMMARY_SET_NAME',
    payload: name,
});