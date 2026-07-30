import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  View,
  StyleSheet,
} from 'react-native';

import { Colors } from '../constants/colors';
import { FONTS, Fonts } from '../constants/fonts';
import { scale } from '../utils/responsive';

const AppButton = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  variant = 'filled',
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled || loading}
      onPress={onPress}
      style={[
        styles.button,
        variant === 'outlined' && styles.outlined,
        disabled && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={Colors.primary} />
      ) : (
        <Text
          style={[
            styles.text,
            variant === 'outlined' && styles.outlinedText,
            textStyle,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    height: scale(55),
    backgroundColor: Colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(8),
  },

  outlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.primary,
  },

  disabled: {
    backgroundColor: Colors.disabled,
  },

  text: {
    color: Colors.background,
    fontSize: scale(18),
    fontFamily: FONTS.medium,
    letterSpacing: 1,
  },

  outlinedText: {
    color: Colors.primary,
    fontFamily: FONTS.medium,
  },
});
