import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NoteList = () => {
  return (
    <View style={styles.container}>
      <Text>Hello, from note list screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NoteList;
