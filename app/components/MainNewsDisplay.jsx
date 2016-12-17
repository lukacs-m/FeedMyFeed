import React from "react";
import * as Redux from "react-redux";

export let MainNewsDisplay = React.createClass({
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
});

export default Redux.connect(
    (state) => {
        return state;
    }
)(MainNewsDisplay);
