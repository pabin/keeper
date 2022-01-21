import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react-native';

import NoteDetail from '../index';
import {
  note,
  favouriteNote,
  archivedNote,
  notes,
} from '../../../fixtures/notes';
import { NoteContext } from '../../../../App';

describe('NoteDetail', () => {
  afterEach(cleanup);
  const onNoteStatusUpdate = jest.fn();

  const renderComponent = note => {
    const route = {
      params: { note },
    };
    return render(
      <NoteContext.Provider value={{ notes, onNoteStatusUpdate }}>
        <NoteDetail route={route} />
      </NoteContext.Provider>,
    );
  };

  test('renders correctly', () => {
    const { toJSON } = renderComponent(note);

    expect(toJSON()).toMatchSnapshot();
  });

  describe('marks favourite correctly', () => {
    test('when note is already favourite', () => {
      const { getByTestId } = renderComponent(favouriteNote);

      const markFavourite = getByTestId('markFavourite');
      fireEvent.press(markFavourite);
      expect(onNoteStatusUpdate).toHaveBeenCalledWith(
        favouriteNote,
        'favourite',
      );
    });

    test('when note is not favourite', () => {
      const notFavouriteNote = { ...favouriteNote, isFavourite: false };
      const { getByTestId } = renderComponent(notFavouriteNote);

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
      const { getByTestId } = renderComponent(archivedNote);

      const markArchived = getByTestId('markArchived');
      fireEvent.press(markArchived);
      expect(onNoteStatusUpdate).toHaveBeenCalledWith(note, 'archive');
    });

    test('when note is not archived', () => {
      const notArchivedNote = { ...archivedNote, isArchived: false };
      const { getByTestId } = renderComponent(notArchivedNote);

      const markArchived = getByTestId('markArchived');
      fireEvent.press(markArchived);
      expect(onNoteStatusUpdate).toHaveBeenCalledWith(
        notArchivedNote,
        'archive',
      );
    });
  });
});
