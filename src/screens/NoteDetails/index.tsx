import React, { useContext, useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { MarkdownView } from 'react-native-markdown-view';
import { RouteProp } from '@react-navigation/native';

import { NoteContext } from '../../../App';
import { getText } from '../../assets/i18n';

import { colors } from '../../styles/colors';
import { formatDate } from '../../utils/dateUtils';
import { RootStackParamList } from '../../types/navigation';
import { Note } from '../../types/note';

type NoteDetailRouteProp = {
  route: RouteProp<RootStackParamList, 'NoteDetail'>;
};

const NoteDetail = ({ route }: NoteDetailRouteProp) => {
  const { note: noteData } = route.params;
  const [note, setNote] = useState<Note>();
  const { notes, onNoteStatusUpdate } = useContext(NoteContext);

  useEffect(() => {
    const myNote: Note = notes.find(n => n.id === noteData.id);
    setNote(myNote);
  }, [notes, noteData]);

  if (!note) {
    return (
      <View>
        <Text>no data</Text>
      </View>
    );
  }

  const markdownStyles = {
    text: {
      color: '#222',
    },
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{note.title}</Text>
        <Text style={styles.postedDate}>{formatDate(note.createdAt)}</Text>
      </View>
      <ScrollView removeClippedSubviews style={styles.body}>
        <MarkdownView style={markdownStyles}>{note.body}</MarkdownView>
      </ScrollView>
      <MarkdownView style={markdownStyles}>{note.body}</MarkdownView>
      <View style={styles.bottonContainer}>
        <Button
          testID="markFavourite"
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
          testID="markArchived"
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
    color: colors.darker,
  },

  postedDate: {
    fontSize: 10,
    color: colors.darker,
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
