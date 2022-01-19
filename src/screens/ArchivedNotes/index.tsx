import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { getText } from '../../assets/i18n';
import Message from '../../components/Message';
import { getObjectData } from '../../model/StorageUtils';
import NoteItem from '../NoteList/NoteItem';

const ArchivedNotesScreen = ({ navigation }) => {
  const [archivedNotes, setArchivedNotes] = useState([]);

  const getDatabase = async () => {
    const notesData = await getObjectData('notes');
    if (notesData) {
      const archived = notesData.filter(note => note.isArchived);
      setArchivedNotes(archived);
    }
  };

  useEffect(() => {
    getDatabase();
  }, []);

  return (
    <View style={styles.container}>
      {archivedNotes.length ? (
        archivedNotes.map(note => (
          <NoteItem key={note.id} note={note} navigation={navigation} />
        ))
      ) : (
        <Message type="info" message={getText('subMessage.sub')} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ArchivedNotesScreen;
