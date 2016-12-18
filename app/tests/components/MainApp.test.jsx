import React from 'react';
import { Provider } from 'react-redux';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import { configure } from 'configureStore';
import { MainApp } from 'MainApp';
import News from 'News';

describe('MainApp', () => {
    it('should exist', () => {
        expect(MainApp).toExist();
    });

    it('should render News', () => {
        let authObject = {
            auth:{
                uid: 2
            }
        };

        let store = configure();
        let provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <MainApp { ...authObject }>
                    <News/>
                </MainApp>
            </Provider>
        );

        let mainApp = TestUtils.scryRenderedComponentsWithType(provider, MainApp)[0];
        let newsList = TestUtils.scryRenderedComponentsWithType(mainApp, News);

        expect(newsList.length).toEqual(1);
    });
});
