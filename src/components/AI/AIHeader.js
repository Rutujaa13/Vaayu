import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ArrowLeft, History } from 'lucide-react-native';
import { moderateScale } from '../../utils/responsive';
import appstyle from '../../constants/appstyle';

const AIHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowLeft color="#fff" size={26} />
      </TouchableOpacity>

      <View style={styles.center}>
        <Text style={[appstyle.title, { fontSize: 20, marginBottom: 0 }]}>
          VAAYU Assistant
        </Text>
        <Text style={[appstyle.subtitle, { fontSize: 12 }]}>
          Your Candle Shopping Assistant
        </Text>
      </View>

      <TouchableOpacity>
        <History color="#fff" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default AIHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#000',
    borderBottomWidth: 0.5,
    borderBottomColor: '#222',
  },

  center: {
    alignItems: 'center',
  },

  title: {
    color: '#D4AF6A',
    fontSize: moderateScale(24),
    fontWeight: '700',
  },

  subtitle: {
    color: '#AAA',
    fontSize: moderateScale(13),
    marginTop: 3,
  },
});
