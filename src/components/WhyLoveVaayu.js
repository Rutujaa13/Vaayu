import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import appstyle from '../constants/appstyle';

const WhyLoveVaayu = ({ item }) => {
  if (!item) return null;

  const Icon = item.icon;

  return (
    <View style={styles.menuContainer}>
      <View style={appstyle.iconWrap}>
        <View style={appstyle.circle}>
          <Icon size={22} color="#D4AF6A" />
        </View>

        <Text style={appstyle.icontitle}>{item.title}</Text>
      </View>
    </View>
  );
};

export default WhyLoveVaayu;

const styles = StyleSheet.create({
  menuContainer: {
    alignItems: 'center',
  },
});
