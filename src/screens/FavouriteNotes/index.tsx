import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { getText } from '../../assets/i18n';
import Message from '../../components/Message';
import { getObjectData } from '../../model/StorageUtils';
import NoteItem from '../NoteList/NoteItem';

const FavouriteNotesScreen = ({ navigation }) => {
  const [favouriteNotes, setFavouriteNotes] = useState([]);

  const getDatabase = async () => {
    const notesData = await getObjectData('notes');
    if (notesData) {
      const favourites = notesData.filter(note => note.isFavourite);
      setFavouriteNotes(favourites);
    }
  };

  useEffect(() => {
    getDatabase();
  }, []);

  const renderItem = ({ item }) => (
    <NoteItem key={item.id} note={item} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      {favouriteNotes.length ? (
        <FlatList
          data={favouriteNotes}
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
  },
});

export default FavouriteNotesScreen;
