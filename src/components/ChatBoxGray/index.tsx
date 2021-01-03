import React from 'react';
import {Text, View} from 'react-native';
import styles from './ChatBoxGray.style';

interface Props {
  text: string;
}

const ChatBoxGray = (props: Props) => {
  const {text} = props;

  return (
    <>
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <Text style={styles.timeLine}>5: 34 AM</Text>
      </View>
    </>
  );
};

export default ChatBoxGray;
