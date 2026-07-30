import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {
  Search,
  CircleHelp,
  Truck,
  RotateCcw,
  Flame,
  Phone,
  MessageCircle,
  Mail,
  ChevronRight,
} from 'lucide-react-native';
import AppHeader from '../../components/AppHeader';

const HELP_DATA = [
  {
    id: '1',
    title: 'Frequently Asked Questions',
    icon: CircleHelp,
  },
  {
    id: '2',
    title: 'Shipping & Delivery',
    icon: Truck,
  },
  {
    id: '3',
    title: 'Returns & Refunds',
    icon: RotateCcw,
  },
  {
    id: '4',
    title: 'Candle Care Guide',
    icon: Flame,
  },
  {
    id: '5',
    title: 'Chat with VAAYU AI',
    icon: MessageCircle,
  },
  {
    id: '6',
    title: 'Contact Support',
    icon: Phone,
  },
  {
    id: '7',
    title: 'Email Us',
    icon: Mail,
  },
];

const HelpSupport = () => {
  const renderItem = ({ item }) => {
    const Icon = item.icon;

    return (
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => Alert.alert(item.title)}
      >
        <View style={styles.left}>
          <View style={styles.iconContainer}>
            <Icon size={22} color="#D4AF6A" />
          </View>

          <Text style={styles.title}>{item.title}</Text>
        </View>

        <ChevronRight color="#666" size={20} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <AppHeader />

      {/* Contact Card */}

      <View style={styles.contactCard}>
        <Text style={styles.contactTitle}>Need more help?</Text>

        <Text style={styles.contactText}>📧 support@vaayu.com</Text>

        <Text style={styles.contactText}>📞 +91 98*** 43210</Text>

        <Text style={styles.contactTime}>Mon - Sat | 9:00 AM - 6:00 PM</Text>
      </View>

      <Text style={styles.version}>Version 1.0.0</Text>
    </View>
  );
};

export default HelpSupport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 18,
    paddingTop: 20,
  },

  heading: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFF',
    marginBottom: 20,
  },

  searchBar: {
    height: 52,
    backgroundColor: '#171717',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 25,
  },

  searchText: {
    color: '#888',
    marginLeft: 10,
    fontSize: 15,
  },

  card: {
    backgroundColor: '#171717',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  title: {
    color: '#FFF',
    fontSize: 16,
  },

  contactCard: {
    backgroundColor: '#171717',
    borderRadius: 18,
    padding: 18,
    marginTop: 10,
  },

  contactTitle: {
    color: '#D4AF6A',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },

  contactText: {
    color: '#FFF',
    fontSize: 15,
    marginBottom: 8,
  },

  contactTime: {
    color: '#999',
    marginTop: 5,
  },

  version: {
    color: '#666',
    textAlign: 'center',
    marginVertical: 20,
  },
});
