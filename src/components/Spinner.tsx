import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { colors } from '../styles/colors';

const Spinner = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color={colors.lightBlue900} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Spinner;
