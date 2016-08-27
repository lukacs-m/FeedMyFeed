import firebase from 'firebase';

try{
    var config = {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.FIREBASE_DATABASE_URL,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    };

    firebase.initializeApp(config);
} catch(e) {

}

export var githubProvider = new firebase.auth.GithubAuthProvider();
export var googleProvider = new firebase.auth.GoogleAuthProvider();
export var facebookProvider = new firebase.auth.FacebookAuthProvider();
export var firebaseRef = firebase.database().ref();
export default firebase;