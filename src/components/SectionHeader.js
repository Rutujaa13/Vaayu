import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextButton from '../components/TextButton';
import appstyle from '../constants/appstyle';

const SectionHeader = ({ title, onPress }) => (
  <View style={appstyle.header}>
    <Text style={appstyle.subtitle}>{title}</Text>
    <TextButton title="View All" onPress={onPress} />
  </View>
);
export default SectionHeader;

const styles = StyleSheet.create({});
