

import React from 'react';
import { shallow } from 'enzyme';
import Result from '../Components/Result';

describe('Result', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Result />);
    expect(wrapper).toMatchSnapshot();
  });
});
