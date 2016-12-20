import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";


/**
 * Component responsible of the display of a news or articles item
 */
export class Item extends Component {
    addArticle () {
        let {dispatch, newsItem} = this.props;
        dispatch(actions.startAddArticle(newsItem));
    }

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    render () {
        let { newsItem } = this.props;

        let renderAddArticleButton = () => {
            if (!newsItem.article){
                return (
                    <button className="add-button main-button" onClick={ this.addArticle.bind(this) }> Add to your articles
                    </button>
                );
            }
        };

        return (
            <div>
                <div className="row item">
                    <div className="small-12 medium-10 large-10 small-centered columns">
                        <h3>{ newsItem.webTitle }</h3>
                        <div className="text-justify item-standfirst"
                             dangerouslySetInnerHTML={{ __html: newsItem.fields.standfirst }}/>
                        <div className="item-img" dangerouslySetInnerHTML={{ __html: newsItem.fields.main }}/>
                        <div className="text-justify" dangerouslySetInnerHTML={{ __html: newsItem.fields.body }}/>
                    </div>
                </div>
                { renderAddArticleButton() }
            </div>
        );
    }
}

const mapStateToProps = (state, stateProps) => {
    let { article } = stateProps.location.query;
    let newsItem = {};
    if (article === undefined){
        newsItem = { ...state.news[stateProps.params.id], article: false };
    } else {
        newsItem = { ...state.articles[stateProps.params.id].articleContent, article: true };
    }
    return {
        newsItem
    };
};

export default connect(mapStateToProps)(Item);

