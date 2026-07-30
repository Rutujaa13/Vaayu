import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Footer = ({ onPress, text, title }) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>{title}</Text>

      <TouchableOpacity onPress={onPress}>
        <Text style={styles.signup}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(Footer);

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 40,
  },

  footerText: {
    color: '#999',
  },

  signup: {
    color: '#C9A96E',
    marginLeft: 5,
    fontWeight: '600',
  },
});
