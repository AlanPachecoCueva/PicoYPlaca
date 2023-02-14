

import React from 'react';
import { shallow } from 'enzyme';
import Predictor from '../Components/Predictor';

describe('Predictor', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Predictor />);
    expect(wrapper).toMatchSnapshot();
  });
});
