import React from 'react';
import { shallow } from 'enzyme';
import StoreLocator from '../StoreLocator';

describe('StoreLocator', () => {
    let mountedStoreLocator;
    beforeEach(() => {
        mountedStoreLocator = shallow(<StoreLocator />)
    })

    it('renders without crashing', () => {
        let mountedStoreLocator = shallow(<StoreLocator />);
    });
    it('renders a header', () => {
        const header = mountedStoreLocator.find('Header');
        expect(header.length).toBe(1);
    });
    it('renders  two buttons', () => {
        const buttons = mountedStoreLocator.find('Button');
        expect(buttons.length).toBe(3);
    });
    it('render a map', () => {
        const map = mountedStoreLocator.find('Map');
        expect(map.length).toBe(1);
    });


})

