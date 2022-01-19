import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FavouriteNotesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hello, from favourite notes screen</Text>
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

export default FavouriteNotesScreen;
