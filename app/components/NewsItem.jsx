import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export let NewsItem = React.createClass({
    render: function () {

        let {id, sectionId,sectionName,webPublicationDate,webTitle,webUrl, dispatch,fields, newsId} = this.props;

        let renderDate = () => {
            let date = webPublicationDate.split("T");
            return date[0];
        };
        return (
            <div className="row">
                <div className="large-12 columns">
                    <h5>
                        <Link to={{ pathname: `/news/${newsId}`, state: { fields: fields } }}> { webTitle }</Link></h5>
                </div>
                <div className="large-6 columns">
                    <p>
                        <img src={ fields.thumbnail } alt=""/>
                    </p>
                </div>
                <div className="large-6 columns">
                    <p>
                        <span><i > {fields.byline} &nbsp;</i></span>
                        <span><i > { renderDate() } &nbsp;</i></span>
                        <span><i > { sectionName }</i></span>
                    </p>
                    <p className="text-justify">{ fields.trailText }</p>
                    <p>
                        <Link to={{ pathname: `/news/${newsId}`, state: { fields: fields } }}> Read more </Link>
                    </p>
                </div>
            </div>
        );
    }
});

export default connect()(NewsItem);