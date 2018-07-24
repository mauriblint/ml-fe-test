import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

// Reducers
import {reducer as homepageReducer} from './containers/homepage';
import {reducer as searchReducer} from './containers/search';
import {reducer as productReducer} from './containers/product';


const reducer = combineReducers( {
    data: homepageReducer,
    search: searchReducer,
    product: productReducer,
} );

export default ( initialState ) =>
    createStore( reducer, initialState, applyMiddleware( thunkMiddleware ) );
