import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import * as actions from '../../actions/actions';
import * as types from '../../utils/actionTypes';

let createMockStore = configureMockStore([thunk]);

describe('Actions', () => {

    it('should generate login action object', () => {
        const action = {
            type: types.LOGIN,
            uid: '123abc'
        };

        const res = actions.login(action.uid);
        expect(res).toEqual(action);
    });

    it('should generate logout action object', () => {
        const action = {
            type: types.LOGOUT
        };

        const res = actions.logout();
        expect(res).toEqual(action);
    });

    it('should generate a addLatestNews action object', () => {

        const action = {
            type: types.ADD_LASTEST_NEWS,
            news: {
                id: 1,
                title: "test"
            }
        };

        let res = actions.addLastestNews(action.news);
        expect(res).toEqual(action)
    });

    it('should generate a addArticlesItem action object', () => {
        const action = {
            type: types.ADD_ARTICLE_ITEM,
            article: {
                id: 1,
                title: "article"
            }
        };

        const res = actions.addArticleItem(action.article);
        expect(res).toEqual(action)
    });

    it('should generate a addArticles action object', () => {
        const action = {
            type: types.ADD_ARTICLES,
            articles: [{
                id: 1,
                title: "article"
            },
                {
                    id: 2,
                    title: "article2"
                }
            ]
        };

        const res = actions.addArticles(action.articles);
        expect(res).toEqual(action)
    });

    describe('Async actions', () => {

        it('should get lastest news', ()=> {
            const news =  [
                {
                    title: "news1"
                },
                {
                    title: "news20"
                }
            ];

            const store = createMockStore({ news: [] });
            const action = actions.getLatestNews();

            return store.dispatch(action)
                .then(() => { // return of async actions
                    const mockActions = store.getActions();

                    expect(mockActions[0].type).toEqual(types.ADD_LASTEST_NEWS);
                    expect(mockActions[0].news.length).toEqual(2);
                    expect(mockActions[0].news[0].title).toEqual('news1');
                });
        });

    });
});
