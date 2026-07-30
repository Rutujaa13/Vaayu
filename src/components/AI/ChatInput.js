import React, { useState } from 'react';

import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import { Mic, SendHorizontal, Sparkles } from 'lucide-react-native';

const ChatInput = ({ onSend }) => {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (!text.trim()) {
      return;
    }

    onSend(text);

    setText('');
  };

  return (
    <View style={styles.container}>
      <Sparkles color="#D4AF6A" size={20} />

      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Ask Vaayu Assistant..."
        placeholderTextColor="#888"
        style={styles.input}
      />

      <TouchableOpacity style={styles.icon}>
        <Mic color="#D4AF6A" size={22} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.send} onPress={handleSend}>
        <SendHorizontal color="#000" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(ChatInput);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#121212',
    margin: 15,
    paddingHorizontal: 18,
    borderRadius: 35,
    height: 60,
    bottom: 0,
  },

  input: {
    flex: 1,
    color: '#FFF',
    marginHorizontal: 12,
    fontSize: 16,
  },

  icon: {
    marginRight: 15,
  },

  send: {
    backgroundColor: '#D4AF6A',
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
