import React from "react";
import { Route, Router, IndexRoute, hashHistory } from "react-router";
import Login from "Login";
import MainApp from "MainApp";
import Articles from "Articles";
import News from "News";
import Item from "Item";
import firebase from "app/firebase/";

let requireLogin = (nextState, replace, next) => {
    if (!firebase.auth().currentUser) {
        replace('/login');
    }
    next();
};

let redirectIfLoggedIn = (nextState, replace, next) => {
    if (firebase.auth().currentUser) {
        replace('/news');
    }
    next();
};

export default (
    <Router history={ hashHistory }>
        <Route path="/" component={ MainApp }>
            <Route path="news">
                <IndexRoute component={ News } onEnter={ requireLogin } />
            </Route>
            <Route path="item/:id" component={ Item } onEnter={ requireLogin }/>
            <Route path="articles" component={ Articles } onEnter={ requireLogin }/>
            <Route path="login" component={ Login } onEnter={ redirectIfLoggedIn }/>
        </Route>
    </Router>
);
