import { combineReducers } from 'redux';
import CustomerReducer from './CustomerReducer';

let appReducer = combineReducers({
    customer:CustomerReducer,
});

const rootReducer = (state, action) => {
    
    return appReducer(state, action);
};

export default rootReducer;
