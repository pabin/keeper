import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CreateNoteScreen from '../screens/CreateNotes';
import NoteListScreen from '../screens/NoteList';
import NoteDetail from '../screens/NoteDetails';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notes" component={NoteListScreen} />
      <Stack.Screen name="CreateNotes" component={CreateNoteScreen} />
      <Stack.Screen name="NoteDetail" component={NoteDetail} />
    </Stack.Navigator>
  );
}
