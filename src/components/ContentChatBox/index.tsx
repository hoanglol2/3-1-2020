import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './ContentChatBox.style';
// componnets.
import ChatBoxPrimary from '../ChatBoxPrimary';
import ChatBoxGray from '../ChatBoxGray';

interface Props {
  messages: any;
  name: any;
}

const ContentChatBox = (props: Props) => {
  const {messages, name} = props;

  return (
    <>
      <ScrollView style={styles.outerContainer}>
        {messages.map((message: any, index: Number) => {
          let isSentByCurrentUser = false;

          if (message.user == name) {
            isSentByCurrentUser = true;
          }

          return isSentByCurrentUser ? (
            <ChatBoxPrimary text={message.text} key={index.toString()} />
          ) : (
            <ChatBoxGray text={message.text} key={index.toString()} />
          );
        })}
      </ScrollView>
    </>
  );
};

export default ContentChatBox;
