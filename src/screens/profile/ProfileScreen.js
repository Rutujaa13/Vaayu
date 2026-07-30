import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {
  User,
  ShoppingBag,
  MapPin,
  CreditCard,
  Flame,
  LogOut,
  ChevronRight,
  MessageCircle,
  Phone,
  BotMessageSquare,
} from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
const MENU = [
  {
    title: 'My Orders',
    icon: ShoppingBag,
  },
  {
    title: 'Saved Addresses',
    icon: MapPin,
  },
  {
    title: 'Payment Methods',
    icon: CreditCard,
  },
  {
    id: '4',
    title: 'Candle Care Guide',
    icon: Flame,
    screen: 'CandleGuide',
  },
  {
    id: '5',
    title: 'Chat with VAAYU AI',
    icon: MessageCircle,
    screen: 'AIChat',
  },
  {
    id: '6',
    title: 'Contact Support',
    icon: Phone,
    // screen: 'ContactSupport',
    screen: 'Help',
  },
];

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Profile Card */}

      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <User color="#D4AF6A" size={40} />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.name}>Rutuja Kutwal</Text>

          <Text style={styles.email}>rutuja.kutwal@gmail.com</Text>

          <TouchableOpacity>
            <Text style={styles.edit}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Menu */}

      <View style={styles.menu}>
        {MENU.map((item, index) => {
          const Icon = item.icon;

          return (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => navigation.navigate(item.screen)}
            >
              <View style={styles.left}>
                <Icon color="#D4AF6A" size={20} />

                <Text style={styles.menuText}>{item.title}</Text>
              </View>

              <ChevronRight color="#888" size={20} />
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Logout */}

      <TouchableOpacity style={styles.logout}>
        <LogOut color={Colors.danger} size={22} />

        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      <Text style={styles.version}>Version 1.0.0</Text>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 18,
  },

  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.darkgray,
    borderRadius: 18,
    padding: 18,
    marginTop: 20,
    marginBottom: 25,
  },

  avatar: {
    width: 75,
    height: 75,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: Colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 18,
  },

  name: {
    color: '#fff',
    fontSize: 22,
    fontFamily: FONTS.heading,
  },

  email: {
    color: Colors.secondaryText,
    fontSize: 14,
    marginTop: 4,
    fontFamily: FONTS.body,
  },

  edit: {
    color: Colors.accent,
    marginTop: 10,
    fontFamily: FONTS.body,
    fontSize: 14,
  },

  menu: {
    backgroundColor: Colors.darkgray,
    borderRadius: 18,
    overflow: 'hidden',
  },

  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  menuText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 18,
    fontFamily: FONTS.body,
  },

  logout: {
    marginTop: 25,
    height: 58,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.danger,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  logoutText: {
    color: Colors.danger,
    marginLeft: 10,
    fontSize: 17,
    fontFamily: FONTS.body,
  },

  version: {
    textAlign: 'center',
    color: Colors.secondaryText,
    marginVertical: 25,
    fontFamily: FONTS.body,
    fontSize: 8,
  },
});
