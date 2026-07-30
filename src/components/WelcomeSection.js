import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { Colors } from '../constants/colors';
import { scale } from '../utils/responsive';
import { FONTS } from '../constants/fonts';
import Ionicons from '@react-native-vector-icons/ionicons';

const WelcomeSection = ({
  title,
  subtitle,
  onBiometricPress,
  showBiometric = true,
}) => {
  return (
    <View style={styles.container}>
      {/* Left Side */}

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      {/* Right Side */}

      {showBiometric && (
        <View style={{ alignItems: 'center', marginRight: 5 }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.bioContainer}
            onPress={onBiometricPress}
          >
            <Ionicons name="finger-print-outline" size={35} color="#C9A96E" />
          </TouchableOpacity>
          <Text style={styles.bioText}>{'Use Biometric'}</Text>
        </View>
      )}
    </View>
  );
};

export default React.memo(WelcomeSection);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 35,
  },

  textContainer: {
    flex: 1,

    paddingRight: 15,
  },

  title: {
    color: Colors.primary,
    fontSize: scale(20),
    marginBottom: 8,
    //   fontFamily: 'PlayfairDisplay-Bold',
    fontFamily: FONTS.heading,
  },

  subtitle: {
    color: Colors.secondaryText,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: FONTS.medium,
  },
  bioContainer: {
    justifyContent: 'center',

    alignItems: 'center',

    width: scale(70),
    height: scale(70),
    borderRadius: 15,
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.lightAccent,
    shadowColor: Colors.accent,
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 6,
  },
  bioText: {
    marginTop: 10,
    color: Colors.accent,
    fontSize: 11,
    textAlign: 'center',
    fontFamily: FONTS.body,
  },
});
