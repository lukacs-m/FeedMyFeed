import React from 'react';
import * as Redux from 'react-redux';

export let Articles = React.createClass({

    render() {
        let test = this.props;
        console.log("props in article", test);
        return (
            <div>
            coucou tu es sur feed
            </div>
        );
    }
});

export default Redux.connect(
    (state) => {
        return state
    }
)(Articles);
