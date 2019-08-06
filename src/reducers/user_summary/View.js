import defaultState from './DefaultStateView';
import ObjectsGroup from '../../lib/ObjectGroup';

const initialState = defaultState;

export default (state = initialState, action) => {
    switch (action.type) {
        case 'USER_SUMMARY_SET':
            if( action.payload ){
                return ObjectsGroup(defaultState, action.payload);
            }else{
                return defaultState;
            }
        case 'USER_SUMMARY_SET_POSITION':
            let x = state.positions;
            x.push({ id: action.payload.id, title:action.payload.title });
             return { ...state, positions: x.concat() };
        case 'USER_SUMMARY_DELETE_POSITION':
            delete state.positions[action.payload];
            const positions = state.positions.concat();
            return { ...state, positions: positions };
        case 'USER_SUMMARY_SET_START_FROM':
            return { ...state, start_form: action.payload };
        case 'USER_SUMMARY_SET_START_TO':
            return { ...state, start_to: action.payload };
        case 'USER_SUMMARY_SET_START_ALL':
            return { ...state, start_to: null, start_form: null, start_all: action.payload };
        case 'USER_SUMMARY_SET_DURATION_FROM':
            return { ...state, duration_from: action.payload };
        case 'USER_SUMMARY_SET_DURATION_TO':
            return { ...state, duration_to: action.payload };
        case 'USER_SUMMARY_SET_DURATION_ALL':
            return { ...state, duration_to: null, duration_from: null, duration_all: action.payload };
        case 'USER_SUMMARY_SET_SALARY':
            return { ...state, salary: action.payload };
        case 'USER_SUMMARY_SET_CITY':
            return { ...state, city: action.payload.title, city_id: action.payload.id };
        case 'USER_SUMMARY_SET_COUNTRY':
            return { ...state, country: action.payload.title, country_id: action.payload.id };
        case 'USER_SUMMARY_SET_FULL_SEARCH':
            return { ...state, full_search: action.payload };
        case 'USER_SUMMARY_SET_LAT_LON':
            return { ...state, latitude: action.payload.latitude, longitude: action.payload.longitude };
        case 'USER_SUMMARY_SET_BOOKING':
            return { ...state, booking: action.payload.title, booking_id: action.payload.id };
        case 'USER_SUMMARY_SET_CONDITION':
            state.conditions.push({ id: action.payload.id, title:action.payload.title });
            return { ...state, conditions: state.conditions.concat() };
        case 'USER_SUMMARY_DELETE_CONDITION':
            delete state.conditions[action.payload];
            return { ...state, conditions: state.conditions.concat() };
        case 'USER_SUMMARY_SET_DATE':
            state.dates.push(action.payload);
            return { ...state, dates: state.dates.concat() };
        case 'USER_SUMMARY_DELETE_DATE':
            if( state.dates.indexOf(action.payload) != -1 ){
                delete state.dates[state.dates.indexOf(action.payload)];
            }
            return { ...state, dates: state.dates.concat() };
        case 'USER_SUMMARY_SET_COMMENT':
            return { ...state, comment: action.payload };
        case 'USER_SUMMARY_SET_NAME':
            return { ...state, name: action.payload };
        case 'USER_SUMMARY_CLEAR':
            return defaultState();
        default:
            return state
    }
};