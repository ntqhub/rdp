import {combineReducers} from "redux";
import storage from 'redux-persist/lib/storage';
import User from "./User";
import Company from "./Company";
import Message from "./Message";
import UserSummaryView from "./user_summary/View";
import UserSummaryAdd from "./user_summary/Add";
import Job from "./Job";
import JobActive from "./JobActive";
import Search from "./search/index";
import InnerSearchBlock from "./innerSearchBlock/index";

const appReducer = combineReducers({
    User,
    Company,
    Message,
    Job,
    JobActive,
    UserSummaryView,
    UserSummaryAdd,
    Search,
    InnerSearchBlock,
});

//export default combineReducers({
//    UserSummaryView: UserSummaryView,
//    UserSummaryAdd: UserSummaryAdd,
//});

export default (state, action) => {
    if (action.type === 'SIGNOUT_REQUEST') {
        storage.removeItem('persist:root');
        storage.removeItem('token');
        state = undefined;
    }
    return appReducer(state, action);
};

