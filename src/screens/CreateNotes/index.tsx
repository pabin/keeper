import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { storeObjectData } from '../../model/StorageUtils';

const CreateNoteScreen = () => {
  const [value, onChangeText] = useState('Data here');

  const createNote = () => {
    const data = [
      {
        id: 1,
        title: 'this is note title 1',
        details: 'other details',
        date: new Date(),
      },
      {
        id: 2,
        title: 'this is note title 2',
        details: 'other details',
        date: new Date(),
      },
      {
        id: 3,
        title: 'this is note title 3',
        details: 'other details',
        date: new Date(),
      },
      {
        id: 4,
        title: 'this is note title 4',
        details: 'other details',
        date: new Date(),
      },
      {
        id: 5,
        title: 'this is note title 5',
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
