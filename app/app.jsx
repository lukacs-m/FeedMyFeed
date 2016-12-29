import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import * as actions from 'actions';
let store = require('configureStore').configure();
import firebase from "app/firebase";
import router from "app/router";


// // Load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

/**
 * Function that listen to the status of the user's firebase authentification
 * It redirect depending on auth status
 */
firebase.auth().onAuthStateChanged((user) => {
    loadScreen();
    if (user) {
        store.dispatch(actions.login(user.uid));
        store.dispatch(actions.getLatestNews());
        store.dispatch(actions.getArticles());
        browserHistory.push('/');
    } else {
        browserHistory.push('/login');
        store.dispatch(actions.logout());
    }
});

function loadScreen() {
    ReactDOM.render(
        <Provider store={store}>
            { router }
        </Provider>,
        document.getElementById('app')
    );
}
