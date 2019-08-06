import {applyMiddleware, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers/Index';
import {createLogger} from "redux-logger";
import thunk from 'redux-thunk';

const persistConfig = {
    timeout: null,
    key: 'root',
    storage,
};

const logger = createLogger({
    predicate: true,
    collapsed: true,
    duration:true,
    timestamp: true,
});

const middleware = applyMiddleware(thunk,logger);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer,middleware);
export const persistor = persistStore(store);