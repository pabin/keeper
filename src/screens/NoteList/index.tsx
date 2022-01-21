import React, { useEffect, useState, useContext } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Message from '../../components/Message';
import CreateIcon from './CreateIcon';
import NoteItem from './NoteItem';
import Spinner from '../../components/Spinner';

import { colors } from '../../styles/colors';
import { NoteContext } from '../../../App';
import { getText } from '../../assets/i18n';

const NoteListScreen = ({ navigation }) => {
  const [allNotes, setNotes] = useState([]);
  const { notes, loading, theme } = useContext(NoteContext);

  useEffect(() => {
    setNotes(notes);
  }, [notes]);

  const renderItem = ({ item }) => (
    <NoteItem key={item.id} note={item} navigation={navigation} />
  );

  return (
    <View style={[styles.container]}>
      <CreateIcon navigation={navigation} />
      {allNotes.length ? (
        <FlatList
          data={notes}
          scrollEnabled={true}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      ) : !allNotes.length && loading ? (
        <Spinner />
      ) : (
        <Message message={getText('subMessage.noNotes')} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },

  loader: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default NoteListScreen;
