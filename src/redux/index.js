import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import authReducer from './reducers/authReducer';
import menuReducer from './reducers/menuReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    menus: menuReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;