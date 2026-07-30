import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Splash from '../screens/onboarding/Splash';
import Login from '../screens/auth/Login';
import SignUp from '../screens/auth/SignUp';
import ForgotPassword from '../screens/auth/ForgotPassword';
import BottomTabs from '../routes/BottomTabs';
import ProfileScreen from '../screens/profile/ProfileScreen';
import WishList from '../screens/wish/WishList';
import OrderList from '../screens/orders/OrderList';
import AIChatScreen from '../screens/profile/AIChatScreen';
import CandleCareScreen from '../screens/profile/CandleCareScreen';

import HelpSupport from '../screens/profile/HelpSupport';

import { Colors } from '../constants/colors';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
};

export default function RootNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: Colors.background,
            },
          }}
        >
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Order" component={OrderList} />
          <Stack.Screen name="Wish" component={WishList} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Home" component={BottomTabs} />
          <Stack.Screen name="Help" component={HelpSupport} />
          <Stack.Screen name="AIChat" component={AIChatScreen} />
          <Stack.Screen name="CandleGuide" component={CandleCareScreen} />

          {/* <Stack.Screen name="ProductDetail" component={ProductDetailScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
