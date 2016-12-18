import theGuardianAPI from "theGuardianApi";
import {firebaseRef, githubProvider, googleProvider, facebookProvider} from "app/firebase/";


/// Actions linked to Login Logout

/**
 *
 * @param account
 * @returns {function(*, *)}
 */

export const startLogin = (accountType) => {
    return (dispatch, getState) => {
        switch (accountType) {
            case 'github':
                return firebase.auth().signInWithPopup(githubProvider).then((result) => {
                    console.log(' github auth worked', result);
                }).catch((error) => {
                    console.log("Unable to auth with github", error);
                });
            case 'google':
                return firebase.auth().signInWithPopup(googleProvider).then((result) => {
                    console.log('google auth worked', result);
                }).catch((error) => {
                    console.log("Unable to auth google ", error);
                });
            case 'facebook':
                return firebase.auth().signInWithPopup(facebookProvider).then((result) => {
                    console.log('auth worked', result);
                }).catch((error) => {
                    console.log("Unable to auth", error);
                });
            default:
                return console.log("Unable to auth", error);
        }
    };
};

/**
 *
 * @param uid
 * @returns {{type: string, uid: *}}
 */

export const login = (uid) => {
    return {
        type: 'LOGIN',
        uid
    };
};


/**
 *
 * @returns {{type: string}}
 */
export const logout = () => {
    return {
        type: 'LOGOUT'
    };
};


export let startLogout = () => {
    return (dispatch, getState) => {
        return firebase.auth().signOut().then(() => {
            console.log('Logged out!');
        });
    };
};

///Actions linked to news items management

export let addLastestNews = (news) => {
    return {
        type: 'ADD_LASTEST_NEWS',
        news
    };
};

export let getLatestNews = () => {
    return (dispatch, getState) => {
        theGuardianAPI.getLastNews().then((res) => {
            let newsArray = [];
            let i = 0;

            res.forEach((news) => {
                newsArray.push({
                    newsId: i++,
                    ...news
                })
            });
            dispatch(addLastestNews(newsArray));
        }).catch((error) => {
            console.log("could not get the lastest news" + error);
        });
    };
};

/// Actions linked to user saved articles management

export let addArticleItem = (article) => {
    return {
        type: 'ADD_ARTICLE_ITEM',
        article
    };
};

export let startAddArticle = (articleContent) => {
    return (dispatch, getState) => {
        let article = {
            articleContent
        };

        console.log('woot', article);

        let uid = getState().auth.uid;
        let articleRef = firebaseRef.child(`users/${uid}/articles`).push(article);

        return articleRef.then(() => {
            dispatch(addArticleItem({
                ...article,
                id: articleRef.key
            }));
        });
    };
};

export let addArticles = (articles) => {
    return {
        type: 'ADD_ARTICLES',
        articles
    };
};

export let getArticles = () => {
    return (dispatch, getState) => {
        let uid = getState().auth.uid;
        let articlesRef = firebaseRef.child(`users/${uid}/articles`);

        return articlesRef.once('value').then((snapshot) => {
            let articles = snapshot.val() || {};
            let articlesArray = [];

            Object.keys(articles).forEach((articleId) => {
                articlesArray.push({
                    id: articleId,
                    ...articles[articleId]
                });
            });
            dispatch(addArticles(articlesArray));
        });
    };
};