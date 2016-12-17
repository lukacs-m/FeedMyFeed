import React from "react";
import * as Redux from "react-redux";
import Navigation from "Navigation";

export let MainApp = React.createClass({
    render() {
        return (
            <div>
                { this.props.auth.uid ? <Navigation/> : null }
                <div className="row">
                    <div className="column small-centered small-12">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
});

export default Redux.connect(
    (state) => {
        return state;
    }
)(MainApp);
