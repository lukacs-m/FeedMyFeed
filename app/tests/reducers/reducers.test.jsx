import expect from 'expect';
import deepFreeze from 'deep-freeze-strict';
import * as reducers from 'reducers';

describe('Reducers', () => {
    describe('authentificationReducer', () => {
        it('should store uid on LOGIN', () => {
            const action = {
                type: 'LOGIN',
                uid: 'abc123'
            };
            const res = reducers.authentificationReducer(undefined, deepFreeze(action));

            expect(res).toEqual({
                uid: action.uid
            });
        });

        it('should wipe auth on LOGOUT', () => {
            const authData = {
                uid: 'testuid'
            };
            const action = {
                type: 'LOGOUT'
            };
            const res = reducers.authentificationReducer(deepFreeze(authData), deepFreeze(action));

            expect(res).toEqual({});
        });
    });

    describe('newsReducer', () => {
        it('should add lastest news', ()=> {
            const news = [{
                id: 'abc123',
                text: 'Something to do',
            }];

            const action = {
                type: 'ADD_LASTEST_NEWS',
                news
            };
            const res = reducers.newsReducer(deepFreeze([]), deepFreeze(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(news[0]);
        });

        it('should remove lastest news on Logout', () => {
            const news = [{
                id: '111',
                text: 'anything',
            }];

            const action = {
                type: 'LOGOUT'
            };

            const res = reducers.newsReducer(deepFreeze(news), deepFreeze(action));

            expect(res.length).toEqual(0);
        });
    });

    describe('articlesReducer', () => {
        it('should add an article item', ()=> {
            const action = {
                type: 'ADD_ARTICLE_ITEM',
                article: {
                    id: 'abc123',
                    text: 'Something to do',
                }
            };
            const res = reducers.articlesReducer(deepFreeze([]), deepFreeze(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(action.article);
        });

        it('should add articles', ()=> {
            const articles = [{
                id: 'abc123',
                text: 'Something to do',
            }];

            const action = {
                type: 'ADD_ARTICLES',
                articles
            };

            const res = reducers.articlesReducer(deepFreeze([]), deepFreeze(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(articles[0]);
        });

        it('should delete article item', () => {
            const articles = [{
                id: 111,
                text: 'anything',
            }, {
                id: 222,
                text: 'article2'
            }
            ];

            const action = {
                type: 'DELETE_ARTICLE_ITEM',
                id: 222
            };
            const res = reducers.articlesReducer(deepFreeze(articles), deepFreeze(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(articles[0])
        });


        it('should remove lastest news on Logout', () => {
            const news = [{
                id: '111',
                text: 'anything',
            }];

            const action = {
                type: 'LOGOUT'
            };

            const res = reducers.articlesReducer(deepFreeze(news), deepFreeze(action));

            expect(res.length).toEqual(0);
        });
    });
});
