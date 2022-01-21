import React, { useContext, useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { MarkdownView } from 'react-native-markdown-view';

import { NoteContext } from '../../../App';
import { getText } from '../../assets/i18n';

import { colors } from '../../styles/colors';
import { formatDate } from '../../utils/dateUtils';

const NoteDetail = ({ route }) => {
  const { note: noteData } = route.params;
  const [note, setNote] = useState();
  const { notes, onNoteStatusUpdate } = useContext(NoteContext);

  useEffect(() => {
    const myNote = notes.find(n => n.id === noteData.id);
    setNote(myNote);
  }, [notes, noteData]);

  if (!note) {
    return (
      <View>
        <Text>no data</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{note.title}</Text>
        <Text style={styles.postedDate}>{formatDate(note.createdAt)}</Text>
      </View>
      <ScrollView removeClippedSubviews style={styles.body}>
        <MarkdownView>{note.body}</MarkdownView>
      </ScrollView>
      <View style={styles.bottonContainer}>
        <Button
          onPress={() => onNoteStatusUpdate(note, 'favourite')}
          title={`${
            note.isFavourite
              ? getText('noteDetail.removeFavourite')
              : getText('noteDetail.markFavourite')
          }`}
          color={colors.lightBlue900}
          accessibilityLabel="Learn more"
        />
      </View>
      <View style={styles.bottonContainer}>
        <Button
          onPress={() => onNoteStatusUpdate(note, 'archive')}
          title={`${
            note.isArchived
              ? getText('noteDetail.removeArchived')
              : getText('noteDetail.markArchived')
          }`}
          color={colors.blueGrey500}
          accessibilityLabel="Learn more"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },

  titleContainer: {
    margin: 1,
    padding: 12,
    elevation: 5,
    borderRadius: 5,
    backgroundColor: colors.white,
    borderBottomColor: colors.blueGrey900,
  },

  title: {
    fontSize: 18,
  },

  postedDate: {
    fontSize: 10,
  },

  body: {
    padding: 12,
    elevation: 5,
    minHeight: 350,
    borderRadius: 5,
    marginVertical: 8,
    backgroundColor: colors.white,
    borderBottomColor: colors.blueGrey900,
  },

  bottonContainer: {
    paddingVertical: 12,
  },
});

export default NoteDetail;
