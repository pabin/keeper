import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import { colors } from '../styles/colors';

type MessageProps = {
  message: string;
};

const Message = ({ message }: MessageProps): JSX.Element => (
  <View style={styles.container}>
    <Icon name="info-circle" size={32} color={colors.blueGrey700} />
    <Text style={styles.textStyle}>{message}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textStyle: {
    fontSize: 18,
    marginVertical: 12,
    color: colors.blueGrey700,
  },
});

export default Message;
