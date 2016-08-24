var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();

// Load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');


ReactDOM.render(

        <p>ReduxBoilerPlate project</p>,

    document.getElementById('app')
);
