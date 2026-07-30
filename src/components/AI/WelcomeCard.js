import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { moderateScale } from '../../utils/responsive';
import appstyle from '../../constants/appstyle';
import { FONTS } from '../../constants/fonts';

const WelcomeCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/Assistant.png')}
        style={styles.avatar}
      />

      <View style={{ flex: 1 }}>
        <Text style={[appstyle.subtitle, { marginBottom: 8 }]}>
          Hello, Rutuja 👋
        </Text>

        <Text
          style={[
            appstyle.icontitle,
            { textAlign: 'left', fontFamily: FONTS.body },
          ]}
        >
          I'm Vaayu Assistant.
          {'\n'}
          {'\n'}
          Tell me your mood, occasion, or favourite fragrance, and I'll help you
          find the perfect candle.
        </Text>
      </View>
    </View>
  );
};

export default WelcomeCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#111',
    margin: 18,
    padding: 18,
    borderRadius: 18,
    alignItems: 'center',
  },

  avatar: {
    width: 75,
    height: 75,
    borderRadius: 38,
    marginRight: 12,
  },

  title: {
    color: '#D4AF6A',
    fontSize: moderateScale(22),
    fontWeight: '700',
  },

  description: {
    color: '#DDD',
    marginTop: 8,
    fontSize: moderateScale(15),
    lineHeight: 22,
  },
});
