import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  Platform,
} from 'react-native';

import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';
import HeroBanner from '../../components/HeroBanner';
import WelcomeSection from '../../components/WelcomeSection';
import Divider from '../../components/Divider';
import Footer from '../../components/Footer';
import TextButton from '../../components/TextButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { authenticateUser } from '../../services/biometrics';
import { loginUser } from '../../services/authServices';
import { useAuth } from '../../context/AuthContext';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const image = require('../../assets/images/banner.png');
  const { login } = useAuth();

  console.log('Check the log');

  const validate = () => {
    let valid = true;
    let newErrors = {};
    if (!email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      newErrors.email = 'Invalid email';
      valid = false;
    }
    if (!password.trim()) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password should be at least 6 characters';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };
  //Shree1@gmail.com // Shree123
  // const handleLogin = async () => {
  //   if (!validate()) return;

  //   try {
  //     const response = await loginUser({
  //       email,
  //       password,
  //     });
  //     console.log('response body', response);
  //     Alert.alert('Login Success', response.message);
  //     await AsyncStorage.setItem('biometric', 'true');

  //     navigation.navigate('Home');
  //   } catch (error) {
  //     Alert.alert(error.response?.data?.message || 'Login Failed');
  //   }
  // };
  const handleLogin = async () => {
    if (!validate()) return;

    try {
      const user = await login(email, password);

      console.log('LOGIN SUCCESS:', user);

      Alert.alert('Success', `Welcome ${user.name}`);

      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    } catch (error) {
      console.log('============== LOGIN FAILED ==============');
      console.log(error);
      console.log('Message:', error.message);
      console.log('Response:', error.response?.data);
      console.log('==========================================');

      Alert.alert('Login Failed', error.message || 'Unknown Error');
    }
  };

  const handleBiometricLogin = async () => {
    console.log('Button Pressed');
    const success = await authenticateUser();
    console.log('Authentication Result:', success, authenticateUser());
    if (success) {
      console.log('Authentication Result:', success);
      navigation.navigate('Home');
      // Alert.alert('Success', 'Biometric Authentication Successful');
    } else {
      Alert.alert('Failed', 'Authentication Failed');
    }
  };

  useEffect(() => {
    console.warn('LOGIN SCREEN LOADED');
  }, []);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          <HeroBanner image={image} />
          <View style={{ padding: 10 }}>
            <WelcomeSection
              title={'WELCOME BACK'}
              subtitle={'Login to continue your journey with VAAYU'}
              onBiometricPress={() => handleBiometricLogin()}
            />

            <AppTextInput
              leftIcon={'mail-outline'}
              placeholder="Enter your email"
              value={email}
              onChangeText={text => {
                setEmail(text);
                setErrors({ ...errors, email: '' });
              }}
              keyboardType="email-address"
              error={errors.email}
            />

            <AppTextInput
              leftIcon={'lock-closed-outline'}
              placeholder="Enter your password"
              value={password}
              onChangeText={text => {
                setPassword(text);
                setErrors({ ...errors, password: '' });
              }}
              secureTextEntry={!showPassword}
              showPassword={showPassword}
              onTogglePassword={() => setShowPassword(!showPassword)}
              error={errors.password}
            />

            {/* Forgot */}
            <TextButton
              title="Forgot password?"
              onPress={() => navigation.navigate('ForgotPassword')}
            />

            <AppButton
              title="LOGIN"
              // onPress={handleLogin}
              onPress={() => navigation.navigate('Home')}
              // disabled={!email || !password}
            />

            <Divider />
            {/* Biometric */}

            {/* <TouchableOpacity style={styles.bioButton}>
              <Text style={styles.bioIcon}>🔒</Text>

              <Text style={styles.bioText}>Login with Google</Text>
            </TouchableOpacity> */}

            <Footer
              title={`Don't have an account?`}
              text={'Sign Up'}
              onPress={() => navigation.navigate('SignUp')}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  content: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
