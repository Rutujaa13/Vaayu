import React, { useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { Colors } from '../../constants/colors.js';
import { moderateScale } from '../../utils/responsive.js';
// import { checkBiometricSupport } from '../../services/biometrics.js';
import { getTokens } from '../../services/tokenService';
import {
  authenticateUser,
  checkBiometricSupport,
  isBiometricEnabled,
} from '../../services/biometrics';

export default function Splash({ navigation }) {
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.9)).current;
  // const { user } = useAuth();

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const check = async () => {
      const response = await checkBiometricSupport();

      console.log(response);
    };

    check();
  }, []);

  console.log('test');

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const tokens = await getTokens();

    if (!tokens) {
      navigation.replace('Login');
      return;
    }

    const biometricEnabled = await isBiometricEnabled();

    if (biometricEnabled) {
      const result = await authenticateUser();

      if (!result.success) {
        navigation.replace('Login');
        return;
      }
    }

    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="black" barStyle="light-content" />

      <Animated.Image
        source={require('../../assets/images/logo.png')}
        style={[
          styles.logo,
          {
            opacity,
            transform: [{ scale }],
          },
        ]}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    height: moderateScale(220),
    width: moderateScale(220),
  },
});
