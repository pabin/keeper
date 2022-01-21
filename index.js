import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRegistry, LogBox, StatusBar, useColorScheme } from 'react-native';
import 'react-native-gesture-handler';

import App from './App';
import { name as appName } from './app.json';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

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
