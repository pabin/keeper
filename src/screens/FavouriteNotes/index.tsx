import React, { useContext, useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { NoteContext } from '../../../App';

import { getText } from '../../assets/i18n';
import Message from '../../components/Message';
import Spinner from '../../components/Spinner';
import NoteItem from '../NoteList/NoteItem';

const FavouriteNotesScreen = ({ navigation }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const { favouriteNotes, loading: laodingStatus } = useContext(NoteContext);

  useEffect(() => {
    setNotes(favouriteNotes);
    setLoading(laodingStatus);
  }, [favouriteNotes, laodingStatus]);

  const renderItem = ({ item }) => (
    <NoteItem key={item.id} note={item} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      {notes.length ? (
        <FlatList
          data={notes}
          scrollEnabled={true}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      ) : !notes.length && loading ? (
        <Spinner />
      ) : (
        <Message message={getText('favouriteList.noNotes')} />
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
