/**
 * Created by user on 12/05/2016.
 */

'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();


var PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
    if (req.headers['x-forwarded-proto'] === "https") {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});

app.use(_express2.default.static('public'));

app.listen(PORT, function () {
    console.log('Express server is up and running on port ' + PORT);
});