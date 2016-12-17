import React from "react";
import * as Redux from "react-redux";
import {Link, IndexLink} from "react-router";
import * as actions from "actions";


export let Navigation = React.createClass({
    onLogout(e) {
        // e.preventDefault();
        let {dispatch} = this.props;
        dispatch(actions.startLogout());
    },
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-title">
                    <span data-responsive-toggle="responsive-menu" data-hide-for="medium">
                    <button className="menu-icon dark show-for-small-only" type="button" data-toggle></button>
                    </span>
                </div>
                <div id="responsive-menu">
                    <div className='top-bar-left'>
                        <ul className="menu">
                            <li className="menu-text">Feed My Feeds</li>
                            <li>
                                <IndexLink to="/news" activeClassName="active-link">Home</IndexLink>
                            </li>
                            <li>
                                <Link to="/articles" activeClassName="active-link">My Articles</Link>
                            </li>
                            <li>
                                <a href="#" onClick={this.onLogout}>Logout</a>
                            </li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <ul className="menu">
                            <li className="menu-text">
                                Created by <a href="https://github.com/lukacs-m" target="_blank">Martin Lukacs</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});

export default Redux.connect()(Navigation);