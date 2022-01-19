import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/colors';

const Message = ({ type, message }) => {
  const getMessageTheme = (msgType: string) => {
    if (msgType === 'warning') {
      return {
        backgroundColor: colors.red,
      };
    } else if (msgType === 'info') {
      return {
        backgroundColor: colors.lightBlue800,
      };
    }
  };

  return (
    <View style={[styles.container, getMessageTheme(type)]}>
      <Text style={styles.textStyle}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    margin: 8,
    alignItems: 'center',
    backgroundColor: colors.blueGrey300,
  },

  textStyle: {
    color: 'white',
    fontSize: 18,
  },
});

export default Message;
