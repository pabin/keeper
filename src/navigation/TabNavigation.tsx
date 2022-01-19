import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import NoteListScreen from '../screens/NoteList';
import FavouriteNotesScreen from '../screens/FavouriteNotes';
import ArchivedNotesScreen from '../screens/ArchivedNotes';
import StackNavigator from './StackNavigation';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="NotesList"
        component={StackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Favourite" component={FavouriteNotesScreen} />
      <Tab.Screen name="Archived" component={ArchivedNotesScreen} />
    </Tab.Navigator>
  );
}
