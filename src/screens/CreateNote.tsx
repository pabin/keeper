import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CreateNoteScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hello, create note form here</Text>
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

export default CreateNoteScreen;
