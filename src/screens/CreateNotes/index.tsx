import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { storeObjectData } from '../../model/StorageUtils';

const CreateNoteScreen = () => {
  const [value, onChangeText] = useState('Data here');

  const createNote = () => {
    const data = [
      {
        id: 1234,
        title: 'this is note title',
        details: 'other details',
        date: new Date(),
      },
    ];

    storeObjectData('notes', data);
  };

  const onPressLearnMore = () => {
    console.log('on press do nothing...');
    createNote();
  };

  return (
    <View style={styles.container}>
      <Text>Add Text</Text>
      <TextInput
        multiline
        numberOfLines={4}
        editable
        maxLength={128}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <Button  />
      <Button
        onPress={onPressLearnMore}
        title="Submit Now"
        color="#841584"
        accessibilityLabel="Learn more"
      />
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
