import React, { useState, useEffect } from 'react';
import Toast from 'react-native-toast-message';

import { getObjectData } from './src/model/storageUtils';
import { createOrUpdateNoteDetails, updateNoteStatus } from './src/model/updateModel';
import StackNavigator from './src/navigation/StackNavigation';

export const NoteContext = React.createContext([]);

const App = () => {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  const [favouriteNotes, setFavouriteNotes] = useState([]);
  const [archivedNotes, setArchivedNotes] = useState([]);

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
        }}
      >
        <StackNavigator />
        <Toast />
      </NoteContext.Provider>
    </>
  );
};

export default App;
