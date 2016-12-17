let React = require('react');
let ReactDOM = require('react-dom');
let {Provider} = require('react-redux');
let {hashHistory} = require('react-router');

let actions = require('actions');
let store = require('configureStore').configure();
import firebase from "app/firebase";
import router from "app/router";

// Load foundation
$(document).foundation();
// $(document).ready(function() { $(document).foundation(); });

//App css
require('style!css!sass!applicationStyles');


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(actions.login(user.uid));
        store.dispatch(actions.getLatestNews());
        store.dispatch(actions.getArticles());
        hashHistory.push('/news');
    } else {
        console.log("on rentre dans logout");
        store.dispatch(actions.logout());
        hashHistory.push('/');
    }
});

ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>,
    document.getElementById('app')
);
