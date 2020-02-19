import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMidlleware from 'redux-thunk'
import MainReducer from "./MainReducer";

let reducers = combineReducers({
    main: MainReducer

});



let store = createStore(reducers, applyMiddleware(thunkMidlleware));

window.store = store;

export default store;