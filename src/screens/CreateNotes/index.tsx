import React, { useContext, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { MarkdownEditor } from 'react-native-markdown-editor';

import { NoteContext } from '../../../App';
import { getText } from '../../assets/i18n';
import { colors } from '../../styles/colors';

const CreateNoteScreen = ({ route, navigation }) => {
  const note = route.params?.note;
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { onCreateOrUpdateNote } = useContext(NoteContext);

  useEffect(() => {
    if (note) {
      setTitle(note.title);
    }
  }, [note]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.inputHeader}>Title</Text>
        <TextInput
          onChangeText={title => setTitle(title)}
          style={styles.textInput}
          placeholder={getText('createNote.title')}
          maxLength={64}
          value={title}
        />
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.inputHeader}>Body</Text>
        <MarkdownEditor
          defaultText={note ? note.body : ''}
          onMarkdownChange={body => setBody(body)}
          showPreview
        />
      </View>
      <Button
        onPress={() => {
          onCreateOrUpdateNote(note, title, body);
          navigation.navigate('Notes');
        }}
        title={
          note
            ? getText('createNote.updateText')
            : getText('createNote.createText')
        }
        color={colors.lightBlue900}
        accessibilityLabel="Learn more"
        disabled={title ? false : true}
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
