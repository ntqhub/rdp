const initialState = {
    min_value_top: 100,
    max_value_top: 500000,
    min_value_btm: 100,
    max_value_btm: 500000,
    switch_reserv: false,
    switch_any_time: false,
    switch_no_matter: false,
    checked_f: true,
    checked_s: true,
    checked_t: true,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SWITCH_MIN_TOP':
            return {...state, min_value_top: action.payload}
        case 'SWITCH_MAX_TOP':
            return {...state, max_value_top: action.payload}
        case 'SWITCH_MIN_BTM':
            return {...state, min_value_btm: action.payload}
        case 'SWITCH_MAX_BTM':
            return {...state, max_value_btm: action.payload}
        case 'SWITCH_RESERV':
            return {...state, switch_reserv: action.payload}
        case 'SWITCH_ANY_TIME':
            return {...state, switch_any_time: action.payload}
        case 'SWITCH_NO_MATTER':
            return {...state, switch_no_matter: action.payload}
        case 'CHECKED_F':
            return {...state, checked_f: action.payload}
        case 'CHECKED_S':
            return {...state, checked_s: action.payload}
        case 'CHECKED_T':
            return {...state, checked_t: action.payload}

        default:
            return state;
    }
}