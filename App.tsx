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

export const NoteContext = React.createContext([]);

const App = () => {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  const [favouriteNotes, setFavouriteNotes] = useState([]);
  const [archivedNotes, setArchivedNotes] = useState([]);

  // To Do: Theme switch
  const isDarkMode = useColorScheme() === 'dark';

  const getDatabase = async () => {
    const notesData = await getObjectData('notes');

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

  const onNoteStatusUpdate = async (note, action) => {
    await updateNoteStatus(note, action);
    await getDatabase();
  };

  const onCreateOrUpdateNote = async (note, title, body) => {
    await createOrUpdateNoteDetails(note, title, body);
    await getDatabase();
  };

  console.log('notes', JSON.stringify(notes));


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
