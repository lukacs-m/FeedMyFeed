import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from 'actions';

export class ArticleItem extends Component {
    removeArticle () {
         let { dispatch, articleId } = this.props;
        dispatch(actions.startDeleteArticle(articleId));
    }

    render () {
        let { sectionName, webTitle, fields, position } = this.props;
        return (
            <div className="row article-item">
                <div className="large-12 columns text-center">
                    <h5>
                        <Link to={{ pathname: `/news/${ position }`, state: { fields: fields } }}> { webTitle } </Link>
                    </h5>
                </div>
                <div className="large-6 columns">
                    <p>
                        <img src={ fields.thumbnail } alt=""/>
                    </p>
                </div>
                <div className="large-6 columns">
                    <p className="sub-infos">
                        <span><i> { fields.byline } &nbsp;</i></span>
                        <span><i> { sectionName }</i></span>
                    </p>
                    <p className="text-justify"  dangerouslySetInnerHTML={{ __html: fields.trailText}}/>
                    <p>
                        <Link className="main-button" to={{ pathname: `/news/${ position }`, query: {article: "true" }, state: { fields: fields } }}> Read more </Link>
                        <button className="main-button" onClick={ this.removeArticle.bind(this)}> Remove this article from your list</button>
                    </p>

                </div>
            </div>
        );
    }
}

export default connect()(ArticleItem);