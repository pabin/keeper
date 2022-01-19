import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { getText } from '../../assets/i18n';
import Message from '../../components/Message';

import { getObjectData } from '../../model/StorageUtils';
import CreateIcon from './CreateIcon';
import NoteItem from './NoteItem';

const NoteListScreen = ({ navigation }) => {
  const [notes, setNotes] = useState([]);
  const getDatabase = async () => {
    const notesData = await getObjectData('notes');
    if (notesData) {
      setNotes(notesData);
    }
  };

  useEffect(() => {
    getDatabase();
  }, []);

  console.log('notes', notes);

  return (
    <View style={styles.container}>
      <CreateIcon navigation={navigation} />
      {notes.length ? (
        notes.map(note => (
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

export default NoteListScreen;
