import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './MessageBoxTitle.style';

const MessageBoxs = () => {
  return (
    <>
      <View style={styles.messageOuterContainer}>
        <Text style={styles.title}>Messages</Text>
      </View>
    </>
  );
};

export default MessageBoxs;
