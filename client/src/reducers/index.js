import {combineReducers} from 'redux';
import itemReducer from './itemreducer.js';

//here we combine all are reducers ... we can add auth reducer and many more

export default combineReducers({                           
    item: itemReducer
})