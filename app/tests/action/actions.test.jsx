import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
// import firebase, {firebaseRef} from 'app/firebase/';
import * as actions from 'actions';

let createMockStore = configureMockStore([thunk]);

describe('Actions', () => {

    it('should generate login action object', () => {
        const action = {
            type: 'LOGIN',
            uid: '123abc'
        };

        const res = actions.login(action.uid);
        expect(res).toEqual(action);
    });

    it('should generate logout action object', () => {
        const action = {
            type: 'LOGOUT'
        };

        const res = actions.logout();
        expect(res).toEqual(action);
    });

    it('should generate a addLatestNews action object', () => {

        const action = {
            type: 'ADD_LASTEST_NEWS',
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
            type: 'ADD_ARTICLE_ITEM',
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
            type: 'ADD_ARTICLES',
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

});




// export const startLogin = (accountType) => {
//     return (dispatch, getState) => {
//         switch (accountType) {
//             case 'github':
//                 return firebase.auth().signInWithPopup(githubProvider).then((result) => {
//                     console.log(' github auth worked', result);
//                 }).catch((error) => {
//                     console.log("Unable to auth with github", error);
//                 });
//             case 'google':
//                 return firebase.auth().signInWithPopup(googleProvider).then((result) => {
//                     console.log('google auth worked', result);
//                 }).catch((error) => {
//                     console.log("Unable to auth google ", error);
//                 });
//             case 'facebook':
//                 return firebase.auth().signInWithPopup(facebookProvider).then((result) => {
//                     console.log('auth worked', result);
//                 }).catch((error) => {
//                     console.log("Unable to auth", error);
//                 });
//             default:
//                 return console.log("Unable to auth", error);
//         }
//     };
// };
//


//
// export const startLogout = () => {
//     return (dispatch, getState) => {
//         return firebase.auth().signOut().then(() => {
//             console.log('Logged out!');
//         });
//     };
// };
//

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