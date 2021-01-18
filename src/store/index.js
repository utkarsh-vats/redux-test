import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import movieListReducer from "./reducers/movieListReducer";
import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
                    movies: movieListReducer,
                    users: userReducer    
                });

const middleware = [thunk];
const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const initialState = {
    users: [],
    movies: {name: "IRON MAN"}
}

const  store = createStore(reducer, initialState, compose(applyMiddleware(...middleware), devtools));
export default store;