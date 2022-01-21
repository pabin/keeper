import React, { useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import Toast from 'react-native-toast-message';

import { getObjectData } from './src/model/storageUtils';
import {
  createOrUpdateNoteDetails,
  updateNoteStatus,
} from './src/model/noteModel';
import StackNavigator from './src/navigation/StackNavigation';
import { themes } from './src/styles/colors';
import { Note } from './src/types/note';
import { NoteContextInterface } from './src/types/noteContext';

export const NoteContext = React.createContext<NoteContextInterface>([]);

const App = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const [notes, setNotes] = useState<Note[]>([]);
  const [favouriteNotes, setFavouriteNotes] = useState<Note[]>([]);
  const [archivedNotes, setArchivedNotes] = useState<Note[]>([]);

  // To Do: Theme switch
  const isDarkMode = useColorScheme() === 'dark';

  const getDatabase = async () => {
    const notesData: Note[] = await getObjectData('notes');

    if (notesData) {
      const favourites = notesData.filter(n => n.isFavourite);
      const archived = notesData.filter(n => n.isArchived);
      setNotes(notesData);
      setArchivedNotes(archived);
      setFavouriteNotes(favourites);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDatabase();
  }, []);

  const onNoteStatusUpdate = async (note: Note, action: string) => {
    await updateNoteStatus(note, action);
    await getDatabase();
  };

  const onCreateOrUpdateNote = async (
    note: Note,
    title: string,
    body: string,
  ) => {
    await createOrUpdateNoteDetails(note, title, body);
    await getDatabase();
  };

  return (
    <>
      <NoteContext.Provider
        value={{
          notes,
          loading,
          favouriteNotes,
          archivedNotes,
          onNoteStatusUpdate,
          onCreateOrUpdateNote,
          theme: isDarkMode ? themes.dark : themes.light,
        }}
      >
        <StackNavigator />
        <Toast />
      </NoteContext.Provider>
    </>
  );
};

export default App;
