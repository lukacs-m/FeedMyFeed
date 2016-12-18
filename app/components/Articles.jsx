import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NewsItem } from 'NewsItem';

export class Articles extends Component {
    render () {
        let { articles } = this.props;

        let renderArticlesItems = () => {
            return articles.map((articlesItem) => {
                let displayArticle = articlesItem.articleContent;
                console.log("articels items", displayArticle);
                return (
                    <NewsItem  key={ articlesItem.id.toString()} { ...displayArticle } />
                );
            });
        };

        return (
            <div>
                <h1 className="page-title">Your saved articles</h1>
                {/*<div className="row small-up-1 medium-up-2 large-up-2">*/}
                    <div className="column small-centered small-12" >
                        { renderArticlesItems() }
                    </div>
                 {/*</div>*/}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return state
    }
)(Articles);
