import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FavouriteNotesScreen from '../screens/FavouriteNotes';
import ArchivedNotesScreen from '../screens/ArchivedNotes';
import NoteListScreen from '../screens/NoteList';
import { getText } from '../assets/i18n';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Notes"
        options={{ title: getText('tabs.notes') }}
        component={NoteListScreen}
      />
      <Tab.Screen
        name="Favourite"
        options={{ title: getText('tabs.favourite') }}
        component={FavouriteNotesScreen}
      />
      <Tab.Screen
        name="Archived"
        options={{ title: getText('tabs.archived') }}
        component={ArchivedNotesScreen}
      />
    </Tab.Navigator>
  );
}
