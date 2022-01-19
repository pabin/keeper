import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import I18n, { getText } from '../../assets/i18n';
import Message from '../../components/Message';

import { getObjectData } from '../../model/StorageUtils';
import NoteItem from './NoteItem';

const NoteListScreen = () => {
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

  if (notes.length) {
    return (
      <View style={styles.container}>
        {notes.map(note => (
          <NoteItem key={note.id} note={note} />
        ))}
      </View>
    );
  } else {
    return <Message type="info" message={getText('subMessage.sub')} />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default NoteListScreen;
