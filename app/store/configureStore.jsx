import * as redux from 'redux';
import thunk from 'redux-thunk';

import {authentificationReducer, newsReducer, articlesReducer} from 'reducers';

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