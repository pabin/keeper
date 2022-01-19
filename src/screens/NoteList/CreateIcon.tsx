import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../styles/colors';

const CreateIcon = ({ note }) => {
  return (
    <View style={styles.container}>
      <Text>{note.title}</Text>
    </View>
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

export default CreateIcon;
