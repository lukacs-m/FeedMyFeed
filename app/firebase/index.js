import firebase from 'firebase';

try{
    let config = {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.FIREBASE_DATABASE_URL,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    };

    firebase.initializeApp(config);
} catch(e) {

}

export let githubProvider = new firebase.auth.GithubAuthProvider();
export let googleProvider = new firebase.auth.GoogleAuthProvider();
export let facebookProvider = new firebase.auth.FacebookAuthProvider();
export let firebaseRef = firebase.database().ref();
export default firebase;