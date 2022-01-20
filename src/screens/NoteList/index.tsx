import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { getText } from '../../assets/i18n';
import { getObjectData } from '../../model/StorageUtils';

import Message from '../../components/Message';
import CreateIcon from './CreateIcon';
import NoteItem from './NoteItem';
import { colors } from '../../styles/colors';

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

  const renderItem = ({ item }) => (
    <NoteItem key={item.id} note={item} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <CreateIcon navigation={navigation} />
      {notes.length ? (
        <FlatList
          data={notes}
          scrollEnabled={true}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      ) : (
        <Message type="info" message={getText('subMessage.sub')} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default NoteListScreen;
