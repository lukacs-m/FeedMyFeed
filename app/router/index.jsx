import React from "react";
import { Route, Router, IndexRoute, browserHistory } from "react-router";
import Login from "Login";
import MainApp from "MainApp";
import Articles from "Articles";
import News from "News";
import Item from "Item";
import firebase from "app/firebase/";

/**
 * Function that checks if the user is logged in before displaying the page
 * @param nextState
 * @param replace
 * @param next
 */
let requireLogin = (nextState, replace, next) => {
    if (!firebase.auth().currentUser) {
        replace('/login');
    }
    next();
};

/**
 * Function that performs a redirection if user is logged in and tries to access the login page
 * @param nextState
 * @param replace
 * @param next
 */
let redirectIfLoggedIn = (nextState, replace, next) => {
    if (firebase.auth().currentUser) {
        replace('/');
    }
    next();
};

/**
 * Main router for the application
 */


export default (
    <Router history={ browserHistory }>
        <Route path="/" component={ MainApp }>
                <IndexRoute component={ News } onEnter={ requireLogin } />
            <Route path="item/:id" component={ Item } onEnter={ requireLogin }/>
            <Route path="articles" component={ Articles } onEnter={ requireLogin }/>
            <Route path="login" component={ Login } onEnter={ redirectIfLoggedIn }/>
        </Route>
    </Router>
);


