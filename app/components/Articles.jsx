import React, { Component } from 'react';
import { connect } from 'react-redux';
import  ArticleItem  from 'ArticleItem';

export class Articles extends Component {
    render () {
        let { articles } = this.props;

        let renderArticlesItems = () => {
            return articles.map((articlesItem) => {
                let displayArticle = articlesItem.articleContent;
                console.log("articels items", displayArticle);
                console.log("article id", articlesItem.id.toString());
                return (
                    <ArticleItem  key={ articlesItem.id.toString()} articleId={ articlesItem.id } { ...displayArticle } />
                );
            });
        };

        return (
            <div>
                <h1 className="page-title">Your saved articles</h1>
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
