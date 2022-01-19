import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { colors } from '../../styles/colors';

const NoteItem = ({ note, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('NoteDetail', { note })}
    >
      <Text>{note.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.blueGrey300,
  },
});

export default NoteItem;
