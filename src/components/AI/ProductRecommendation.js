import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { Star, Heart, ArrowRight } from 'lucide-react-native';

import { moderateScale } from '../../utils/responsive';

const ProductRecommendationCard = ({ item, onPress }) => {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>

        <Text style={styles.subtitle}>{item.category}</Text>

        <View style={styles.ratingRow}>
          <Star color="#D4AF6A" size={16} fill="#D4AF6A" />

          <Text style={styles.rating}>{item.rating}</Text>
        </View>

        <Text style={styles.price}>£ {item.price}</Text>

        <TouchableOpacity style={styles.button} onPress={() => onPress(item)}>
          <Text style={styles.buttonText}>View Product</Text>

          <ArrowRight color="#000" size={18} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.favorite}>
        <Heart color="#D4AF6A" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(ProductRecommendationCard);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#121212',
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 20,
    overflow: 'hidden',
  },

  image: {
    width: 120,
    height: 170,
  },

  content: {
    flex: 1,
    padding: 18,
  },

  name: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: moderateScale(18),
  },

  subtitle: {
    color: '#999',
    marginVertical: 6,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },

  rating: {
    color: '#FFF',
    marginLeft: 6,
  },

  price: {
    color: '#D4AF6A',
    fontSize: moderateScale(20),
    fontWeight: '700',
    marginVertical: 10,
  },

  button: {
    marginTop: 10,
    backgroundColor: '#D4AF6A',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },

  buttonText: {
    color: '#000',
    fontWeight: '700',
    marginRight: 8,
  },

  favorite: {
    position: 'absolute',
    top: 14,
    right: 14,
  },
});
