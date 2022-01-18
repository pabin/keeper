import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NoteListScreen from '../screens/NoteList';
import FavouriteNotesScreen from '../screens/FavouriteNotes';
import ArchivedNotesScreen from '../screens/ArchivedNotes';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Notes" component={NoteListScreen} />
      <Tab.Screen name="Favourite" component={FavouriteNotesScreen} />
      <Tab.Screen name="Archived" component={ArchivedNotesScreen} />
    </Tab.Navigator>
  );
}
