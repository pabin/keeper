import React from 'react';
import { cleanup, render } from '@testing-library/react-native';

import FavouriteNotesScreen from '..';
import { favouriteNotes } from '../../../fixtures/notes';
import { NoteContext } from '../../../../App';
import { Note } from '../../../types/note';

describe('FavouriteNotesScreen', () => {
  afterEach(cleanup);
  const navigateMock = jest.fn();

  const navigation = {
    navigate: navigateMock,
  };
  const renderComponent = (notes: Note[], loading: boolean) => {
    return render(
      <NoteContext.Provider value={{ favouriteNotes: notes, loading }}>
        <FavouriteNotesScreen navigation={navigation} />
      </NoteContext.Provider>,
    );
  };

  test('renders correctly when favourite notes are loading', () => {
    const { toJSON } = renderComponent([], true);

    expect(toJSON()).toMatchSnapshot();
  });

  test('renders correctly when favourite notes are loaded', () => {
    const { toJSON } = renderComponent(favouriteNotes, false);

    expect(toJSON()).toMatchSnapshot();
  });

  test('renders correctly when no favourite notes are present', () => {
    const { toJSON } = renderComponent([], false);

    expect(toJSON()).toMatchSnapshot();
  });
});
