import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { storeObjectData } from '../../model/StorageUtils';

const CreateNoteScreen = () => {
  const [value, onChangeText] = useState('Data here');

  const createNote = () => {
    const data = [
      {
        id: 1,
        title: 'this is note title 1',
        body: 'other details',
        createdAt: new Date(),
        updatedAt: new Date(),
        isFavourite: true,
        isArchived: false,
      },
      {
        id: 2,
        title: 'this is note title 2',
        body: 'other details',
        createdAt: new Date(),
        updatedAt: new Date(),
        isFavourite: false,
        isArchived: true,
      },
      {
        id: 3,
        title: 'this is note title 3',
        body: 'other details',
        createdAt: new Date(),
        updatedAt: new Date(),
        isFavourite: true,
        isArchived: true,
      },
      {
        id: 4,
        title: 'this is note title 4',
        body: 'other details',
        createdAt: new Date(),
        updatedAt: new Date(),
        isFavourite: false,
        isArchived: true,
      },
      {
        id: 5,
        title: 'this is note title 5',
        body: 'other details',
        createdAt: new Date(),
        updatedAt: new Date(),
        isFavourite: false,
        isArchived: true,
      },
      {
        id: 6,
        title: 'this is note title 6',
        body: 'other details',
        createdAt: new Date(),
        updatedAt: new Date(),
        isFavourite: true,
        isArchived: false,
      },
      {
        id: 7,
        title: 'this is note title 7',
        body: 'other details',
        createdAt: new Date(),
        updatedAt: new Date(),
        isFavourite: false,
        isArchived: true,
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
