import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createNote, getNotes } from '../model/storageUtils';
import { getObjectData } from '../../model/StorageUtils';

const NoteListScreen = () => {
  const [notes, setNotes] = useState([]);
  const getDatabase = async () => {
    // await getNotes();
    const notesData = await getObjectData('notes');
    setNotes(notesData);
    // await createNote();
  };

  useEffect(() => {
    // getNotes();
    getDatabase();
    // const notesData = getObjectData('notes');
    // setNotes(notesData);
    // console.log('notesData', notesData);

  }, []);

  console.log('notes', notes);

  return (
    <View style={styles.container}>
      <Text>Hello, from note list screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NoteListScreen;
