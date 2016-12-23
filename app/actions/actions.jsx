import theGuardianAPI from "theGuardianApi";
import firebase, { firebaseRef, githubProvider, googleProvider, facebookProvider } from "app/firebase/";
import * as types from 'actionTypes';



/// Actions linked to Login Logout

/**
 * Action enabling the user to login
 * @param accountType
 * @returns {function(*, *)}
 */
export const startLogin = (accountType) => {
    return (dispatch, getState) => {
        switch (accountType) {
            case 'github':
                return firebase.auth().signInWithPopup(githubProvider).then((result) => {
                    console.log(' github auth worked', "you're connected");
                }).catch((error) => {
                    console.log("Unable to auth with github", error);
                });
            case 'google':
                return firebase.auth().signInWithPopup(googleProvider).then((result) => {
                    console.log('google auth worked', "you're connected");
                }).catch((error) => {
                    console.log("Unable to auth google ", error);
                });
            case 'facebook':
                return firebase.auth().signInWithPopup(facebookProvider).then((result) => {
                    console.log('auth worked', "you're connected");
                }).catch((error) => {
                    console.log("Unable to auth", error);
                });
            default:
                return console.log("Unable to auth", error);
        }
    };
};

/**
 * Action
 * @param uid the uid of the user account
 * @returns {{type: string, uid: *}}
 */
export const login = (uid) => {
    return {
        type: types.LOGIN,
        uid
    };
};


/**
 * Action dispatch when user logs out
 * @returns {{type: string}}
 */
export const logout = () => {
    return {
        type: types.LOGOUT
    };
};

/**
 * action that logout the user from his firebase account
 * @returns {function(*, *)}
 */
export let startLogout = () => {
    return (dispatch, getState) => {
        return firebase.auth().signOut().then(() => {
            console.log('Logged out!');
        });
    };
};

///Actions linked to news items management

/**
 * Action dispatch to fill up the store with the latest news
 * @param news An array containing the lastest news gather from the guardian api
 * @returns {{type: string, news: *}}
 */
export let addLastestNews = (news) => {
    return {
        type: types.ADD_LASTEST_NEWS,
        news
    };
};

/**
 * Action that goes and fetches that last news articles from the guardian api
 * @returns {function(*, *)}
 */
export let getLatestNews = () => {
    return (dispatch, getState) => {
       return theGuardianAPI.getLastNews().then((res) => {
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

/**
 * Action dispatch when a user wants to save a article to his firebase account
 * @param article An object containing the acticle informations
 * @returns {{type: *, article: *}}
 */
export let addArticleItem = (article) => {
    return {
        type: types.ADD_ARTICLE_ITEM,
        article
    };
};

/**
 * Action that saves the current article information to a firebase database
 * @param articleContent An object with the article's content
 * @returns {function(*, *)}
 */
export let startAddArticle = (articleContent) => {
    return (dispatch, getState) => {
        let article = {
            articleContent
        };
        let uid = getState().auth.uid;
        const nbOfArticles = getState().articles.length;
        let articleRef = firebaseRef.child(`users/${uid}/articles`).push(article);

        return articleRef.then(() => {
            dispatch(addArticleItem({
                ...article,
                id: articleRef.key,
                position: nbOfArticles
            }));
        });
    };
};

/**
 * Action dispatched to fill up the store with the user's saved articles
 * @param articles the articles to add into the store
 * @returns {{type: *, articles: *}}
 */
export let addArticles = (articles) => {
    return {
        type: types.ADD_ARTICLES,
        articles
    };
};


/**
 * Action that goes and fetches the user's saved articles on his firebase account
 * @returns {function(*, *)}
 */
export let getArticles = () => {
    return (dispatch, getState) => {
        let uid = getState().auth.uid;
        let articlesRef = firebaseRef.child(`users/${uid}/articles`);

        return articlesRef.once('value').then((snapshot) => {
            let articles = snapshot.val() || {};
            let articlesArray = [];
            let i = 0;

            Object.keys(articles).forEach((articleId) => {
                articlesArray.push({
                    id: articleId,
                    position: i,
                    ...articles[articleId],
                    articleContent:{
                        ...articles[articleId].articleContent,
                        newsId: i++
                    }
                });
            });
            dispatch(addArticles(articlesArray));
        });
    };
};

/**
 * Action that removes and articles from the user's fireabse account
 * @param id the id of the article to remove
 * @returns {function(*, *)}
 */
export let startDeleteArticle = (id) => {
    return (dispatch, getState) => {
        let uid = getState().auth.uid;
        let articleRef = firebaseRef.child(`users/${uid}/articles/${id}`);

        return articleRef.remove().then(() => {
            dispatch(removeArticle(id));
        });
    };
};

/**
 * Action that enables the removal of a user articles from store
 * @param id the id of the article to remove from database
 * @returns {{type: *, id: *}}
 */
export let removeArticle = (id) => {
    return {
        type: types.REMOVE_ARTICLE_ITEM,
        id
    };
};