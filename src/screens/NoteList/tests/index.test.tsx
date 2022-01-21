import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import NoteListScreen from '../index';

describe('NoteListScreen', () => {
  it('renders correctly', () => {
    renderer.create(<NoteListScreen />);
  });
});
