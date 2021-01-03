import React from 'react';
import {Text, View} from 'react-native';
import styles from './ChatBoxPrimary.style';

interface Props {
  text: string;
}

const ChatBoxPrimary = (props: Props) => {
  const {text} = props;

  return (
    <>
      <View style={styles.outerContainer}>
        <Text style={styles.timeLine}>5: 34 AM</Text>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </>
  );
};

export default ChatBoxPrimary;
