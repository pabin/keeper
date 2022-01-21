import React from 'react';
import { cleanup, render } from '@testing-library/react-native';

import NoteListScreen from '../index';
import { notes } from '../../../fixtures/notes';
import { NoteContext } from '../../../../App';

describe('NoteListScreen', () => {
  afterEach(cleanup);
  const navigateMock = jest.fn();

  const navigation = {
    navigate: navigateMock,
  };
  const renderComponent = (notes, loading) => {
    return render(
      <NoteContext.Provider value={{ notes, loading }}>
        <NoteListScreen navigation={navigation} />
      </NoteContext.Provider>,
    );
  };

  test('renders correctly when notes are loading', () => {
    const { toJSON } = renderComponent([], true);

    expect(toJSON()).toMatchSnapshot();
  });

  test('renders correctly when notes are loaded', () => {
    const { toJSON } = renderComponent(notes, false);

    expect(toJSON()).toMatchSnapshot();
  });

  test('renders correctly when no notes are present', () => {
    const { toJSON } = renderComponent([], false);

    expect(toJSON()).toMatchSnapshot();
  });
});
