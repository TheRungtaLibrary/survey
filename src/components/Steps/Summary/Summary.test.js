import React from 'react';
import { shallow } from 'enzyme';    
import Calculator from './Calculator';

describe("Calculator Component", () => {
 
    it("should render calculator form without throwing an error", () => {
        expect(shallow(<Calculator />).find('form.calculator-widget').exists()).toBe(true)
    });
    // within the Login components describe function
    it('renders an amount input', () => {
        expect(shallow(<Calculator />).find('#amount').length).toEqual(1)
    });

    it('renders a duration input', () => {
        expect(shallow(<Calculator />).find('#duration').length).toEqual(1)
    });

    describe('Amount input field', () => {
  
        it('amount input should respond to change event', () => {
            
            const wrapper = shallow(<Calculator />);
            wrapper.find('#amount').simulate('change', {target: {value: '2000'}});
            expect(wrapper.find('#amount').props().value).toEqual('2000');
        })
    })
    
    describe('Test duration  input', () => {
    
        it('duration input should respond to change event', () => {
            
            const wrapper = shallow(<Calculator />);
            wrapper.find('#duration').simulate('change', {target: {value: '12'}});
            expect(wrapper.find('#duration').props().value).toEqual('12');
        })
    });

});
