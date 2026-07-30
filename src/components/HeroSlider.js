import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const banners = [
  {
    id: '1',
    title: 'Crafted for\nCalm',
    subtitle:
      'Handcrafted luxury candles designed to transform everyday moments.',
    image: require('../assets/images/banner1.png'),
  },
  {
    id: '2',
    title: 'Luxury\nFragrance',
    subtitle: 'Experience premium soy wax candles with elegant aromas.',
    image: require('../assets/images/banner2.png'),
  },
  {
    id: '3',
    title: 'Relax\nNaturally',
    subtitle: 'Discover handcrafted collections made with love.',
    image: require('../assets/images/banner3.png'),
  },
];

export default function HeroSlider() {
  const flatListRef = useRef();

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let next = currentIndex + 1;

      if (next >= banners.length) next = 0;

      flatListRef.current?.scrollToIndex({
        index: next,
        animated: true,
      });

      setCurrentIndex(next);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />

      {/* <View style={styles.overlay}> */}
      {/* <Text style={styles.title}>{item.title}</Text> */}

      {/* <Text style={styles.subtitle}>{item.subtitle}</Text> */}

      {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>EXPLORE COLLECTION</Text>
        </TouchableOpacity> */}
      {/* </View> */}
    </View>
  );

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={banners}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={event => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);

          setCurrentIndex(index);
        }}
      />

      <View style={styles.pagination}>
        {banners.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentIndex === index && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    width,
    height: 300,
    backgroundColor: '#fff',
  },

  image: {
    width: '110%',
    resizeMode: 'contain',
    height: '100%',
    alignSelf: 'center',
  },

  overlay: {
    position: 'absolute',
    left: 25,
    right: 25,
    bottom: 40,
  },

  title: {
    color: '#fff',
    fontSize: 46,
    fontWeight: '300',
    lineHeight: 55,
    marginBottom: 15,
    fontFamily: 'CormorantGaramond-Bold',
  },

  subtitle: {
    color: '#ddd',
    fontSize: 17,
    lineHeight: 28,
    marginBottom: 30,
  },

  button: {
    borderWidth: 1,
    borderColor: '#d6b37b',
    alignSelf: 'flex-start',
    paddingHorizontal: 28,
    paddingVertical: 15,
    borderRadius: 8,
  },

  buttonText: {
    color: '#d6b37b',
    fontWeight: '600',
    letterSpacing: 2,
  },

  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -20,
  },

  dot: {
    width: 8,
    height: 8,
    backgroundColor: '#555',
    borderRadius: 10,
    marginHorizontal: 4,
  },

  activeDot: {
    width: 22,
    backgroundColor: '#d6b37b',
  },
});
