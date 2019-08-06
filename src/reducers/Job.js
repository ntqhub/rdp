const initialState = {
    page: 1,
    loading: false,
    error: null,
    jobs: [],
};

export default (state = initialState, action) => {
    switch (action.type) {

        case 'JOB_GET_DATA_LOAD':
            return {
                ...state,
                loading: true
            };

        case 'JOB_GET_DATA_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                jobs: (action.payload.append === true) ? state.jobs.concat(action.payload.items) : action.payload.items,
                page: (action.payload.append === true) ? state.page++ : 1
            };

        case 'JOB_GET_DATA_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };

        default:
            return state
    }
};