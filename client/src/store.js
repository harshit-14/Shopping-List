import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const  initialstate = {};

const middleware = [thunk];

//in compose we will pass middleware
//   ... these three dots are known as spread operator

const store = createStore(rootReducer,initialstate,compose(
    applyMiddleware(...middleware),   
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                                                        
));

export default store;
       