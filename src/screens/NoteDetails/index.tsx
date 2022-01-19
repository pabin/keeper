import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../styles/colors';

const NoteDetail = ({ route }) => {
  const { note } = route.params;

  return (
    <View style={styles.container}>
      <Text>{note.title}</Text>
      <Text>{note.detail}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.blueGrey300,
  },
});

export default NoteDetail;
