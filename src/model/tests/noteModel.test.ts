import AsyncStorage from '@react-native-async-storage/async-storage';

import { note, notes } from '../../fixtures/notes';
import { createOrUpdateNoteDetails, updateNoteStatus } from '../noteModel';
import { showToast } from '../../utils/toastUtils';

jest.mock('../../utils/toastUtils');

describe('updateModel', () => {
  describe('updateNoteStatus', () => {
    beforeEach(() => {
      AsyncStorage.clear();
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    test('when action is favourite', async () => {
      const jsonValue = JSON.stringify(notes);
      await AsyncStorage.setItem('notes', jsonValue);

      await updateNoteStatus(note, 'favourite');

      expect(AsyncStorage.getItem).toHaveBeenCalledWith('notes');
      expect(AsyncStorage.setItem).toHaveBeenCalledWith('notes', jsonValue);
      expect(showToast).toHaveBeenCalled();
    });

    test('when action is archive', async () => {
      const jsonValue = JSON.stringify(notes);
      await AsyncStorage.setItem('notes', jsonValue);

      await updateNoteStatus(note, 'archive');

      expect(AsyncStorage.getItem).toHaveBeenCalledWith('notes');
      expect(AsyncStorage.setItem).toHaveBeenCalledWith('notes', jsonValue);
      expect(showToast).toHaveBeenCalled();
    });

    test('when notes data is empty', async () => {
      await updateNoteStatus(note, 'favourite');

      expect(AsyncStorage.getItem).toHaveBeenCalledWith('notes');
      expect(AsyncStorage.setItem).not.toHaveBeenCalled();
    });
  });

  describe('createOrUpdateNoteDetails', () => {
    beforeEach(() => {
      AsyncStorage.clear();
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    test('when note is passed, update mode', async () => {
      const noteTitle = 'My note title';
      const noteBody = '**this is note body**\n`this is new line in body`';
      const noteData = notes.find(n => n.id === note.id);
      noteData.title = noteTitle;
      noteData.body = noteBody;

      const filteredNotes = notes.filter(n => n.id !== note.id);
      filteredNotes.push(noteData);

      const jsonValue = JSON.stringify(filteredNotes);
      await AsyncStorage.setItem('notes', jsonValue);

      await createOrUpdateNoteDetails(note, noteTitle, noteBody);

      expect(AsyncStorage.getItem).toHaveBeenCalledWith('notes');
      expect(AsyncStorage.setItem).toHaveBeenCalledWith('notes', jsonValue);
      expect(showToast).toHaveBeenCalled();
    });

    test('when note is not passed, create mode', async () => {
      const noteTitle = 'My note title';
      const noteBody = '**this is note body**\n`this is new line in body`';

      const newNote = {
        title: noteTitle,
        body: noteBody,
        id: 103,
        isFavourite: false,
        isArchived: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      notes.push(newNote);

      const jsonValue = JSON.stringify(notes);
      await AsyncStorage.setItem('notes', jsonValue);

      await createOrUpdateNoteDetails(undefined, noteTitle, noteBody);

      expect(AsyncStorage.getItem).toHaveBeenCalledWith('notes');
      expect(AsyncStorage.setItem).toHaveBeenCalledWith('notes', jsonValue);
      expect(showToast).toHaveBeenCalled();
    });

    test('when notes data is empty', async () => {
      await createOrUpdateNoteDetails(note, 'random title', 'random body');

      expect(AsyncStorage.getItem).toHaveBeenCalledWith('notes');
      expect(AsyncStorage.setItem).toHaveBeenCalled();
    });

    test('when notes is a first entry', async () => {
      await createOrUpdateNoteDetails(undefined, 'random title', 'random body');

      expect(AsyncStorage.getItem).toHaveBeenCalledWith('notes');
      expect(AsyncStorage.setItem).toHaveBeenCalled();
    });

    test('when notes data is present and previous ids are less than 1', async () => {
      const newNote = notes[0];
      const updatedNote = { ...newNote, id: -12 };
      const jsonValue = JSON.stringify([updatedNote]);
      await AsyncStorage.setItem('notes', jsonValue);

      await createOrUpdateNoteDetails(undefined, 'random title', 'random body');

      expect(AsyncStorage.getItem).toHaveBeenCalledWith('notes');
      expect(AsyncStorage.setItem).toHaveBeenCalled();
    });
  });
});
