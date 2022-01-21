import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CreateNoteScreen from '../screens/createNotes';
import NoteDetail from '../screens/noteDetails';
import TabNavigator from './TabNavigation';
import { getText } from '../assets/i18n';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NoteList"
        component={TabNavigator}
        options={{ headerShown: false, title: getText('tabs.notes') }}
      />
      <Stack.Screen
        name="CreateNotes"
        options={({ route }) => ({
          title: route.params?.note
            ? getText('stack.update')
            : getText('stack.create'),
        })}
        component={CreateNoteScreen}
      />
      <Stack.Screen
        name="NoteDetail"
        options={{ title: getText('stack.detail') }}
        component={NoteDetail}
      />
    </Stack.Navigator>
  );
}
