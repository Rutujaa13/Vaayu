import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
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

import { registerUser } from '../../services/authServices';

export default function Signup({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [cnfPassword, setcnfPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showCnfPass, setshowCnfPass] = useState(false);

  const [errors, setErrors] = useState({});
  const image = require('../../assets/images/banner.png');
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

  const handleSignup = async () => {
    try {
      const response = await registerUser({
        name,
        email,
        password,
      });
      console.log('Signup Success:', response);
      Alert.alert('Success', response.message);
      if (response.success) {
        Alert.alert('Success', response.message);
        navigation.navigate('Login');
      }
    } catch (error) {
      console.log('Signup Error:', error);
      Alert.alert('Error', error.response?.data?.message || error.message);
    }
  };

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
              title={'Create Your Account'}
              subtitle={
                'Join the VAAYU family and experience luxury fragrances.'
              }
              showBiometric={false}
            />

            <AppTextInput
              leftIcon={'person-outline'}
              placeholder="Full name"
              value={name}
              onChangeText={text => {
                setName(text);
                setErrors({ ...errors, name: '' });
              }}
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
              placeholder="Password"
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

            <AppTextInput
              leftIcon={'lock-closed-outline'}
              placeholder="Confirm Password"
              value={cnfPassword}
              onChangeText={text => {
                setcnfPassword(text);
                setErrors({ ...errors, password: '' });
              }}
              secureTextEntry={!showCnfPass}
              showPassword={showCnfPass}
              onTogglePassword={() => setshowCnfPass(!showCnfPass)}
              error={errors.password}
            />

            <AppButton
              title="CREATE ACCOUNT"
              onPress={handleSignup}
              disabled={!name || !password || !cnfPassword}
            />

            <Divider />

            <Footer
              title={`Have an account?`}
              text={'Login'}
              onPress={() => navigation.navigate('Login')}
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
    // padding: 24,
    flexGrow: 1,
    justifyContent: 'center',
  },
});
