import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { FONTS } from '../constants/fonts';
import { Colors } from '../constants/colors';
import { scale } from '../utils/responsive';

const AppHeader = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Ionicons name="menu" color={Colors.primary} size={28} />
      </TouchableOpacity>

      <Text style={styles.logo}>VAAYU</Text>

      <TouchableOpacity>
        <Ionicons
          name="notifications-outline"
          color={Colors.accent}
          size={26}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },

  logo: {
    color: Colors.primary,
    fontSize: scale(25),
    letterSpacing: 8,
    fontFamily: FONTS.heading,
  },
});
