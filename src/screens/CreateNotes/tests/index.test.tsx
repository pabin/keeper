import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react-native';

import { note } from '../../../fixtures/notes';
import { NoteContext } from '../../../../App';
import CreateNoteScreen from '..';

describe('CreateNoteScreen', () => {
  afterEach(cleanup);

  const navigateMock = jest.fn();
  const navigation = {
    navigate: navigateMock,
  };

  const onCreateOrUpdateNote = jest.fn();

  const renderComponent = note => {
    const route = {
      params: { note },
    };
    return render(
      <NoteContext.Provider value={{ onCreateOrUpdateNote }}>
        <CreateNoteScreen route={route} navigation={navigation} />
      </NoteContext.Provider>,
    );
  };

  test('renders correctly in edit mode', () => {
    const { toJSON } = renderComponent(note);

    expect(toJSON()).toMatchSnapshot();
  });

  test('renders correctly in create mode', () => {
    const { toJSON } = renderComponent(undefined);

    expect(toJSON()).toMatchSnapshot();
  });

  test('updates note correctly', () => {
    const newNoteTitle = 'Updated note title';

    const { getByTestId } = renderComponent(note);

    const noteTitle = getByTestId('noteTitle');
    const createNote = getByTestId('createNote');

    fireEvent.changeText(noteTitle, newNoteTitle);
    fireEvent.press(createNote);

    expect(onCreateOrUpdateNote).toHaveBeenCalledWith(
      note,
      newNoteTitle,
      note.body,
    );
    expect(navigateMock).toHaveBeenCalledWith('Notes');
  });

  // test('creates note correctly', () => {
  //   const newNoteTitle = 'New note title';

  //   const { getByTestId } = renderComponent(undefined);

  //   const noteTitle = getByTestId('noteTitle');
  //   const createNote = getByTestId('createNote');

  //   fireEvent.changeText(noteTitle, newNoteTitle);
  //   fireEvent.press(createNote);

  //   expect(onCreateOrUpdateNote).toHaveBeenCalledWith(note, newNoteTitle, '');
  //   expect(navigateMock).toHaveBeenCalledWith('Notes');
  // });
});
