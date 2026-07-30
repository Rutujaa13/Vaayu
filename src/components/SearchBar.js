import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { FONTS } from '../constants/fonts';
import { Colors } from '../constants/colors';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Ionicons name="search" color="#999" size={18} />

      <TextInput
        placeholder="Search candles..."
        placeholderTextColor="#888"
        style={styles.input}
      />

      <Ionicons name="options-outline" color="#fff" size={18} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1B1B1B',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: '4%',
  },

  input: {
    flex: 1,
    color: Colors.primary,
    marginLeft: 10,
    fontSize: 14,
    fontFamily: FONTS.body,
  },
});
