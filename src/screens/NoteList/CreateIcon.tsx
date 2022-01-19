import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import { colors } from '../../styles/colors';

const CreateIcon = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Icon
        onPress={() => navigation.navigate('CreateNotes')}
        name="plus"
        size={24}
        color={colors.white}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    bottom: 24,
    right: 24,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: colors.lightBlue900,
  },
});

export default CreateIcon;
