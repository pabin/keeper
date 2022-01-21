import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react-native';

import NoteDetail from '..';
import {
  note,
  favouriteNote,
  favouriteNotes,
  archivedNote,
  archivedNotes,
  notes,
} from '../../../fixtures/notes';
import { NoteContext } from '../../../../App';

describe('NoteDetail', () => {
  afterEach(cleanup);
  const onNoteStatusUpdate = jest.fn();

  const renderComponent = (noteData, notes)=> {
    const route = {
      params: { note: noteData },
    };
    return render(
      <NoteContext.Provider value={{ notes, onNoteStatusUpdate }}>
        <NoteDetail route={route} />
      </NoteContext.Provider>,
    );
  };

  test('renders correctly', () => {
    const { toJSON } = renderComponent(note, notes);

    expect(toJSON()).toMatchSnapshot();
  });

  describe('marks favourite correctly', () => {
    test('when note is already favourite', () => {
      const { getByTestId } = renderComponent(favouriteNote, favouriteNotes);

      const markFavourite = getByTestId('markFavourite');
      fireEvent.press(markFavourite);
      expect(onNoteStatusUpdate).toHaveBeenCalledWith(
        favouriteNote,
        'favourite',
      );
    });

    test('when note is not favourite', () => {
      const notFavouriteNote = { ...favouriteNote, isFavourite: false };
      const { getByTestId } = renderComponent(notFavouriteNote, notes);

      const markFavourite = getByTestId('markFavourite');
      fireEvent.press(markFavourite);
      expect(onNoteStatusUpdate).toHaveBeenCalledWith(
        notFavouriteNote,
        'favourite',
      );
    });
  });

  describe('marks archived correctly', () => {
    test('when note is already archived', () => {
      const { getByTestId } = renderComponent(archivedNote, archivedNotes);

      const markArchived = getByTestId('markArchived');
      fireEvent.press(markArchived);
      expect(onNoteStatusUpdate).toHaveBeenCalledWith(archivedNote, 'archive');
    });

    test('when note is not archived', () => {
      const notArchivedNote = { ...archivedNote, isArchived: false };
      const { getByTestId } = renderComponent(notArchivedNote, notes);

      const markArchived = getByTestId('markArchived');
      fireEvent.press(markArchived);
      expect(onNoteStatusUpdate).toHaveBeenCalledWith(
        notArchivedNote,
        'archive',
      );
    });
  });
});
