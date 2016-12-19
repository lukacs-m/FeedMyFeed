import React, { Component } from 'react';
import { Link } from 'react-router';

const NewsItem = (props) => {

    let { sectionName, webPublicationDate, webTitle, fields, newsId } = props;

    let renderDate = () => {
        let date = webPublicationDate.split("T");
        return date[0];
    };
    return (
        <div className="row news-item" data-equalizer-watch>
            <div className="large-12 columns">
                <h5>
                    <Link to={{ pathname: `/item/${newsId}`, state: { fields: fields } }}> { webTitle } </Link>
                </h5>
            </div>
            <div className="large-6 columns">
                <p>
                    <img src={ fields.thumbnail } alt=""/>
                </p>
            </div>
            <div className="large-6 columns">
                <p className="sub-infos">
                    <span><i> {fields.byline} &nbsp;</i></span>
                    <span><i> { renderDate() } &nbsp;</i></span>
                    <span><i> { sectionName }</i></span>
                </p>
                <p className="text-justify"  dangerouslySetInnerHTML={{ __html: fields.trailText}}/>
                <p className="read-more-button  ">
                    <Link to={{ pathname: `/item/${newsId}`, state: { fields: fields } }}> Read more </Link>
                </p>
            </div>
        </div>
    );
};

export { NewsItem };
