import React from 'react';
import { cleanup, render } from '@testing-library/react-native';

import ArchivedNotesScreen from '..';
import { archivedNotes } from '../../../fixtures/notes';
import { NoteContext } from '../../../../App';
import { Note } from '../../../types/note';

describe('ArchivedNotesScreen', () => {
  afterEach(cleanup);
  const navigateMock = jest.fn();

  const navigation = {
    navigate: navigateMock,
  };
  const renderComponent = (notes: Note[], loading: boolean) => {
    return render(
      <NoteContext.Provider value={{ archivedNotes: notes, loading }}>
        <ArchivedNotesScreen navigation={navigation} />
      </NoteContext.Provider>,
    );
  };

  test('renders correctly when archived notes are loading', () => {
    const { toJSON } = renderComponent([], true);

    expect(toJSON()).toMatchSnapshot();
  });

  test('renders correctly when archived notes are loaded', () => {
    const { toJSON } = renderComponent(archivedNotes, false);

    expect(toJSON()).toMatchSnapshot();
  });

  test('renders correctly when no archived notes are present', () => {
    const { toJSON } = renderComponent([], false);

    expect(toJSON()).toMatchSnapshot();
  });
});
