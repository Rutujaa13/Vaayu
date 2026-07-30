import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { FONTS } from '../constants/fonts';
import { Colors } from '../constants/colors';
import appstyle from '../constants/appstyle';

const CategoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={appstyle.circle}>
        <Ionicons name={item.icon} size={25} color="#d6b37b" />
      </View>

      <Text style={styles.text}>{item.title}</Text>
    </View>
  );
};
export default React.memo(CategoryItem);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 17,
  },

  text: {
    color: Colors.primary,
    fontSize: 12,
    fontFamily: FONTS.medium,
  },
});
