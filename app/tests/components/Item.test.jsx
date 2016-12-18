import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import * as actions from 'actions';
import { Item } from 'Item';

describe('Item', () => {
    it('should exist', () => {
        expect(Item).toExist();
    });

    it('should dispatch ADD_ARTICLE when add button click', () => {
        const newsItem = {
            webTitle: 'test',
            fields: {
                standfirst: 'little comment',
                main: 'article main',
                body: 'article body'
            }
        };

        const state = {
          newsItem
        };

        let action = actions.startAddArticle(newsItem);

        let spy = expect.createSpy();
        let addArticle = TestUtils.renderIntoDocument(<Item {...state} dispatch={spy}/>);
        let $el = $(ReactDOM.findDOMNode(addArticle));

        TestUtils.Simulate.click($el.find('button')[0]);
        expect(spy).toHaveBeenCalledWith(action);
    });
});
