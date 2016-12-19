import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import nock from 'nock';
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

        afterEach(() => {
            nock.cleanAll()
        });

        it('should get lastest news', ()=> {
            const news =  [
                {
                    title: "news1"
                },
                {
                    title: "news20"
                }
            ];

            // fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${search}&api_key=abc123&format=json&limit=5`)
            // nock('http://ws.audioscrobbler.com')
            //     .get('/2.0/')
            //     .query({
            //         method: 'artist.search',
            //         artist: 'bob',
            //         api_key: 'somekey123',
            //         format: 'json',
            //         limit: '5'
            //     })
            //     .reply(200, {fake: true})

            // nock.recorder.rec({
            //     dont_print: false
            // });
            //
            // var nockCalls = nock.recorder.play();
            //
            // nock('https://content.guardianapis.com')
            //     .get("/search")
            //     .query({
            //         'show-fields':'all',
            //         type:'article',
            //         'api-key':'111707b7-de98-4bfe-a923-9dd8d04abab7'
            //     }).reply(200, { body: { news } });


            nock('https://content.guardianapis.com/search?show-fields=all&type=article&api-key=111707b7-de98-4bfe-a923-9dd8d04abab7')
                .get()
                .reply(200, { body: news  });

            const store = createMockStore({ news: [] });
            const action = actions.getLatestNews();

            return store.dispatch(action)
                .then(() => { // return of async actions
                    const mockActions = store.getActions();

                        expect(mockActions[0].type).toEqual(types.ADD_LASTEST_NEWS);
                        expect(mockActions[0].news.length).toEqual(2);
                        expect(mockActions[0].news[0].title).toEqual('news1');
                });

            // store.dispatch(action).then(() => {
            //     const mockActions = store.getActions();
            //
            //     expect(mockActions[0].type).toEqual(types.ADD_LASTEST_NEWS);
            //     expect(mockActions[0].news.length).toEqual(2);
            //     expect(mockActions[0].news[0].title).toEqual('news1');
            //
            //     done();
            // }, done);

        });

    });
});





//
// export const getLatestNews = () => {
//     return (dispatch, getState) => {
//         theGuardianAPI.getLastNews().then((res) => {
//             let newsArray = [];
//             let i = 0;
//
//             res.forEach((news) => {
//                 newsArray.push({
//                     newsId: i++,
//                     ...news
//                 })
//             });
//             dispatch(addLastestNews(newsArray));
//         }).catch((error) => {
//             console.log("could not get the lastest news" + error);
//         });
//     };
// };
//
// /// Actions linked to user saved articles management
//

// export const startAddArticle = (articleContent) => {
//     return (dispatch, getState) => {
//         let article = {
//             articleContent
//         };
//
//         console.log('woot', article);
//
//         let uid = getState().auth.uid;
//         let articleRef = firebaseRef.child(`users/${uid}/articles`).push(article);
//
//         return articleRef.then(() => {
//             dispatch(addArticleItem({
//                 ...article,
//                 id: articleRef.key
//             }));
//         });
//     };
// };
//

//
// export const getArticles = () => {
//     return (dispatch, getState) => {
//         let uid = getState().auth.uid;
//         let articlesRef = firebaseRef.child(`users/${uid}/articles`);
//
//         return articlesRef.once('value').then((snapshot) => {
//             let articles = snapshot.val() || {};
//             let articlesArray = [];
//
//             Object.keys(articles).forEach((articleId) => {
//                 articlesArray.push({
//                     id: articleId,
//                     ...articles[articleId]
//                 });
//             });
//             dispatch(addArticles(articlesArray));
//         });
//     };
// };