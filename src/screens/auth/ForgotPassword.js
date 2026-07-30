import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';

import HeroBanner from '../../components/HeroBanner';
import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';
import appstyle from '../../constants/appstyle';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const banner = require('../../assets/images/banner.png');

  const sendOTP = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter email');
      return;
    }

    // API Call

    navigation.navigate('VerifyOTP', {
      email,
    });
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <ScrollView>
          <HeroBanner image={banner} />

          <View style={styles.content}>
            <Text style={appstyle.title}>Forgot Password</Text>
            <Text style={[appstyle.description, { marginBottom: 10 }]}>
              {
                "Enter your registered email address. We'll send you a verification code"
              }
            </Text>
            <AppTextInput
              leftIcon={'mail-outline'}
              placeholder="Enter your email"
              value={email}
              onChangeText={text => {
                setEmail(text);
              }}
              keyboardType="email-address"
            />

            <AppButton title="SEND OTP" onPress={sendOTP} />

            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.back}>Back to Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  content: {
    padding: 24,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },

  title: {
    color: '#FFF',
    fontSize: 34,
    fontWeight: '700',
  },

  subtitle: {
    color: '#999',
    marginTop: 12,
    marginBottom: 35,
    lineHeight: 24,
    fontSize: 15,
  },

  back: {
    color: '#C8A96A',
    textAlign: 'center',
    marginTop: 30,
    fontSize: 15,
  },
});
