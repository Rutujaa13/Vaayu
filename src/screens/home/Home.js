import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppHeader from '../../components/AppHeader';
import HeroSlider from '../../components/HeroSlider';
import SearchBar from '../../components/SearchBar';
import appstyle from '../../constants/appstyle';
import CategoryItem from '../../components/CategoryItem';
import categories from '../../data/categories.js';
import ProductCard from '../../components/ProductCard';
import WhyLoveVaayu from '../../components/WhyLoveVaayu';
import SectionHeader from '../../components/SectionHeader.js';
import { MENU } from '../../data/homedata.js';

import products from '../../data/products.js';
import { moderateScale } from '../../utils/responsive.js';

export default function Home({ navigation }) {
  const renderProduct = ({ item }) => (
    <ProductCard item={item} onPress={product => console.log(product)} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <AppHeader />
      <ScrollView>
        <HeroSlider />
        <View style={appstyle.body}>
          <SearchBar />

          {/* category */}
          <SectionHeader title="Shop by Category" />
          <View style={appstyle.row}>
            {categories.map(item => (
              <CategoryItem
                key={item.id}
                item={item}
                onPress={category => console.log(category)}
              />
            ))}
          </View>

          {/* Featured */}
          <SectionHeader title="Featured Collection" />

          <FlatList
            horizontal
            data={products}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={renderProduct}
          />

          {/* offer */}

          <Image
            resizeMode="cover"
            style={styles.offer}
            source={require('../../assets/images/offer.png')}
          />
          {/* love vaayu */}
          <View style={appstyle.header}>
            <Text style={appstyle.subtitle}>Why You'll Love Vaayu</Text>
          </View>

          <View style={appstyle.spacerow}>
            {MENU.map((item, index) => {
              return <WhyLoveVaayu key={item.id} item={item} />;
            })}
          </View>
        </View>

        {/* Content */}
        <View style={appstyle.content}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('ProductDetail', {
                productId: 1,
              })
            }
          >
            <Text style={styles.buttonText}>EXPLORE COLLECTION</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  button: {
    borderWidth: 1,
    borderColor: '#fff',
    paddingVertical: 16,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 14,
    letterSpacing: 3,
  },
  offer: {
    height: moderateScale(150),
    width: '100%',
    borderRadius: 15,
    marginVertical: 15,
  },
});
