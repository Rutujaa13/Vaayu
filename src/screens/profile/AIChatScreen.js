import React, { useRef, useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WelcomeCard from '../../components/AI/WelcomeCard';
import ChatBubble from '../../components/AI/ChatBubble';
import ChatInput from '../../components/AI/ChatInput';
import AIHeader from '../../components/AI/AIHeader';
import { askVaayu } from '../../services/gemini';
import appstyle from '../../constants/appstyle';
import TypingIndicator from '../../components/AI/TypingIndicator';

export default function VaayuAssistantScreen({ navigation }) {
  const flatListRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      id: '1',
      sender: 'ai',
      text: `Ask me anything about candles.`,
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  // const sendMessage = async text => {
  //   const userMessage = {
  //     id: Date.now().toString(),
  //     sender: 'user',
  //     text,
  //   };

  //   setMessages(prev => [...prev, userMessage]);
  //   setIsTyping(true);
  //   const reply = await askVaayu(text);

  //   const aiMessage = {
  //     id: Date.now().toString(),
  //     sender: 'ai',
  //     text: reply,
  //   };

  //   setMessages(prev => [...prev, aiMessage]);
  //   setIsTyping(false);
  // };

  const renderItem = ({ item }) => <ChatBubble item={item} />;

  const sendMessage = async text => {
    // Add user message
    setMessages(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        text,
        sender: 'user',
      },
    ]);

    setIsTyping(true);

    try {
      const reply = await askVaayu(text);

      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          text: reply,
          sender: 'ai',
        },
      ]);
    } catch (e) {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          text: 'Something went wrong.',
          sender: 'ai',
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      keyboardVerticalOffset={10}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <AIHeader navigation={navigation} />

        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={{ flex: 1 }}
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          onContentSizeChange={() =>
            flatListRef.current?.scrollToEnd({ animated: true })
          }
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<WelcomeCard />}
          ListFooterComponent={isTyping ? <TypingIndicator /> : null}
        />
        {/* {isTyping && <TypingIndicator />} */}
        <ChatInput onSend={sendMessage} />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  content: {
    paddingBottom: 20,
  },
  typingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  typingText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 14,
  },
});
