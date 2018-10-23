import React from 'react';
import axios from 'axios';
import sinon from 'sinon';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Footage from './Footage';

configure({ adapter: new Adapter() });

describe('Footage', () => {
    const result = {
        data: {
            next: "url",
            results: [
                { id: '1', url: 'https://blog.com/hello', title: 'hello', },
                { id: '2', url: 'https://blog.com/there', title: 'there', },
            ],
        }

    };
    const promise = Promise.resolve(result);
    beforeAll(() => {
        sinon
            .stub(axios, 'get')
            .withArgs('https://bboyrankingz.com/media/search/bruce%20wayne.json')
            .returns(promise);
    });

    afterAll(() => {
        axios.get.restore();
    });

    it('renders data when it fetched data successfully', (done) => {
        const wrapper = mount(<Footage />);

        promise.then(() => {
            wrapper.instance().loadItems();

            //expect(wrapper.find('h6')).toHaveLength(2);

            done();
        });
    });

    it('stores data in local state', (done) => {
        const wrapper = mount(<Footage />);

        expect(wrapper.state().results).toEqual([]);

        promise.then(() => {

            wrapper.instance().loadItems();
            expect(wrapper.state().hasMoreItems).toEqual(true);
            //expect(wrapper.state().next).toEqual(result.data.next);

            done();
        });

    });
});