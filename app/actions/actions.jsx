import {firebaseRef, githubProvider, googleProvider, facebookProvider} from "app/firebase/";

/**
 *
 * @param account
 * @returns {function(*, *)}
 */

export var startLogin = (accountType) => {

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

export var login = (uid) => {
    return {
        type: 'LOGIN',
        uid
    };
};