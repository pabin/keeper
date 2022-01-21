import React, { useContext, useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

import NoteItem from '../NoteList/NoteItem';
import Message from '../../components/Message';
import Spinner from '../../components/Spinner';

import { getText } from '../../assets/i18n';
import { Note } from '../../types/note';
import { renderItemProps } from '../NoteList';
import { NoteContext } from '../../../App';

type FavouriteNotesScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};

const FavouriteNotesScreen = ({ navigation }: FavouriteNotesScreenProps) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { favouriteNotes, loading: laodingStatus } = useContext(NoteContext);

  useEffect(() => {
    setNotes(favouriteNotes);
    setLoading(laodingStatus);
  }, [favouriteNotes, laodingStatus]);

  const renderItem = ({ item }: renderItemProps) => (
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
