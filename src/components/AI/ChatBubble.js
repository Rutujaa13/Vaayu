import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { moderateScale } from '../../utils/responsive';

const ChatBubble = ({ item }) => {
  const isUser = item.sender === 'user';

  return (
    <View
      style={[
        styles.container,
        {
          alignItems: isUser ? 'flex-end' : 'flex-start',
        },
      ]}
    >
      {!isUser && (
        <Image
          source={require('../../assets/images/Assistant.png')}
          style={styles.avatar}
        />
      )}

      <View
        style={[styles.bubble, isUser ? styles.userBubble : styles.aiBubble]}
      >
        <Text style={[styles.message, isUser && { color: '#000' }]}>
          {item.text}
        </Text>
      </View>
    </View>
  );
};

export default React.memo(ChatBubble);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 16,
  },

  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    marginBottom: 6,
  },

  bubble: {
    maxWidth: '82%',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 20,
  },

  aiBubble: {
    backgroundColor: '#1A1A1A',
    borderTopLeftRadius: 6,
  },

  userBubble: {
    backgroundColor: '#D4AF6A',
    borderTopRightRadius: 6,
  },

  message: {
    color: '#FFF',
    fontSize: moderateScale(15),
    lineHeight: 22,
  },
});
