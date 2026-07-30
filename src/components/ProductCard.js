import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';
import { FONTS } from '../constants/fonts';
import { Colors } from '../constants/colors';

const ProductCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.9}
      onPress={() => onPress(item)}
    >
      <Image source={item.image} style={styles.image} />

      <View style={styles.badge}>
        <Text style={styles.badgeText}>{item.tag}</Text>
      </View>

      <TouchableOpacity style={styles.heart}>
        <Ionicons
          name={item.favourite ? 'heart' : 'heart-outline'}
          size={20}
          color="#fff"
        />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>

        <Text style={styles.type}>{item.type}</Text>

        <View style={styles.bottomRow}>
          <Text style={styles.price}>₹{item.price}</Text>

          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(ProductCard);

const styles = StyleSheet.create({
  card: {
    width: 190,
    backgroundColor: Colors.border,
    borderRadius: 18,
    overflow: 'hidden',
    marginRight: 18,
    borderWidth: 1,
    borderColor: Colors.border,
  },

  image: {
    width: '100%',
    height: 190,
  },

  badge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: Colors.accent,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },

  badgeText: {
    color: Colors.background,
    fontSize: 11,
    fontFamily: FONTS.semibold,
  },

  heart: {
    position: 'absolute',
    top: 12,
    right: 12,
  },

  content: {
    padding: 14,
    backgroundColor: Colors.darkgray,
  },

  name: {
    color: Colors.primary,
    fontSize: 17,
    fontFamily: FONTS.heading,
  },

  type: {
    color: Colors.secondaryText,
    marginTop: 4,
    fontSize: 13,
    fontFamily: FONTS.medium,
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },

  price: {
    color: Colors.primary,
    fontSize: 18,
    fontFamily: FONTS.medium,
  },

  addButton: {
    backgroundColor: Colors.accent,
    width: 25,
    height: 25,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
