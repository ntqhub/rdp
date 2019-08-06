const initialState = {
    id: 3,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_IDS':
            return {...state, id: action.payload}
        default:
            return state;
    }
}