import React from "react";
import * as Redux from "react-redux";
import * as actions from "actions";
import imgFacebook from "resources/icons/facebook color.1.svg";
import imgGithub from "resources/icons/github color.1.svg";
import imgGoogle from "resources/icons/google color.1.svg";


export var Login = React.createClass({
    onLogin(accountType, dispatch) {
        dispatch(actions.startLogin(accountType));
    },
    render: function () {
        return (
            <div>
                <h1 className="page-title">Feed My feed</h1>
                <div className="row">
                    <div className="columns small-centered small-10 medium-7 large-6">
                        <div className="callout callout-login">
                            <h3>Login</h3>
                            <p>
                                Login with One of the Accounts below
                            </p>

                        </div>
                        <div className="row">
                            <div className="button-login">


                            <div className="columns small-12 medium-4 large-4 text-center">
                                <button onClick={() => this.onLogin('github', this.props.dispatch)}>
                                    <img src={imgGithub} alt="Submit"/>
                                </button>
                            </div>
                            <div className="columns small-12 medium-4 large-4 text-center">
                                <button onClick={() => this.onLogin('facebook', this.props.dispatch)}>
                                    <img src={imgFacebook} alt="Submit"/>
                                </button>
                            </div>
                            <div className="columns small-12 medium-4 large-4 text-center">
                                <button onClick={() => this.onLogin('google', this.props.dispatch)}>
                                    <img src={imgGoogle} alt="Submit"/>
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Redux.connect()(Login);