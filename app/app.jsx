import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory } from 'react-router';
import * as actions from 'actions';
let store = require('configureStore').configure();
import firebase from "app/firebase";
import router from "app/router";

// Load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

firebase.auth().onAuthStateChanged((user) => {
    loadScreen();
    if (user) {
        store.dispatch(actions.login(user.uid));
        store.dispatch(actions.getLatestNews());
        store.dispatch(actions.getArticles());
        hashHistory.push('/news');
    } else {
        store.dispatch(actions.logout());
        hashHistory.push('/');
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
