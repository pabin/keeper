import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import { colors } from '../../styles/colors';

const NoteItem = ({ note, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('NoteDetail', { note })}
    >
      <View style={styles.iconContainer}>
        <Icon name="sticky-note" size={24} color={colors.white} />
      </View>
      <View style={styles.noteContainer}>
        <Text style={styles.text}>{note.title}</Text>
        <Text style={styles.text}>{note.createdAt}</Text>
      </View>
      <Icon name="chevron-right" size={20} color={colors.white} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    margin: 12,
    elevation: 5,
    marginVertical: 8,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.lightBlue800,
  },

  iconContainer: {
    marginRight: 12,
  },

  noteContainer: {
    flex: 3,
  },

  text: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
  },
});

export default NoteItem;
