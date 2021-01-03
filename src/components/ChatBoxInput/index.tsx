import React from 'react';
import {Image, View, TextInput, TouchableOpacity, Text} from 'react-native';
import styles from './ChatBoxInput.style';

interface Props {
  value: any;
  onChangeText: any;
  onPress: any;
  placeholder: any;
}

const ChatBoxInput = (props: Props) => {
  const {value, onChangeText, onPress, placeholder} = props;

  return (
    <>
      <View style={styles.outerContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={styles.input}
        />
        <TouchableOpacity onPress={onPress} style={styles.wrapIcon}>
          <Text style={styles.text}>Send</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ChatBoxInput;
