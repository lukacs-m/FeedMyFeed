import React from 'react';
import { Provider } from 'react-redux';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import { configure } from 'configureStore';
import News from 'News';
import { NewsItem } from 'NewsItem'

describe('News', () => {
    it('should exist', () => {
        expect(News).toExist();
    });

    it('should render one NewsItem component for each news', () => {
        let news = [{
            id: 1,
            sectionId: "article",
            sectionName: "climat",
            webPublicationDate: "10-12-16",
            webTitle: "Fake article",
            webUrl: "http://fake.com",
            fields: {
                thumbnail: ""
            }
        }, {
            id: 2,
            sectionId: "article",
            sectionName: "climat",
            webPublicationDate: "10-12-16",
            webTitle: "Fake article",
            webUrl: "http://fake.com",
            fields: {
                thumbnail: ""
            }
        }];


        let store = configure({
            news
        });

        let provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <News />
            </Provider>
        );

        let newsList = TestUtils.scryRenderedComponentsWithType(provider, News)[0];
        let newsComponents = TestUtils.scryRenderedDOMComponentsWithClass(newsList, "news-item");

        expect(newsComponents.length).toBe(news.length);
    });

});