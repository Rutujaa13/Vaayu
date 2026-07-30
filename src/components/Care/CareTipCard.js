import React from 'react';
import { View, Text } from 'react-native';

import { scale, moderateScale } from '../../utils/responsive';
import styles from '../../styles/CandleCareStyle';

const CareTipCard = ({ number, title, description, Icon }) => {
  return (
    <View style={styles.card}>
      {/* Icon */}

      <View style={styles.iconContainer}>
        <Icon size={scale(28)} color="#C7A15A" strokeWidth={1.8} />
      </View>
      {/* Number */}

      <View style={styles.numberContainer}>
        <Text style={styles.number}>{String(number).padStart(2, '0')}</Text>
      </View>

      {/* Content */}

      <View style={styles.content}>
        <Text style={styles.cardTitle}>{title}</Text>

        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </View>
  );
};
export default CareTipCard;
