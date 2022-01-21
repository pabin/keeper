import React, { useContext, useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

import Message from '../../components/Message';
import Spinner from '../../components/Spinner';
import NoteItem from '../noteList/NoteItem';

import { renderItemProps } from '../noteList';
import { NoteContext } from '../../../App';
import { getText } from '../../assets/i18n';
import { Note } from '../../types/note';

export type ArchivedNotesScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};

const ArchivedNotesScreen = ({ navigation }: ArchivedNotesScreenProps) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { archivedNotes, loading: loadingStatus } = useContext(NoteContext);

  useEffect(() => {
    setNotes(archivedNotes);
    setLoading(loadingStatus);
  }, [archivedNotes, loadingStatus]);

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
        <Message message={getText('archiveList.noNotes')} />
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
