import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './BoxChat.style';

interface Props {
  text: any;
  source: any;
}

const BoxChat = (props: Props) => {
  const {text, source} = props;

  return (
    <>
      <TouchableOpacity style={styles.boxChatOuterContainer}>
        <Image source={source} style={styles.image} />
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </>
  );
};

export default BoxChat;
