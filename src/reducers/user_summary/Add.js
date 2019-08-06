import defaultState from './DefaultStateView';

const initialState = defaultState;

export default (state = initialState, action) => {
    switch (action.type) {
        case 'USER_SUMMARY_ADD_SET':
            if( action.payload ){
                return action.payload;
            }else{
                return defaultState;
            }
        case 'USER_SUMMARY_ADD_CLEAR':
            return defaultState;
        default:
            return state;
    }
};