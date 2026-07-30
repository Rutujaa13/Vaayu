import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Divider = () => {
  return (
    <View style={styles.dividerContainer}>
      <View style={styles.line} />
      <Text style={styles.or}>OR</Text>
      <View style={styles.line} />
    </View>
  );
};

export default React.memo(Divider);

const styles = StyleSheet.create({
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#333',
  },

  or: {
    color: '#999',
    marginHorizontal: 15,
  },
});
