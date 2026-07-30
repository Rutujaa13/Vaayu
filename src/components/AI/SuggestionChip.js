import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { moderateScale } from '../../utils/responsive';

const SuggestionChip = ({ item }) => {
  const Icon = item.icon;

  return (
    <TouchableOpacity style={styles.container}>
      <Icon size={22} color="#D4AF6A" />

      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default SuggestionChip;

const styles = StyleSheet.create({
  container: {
    width: '47%',
    backgroundColor: '#111',
    borderRadius: 16,
    padding: 18,
    margin: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    color: '#FFF',
    marginLeft: 12,
    fontSize: moderateScale(14),
  },
});
