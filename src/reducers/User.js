const initialState = {
    loading: false,
    error: null,
    geo: {
        latitude: null,
        longitude: null
    },
    id: null,
    email: 'email@sobaka.ru',
    phone_code: '+7',
    phone_number: '9642346513',
    balance: 256.0,
    rating: 2.8,
    first_name: 'Фёрстнейм',
    last_name: 'Ластнеймов',
    second_name: 'Секондович',
    birthday: null,
    about: '',
    city: '',
    city_id: null,
    gender: '',
    gender_id: null,
    latitude: null,
    longitude: null,
    registration_at: null,
    email_confirmed: false,
    phone_confirmed: false,
    passport_confirmed: false,
    avatar: '',
    view_information_message: false,
    view_information_job_all: false,
    view_information_job_in_work: false,
    view_information_calendar: false,
    view_information_search: false,
};

export default (state = initialState, action) => {
    switch (action.type) {

        case 'USER_GET_DATA_LOAD':
            return {
                ...state,
                loading: true
            };

        case 'USER_GET_DATA_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
            };

        case 'USER_GET_DATA_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };

        case 'USER_SET_GEO':
            return {
                ...state,
                geo: {latitude: action.payload.latitude, longitude: action.payload.longitude},
            };

        case 'USER_SET_ID':
            return {...state, id: action.payload};
        case 'USER_SET_EMAIL':
            return {...state, email: action.payload};
        case 'USER_SET_PHONE_CODE':
            return {...state, phone_code: action.payload};
        case 'USER_SET_PHONE_NUMBER':
            return {...state, phone_number: action.payload};
        case 'USER_SET_BALANCE':
            return {...state, balance: action.payload};
        case 'USER_SET_RATING':
            return {...state, rating: action.payload};
        case 'USER_SET_FIRST_NAME':
            return {...state, first_name: action.payload};
        case 'USER_SET_LAST_NAME':
            return {...state, last_name: action.payload};
        case 'USER_SET_SECOND_NAME':
            return {...state, second_name: action.payload};
        case 'USER_SET_BIRTHDAY':
            return {...state, birthday: action.payload};
        case 'USER_SET_ABOUT':
            return {...state, about: action.payload};
        case 'USER_SET_CITY':
            return {...state, city_id: action.payload.id, city: action.payload.title};
        case 'USER_SET_GENDER':
            return {...state, gender_id: action.payload.id, gender: action.payload.title};
        case 'USER_SET_REGISRATION_AT':
            return {...state, registration_at: action.payload};
        case 'USER_SET_EMAIL_CONFIRMED':
            return {...state, email_confirmed: action.payload};
        case 'USER_SET_PHONE_CONFIRMED':
            return {...state, phone_confirmed: action.payload};
        case 'USER_SET_PASSPORT_CONFIRMED':
            return {...state, passport_confirmed: action.payload};

        case 'USER_SET_AVATAR':
            return {...state, avatar: action.payload};

        case 'USER_SET_VIEW_INFORMATION_MESSAGE':
            return {...state, view_information_message: action.payload};
        case 'USER_SET_VIEW_INFORMATION_JOB_ALL':
            return {...state, view_information_job_all: action.payload};
        case 'USER_SET_VIEW_INFORMATION_JOB_IN_WORK':
            return {...state, view_information_job_in_work: action.payload};
        case 'USER_SET_VIEW_INFORMATION_CALENDAR':
            return {...state, view_information_calendar: action.payload};
        case 'USER_SET_VIEW_INFORMATION_SEARCH':
            return {...state, view_information_search: action.payload};
        default:
            return state
    }
};