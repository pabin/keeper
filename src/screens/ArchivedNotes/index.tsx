import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ArchivedNotesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hello, from archived notes screen</Text>
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

export default ArchivedNotesScreen;
