import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
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
    elevation: 5,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: colors.lightBlue900,
  },
});

export default CreateIcon;
