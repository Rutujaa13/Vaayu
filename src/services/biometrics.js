import ReactNativeBiometrics from 'react-native-biometrics';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rnBiometrics = new ReactNativeBiometrics();

const BIOMETRIC_KEY = 'BIOMETRIC_ENABLED';

/**
 * Check device biometric support
 */
export const checkBiometricSupport = async () => {
  try {
    const { available, biometryType } = await rnBiometrics.isSensorAvailable();

    if (!available) {
      return {
        success: false,
        type: null,
        message: 'Biometric authentication not available',
      };
    }

    return {
      success: true,
      type: biometryType,
      message: 'Biometric supported',
    };
  } catch (error) {
    return {
      success: false,
      type: null,
      message: error.message,
    };
  }
};

/**
 * Authenticate user
 */
export const authenticateUser = async () => {
  try {
    const sensor = await rnBiometrics.isSensorAvailable();

    if (!sensor.available) {
      return {
        success: false,
        message: 'Biometric sensor unavailable',
      };
    }

    const result = await rnBiometrics.simplePrompt({
      promptMessage: 'Login with Biometrics',
      cancelButtonText: 'Cancel',
    });

    if (result.success) {
      return {
        success: true,
      };
    }

    return {
      success: false,
      message: 'Authentication cancelled',
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

/**
 * Enable biometric login
 */
export const enableBiometric = async () => {
  try {
    await AsyncStorage.setItem(BIOMETRIC_KEY, 'true');

    return true;
  } catch {
    return false;
  }
};

/**
 * Disable biometric login
 */
export const disableBiometric = async () => {
  try {
    await AsyncStorage.removeItem(BIOMETRIC_KEY);

    return true;
  } catch {
    return false;
  }
};

/**
 * Is biometric enabled?
 */
export const isBiometricEnabled = async () => {
  try {
    const value = await AsyncStorage.getItem(BIOMETRIC_KEY);

    return value === 'true';
  } catch {
    return false;
  }
};
