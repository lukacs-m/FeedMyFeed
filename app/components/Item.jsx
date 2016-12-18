import React from "react";
import { connect } from "react-redux";
import * as actions from "actions";

export let Item = React.createClass({
    addArticle (article) {
        console.log("article", article);
        let {dispatch} = this.props;
        dispatch(actions.startAddArticle(article));
    },
    render() {
        let { newsItem } = this.props;
        return (
            <div>
                <div className="row">
                    <div className="small-12 medium-10 large-8 small-centered columns">
                        <h3>{ newsItem.webTitle }</h3>
                        <div className="text-justify item-standfirst"
                             dangerouslySetInnerHTML={{ __html: newsItem.fields.standfirst }}/>
                        <div className="item-img" dangerouslySetInnerHTML={{ __html: newsItem.fields.main }}/>
                        <div className="text-justify" dangerouslySetInnerHTML={{ __html: newsItem.fields.body }}/>
                    </div>
                </div>
                <button className="add-button button" onClick={() => this.addArticle(newsItem)}> Add to your articles
                </button>
            </div>
        );
    }
});

export default connect(
    (state, stateProps) => {
        return {
            newsItem: state.news[stateProps.params.id]
        };
    }
)(Item);

