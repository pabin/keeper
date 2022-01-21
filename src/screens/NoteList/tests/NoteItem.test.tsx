import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react-native';

import NoteItem from '../NoteItem';
import { note } from '../../../fixtures/note';

describe('NoteItem', () => {
  afterEach(cleanup);

  const navigateMock = jest.fn();
  const navigation = {
    navigate: navigateMock,
  };

  test('renders correctly', () => {
    const { toJSON } = render(<NoteItem note={note} navigation={navigation} />);
    expect(toJSON()).toMatchSnapshot();
  });

  test('navigates correctly', () => {
    const { getByTestId } = render(
      <NoteItem note={note} navigation={navigation} />,
    );

    const detailNavigator = getByTestId('detailNavigator');
    fireEvent.press(detailNavigator);
    expect(navigateMock).toHaveBeenCalledWith('NoteDetail', { note });

    const createNoteNavigator = getByTestId('createNoteNavigator');
    fireEvent.press(createNoteNavigator);
    expect(navigateMock).toHaveBeenCalledWith('CreateNotes', { note });
  });
});
