import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { MarkdownEditor } from 'react-native-markdown-editor';

import { storeObjectData } from '../../model/StorageUtils';
import { colors } from '../../styles/colors';

const CreateNoteScreen = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

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
      {
        id: 8,
        title: 'this is note title 9',
        body: 'other details',
        createdAt: new Date(),
        updatedAt: new Date(),
        isFavourite: false,
        isArchived: true,
      },
      {
        id: 9,
        title: 'this is note title 9',
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
    createNote();
  };

  console.log('title:', title);
  console.log('body:', body);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.inputHeader}>Title</Text>
        <TextInput
          onChangeText={title => setTitle(title)}
          style={styles.textInput}
          placeholder="Note Title"
          maxLength={20}
        />
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.inputHeader}>Body</Text>
        <MarkdownEditor onMarkdownChange={body => setBody(body)} showPreview />
      </View>
      <Button
        onPress={onPressLearnMore}
        title="Add Note"
        color={colors.lightBlue900}
        accessibilityLabel="Learn more"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },

  titleContainer: {
    marginVertical: 10,
  },

  bodyContainer: {
    // flex: 1,
    marginVertical: 10,
    minHeight: 300,
  },

  inputHeader: {
    marginBottom: 5,
    paddingHorizontal: 5,
  },

  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    fontSize: 16,
    paddingHorizontal: 10,
    borderColor: colors.gray,
    backgroundColor: colors.white,
  },
});

export default CreateNoteScreen;
