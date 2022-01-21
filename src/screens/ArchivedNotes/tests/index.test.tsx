import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react-native';

import ArchivedNotesScreen from '../index';
import { note } from '../../../fixtures/note';

describe('ArchivedNotesScreen', () => {
  afterEach(cleanup);

  const navigateMock = jest.fn();
  const navigation = {
    navigate: navigateMock,
  };

  test('renders correctly', () => {
    const { toJSON } = render(<ArchivedNotesScreen navigation={navigation} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
