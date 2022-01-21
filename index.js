import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRegistry, StatusBar, useColorScheme } from 'react-native';
import 'react-native-gesture-handler';

import App from './App';
import { name as appName } from './app.json';

const KeeperApp = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <App />
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => KeeperApp);
