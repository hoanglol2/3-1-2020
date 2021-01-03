import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import styles from './LoginScreen.style';
// components
import HeaderLogin from '../../components/HeaderLogin';
import InputLogin from '../../components/InputLogin';
// data,
import {users} from '../../mocks';

const LoginScreen = ({navigation}: any) => {
  const [phone, setPhone] = useState('');
  const [passw, setPassw] = useState('');
  const getUser = users.find(
    (user: any) => user.phone == phone && user.password == passw,
  );

  const _onPress = (navigation: any) => {
    if (!getUser) {
      Alert.alert(
        'Thông báo',
        'Tài khoản hoặc mật khẩu không đúng!',
        [{text: 'OK'}],
        {cancelable: false},
      );
    } else {
      navigation.navigate('Home', {id: getUser._id});
    }
  };

  const _onPhoneChangeText = (text: any) => {
    setPhone(text);
  };

  const _onPasswChangeText = (text: any) => {
    setPassw(text);
  };

  return (
    <>
      <View style={styles.loginOuterContainer}>
        <HeaderLogin />
        <InputLogin
          phoneValue={phone}
          passwValue={passw}
          PasswChangeText={_onPasswChangeText}
          phoneChangeText={_onPhoneChangeText}
          onPress={() => _onPress(navigation)}
        />
      </View>
    </>
  );
};

export default LoginScreen;
