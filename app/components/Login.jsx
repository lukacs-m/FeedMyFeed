import React from "react";
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var Login = React.createClass({
    onLogin(accountType, dispatch) {
        dispatch(actions.startLogin(accountType));
    },
    render: function () {
        return (
            <div>
                <h1 className="page-title">Feed My feed</h1>
                <div className="row">
                    <div className="columns small-centered small-10 medium-6 large-4">
                        <div className="callout callout-auth">
                            <h3>Login</h3>
                            <p>
                                Login with One of the Accounts below
                            </p>
                            <button className="button" onClick={() => this.onLogin('github', this.props.dispatch)}>Login with GitHub</button>
                            <button className="button" onClick={() => this.onLogin('facebook',this.props.dispatch)}>Login with Facebook</button>
                            <button className="button" onClick={() => this.onLogin('google',this.props.dispatch)}>Login with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Redux.connect()(Login);