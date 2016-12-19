import {
    LOGIN,
    LOGOUT,
    ADD_LASTEST_NEWS,
    ADD_ARTICLE_ITEM,
    ADD_ARTICLES,
    REMOVE_ARTICLE_ITEM
} from 'actionTypes';

/**
 * Reducer in charge of the auth actions handling
 * @param state An object representing the auth state
 * @param action the action to parse
 * @returns {*}
 */
export let authentificationReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                uid: action.uid
            };
        case LOGOUT:
            return {};
        default:
            return state;
    }
};

/**
 * Reducer in charge of the news actions handling
 * @param state An Array representing the news
 * @param action the action to parse
 * @returns {*}
 */
export let newsReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_LASTEST_NEWS:
            return [
                ...state,
                ...action.news
            ];
        case LOGOUT:
            return [];
        default:
            return state;
    }
};

/**
 * Reducer in charge of the articles actions handling
 * @param state An Array representing the user articles state
 * @param action the action to parse
 * @returns {*}
 */
export let articlesReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_ARTICLE_ITEM:
            return [
                ...state,
                action.article
            ];
        case ADD_ARTICLES:
            return [
                ...state,
                ...action.articles
            ];
        case REMOVE_ARTICLE_ITEM:
            return state.filter((article) => {
                if (article.id !== action.id){
                    return article;
                }
            });
        case LOGOUT:
            return [];
        default:
            return state;
    }
};