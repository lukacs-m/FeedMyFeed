import React, { Component } from 'react';
import { connect } from 'react-redux';
import  ArticleItem  from 'ArticleItem';

/**
 * Component that take care of the rendering of the list of articles
 */
export class Articles extends Component {
    render () {
        let { articles } = this.props;

        let renderArticlesItems = () => {
            return articles.map((articlesItem) => {
                let { articleContent, id, position } = articlesItem;
                return (
                    <ArticleItem  key={ id.toString()} articleId={ id } position={ position } { ...articleContent } />
                );
            });
        };

        return (
            <div>
                <h1 className="page-title">Your Articles</h1>
                <div className="column small-centered small-12" >
                    { renderArticlesItems() }
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return state
    }
)(Articles);
