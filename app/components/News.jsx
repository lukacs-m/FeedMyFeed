import React, { Component } from "react";
import { connect } from "react-redux";
import { NewsItem } from "NewsItem";

export class News extends Component {
    render () {
        let { news } = this.props;

        let renderNewsItems = () => {

            return news.map((newsItem) => {
                return (
                    <div className="column" key={ newsItem.id.toString() } data-equalizer-watch>
                        <NewsItem { ...newsItem } />
                    </div>
                );
            });
        };

        return (
            <div>
                <h1 className="page-title">The Guardian Lastest news</h1>
                <div className="row small-up-1 medium-up-2 large-up-2 news " data-equalizer data-equalize-by-row="true">
                    { renderNewsItems() }
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return (state);
    }
)(News);