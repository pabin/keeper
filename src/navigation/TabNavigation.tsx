import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import FavouriteNotesScreen from '../screens/favouriteNotes';
import ArchivedNotesScreen from '../screens/archivedNotes';
import NoteListScreen from '../screens/noteList';
import { getText } from '../assets/i18n';
import { colors } from '../styles/colors';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Notes') {
            iconName = 'home';
          } else if (route.name === 'Favourite') {
            iconName = 'heart';
          } else {
            iconName = 'archive';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.lightBlue900,
        tabBarInactiveTintColor: 'gray',
      })}
    >
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
