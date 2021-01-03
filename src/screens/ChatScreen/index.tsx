import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from './ChatScreen.style';
// components
import HeaderChatBox from '../../components/HeaderChatBox';
import ContentChatBox from '../../components/ContentChatBox';
import ChatBoxInput from '../../components/ChatBoxInput';
// socket.io-client
import {io} from 'socket.io-client';

let socket: any;

// datas.
import {users} from '../../mocks';

interface Props {
  navigation: any;
  route: any;
}

const ChatScreen = (props: Props) => {
  const {navigation, route} = props;
  const {yourId, friendId, room} = route.params;

  const ENDPOINT = 'http://192.168.56.1:5000';

  const getUsersById = users.find((user: any) => user._id == friendId);
  const getYourSelfById = users.find((user: any) => user._id == yourId);
  // useState.
  const [messages, setMessages] = useState([] as any);
  const sendMsg = useFormSubmit('', 'Type message');

  const nameYourSelf = getYourSelfById?.name;

  const _goBack = (navigation: any) => {
    navigation.navigate('Home');
  };
  // client join server.
  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit('join', {nameYourSelf, room}, () => {});

    return () => {
      socket.off();
    };
  }, [ENDPOINT]);

  // client sendMessage to server
  useEffect(() => {
    const message = sendMsg.value;

    socket.on('message', (message: any) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  return (
    <>
      <View style={styles.chatOuterContainer}>
        <HeaderChatBox
          friendName={getUsersById?.name}
          onPress={() => _goBack(navigation)}
        />
        <ContentChatBox messages={messages} name={nameYourSelf} />
        <ChatBoxInput {...sendMsg} />
      </View>
    </>
  );
};

export default ChatScreen;

const useFormSubmit = (initialValue: any, placeholder: any) => {
  const [value, setValue] = useState(initialValue);

  const _onChangeText = (text: any) => {
    setValue(text);
  };

  const _onPress = () => {
    socket.emit('sendMessage', value, () => setValue(''));
  };

  return {
    value,
    onChangeText: _onChangeText,
    onPress: _onPress,
    placeholder,
  };
};
