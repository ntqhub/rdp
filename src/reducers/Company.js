const initialState = {
    id: null,
    title: '',
    comment: '',
    balance: 0.00,
    rating: 0.0,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'COMPANY_SET_ID':
            return {...state, id: action.payload};
        case 'COMPANY_SET_TITLE':
            return {...state, title: action.payload};
        case 'COMPANY_SET_COMMENT':
            return {...state, comment: action.payload};
        case 'COMPANY_SET_BALANCE':
            return {...state, balance: action.payload};
        case 'COMPANY_SET_RATING':
            return {...state, rating: action.payload};
        default:
            return state
    }
};