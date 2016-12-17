import React from "react";
import * as Redux from "react-redux";
import NewsItem from "NewsItem";

export let News = React.createClass({
    render() {
        let { news } = this.props;
        let renderNewsItems = () => {
            return news.map((newsItem) => {
                return (
                    <div className="column">
                        <NewsItem key={newsItem.id} {...newsItem} />
                    </div>
                );
            });
        };
        return (
            <div>
                <h1 className="page-title">The Guardian Lastest news</h1>
                <div className="row small-up-1 medium-up-2 large-up-2">
                    { renderNewsItems() }
                </div>
            </div>

        );
    }
});

export default Redux.connect(
    (state) => {
        return (state);
    }
)(News);