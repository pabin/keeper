import React from 'react';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

import { colors } from '../../styles/colors';

type CreateIconProps = {
  navigation: NavigationProp<ParamListBase>;
};

const CreateIcon = ({ navigation }: CreateIconProps) => {
  return (
    <TouchableOpacity
      testID="createNoteIcon"
      onPress={() => navigation.navigate('CreateNotes')}
      style={styles.container}
    >
      <Icon name="plus" size={24} color={colors.white} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    bottom: 24,
    right: 24,
    zIndex: 3,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: colors.lightBlue900,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
      },
      android: {
        elevation: 6,
      },
    }),
  },
});

export default CreateIcon;
