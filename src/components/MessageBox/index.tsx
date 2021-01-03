import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './MessageBox.style';

interface Props {
  source: any;
  name: any;
  onPress: any;
}

const MessageBox = (props: Props) => {
  const {name, source, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.messageOuterContainer}>
      <Image style={styles.image} source={source} />
      <View style={styles.wrapMessage}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.text}>waiting for the message...</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MessageBox;
