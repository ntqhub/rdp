const initialState = {
    loading: false,
    error: null,
    messages: [],
    count_unread: 0,
    count_requests: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {

        case 'MESSAGE_GET_DATA_LOAD':
            return {
                ...state,
                loading: true
            };

        case 'MESSAGE_GET_DATA_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                count_unread: action.payload.count_unread,
                count_requests: action.payload.count_requests,
                messages: action.payload.items
            };

        case 'MESSAGE_GET_DATA_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };

        default:
            return state
    }
};