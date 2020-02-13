import React from 'react';
import { shallow } from 'enzyme';
import Controls from './Controls';
import store from '../../store';
import { Provider } from 'react-redux';

describe('Controls component', () => {
  let wrapper;
  beforeEach(() => {
    

    wrapper = shallow(<Provider store={store}> <Controls /> </Provider>).dive();
  });

  it('renders Controls', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
  
