import React from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

import { colors } from '../../styles/colors';
import { Note } from '../../types/note';
import { formatDate } from '../../utils/dateUtils';

type NoteItemProps = {
  note: Note;
  navigation: NavigationProp<ParamListBase>;
};

const NoteItem = ({ note, navigation }: NoteItemProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        testID="detailNavigator"
        style={styles.touchContainer}
        onPress={() => navigation.navigate('NoteDetail', { note })}
      >
        <View style={styles.iconContainer}>
          <Icon name="sticky-note" size={24} color={colors.blueGrey500} />
        </View>
        <View>
          <Text style={styles.titleText}>{note.title}</Text>
          <Text style={styles.dateText}>{formatDate(note.createdAt)}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        testID="createNoteNavigator"
        onPress={() => navigation.navigate('CreateNotes', { note })}
        style={styles.editIconContainer}
      >
        <Icon name="edit" size={22} color={colors.lightBlue900} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12,
    marginVertical: 8,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 8,
      },
    }),
  },

  touchContainer: {
    flex: 4,
    padding: 16,
    borderBottomLeftRadius: 12,
    borderTopLeftRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.gray100,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.1,
      },
      android: {
        elevation: 4,
      },
    }),
  },

  iconContainer: {
    marginRight: 12,
  },

  editIconContainer: {
    flex: 1,
    alignItems: 'center',
  },

  titleText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.darker,
  },

  dateText: {
    fontSize: 12,
    color: colors.darker,
  },
});

export default NoteItem;
