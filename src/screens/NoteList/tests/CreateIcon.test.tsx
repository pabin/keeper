import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react-native';

import CreateIcon from '../CreateIcon';

describe('CreateIcon', () => {
  afterEach(cleanup);

  const navigateMock = jest.fn();
  const navigation = {
    navigate: navigateMock,
  };

  test('renders correctly', () => {
    const { toJSON } = render(<CreateIcon navigation={navigation} />);
    expect(toJSON()).toMatchSnapshot();
  });

  test('navigates correctly', () => {
    const { getByTestId } = render(<CreateIcon navigation={navigation} />);

    const createNoteIcon = getByTestId('createNoteIcon');
    fireEvent.press(createNoteIcon);
    expect(navigateMock).toHaveBeenCalledWith('CreateNotes');
  });
});
