import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

import { Colors } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import { moderateScale, scale } from '../utils/responsive';

const TextButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.forgot}>
      <Text style={styles.text}> {title}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  forgot: {
    alignSelf: 'flex-end',
  },

  text: {
    color: Colors.accent,
    fontFamily: FONTS.medium,
    fontSize: moderateScale(14),
  },
});
