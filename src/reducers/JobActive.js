const initialState = {
    loading: false,
    error: null,
    coordinate: {
        latitude: null,
        longitude: null,
    },
    time_start: null,
    salary: 0,
    company_title: '',
    date: null,
    position: '',
    address: '',
    foot_time: 0,
    bus_time: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {

        case 'JOB_ACTIVE_GET_DATA_LOAD':
            return {
                ...state,
                loading: true
            };

        case 'JOB_ACTIVE_GET_DATA_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
            };

        case 'JOB_ACTIVE_GET_DATA_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };

        case 'JOB_ACTIVE_SET_TIME_START':
            return {
                ...state,
                time_start: action.payload,
            };

        default:
            return state
    }
};