import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Articles extends Component {
    render () {
        let test = this.props;
        console.log("props in article", test);
        return (
            <div>
            coucou tu es sur feed
            </div>
        );
    }
}

export default connect(
    (state) => {
        return state
    }
)(Articles);
