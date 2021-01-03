import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
// icons
import {CHATLOGIN} from '../../assets/images';

import styles from './HeaderLogin.style';

const HeaderLogin = () => {
  return (
    <>
      <View>
        <Text style={styles.title}>Webcome Back</Text>
        <Text style={styles.text}>Log in to continue</Text>
        <Image source={CHATLOGIN} style={styles.image} />
      </View>
    </>
  );
};

export default HeaderLogin;
