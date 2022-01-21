import React from 'react';
import renderer from 'react-test-renderer';

import Message from '../Message';

test('Message renders correctly', () => {
  const tree = renderer.create(<Message message="This is message" />).toJSON();
  expect(tree).toMatchSnapshot();
});
