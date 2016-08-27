import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Login from 'Login';
import MainApp from 'MainApp';
import firebase from 'app/firebase/';

var requireLogin = (nextState, replace, next) => {
    if (!firebase.auth().currentUser) {
        replace('/');
    }
    next();
};

var redirectIfLoggedIn = (nextState, replace, next) => {
    if (firebase.auth().currentUser) {
        replace('/articles');
    }
    next();
};

export default (
    <Router history={hashHistory}>
        <Route path="/">
            <Route path="articles" component={MainApp} onEnter={requireLogin}/>
            <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
        </Route>
    </Router>
);