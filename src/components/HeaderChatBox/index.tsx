import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './HeaderChatBox.style';
// icons.
import {ARWLEFT, AVATAR1} from '../../assets/images';

interface Props {
  onPress: any;
  friendName: any;
}

const HeaderChatBox = (props: Props) => {
  const {onPress, friendName} = props;

  return (
    <>
      <View style={styles.headerChatOuterContainer}>
        <TouchableOpacity onPress={onPress}>
          <Image style={styles.icon} source={ARWLEFT} />
        </TouchableOpacity>
        <View style={styles.wrapImage}>
          <Image style={styles.image} source={AVATAR1} />
          <Text style={styles.title}>{friendName}</Text>
        </View>
      </View>
    </>
  );
};

export default HeaderChatBox;
