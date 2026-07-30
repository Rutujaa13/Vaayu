import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import { scale } from '../utils/responsive';
import { FONTS } from '../constants/fonts';

const HeroBanner = ({ image, title, subtitle, height = 270, children }) => {
  return (
    <ImageBackground
      source={image}
      resizeMode="center"
      style={{
        width: '100%',
        height: 320,
        alignSelf: 'center',
      }}
    >
      {/* Dark Overlay */}

      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.title}>{''}</Text>

          {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}

          {children}
        </View>
      </View>
    </ImageBackground>
  );
};

export default React.memo(HeroBanner);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'flex-end',
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'flex-end',
  },

  content: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },

  title: {
    color: Colors.accent,
    fontSize: scale(34),
    letterSpacing: 2,
    fontStyle: FONTS.heading,
  },

  subtitle: {
    marginTop: 10,
    color: '#DDD',
    fontSize: 16,
    lineHeight: 24,
  },
});
