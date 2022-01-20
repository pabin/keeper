import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

import { MarkdownView } from 'react-native-markdown-view';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Toast from 'react-native-toast-message';
import { getObjectData } from '../../model/StorageUtils';

import { colors } from '../../styles/colors';
import { formatDate } from '../../utils/dateUtils';

const NoteDetail = ({ route }) => {
  const { note } = route.params;

  const showToast = (type: string, text1: string, text2: string) => {
    Toast.show({ type, text1, text2, position: 'bottom' });
  };

  const markAsFavouriteOrArchive = async action => {
    const notesData = await getObjectData('notes');
    if (notesData) {
      notesData.map(n => {
        if (n.id === note.id) {
          action === 'favourite'
            ? (n.isFavourite = true)
            : (n.isARchived = true);
          n.updatedAt = new Date();
        }
      });
      showToast(
        'success',
        'Note Updated',
        `${note.title} marked as ${
          action === 'favourite' ? 'favourite' : 'archived'
        } successfully!`,
      );
    }
  };

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
          onPress={() => markAsFavouriteOrArchive('favourite')}
          title={`${
            note.isFavourite ? 'Remove from Favourite' : 'Mark as Favourite'
          }`}
          color={colors.lightBlue900}
          accessibilityLabel="Learn more"
        />
      </View>
      <View style={styles.bottonContainer}>
        <Button
          onPress={() => markAsFavouriteOrArchive('archive')}
          title={`${
            note.isArchived ? 'Remove from Archived' : 'Mark as Archived'
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

  markdownStyles: {
    // heading1: {
    //   fontSize: 24,
    //   color: 'purple',
    // },
    // link: {
    //   color: 'pink',
    // },
    // mailTo: {
    //   color: 'orange',
    // },
    // text: {
    //   color: '#555555',
    // },
  },
});

export default NoteDetail;
