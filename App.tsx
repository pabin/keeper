/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import Toast from 'react-native-toast-message';

import TabNavigator from './src/navigation/TabNavigation';

const App = () => {
  return (
    <>
      <TabNavigator />
      <Toast />
    </>
  );
};

export default App;
