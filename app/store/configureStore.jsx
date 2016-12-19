import * as redux from 'redux';
import thunk from 'redux-thunk';
import { authentificationReducer, newsReducer, articlesReducer } from 'reducers';

/**
 * Function that helps creating the redux store
 * @param initialState An object representing the initial state of the store
 * @returns {Store<S>}
 */
export const configure = (initialState = {}) => {
    let reducer = redux.combineReducers({
        news: newsReducer,
        auth: authentificationReducer,
        articles: articlesReducer
    });

    let store = redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};